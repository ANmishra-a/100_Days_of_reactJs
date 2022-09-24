import { useState } from "react";
import Call from "./components/api.componenet";
import "./App.css";
import ErrorComp from "./components/error/Error.component";

function App() {
  function fetchData() {
    Call();
  }
  return (
    <div className="App">
      <ErrorComp />
      <button onClick={fetchData}>Click me</button>
    </div>
  );
}

export default App;
