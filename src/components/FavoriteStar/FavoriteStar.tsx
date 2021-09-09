import { IconButton } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import React from "react";
interface FavoriteStarProps {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoriteStar = ({ isFavorite, onClick }: FavoriteStarProps) => {
  return (
    <IconButton size="small" onClick={onClick} color="primary">
      {isFavorite ? <StarIcon /> : <StarOutlineIcon />}
    </IconButton>
  );
};

export default FavoriteStar;
