import React, { useState } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/layouts/Layout';
import MovieCard from '../components/commons/MovieCard';
import Button from '../components/layouts/Button';
import Loading from '../components/commons/Loading';

const mockMovies = [
  {
    id: 1,
    title: "Sample Movie 1",
    posterPath: "/vercel.svg", 
    releaseDate: "2024-03-20",
    overview: "This is a sample movie description that showcases how the movie card component displays movie information."
  },
  {
    id: 2,
    title: "Sample Movie 2",
    posterPath: "/vercel.svg",
    releaseDate: "2024-03-19",
    overview: "Another sample movie description to demonstrate the grid layout and movie card design."
  },

];

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to Movie App
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and explore your favorite movies all in one place
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="large">
              Browse Movies
            </Button>
            <Button variant="outline" size="large">
              View Watchlist
            </Button>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Popular Movies</h2>
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <Loading size="large" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  posterPath={movie.posterPath}
                  releaseDate={movie.releaseDate}
                  overview={movie.overview}
                  onClick={() => console.log(`Clicked movie: ${movie.title}`)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
