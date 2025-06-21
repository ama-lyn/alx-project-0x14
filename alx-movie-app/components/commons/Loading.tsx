import React from 'react';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
}

const Loading: React.FC<LoadingProps> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 ${sizeClasses[size]}`} />
    </div>
  );
};

export default Loading;
