
import { useRef, useState } from 'react';
import './App.css';

function Heading({ title }) {
  return (<h1>{title}</h1>);
};

function SongPlayer({ showControls = false, songsProps }) {
  const audioRef = useRef();
  const { audioURL, coverURL } = songsProps;
  return (
    <>
      <Heading title="Music Player" />
      <img width="250px" height="250px" src={coverURL} alt="Song cover" />
      <audio ref={audioRef} key={audioURL} controls={showControls}>
        <source src={audioURL}></source>
      </audio>
      <div>
        <button onClick={() => audioRef.current.play()}>Play</button>
        <button onClick={() => audioRef.current.pause()}>Pause</button>
      </div>
    </>
  );
};

function SongListItem({ song, isCurrent, onSelect }) {
  const background = isCurrent ? "red" : "none";
  const style = { background };
  function handleClick() {
    onSelect(song);
  };
  return (
    <li style={style} onClick={handleClick}>
    {song.title} by {song.artist}
  </li>
  );
};

function App() {
  const songs = [
    {
      audioURL: "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
      coverURL: "https://examples.devmastery.pl/assets/audio/deadfro5h.jpg",
      title: "Deadfro5h",
      artist: "starfrosh"
    },
    {
      audioURL: "https://examples.devmastery.pl/assets/audio/majesty.mp3",
      coverURL: "https://examples.devmastery.pl/assets/audio/majesty.jpg",
      title: "Majesty (Original Mix)",
      artist: "Ryan Craig Martin"
    },
    {
      audioURL: "https://examples.devmastery.pl/assets/audio/runs.mp3",
      coverURL: "https://examples.devmastery.pl/assets/audio/runs.jpg",
      title: "Runs",
      artist: "Wowa"
    }
  ];
  const [currentSong, setCurrentSong] = useState(songs[1]);
  function handleSelectSong(selectedSong) {
    setCurrentSong(selectedSong);
  };
  return (
    <div className="App">
      <SongPlayer songsProps={currentSong} />
      <section>
        <Heading title="Songs" />
        <ul>
          {songs.map((song) => <SongListItem
            key={song.audioURL}
            song={song}
            isCurrent={currentSong.audioURL === song.audioURL }
            onSelect={handleSelectSong}
          />)}
        </ul>
      </section>
    </div>
  );
}

export default App;
