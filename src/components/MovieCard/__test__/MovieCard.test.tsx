import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { mockMoviePreview } from "../../../mocks/mocks";
import { MoviePreview } from "../../../redux/movie/types";
import MovieCard from "../MovieCard";

describe("Movie Card rendering tests", () => {
  const onClick = jest.fn();

  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(
      <MovieCard movie={mockMoviePreview} onClick={onClick} isFavorite={true} />
    );
  });

  it("card should render", () => {
    const card = wrapper.queryByTestId("movie-card");

    expect(card).toBeInTheDocument();
  });

  it("card should contain 'N/A' text as image when 'N/A' is passed as Poster", () => {
    const naImg = wrapper.queryByTestId("na-img-text");

    expect(naImg).toBeInTheDocument();
    expect(naImg).toHaveTextContent("N/A");
  });

  it("card title should be the same as passed", () => {
    const title = wrapper.queryByTestId("title");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(mockMoviePreview.Title);
  });

  it("card should contain type and movie the same as passed", () => {
    const typeYear = wrapper.queryByTestId("type-year");

    expect(typeYear).toBeInTheDocument();
    expect(typeYear).toHaveTextContent(
      `${mockMoviePreview.Type} ${mockMoviePreview.Year}`
    );
  });

  it("card should contain country and language if not undefined", () => {
    const countryLanguage = wrapper.queryByTestId("country-language");

    expect(countryLanguage).toBeInTheDocument();
    expect(countryLanguage).toHaveTextContent(
      `${mockMoviePreview.Country || ""} ${mockMoviePreview.Language || ""}`
    );
  });
});
