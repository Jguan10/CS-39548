import { useState } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";

function App() {

  // Hint: Start by defining a state via useState

  return (
    <div className="App">
      <NavBar />
      <Menu />
    </div>
  );
}

export default App;
