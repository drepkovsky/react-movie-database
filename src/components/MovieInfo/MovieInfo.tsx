import { Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { MovieMeta } from "../../redux/movie/types";

export interface MovieInfoProps {
  movieMeta: MovieMeta;
}

const MovieInfo = ({ movieMeta }: MovieInfoProps) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.wrapper}>
      <Grid item xs={12}>
        <Typography variant="h5" color="textPrimary" gutterBottom>
          Details
        </Typography>
      </Grid>
      {Object.entries(movieMeta).map(([key, value], index) => (
        <>
          <Grid
            item
            xs={5}
            className={clsx({
              [classes.stripe]: index % 2 === 0,
            })}
          >
            <Typography
              variant="body1"
              color="textSecondary"
              data-testid="movie-meta-key"
            >
              {splitStringOnWords(key)}
            </Typography>
          </Grid>
          <Grid
            item
            xs={7}
            className={clsx({
              [classes.stripe]: index % 2 === 0,
            })}
          >
            <Typography
              variant="body1"
              color="textPrimary"
              align="right"
              data-testid="movie-meta-value"
            >
              {value}
            </Typography>
          </Grid>
        </>
      ))}
    </Grid>
  );
};

/**
 *
 * Helper function so we can split keys like "BoxOffice" to multiple words like "Box Office"
 */
export const splitStringOnWords = (str: string) => {
  let result = "";

  for (let char of str) {
    if (char >= "A" && char <= "Z" && result.length !== 0) result += " ";
    result += char;
  }

  return result;
};

const useStyles = makeStyles((theme) => ({
  stripe: {
    background: theme.palette.background.paper,
  },
  wrapper: {
    marginTop: 0,
  },
}));

export default MovieInfo;
