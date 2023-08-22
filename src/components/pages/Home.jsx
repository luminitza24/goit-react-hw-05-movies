import { useEffect, useState } from 'react';
import { fetchTrending } from '../Requests';
import { MovieList } from '../MovieList';
import { Loading } from '../common/Loading';
import { Error } from '../common/Error';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchTrending()
      .then(response => {
        setMovies(response.results);
      })
      .catch(error => {
        setHasError(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      {<h1> Trending movies today </h1>}
      {isLoading && <Loading />}
      {hasError && <Error />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};
export default Home;
