import {
  Box,
  Card,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { Skeleton } from "@material-ui/lab";
import clsx from "clsx";
import React from "react";
import { MoviePreview } from "../../redux/movie/types";
interface MovieCardProps {
  movie: MoviePreview;
  onClick: (id: string) => void;
  isFavorite: boolean;
}

const MovieCard = ({ movie, onClick, isFavorite }: MovieCardProps) => {
  // styles
  const classes = useStyles();

  // render vars
  const isImage = movie.Poster !== "N/A";

  // handler
  const handleClick = () => {
    onClick(movie.imdbID);
  };

  return (
    <Card
      className={classes.card}
      onClick={handleClick}
      data-testid="movie-card"
    >
      {isImage ? (
        <CardMedia
          className={classes.img}
          image={movie.Poster}
          title={movie.Title}
        />
      ) : (
        <Box className={clsx(classes.img, classes.NA)}>
          <Typography color="inherit" variant="h3" data-testid="na-img-text">
            N/A
          </Typography>
        </Box>
      )}
      <Box className={classes.cardContent}>
        <Typography
          variant="h6"
          color="inherit"
          gutterBottom
          data-testid="title"
        >
          {movie.Title}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Typography variant="body2" color="inherit" data-testid="type-year">
              {`${movie.Type} ${movie.Year}`}
            </Typography>
            <Typography
              variant="body2"
              color="inherit"
              data-testid="country-language"
            >
              {`${movie.Country || ""} ${movie.Language || ""}`}
            </Typography>
          </Box>
          {isFavorite ? <StarIcon /> : null}
        </Box>
      </Box>
    </Card>
  );
};

export const MovieCardSkeleton = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box className={clsx(classes.img, classes.NA)}></Box>
      <Box className={classes.cardContent}>
        <Skeleton variant="text" />
      </Box>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    height: 450,
    transition: "transform 0.5s ease-in-out",
    position: "relative",
    "&:hover": {
      transform: "scale(1.2)",
      cursor: "pointer",
      boxShadow: theme.shadows[10],
      zIndex: 20,
    },
  },
  cardContent: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "rgb(0,0,0,0)",
    background:
      " linear-gradient(0deg, #000000 0%, #000000cd 35%, rgba(0,0,0,0) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "white",
    padding: theme.spacing(2, 2, 4),
    boxSizing: "border-box",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  NA: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.grey[300],
    justifyContent: "center",
    color: theme.palette.grey[600],
  },
}));

export default MovieCard;
