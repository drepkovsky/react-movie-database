import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { Movie, MovieMeta } from "../../redux/movie/types";
import FavoriteChip from "../FavoriteChip/FavoriteChip";
import FavoriteStar from "../FavoriteStar/FavoriteStar";
import MovieInfo from "../MovieInfo/MovieInfo";
import Poster from "../Poster/Poster";
import Rating, { RatingSkeleton } from "../Rating/Rating";

interface MovieDetailsProps {
  movie: Movie;
  onFavoriteClick: (movie: Movie) => void;
  isFavorite: boolean;
}

const MovieDetails = ({
  movie,
  onFavoriteClick,
  isFavorite,
}: MovieDetailsProps) => {
  // classes
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className={classes.titleWrapper}>
        <Typography variant="h4" color="textPrimary">
          <Box mr={1} component="span">
            {movie.Title}
          </Box>
          <FavoriteStar
            onClick={() => onFavoriteClick(movie)}
            isFavorite={isFavorite}
          />
        </Typography>
        {isFavorite ? <FavoriteChip /> : null}
      </Grid>

      <Grid item xs={12} sm={6} md={5}>
        <Poster poster={movie.Poster} alt={movie.Title} />
      </Grid>
      <Grid item xs={12} sm={6} md={7}>
        <Typography variant="h5" color="textPrimary" gutterBottom>
          Details
        </Typography>
        <MovieInfo movieMeta={new MovieMeta(movie)} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" color="textPrimary" gutterBottom>
          Plot
        </Typography>
        <Typography variant="body1" color="textPrimary">
          {movie.Plot}
        </Typography>
      </Grid>
      {movie.Ratings.length > 0 ? (
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" color="textPrimary">
              Rating
            </Typography>
          </Grid>
          {movie.Ratings.map((rating, index) => (
            <Grid item xs={6} md={4}>
              <Rating rating={rating} key={index} />
            </Grid>
          ))}
        </Grid>
      ) : null}
    </Grid>
  );
};

export const MovieDetailsSkeleton = () => {
  // classes
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Skeleton variant="text" height="40px" />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Skeleton variant="rect" height="500px" />
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Skeleton variant="rect" height="500px" />
      </Grid>
      <Grid item xs={12}>
        <Skeleton variant="text" height="30px" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Grid>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={12}>
          <Skeleton variant="text" height="24px" />
        </Grid>
        <Grid item xs={6} md={4}>
          <RatingSkeleton />
        </Grid>
        <Grid item xs={6} md={4}>
          <RatingSkeleton />
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default MovieDetails;