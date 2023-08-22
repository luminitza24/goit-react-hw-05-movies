import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loading } from './common/Loading';
import { Error } from './common/Error';
import { fetchReviews } from './Requests';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchReviews(movieId)
      .then(response => {
        if (response.results && response.results.length > 0) {
          setReviews(response.results);
          setNotFound(false);
        } else {
          setReviews([]);
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
      {notFound && <h5>We don't have reviews. </h5>}
      {reviews && reviews.length > 0 && (
        <div>
          {reviews.map(review => (
            <div key={review.id}>
              <p className="review">
                Author: <span className="text-info">{review.author}</span>
              </p>
              <p className="review-text">{review.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Reviews;
