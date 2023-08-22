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
      <form
        onSubmit={handleSubmit}
        className="form"
        role="search"
      >
        <div className="container d-flex justify-content-center">
          <div className="input-group w-100 w-md-50 w-lg-25">
            <input
              ref={inputRef}
              type="search"
              className="form-control rounded mt-3"
              placeholder="Search movie"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="submit" className="button">
              search
            </button>
          </div>
        </div>
      </form>
      {searchParams.get('query') && <Search />}
    </div>
  );
};

export default Movies;