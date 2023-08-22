import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { Loading } from '../common/Loading';
import { Error } from '../common/Error';
import { fetchMovie } from '../Requests';
import './MovieDetails.css';
import Notiflix from 'notiflix';

const MovieItem = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetchMovie(movieId)
      .then(response => {
        if (response.success === false) {
          setMovieData(null);
          setNotFound(true);
        } else {
          setMovieData(response);
        }
      })
      .catch(err => {
        console.log(err);
        setHasError(true);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [movieId]);
  return (
    <div className="container">
      <Link to={location?.state?.from ?? '/'} className="button">
        Go Back
      </Link>
      {isLoading && <Loading />}
      {hasError && <Error />}
      {notFound && Notiflix.Notify.failure('Requested movie does not exist!')}
      {movieData && (
        <div className="card">
          <div className="movie-card">
            <div className="image-cont">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
                alt="Movie Poster"
                className="image"
              />
            </div>

            <div className="card-body">
              <h4 className="card-title ">
                {movieData.title ?? 'Unknown'}
                <span>({movieData.release_date.split('-')[0]})</span>
              </h4>
              <p className="card-text">
                {' '}
                User score:
                <span className="card-text-span">
                  {' '}
                  {(movieData.vote_average * 10).toFixed(0)}%{' '}
                </span>
              </p>
              <p className="card-text">Overview:</p>
              <span className="card-text-span"> {movieData.overview}</span>
              <p className="card-text-title">Genres:</p>
              {movieData.genres && movieData.genres.length > 0 && (
                <span className="card-text-span">
                  {' '}
                  {movieData.genres.map(genre => genre.name).join(', ')}
                </span>
              )}
            </div>
            <div className="cast-info">
              <div className="card-body">
                <h4 className="card-title"> Additional information: </h4>
                <ul className="nav">
                  <li>
                    <NavLink
                      className="nav-link"
                      to="cast"
                      state={{ from: location?.state?.from ?? '/' }}
                    >
                      {' '}
                      Cast
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav-link"
                      to="reviews"
                      state={{ from: location?.state?.from ?? '/' }}
                    >
                      {' '}
                      Reviews
                    </NavLink>
                  </li>
                </ul>
                <Suspense fallback={<Loading />}>
                  <Outlet />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
