import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loading } from '../common/Loading';
import { Error } from '../common/Error';
import { fetchCast } from '../Requests';
import './Cast.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchCast(movieId)
      .then(response => {
        if (response.cast && response.cast.length > 0) {
          setCast(response.cast);
          setNotFound(false);
        } else {
          setCast([]);
          setNotFound(true);
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
      {isLoading && <Loading />}
      {hasError && <Error />}
      {notFound && <h1>Requested movie does not exist</h1>}
      {cast && cast.length > 0 && (
        <div className="actor-cont">
          {cast.map(actor => (
            <div key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name}`}
                />
              ) : (
                <img
                  className="image"
                  src={`https://www.freeiconspng.com/uploads/no-image-icon-11.PNG`}
                  alt={`${actor.name}`}
                />
              )}
              <p className="actor-info">{actor.name}</p>
              <p className="actor-info">
                Character:
                <span className=" text-info">{actor.character}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Cast;
