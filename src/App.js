
import './App.css';

function Heading({ title }) {
  return (<h1>{title}</h1>);
};

function SongPlayer({ showControls = true, audioURL }) {
  return (
    <>
      <Heading title="Music Player" />
      <audio controls={showControls}>
        <source src={audioURL}></source>
      </audio>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <SongPlayer showControls audioURL="https://examples.devmastery.pl/assets/audio/deadfro5h.mp3" />
    </div>
  );
}

export default App;
