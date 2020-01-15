import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check ExpressJS API Endpoint
        </a>
      </header>
    </div>
  );
};

export default App;
