
import './App.css';

function Heading({ title }) {
  return (<h1>{title}</h1>);
};

function SongPlayer({ showControls = true, songsProps }) {
  const { audioURL, coverURL } = songsProps;
  return (
    <>
      <Heading title="Music Player" />
      <img width="250px" height="250px" src={coverURL} alt="Song cover" />
      <audio key={audioURL} controls={showControls}>
        <source src={audioURL}></source>
      </audio>
    </>
  );
};

function SongListItem({ song }) {
  return (
    <li>
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
  const currentSong = songs[2];
  return (
    <div className="App">
      <SongPlayer showControls songsProps={currentSong} />
      <section>
        <Heading title="Songs" />
        <ul>
          {songs.map((song) => <SongListItem key={song.audioURL} song={song} />)}
        </ul>
      </section>
    </div>
  );
}

export default App;
