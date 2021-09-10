import { render } from "@testing-library/react";
import React from "react";
import FavoriteChip from "../FavoriteChip";

it("renders properly", () => {
  const { getByTestId } = render(<FavoriteChip />);
  expect(getByTestId("favorite-chip")).toBeInTheDocument();
});

it("should have 'favorite' text", () => {
  const { getByTestId } = render(<FavoriteChip />);

  expect(getByTestId("favorite-chip")).toHaveTextContent("Favorite");
});
