import { Movie } from "../../../redux/movie/types";
import React from "react";
import MovieDetails, { MovieDetailsProps } from "../MovieDetails";
import { render, RenderResult } from "@testing-library/react";
import { mockMovie } from "../../../mocks/mocks";

describe("movie details render tests", () => {
  const props: MovieDetailsProps = {
    movie: mockMovie,
    onFavoriteClick: jest.fn<void, [movie: Movie]>(),
    isFavorite: true,
  };

  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<MovieDetails {...props} />);
  });

  it("movie details should contain title", () => {
    const title = wrapper.queryByTestId("title");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(mockMovie.Title);
  });

  it("movie details should contain favorite star", () => {
    const star = wrapper.queryByTestId("favorite-star");

    expect(star).toBeInTheDocument();
  });

  it("movie details should contain favorite chip if isFavorite equals true", () => {
    const chip = wrapper.queryByTestId("favorite-chip");

    expect(chip).toBeInTheDocument();
  });
  it("movie details should not contain favorite chip if  isFavorite equals false", () => {
    wrapper.rerender(<MovieDetails {...props} isFavorite={false} />);

    const chip = wrapper.queryByTestId("favorite-chip");

    expect(chip).not.toBeInTheDocument();
  });

  it("movie details should contain plot", () => {
    const plot = wrapper.queryByTestId("plot");

    expect(plot).toBeInTheDocument();
    expect(plot).toHaveTextContent(mockMovie.Plot);
  });

  it("movie details should contain all ratings", () => {
    const ratings = wrapper.queryAllByTestId("rating");

    expect(ratings.length).toEqual(mockMovie.Ratings.length);
  });
});
