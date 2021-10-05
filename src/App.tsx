import React from "react"
import logo from "./logo.svg"
import "./App.css"
import * as tf from "@tensorflow/tfjs"

function printSampleTensor() {
  console.log(tf.layers.dense({units: 1, inputShape: [1]}))
}
printSampleTensor()

const handleRunTraining = () => {
}

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
        <br/>
        <button onClick={handleRunTraining}>Run Training</button>
      </header>
    </div>
  );
}

export default App;
