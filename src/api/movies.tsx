import axios, { AxiosInstance, AxiosResponse } from "axios";
import config from "../config";
import { Movie, MoviePreview } from "../redux/movie/types";

const BASE_URL = `https://omdbapi.com/`;

export interface MoviesError {
  Response: "False";
  Error: string;
}
export interface MoviesFindData {
  Search: MoviePreview[];
  totalResults: number;
  Response: "True";
}
export interface MoviesFindByIdData extends Movie {
  Response: "True";
}

export type MoviesFindResponse = AxiosResponse<MoviesFindData | MoviesError>;

export type MovieFindByIdResponse = AxiosResponse<
  MoviesFindByIdData | MoviesError
>;

export class MovieApi {
  private static instance: MovieApi | null = null;
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      params: {
        apiKey: config.MOVIE_API_KEY,
      },
    });
  }

  static getInstance = () => {
    if (!this.instance) {
      return new MovieApi();
    } else return this.instance;
  };

  find = (search: string, page: number) => {
    return this.api
      .get<any, MoviesFindResponse>("", {
        params: { s: search, page },
      })
      .then((res) => {
        if (res.data.Response === "True") {
          return res.data;
        } else if (res.data.Response === "False") {
          throw new MovieError(res.data.Error);
        }
      });
  };
  findById = (id: String) => {
    return this.api
      .get<any, MovieFindByIdResponse>("", {
        params: {
          i: id,
          plot: "full",
        },
      })
      .then((res) => {
        if (res.data.Response === "True") {
          return res.data;
        } else if (res.data.Response === "False") {
          throw new MovieError(res.data.Error);
        }
      });
  };
}

export class MovieError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MovieError";
  }
}

export default MovieApi;
