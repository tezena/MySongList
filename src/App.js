import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/home";
import About from "./screens/About";
import Navbar from "./components/Navbar";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  BrowserRouter,
  Route,
 Routes
} from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
