import { useEffect, useState } from "react"
import { SideBar } from './components/SideBar';
import { Content } from "./components/Content";
import { api } from "./services/api";
import { GenreResponse, Movie } from "./model/movies";

import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1)
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponse>(
    {} as GenreResponse
  );

  useEffect(() => {
    api.get<Movie[]>(`movies/?Genre_id=${selectedGenreId}`).then((response) => {
      setMovies(response.data);
    });

    api.get<GenreResponse>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data);
    });
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar onTransactionMovie={handleClickButton} selectedGenreId={selectedGenreId} />
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  );
}