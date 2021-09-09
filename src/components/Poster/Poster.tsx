import { Box, Card, makeStyles, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";

interface PosterProps {
  poster: string;
  alt: string;
}

function Poster({ poster, alt }: PosterProps): ReactElement {
  const classes = useStyles();

  const isImage = poster !== "N/A";
  return (
    <Card className={classes.wrapper}>
      {isImage ? (
        <img src={poster} alt={alt} className={classes.img} />
      ) : (
        <Typography variant="h5" color="inherit"></Typography>
      )}
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[600],
    minHeight: "200px",
    height: "100%",
  },
}));

export default Poster;
