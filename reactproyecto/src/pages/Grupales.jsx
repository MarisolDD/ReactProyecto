import React from "react";
import Lottie from "react-lottie-player";
import LottieJson from "../pages/assets/lottieJson.json";
import "./grupales.css";

const App = () => {
  return (
    <div className="container-fluid">
      <Lottie
        className="player container"
        animationData={LottieJson}
        loop
        play
        style={{ height: "700px" }}
      />
    </div>
  );
};

export default App;
