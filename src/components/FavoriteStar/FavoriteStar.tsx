import { IconButton } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import React from "react";
export interface FavoriteStarProps {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoriteStar = ({ isFavorite, onClick }: FavoriteStarProps) => {
  return (
    <IconButton
      data-testid="favorite-star"
      size="small"
      onClick={onClick}
      color="primary"
    >
      {isFavorite ? (
        <StarIcon data-testid="favorite" />
      ) : (
        <StarOutlineIcon data-testid="not-favorite" />
      )}
    </IconButton>
  );
};

export default FavoriteStar;
