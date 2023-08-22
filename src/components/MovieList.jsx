import { Link, useLocation } from 'react-router-dom';
import '../components/Movies.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className="container">
      {movies.length > 0 &&
        movies.map(movie => {
          return (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className="movie-link"
            >
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="movie-card">
                    <div className="image-cont">
                      <h2>{movie.title}</h2>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt="Movie Poster"
                        className="image"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </Link>
          );
        })}
    </div>
  );
};
