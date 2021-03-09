import { useEffect, useState } from "react";
import "./App.css";
import { SongPlayer } from "./SongPlayer/SongPlayer";
import { Songs } from "./Songs/Songs";

export function App() {
  const URL = "https://examples.devmastery.pl/songs-api/songs";
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
        response.json().then(setSongs);
      }
    });
  }, []);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];
  function handleSelectSong(selectedSong) {
    const audioIndex = songs.findIndex(
      (song) => song.audioUrl === selectedSong.audioUrl
    );
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }
  }
  return (
    <div className="App">
      {songs.length === 0 ? (
        "Loading..."
      ) : (
        <>
          <SongPlayer
            song={currentSong}
          />
          <Songs
            songs={songs}
            currentSong={currentSong}
            handleSelectSong={handleSelectSong}
          />
        </>
      )}
    </div>
  );
}
