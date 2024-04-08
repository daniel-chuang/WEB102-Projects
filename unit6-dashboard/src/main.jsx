import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailedEventView from "./Routes/DetailedEventView.jsx";
import Navbar from "./Components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar className="fixed top-0 left-0 z-50 w-full h-0" />
    <div className="mt-20">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/event/:id" element={<DetailedEventView />} />
      </Routes>
    </div>
  </BrowserRouter>
);
