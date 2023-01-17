import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Album from "./pages/Album";
import Letter from "./pages/Letter";
import Header from "./components/Header/Header";
import Login from "./components/login";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RecoilRoot>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />

            <Route
              path="/photo"
              element={
                <>
                  <Header />
                  <Photo />
                </>
              }
            />

            <Route
              path="/album"
              element={
                <>
                  <Header />
                  <Album />
                </>
              }
            />

            <Route
              path="/letter"
              element={
                <>
                  <Header />
                  <Letter />
                </>
              }
            />
          </Routes>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
