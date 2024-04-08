import { useState, useEffect } from "react";
import EventItem from "./Components/EventItem";
import "./App.css";
import MainContent from "./Components/MainContent";

// https://api.seatgeek.com/2/events?lat=42.4395&lon=-76.4994&range=25mi&client_id=MzE3MTkwNTl8MTcxMTkzNTAyOC43Njc4NTk1&per_page=100
// https://api.seatgeek.com/2/events?lat=42.4395&lon=-76.4994&range=50mi&client_id=MzE3MTkwNTl8MTcxMTkzNTAyOC43Njc4NTk1&per_page=100

function App() {
  // HTML
  return (
    <div
      style={{
        position: "relative",
        top: "10%",
        left: "0",
        width: "100%", // This sets the width to the full width of the parent
        height: "100vh", // This sets the height to the full height of the viewport
        overflow: "auto", // This enables scrolling if the content exceeds the size of the div
        scrollbarWidth: "none", // This hides the scrollbar in Firefox
        msOverflowStyle: "none", // This hides the scrollbar in IE and Edge
      }}
    >
      <MainContent />
    </div>
  );
}

export default App;
