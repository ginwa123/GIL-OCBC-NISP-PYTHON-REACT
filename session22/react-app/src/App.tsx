
import logo from "./logo.svg";
import "./App.css";
import { Clock } from "./components/Clock";


function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>Realtime Server Clock</div>
        <Clock
          pClockName="Jakarta"
          pIsShowClockName={true}
          pTimeZone="Asia/Jakarta"
          pFormatDateTime="DD-MM-YYYY (HH:mm:ss)"
        />
        <Clock
          pClockName="Tokyo"
          pIsShowClockName={true}
          pTimeZone="Asia/Tokyo"
          pFormatDateTime="DD-MM-YYYY (HH:mm:ss)"
        />
        <Clock
          pClockName="London"
          pIsShowClockName={true}
          pTimeZone="Europe/London"
          pFormatDateTime="YYYY-MM-DD (HH:m:s a)"
        />
          <Clock
          pClockName="Bangkok"
          pTimeZone="Asia/Bangkok"
          pIsShowClockName={false}
          pFormatDateTime="YYYY-MM-DD (H:m a)"
        />
      </header>
    </div>
  );
}

export default App;
