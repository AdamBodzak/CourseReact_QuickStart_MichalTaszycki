import { Heading } from "../Heading/Heading";
import { SongListItem } from "./SongListItem/SongListItem";
import "./Songs.css";

export function Songs({ songs, currentSong, handleSelectSong }) {
  return (
    <section className="Songs">
      <Heading title="Songs" />
      <ul>
        {songs.map((song) => (
          <SongListItem
            key={song.audioUrl}
            song={song}
            isCurrent={currentSong.audioUrl === song.audioUrl}
            onSelect={handleSelectSong} />
        ))}
      </ul>
    </section>
  );
}
;
