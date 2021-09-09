import { IconButton, makeStyles } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import React from "react";

interface FavoriteStarProps {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoriteStar = ({ isFavorite, onClick }: FavoriteStarProps) => {
  const classes = useStyles();
  return (
    <IconButton size="small" className={classes.starIcon} onClick={onClick}>
      {isFavorite ? <StarIcon /> : <StarOutlineIcon />}
    </IconButton>
  );
};
const useStyles = makeStyles((theme) => ({
  starIcon: {
    color: "#f2d91b",
  },
}));

export default FavoriteStar;
