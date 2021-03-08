
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
      <audio controls={showControls}>
        <source src={audioURL}></source>
      </audio>
    </>
  );
};

function App() {
  const currentSong = {
    audioURL: "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
    coverURL: "https://examples.devmastery.pl/assets/audio/deadfro5h.jpg",
    title: "Deadfro5h",
    artist: "starfrosh"
  };
  return (
    <div className="App">
      <SongPlayer
        showControls
        songsProps={currentSong}
      />
    </div>
  );
}

export default App;
