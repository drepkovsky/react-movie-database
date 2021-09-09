export interface Rating {
  Source: string;
  Value: string;
}

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

export class MovieMeta {
  Genre: string;
  Type: string;
  Year: string;
  Language: string;
  Released: string;
  Country: string;
  Director: string;
  Actors: string;
  Writer: string;
  Production: string;
  Runtime: string;
  DVD: string;
  BoxOffice: string;
  Awards: string;
  Rated: string;
  Metascore: string;
  Website: string;

  constructor(movie: Movie) {
    this.Genre = movie.Genre;
    this.Type = movie.Type;
    this.Year = movie.Year;
    this.Released = movie.Released;
    this.Rated = movie.Rated;
    this.Runtime = movie.Runtime;
    this.Writer = movie.Writer;
    this.Actors = movie.Actors;
    this.DVD = movie.DVD;
    this.Director = movie.Director;
    this.BoxOffice = movie.BoxOffice;
    this.Production = movie.Production;
    this.Website = movie.Website;
    this.Metascore = movie.Metascore;
    this.Language = movie.Language;
    this.Awards = movie.Awards;
    this.Country = movie.Country;
  }
}

export interface MoviePreview {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Language: string;
  Country: string;
  Awards: string;
}

export type MovieCache = {
  [query: string]: MovieCacheObj;
};

export type FavoriteMovies = {
  [key: string]: Movie;
};

export type MovieCacheObj = {
  page: number;
  movies: MoviePreview[];
  isError: boolean;
  isLoading: boolean;
};
