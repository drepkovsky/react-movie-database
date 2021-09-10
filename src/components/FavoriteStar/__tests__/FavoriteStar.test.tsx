import { render, within } from "@testing-library/react";
import React from "react";
import FavoriteStar, { FavoriteStarProps } from "../FavoriteStar";

const favoriteProps: FavoriteStarProps = {
  isFavorite: true,
  onClick: jest.fn(),
};
const notFavoriteProps: FavoriteStarProps = {
  isFavorite: false,
  onClick: jest.fn(),
};

it("renders properly", () => {
  const { getByTestId } = render(<FavoriteStar {...favoriteProps} />);
  expect(getByTestId("favorite-star")).toBeInTheDocument();
});

it("should have StarIcon when is favorite", () => {
  const { getByTestId } = render(<FavoriteStar {...favoriteProps} />);

  expect(
    within(getByTestId("favorite-star")).getByTestId("favorite")
  ).toBeInTheDocument();
});

it("should have StarOutlineIcon when is not favorite", () => {
  const { getByTestId } = render(<FavoriteStar {...notFavoriteProps} />);

  expect(
    within(getByTestId("favorite-star")).getByTestId("not-favorite")
  ).toBeInTheDocument();
});
