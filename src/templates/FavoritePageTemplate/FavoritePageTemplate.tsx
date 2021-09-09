import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import ListContainer from "../../components/ListContainer/ListContainer";
import MovieCard from "../../components/MovieCard/MovieCard";
import NavbarLayout from "../../components/NavbarLayout/NavbarLayout";
import { MoviePreview } from "../../redux/movie/types";

interface FavoritePageTemplateProps {
  movies: MoviePreview[];
  onMovieClick: (id: string) => void;
}

const FavoritePageTemplate: React.FunctionComponent<FavoritePageTemplateProps> =
  ({ movies, onMovieClick }) => {
    //ref
    const wrapperRef = React.useRef<HTMLElement>(null);

    return (
      <NavbarLayout>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" color="textPrimary">
                Your favorite movies
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid innerRef={wrapperRef} container spacing={2}>
                <ListContainer<MoviePreview>
                  data={movies}
                  wrapperRef={wrapperRef}
                  footer={
                    !movies.length ? (
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          color="textSecondary"
                          align="center"
                        >
                          You have no favorite movies.
                        </Typography>
                      </Grid>
                    ) : undefined
                  }
                  renderItem={(item, index) => {
                    return (
                      <Grid item xs={6} sm={4} key={index}>
                        <MovieCard
                          movie={item}
                          onClick={onMovieClick}
                          // movie is surely favorite if it is in favorite list
                          isFavorite={true}
                        />
                      </Grid>
                    );
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </NavbarLayout>
    );
  };

export default FavoritePageTemplate;
