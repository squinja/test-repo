// import logo from "./logo.svg";
import "./styles/main.css";

import celebrate from "./assets/celebrate.jpg";

import { useState } from "react";

import BackgroundImageBox from "./BackgroundImageBox";
import TextBox from "./TextBox";

function App() {
  const [optionNumber, setOptionNumber] = useState(-1);
  const [sceneNumber, setSceneNumber] = useState(1);
  const [sceneBranchNumber, setSceneBranchNumber] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Amadeus the Oracle</h1>
      </header>
      <body>
        <div className="cover">
          <h2>Please view on a larger device. (>750px width)</h2>
        </div>
        <div
          className={
            sceneBranchNumber === 42 ? "happy-birthday-cover" : "hide-cover"
          }
        >
          <h2>Happy 24th Birthday, Gregory!! Love, Emma and Amadeus</h2>
          <img src={celebrate}></img>
          <div className="f">.</div>
        </div>
        <div className="application">
          <BackgroundImageBox
            sceneBranchNumber={sceneBranchNumber}
            setSceneBranchNumber={setSceneBranchNumber}
          />
          <TextBox
            optionNumber={optionNumber}
            setOptionNumber={setOptionNumber}
            sceneNumber={sceneNumber}
            setSceneNumber={setSceneNumber}
            sceneBranchNumber={sceneBranchNumber}
            setSceneBranchNumber={setSceneBranchNumber}
          />
        </div>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </body>
    </div>
  );
}

export default App;
