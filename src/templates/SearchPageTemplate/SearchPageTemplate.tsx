import {
  alpha,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ListContainer from "../../components/ListContainer/ListContainer";
import MovieCard, {
  MovieCardSkeleton,
} from "../../components/MovieCard/MovieCard";
import NavbarLayout from "../../components/NavbarLayout/NavbarLayout";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import SearchBar from "../../components/SearchBar/SearchBar";
import { MoviePreview } from "../../redux/movie/types";

export interface SearchPageTemplateProps {
  isLoading: boolean;
  isError: boolean;
  currentSearch: string;
  onSearch: (search: string) => void;
  movies: MoviePreview[];
  onNextPage: () => void;
  onMovieClick: (id: string) => void;
  isFavoriteCheck: (id: string) => boolean;
}

const SearchPageTemplate = ({
  onSearch,
  movies,
  isLoading,
  isError,
  onNextPage,
  onMovieClick,
  isFavoriteCheck,
  currentSearch,
}: SearchPageTemplateProps) => {
  //ref
  const wrapperRef = React.useRef<HTMLElement>(null);

  //styles
  const classes = useStyles();

  return (
    <NavbarLayout>
      <ScrollToTop />
      <Container maxWidth="md">
        {/* logo */}
        <Grid spacing={2} container>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              color="primary"
              align="center"
              className={classes.title}
            >
              Movie Database
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
              className={classes.subtitle}
              gutterBottom
            >
              Find information about every movie
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SearchBar
              onSearch={onSearch}
              isLoading={isLoading}
              initialSearch={currentSearch}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid innerRef={wrapperRef} container spacing={2}>
              <ListContainer<MoviePreview>
                data={movies}
                wrapperRef={wrapperRef}
                isLoading={isLoading}
                onBottom={onNextPage}
                footer={
                  isError && !isLoading ? (
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        align="center"
                      >
                        {!movies.length
                          ? "Nothing found :("
                          : "You have reached the end."}
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
                        isFavorite={isFavoriteCheck(item.imdbID)}
                      />
                    </Grid>
                  );
                }}
                suspense={[...Array(9)].map((i, index) => {
                  return (
                    <Grid item xs={6} sm={4} key={index}>
                      <MovieCardSkeleton />
                    </Grid>
                  );
                })}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </NavbarLayout>
  );
};

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontStyle: "italic",
  },
  title: {
    textShadow: `0 0 20px ${alpha(theme.palette.primary.dark, 0.5)}`,
  },
}));

export default SearchPageTemplate;
