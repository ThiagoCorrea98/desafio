import '../styles/sidebar.scss';
import { GenreResponse, Movie } from "../model/movies";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  selectedGenre: GenreResponse;
  movies: Movie[]; // array de filmes
}

export function Content({ movies, selectedGenre }: ContentProps) {
  // Complete aqui
  // cabeçalho contendo a categoria que será ser selecionada
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => ( // mapeando a lista de filmes que deve ser exibida
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              rating={movie.Ratings[0].Value}
              runtime={movie.Runtime}
            />
          ))}
        </div>
      </main>
    </div>
  );
}