
export function SongListItem({ song, isCurrent, onSelect }) {
  const background = isCurrent ? "darkslategrey" : "none";
  const style = { background };
  function handleClick() {
    onSelect(song);
  }
  return (
    <li
      className={`SongListItem ${isCurrent ? "selected" : ""}`}
      style={style}
      onClick={handleClick}
    >
      {song.title} by {song.artist}
    </li>
  );
}
;
