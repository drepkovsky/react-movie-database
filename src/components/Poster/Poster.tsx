import { Card, makeStyles, Typography } from "@material-ui/core";
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
        <Typography variant="h5" color="inherit">
          N/A
        </Typography>
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
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.disabled,
    minHeight: "200px",
    height: "100%",
  },
}));

export default Poster;
