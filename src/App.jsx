import React from "react";
import "./App.css";
import Header from "./components/header";
import Portfolio from "./pages/Portfolio";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Testing from "./pages/Testing";

function App() {
  return (
    <>
      <Header />

      <Portfolio />
      
      {/* <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Router> */}
      {/* <Testing /> */}
    </>
  );
}

export default App;
