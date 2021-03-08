
import './App.css';

function Heading() {
  return (<h1>Music Player</h1>);
};

function SongPlayer() {
  return (
    <audio controls="true" >
      <source src="https://examples.devmastery.pl/assets/audio/deadfro5h.mp3"></source>
    </audio>
  );
};

function App() {
  return (
    <div className="App">
      <Heading />
      <SongPlayer />
    </div>
  );
}

export default App;
