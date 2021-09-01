import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import RecommendedVideos from "./Components/RecommendedVideos";
function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
      {/* sidebar */}
      {/* Recommnended */}
    </div>
  );
}

export default App;
