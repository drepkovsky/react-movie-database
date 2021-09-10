import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { mockMovie } from "../../../mocks/mocks";
import { MovieMeta } from "../../../redux/movie/types";
import MovieInfo, { MovieInfoProps, splitStringOnWords } from "../MovieInfo";

const movieMeta = new MovieMeta(mockMovie);

describe("movie details render tests", () => {
  const props: MovieInfoProps = {
    movieMeta,
  };

  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<MovieInfo {...props} />);
  });

  it("movie should contain all movie key value pairs", () => {
    const keys = wrapper.queryAllByTestId("movie-meta-key");
    const values = wrapper.queryAllByTestId("movie-meta-value");

    expect(keys.length).toEqual(Object.keys(movieMeta).length);
    expect(values.length).toEqual(Object.values(movieMeta).length);

    for (let [key, value] of Object.entries(movieMeta)) {
      const keyElement = wrapper.queryByText(splitStringOnWords(key));
      const valueElement = wrapper.queryByText(value);

      expect(keyElement).toBeInTheDocument();
      expect(valueElement).toBeInTheDocument();
    }
  });
});
