import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';

const App = () => {
  return (
    <div className='container'>
      

      <Player
        src='https://lottie.host/3cf9cd07-cecf-49f3-806f-a484ab139ac7/ShdTM6DO4T.json'
        className="player"
        loop
         autoplay
         style={{ height: '700px', width: '700px' }}
      />

    </div>
  )
}

export default App