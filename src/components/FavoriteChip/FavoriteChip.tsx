import { Chip } from "@material-ui/core";
import React from "react";

const FavoriteChip = () => {
  return (
    <Chip data-testid="favorite-chip" variant="outlined" label={"Favorite"} />
  );
};

export default FavoriteChip;
