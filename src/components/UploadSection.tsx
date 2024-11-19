import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Video } from 'lucide-react';

export default function UploadSection() {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'video/*': ['.mp4', '.mov', '.avi']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      console.log('File uploaded:', acceptedFiles);
    }
  });

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer
          ${isDragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'}`}
      >
        <input {...getInputProps()} />
        <Video className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h3 className="text-xl font-semibold mb-2">Upload your video</h3>
        <p className="text-gray-500 mb-4">Drag and drop your video here, or click to browse</p>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Upload className="w-4 h-4 mr-2" />
          Select Video
        </button>
        <p className="mt-4 text-sm text-gray-400">
          Supported formats: MP4, MOV, AVI (max 2GB)
        </p>
      </div>
    </div>
  );
}