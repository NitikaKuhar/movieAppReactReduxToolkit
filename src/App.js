import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import MovieDetails from "./components/MovieDetails/movieDetails";
import PageNotFound from "./components/PageNotFound/pageNotFound";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route components={<PageNotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}
