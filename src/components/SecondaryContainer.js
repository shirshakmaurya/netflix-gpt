import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-60 relative z-20">
          <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MoviesList title={"Popular"} movies={movies?.popularMovies} />
          <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />
          <MoviesList title={"Horror"} movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
