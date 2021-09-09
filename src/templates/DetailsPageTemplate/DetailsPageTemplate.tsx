import { Container } from "@material-ui/core";
import React from "react";
import MovieDetails, {
  MovieDetailsSkeleton,
} from "../../components/MovieDetails/MovieDetails";
import MovieNotFound from "../../components/MovieNotFound/MovieNotFound";
import NavbarLayout from "../../components/NavbarLayout/NavbarLayout";
import { Movie } from "../../redux/movie/types";

interface DetailsPageTemplateProps {
  movie: Movie | null;
  isLoading: boolean;
  onFavoriteClick: (movie: Movie) => void;
  isFavorite: boolean;
}

const DetailsPageTemplate: React.FunctionComponent<DetailsPageTemplateProps> =
  ({ movie, isLoading, isFavorite, onFavoriteClick }) => {
    return (
      <NavbarLayout>
        <Container maxWidth="md">
          {!movie && !isLoading ? (
            <MovieNotFound />
          ) : movie ? (
            <MovieDetails
              movie={movie}
              isFavorite={isFavorite}
              onFavoriteClick={onFavoriteClick}
            />
          ) : (
            <MovieDetailsSkeleton />
          )}
        </Container>
      </NavbarLayout>
    );
  };

export default DetailsPageTemplate;
