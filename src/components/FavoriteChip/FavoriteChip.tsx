import { Chip, makeStyles } from "@material-ui/core";
import React from "react";

const FavoriteChip = () => {
  const classes = useStyles();
  return (
    <Chip
      size="small"
      className={classes.favoriteChip}
      label={"Your favorite"}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  favoriteChip: {
    background: "#f2d91b",
    color: "white",
  },
}));
export default FavoriteChip;
