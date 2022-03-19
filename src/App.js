import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Routers from "./Routes";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="page">
        <Header />
        <Routers />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
