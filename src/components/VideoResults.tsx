import React from 'react';
import { Clock, Download, Play } from 'lucide-react';
import { useVideoStore, ProcessedVideo } from '../store/videoStore';

function VideoCard({ video }: { video: ProcessedVideo }) {
  const formattedDate = new Date(video.timestamp).toLocaleDateString();
  const formattedDuration = new Date(video.duration * 1000).toISOString().substr(11, 8);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{video.originalName}</h3>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {formattedDuration}
            </span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <a
          href={video.videoUrl}
          download={`${video.originalName}-processed.mp4`}
          className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Video
        </a>
        <a
          href={video.audioUrl}
          download={`${video.originalName}-audio.wav`}
          className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Play className="w-4 h-4 mr-2" />
          Download Audio
        </a>
      </div>
    </div>
  );
}

export default function VideoResults() {
  const { videos } = useVideoStore();

  if (videos.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Processed Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}