import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';
import { ProcessedVideo } from '../store/videoStore';

let ffmpeg: FFmpeg | null = null;

async function initFFmpeg() {
  if (ffmpeg) return ffmpeg;

  ffmpeg = new FFmpeg();
  
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  });

  return ffmpeg;
}

async function getDuration(ffmpeg: FFmpeg, filename: string): Promise<number> {
  const result = await ffmpeg.exec([
    '-i', filename,
    '-f', 'null', '-'
  ]);
  
  // Parse duration from FFmpeg output
  const durationMatch = result.toString().match(/Duration: (\d{2}):(\d{2}):(\d{2})/);
  if (!durationMatch) return 0;
  
  const [, hours, minutes, seconds] = durationMatch;
  return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
}

export async function processVideo(
  file: File, 
  onProgress: (progress: number) => void
): Promise<ProcessedVideo> {
  try {
    const ffmpeg = await initFFmpeg();
    
    // Convert File to ArrayBuffer
    const videoData = await file.arrayBuffer();
    
    // Write the file to FFmpeg's virtual filesystem
    ffmpeg.writeFile('input.mp4', new Uint8Array(videoData));
    
    // Set up progress handling
    ffmpeg.on('progress', ({ progress }) => {
      onProgress(progress);
    });

    const duration = await getDuration(ffmpeg, 'input.mp4');

    // Extract audio and create transcript
    await ffmpeg.exec([
      '-i', 'input.mp4',
      '-vn', '-acodec', 'pcm_s16le', '-ar', '16000', '-ac', '1',
      'audio.wav'
    ]);

    // Process video into vertical format with improved quality
    await ffmpeg.exec([
      '-i', 'input.mp4',
      '-vf', 'scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2',
      '-c:v', 'libx264', '-crf', '23', '-preset', 'medium',
      '-c:a', 'aac', '-b:a', '128k',
      'output.mp4'
    ]);

    // Read the processed files
    const outputVideo = await ffmpeg.readFile('output.mp4');
    const outputAudio = await ffmpeg.readFile('audio.wav');

    // Create blobs and URLs
    const videoBlob = new Blob([outputVideo], { type: 'video/mp4' });
    const audioBlob = new Blob([outputAudio], { type: 'audio/wav' });
    const videoUrl = URL.createObjectURL(videoBlob);
    const audioUrl = URL.createObjectURL(audioBlob);

    return {
      id: crypto.randomUUID(),
      originalName: file.name,
      videoUrl,
      audioUrl,
      duration,
      timestamp: Date.now()
    };

  } catch (error) {
    console.error('Error processing video:', error);
    throw new Error('Failed to process video. Please try again.');
  }
}