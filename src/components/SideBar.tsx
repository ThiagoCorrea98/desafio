import { useEffect, useState } from "react";
import { GenreResponse } from "../model/movies";
import { api } from "../services/api";
import { Button } from "./Button";
import '../styles/content.scss';

interface SideBarProps {
  onTransactionMovie: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ onTransactionMovie, selectedGenreId }: SideBarProps) {
  // Complete aqui
  const [genres, setGenres] = useState<GenreResponse[]>([]);

  useEffect(() => {
    api.get<GenreResponse[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>
      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onTransactionMovie(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
