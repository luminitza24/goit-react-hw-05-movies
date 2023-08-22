import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from '../Search';
import Notiflix from 'notiflix';

const Movies = () => {
  const inputRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value.length >= 3) {
      setSearchParams({ query: value });
    } else {
      Notiflix.Notify.failure('The search term is too short');
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form" role="search">
        <div className="container-form">
          <div className="input-group">
            <input
              ref={inputRef}
              type="search"
              className="form-control"
              placeholder="Search movie"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="submit" className="button">
              Search
            </button>
          </div>
        </div>
      </form>
      {searchParams.get('query') && <Search />}
    </div>
  );
};

export default Movies;
