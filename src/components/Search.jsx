import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from './Requests';
import { MovieList } from './MovieList';
import Notiflix from 'notiflix';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('query') ? searchParams.get('query') : ''
  );
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setSearchTerm(searchParams.get('query'));
  }, [searchParams]);

  useEffect(() => {
    console.log(searchTerm);
    if (searchTerm && searchTerm.length > 2) {
      fetchSearch(searchTerm)
        .then(res => {
          if (res.results.length > 0) {
            setMovies(res.results);
          } else {
            setMovies([]);
            Notiflix.Notify.failure(`No movies found for '${searchTerm}'`);
          }
        })
        .catch(error => {
          console.error(error);
          Notiflix.Notify.failure(
            'Something went wrong please try again later!'
          );
        });
    }
  }, [searchTerm]);

  return (
    <>
      {searchTerm && (
        <h6 className="search">
          The search term is: <span className="text-info">{searchTerm}</span>
        </h6>
      )}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};
