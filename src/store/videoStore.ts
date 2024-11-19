import { create } from 'zustand';

interface VideoState {
  videos: ProcessedVideo[];
  processing: boolean;
  progress: number;
  error: string | null;
  addVideo: (video: ProcessedVideo) => void;
  setProcessing: (processing: boolean) => void;
  setProgress: (progress: number) => void;
  setError: (error: string | null) => void;
}

export interface ProcessedVideo {
  id: string;
  originalName: string;
  videoUrl: string;
  audioUrl: string;
  duration: number;
  timestamp: number;
}

export const useVideoStore = create<VideoState>((set) => ({
  videos: [],
  processing: false,
  progress: 0,
  error: null,
  addVideo: (video) => set((state) => ({ 
    videos: [video, ...state.videos] 
  })),
  setProcessing: (processing) => set({ processing }),
  setProgress: (progress) => set({ progress }),
  setError: (error) => set({ error })
}))