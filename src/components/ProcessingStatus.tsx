import React from 'react';
import { Loader } from 'lucide-react';
import { useVideoStore } from '../store/videoStore';

export default function ProcessingStatus() {
  const { processing, progress, error } = useVideoStore();

  if (!processing && !error) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {processing && (
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
          <Loader className="w-6 h-6 text-blue-600 animate-spin" />
          <div>
            <h4 className="font-semibold">Processing video...</h4>
            <div className="w-48 bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
          {error}
        </div>
      )}
    </div>
  );
}