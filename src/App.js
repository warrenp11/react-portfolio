import React from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Gallery></Gallery>
      </main>
    </div>
  );
}

export default App;
