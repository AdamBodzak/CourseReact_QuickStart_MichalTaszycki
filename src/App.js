
import './App.css';

function Heading(props) {
  const title = props.title;
  return (<h1>{title}</h1>);
};

function SongPlayer(props) {
  const showControls = props.showControls;
  const audioURL = props.audioURL;
  return (
    <>
      <Heading title="Music Player"/>
      <audio controls={showControls}>
        <source src={audioURL}></source>
      </audio>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <SongPlayer showControls audioURL="https://examples.devmastery.pl/assets/audio/deadfro5h.mp3"/>
    </div>
  );
}

export default App;
