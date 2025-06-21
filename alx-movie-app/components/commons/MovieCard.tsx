import React from 'react';
import Image from 'next/image';

interface MovieCardProps {
  title: string;
  posterPath: string;
  releaseDate: string;
  overview: string;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterPath,
  releaseDate,
  overview,
  onClick
}) => {
  return (
    <div 
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-64 w-full">
        <Image
          src={posterPath}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-500 text-sm mb-2">{releaseDate}</p>
        <p className="text-gray-700 text-base line-clamp-3">
          {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
