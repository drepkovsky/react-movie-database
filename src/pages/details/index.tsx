import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  movieAddToFavorite,
  movieFetchRequestedAction,
  movieRemoveFromFavorite,
} from "../../redux/movie/actions";
import DetailsPageTemplate from "../../templates/DetailsPageTemplate/DetailsPageTemplate";

/**
 *
 * Display Page
 *
 * receives movieId through params, then it uses it to fetch movie from.
 * If there is no movie with such id, 404 is displayed.
 * If movie was found and fetched successfully it is stored to redux store and all it's details
 * are displayed through Movie details template
 *
 */
const DetailsPage = () => {
  // params
  const { movieId } = useParams<{ movieId: string }>();

  // data
  const { movie, isLoading } = useAppSelector(
    (state) => state.movie.movieDetails
  );
  const isFavorite = useAppSelector(
    (state) => !!state.movie.favoriteMovies[movieId]
  );
  // dispatch
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(movieFetchRequestedAction(movieId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // callbacks
  const onFavoriteClick = React.useCallback(() => {
    if (movie) {
      if (isFavorite) {
        dispatch(movieRemoveFromFavorite(movieId));
      } else {
        dispatch(movieAddToFavorite(movieId, movie));
      }
    }
  }, [dispatch, isFavorite, movie, movieId]);

  return (
    <DetailsPageTemplate
      movie={movie}
      isLoading={isLoading}
      isFavorite={isFavorite}
      onFavoriteClick={onFavoriteClick}
    />
  );
};

export default DetailsPage;
