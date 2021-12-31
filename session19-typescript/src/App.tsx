import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      <Button pName="Button Testing" pImage={logo} />
    </div>
  );
}

export default App;
