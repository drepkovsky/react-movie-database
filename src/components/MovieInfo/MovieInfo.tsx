import { Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { MovieMeta } from "../../redux/movie/types";
interface MovieMetaProps {
  movieMeta: MovieMeta;
}

const MovieInfo = ({ movieMeta }: MovieMetaProps) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      {Object.entries(movieMeta).map(([key, value], index) => (
        <Grid
          item
          xs={12}
          container
          spacing={1}
          className={clsx({
            [classes.stripe]: index % 2 === 0,
          })}
          key={index}
        >
          <Grid item xs={2} md={4}>
            <Typography variant="body1" color="textSecondary">
              {key}
            </Typography>
          </Grid>
          <Grid item xs={10} md={8}>
            <Typography variant="body1" color="textPrimary" align="right">
              {value}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  stripe: {
    background: theme.palette.grey[200],
  },
}));

export default MovieInfo;