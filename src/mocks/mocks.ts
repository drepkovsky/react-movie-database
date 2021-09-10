import { Movie, MoviePreview } from "../redux/movie/types";

export const mockMovie: Movie = {
  Title: "Spider-Man",
  Year: "2002",
  Rated: "PG-13",
  Released: "03 May 2002",
  Runtime: "121 min",
  Genre: "Action, Adventure, Sci-Fi",
  Director: "Sam Raimi",
  Writer: "Stan Lee, Steve Ditko, David Koepp",
  Actors: "Tobey Maguire, Kirsten Dunst, Willem Dafoe",
  Plot: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
  Language: "English",
  Country: "United States",
  Awards: "Nominated for 2 Oscars. 16 wins & 63 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "7.3/10" },
    { Source: "Metacritic", Value: "73/100" },
  ],
  Metascore: "73",
  imdbRating: "7.3",
  imdbVotes: "713,424",
  imdbID: "tt0145487",
  Type: "movie",
  DVD: "01 Nov 2002",
  BoxOffice: "$407,022,860",
  Production: "Marvel Films, Laura Ziskin Productions",
  Website: "N/A",
};

export const mockMoviePreview: MoviePreview = {
  Awards: "",
  Country: "England",
  Language: "English, Spanish",
  Poster: "N/A",
  Title: "Spider-Man",
  Type: "movie",
  imdbID: "jaseuqi",
  Year: "2012",
};
