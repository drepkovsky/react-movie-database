import React from "react";
import { useHistory } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import FavoritePageTemplate from "../../templates/FavoritePageTemplate/FavoritePageTemplate";

/**
 * Favorite page
 *
 * Displays all of our favorite movies.
 * Favorite movies are loaded from redux store and sent to favorite movies page template for display.
 *
 */
const FavoritePage = () => {
  // router
  const history = useHistory();

  // favorite movies map
  const favoriteMovies = useAppSelector((state) => state.movie.favoriteMovies);
  const movies = React.useMemo(() => {
    return Object.values(favoriteMovies);
  }, [favoriteMovies]);

  // callbacks
  const onMovieClick = React.useCallback(
    (id: string) => {
      history.push(`/details/${id}`);
    },
    [history]
  );

  return <FavoritePageTemplate movies={movies} onMovieClick={onMovieClick} />;
};

export default FavoritePage;
