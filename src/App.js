
import './App.css';

function Heading() {
  return (<h1>ddd</h1>);
};

function SongPlayer() {
  const showControls = false || true;
  const audioURL = "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3";
  return (
    <>
      <Heading />
      <audio controls={showControls}>
        <source src={audioURL}></source>
      </audio>
    </>
  );
};

function getStatusMessage(isLoading, hasError) {
  let massage = null;
  if (isLoading) {
    massage = "Loading...";
  };
  if (hasError) {
    massage = "Error occurred...";
  };
  return massage;
};

function App() {
  const isLoading = false;
  const hasError = false;
  const showPlayer = !isLoading && !hasError;
  const statusMassage = getStatusMessage(isLoading, hasError);
  return (
    <div className="App">
      {showPlayer ? <SongPlayer /> : statusMassage}
    </div>
  );
}

export default App;
