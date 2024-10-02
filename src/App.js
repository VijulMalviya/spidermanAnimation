import React, { useState } from 'react'
import SpiderManArea from './components/area/SpidermanArea'

function App() {
  const [isAnimationPlayed, setIsAnimationPlayed] = useState(false);

  const playAnimation = () => {
    setIsAnimationPlayed(!isAnimationPlayed);
  };
  return (
    <>
    <button
        style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          width: '200px',
          height: '50px',
          transform: 'translateX(-50%)',
          zIndex: 1000,
        }}
        onClick={playAnimation}
        
      >
       {!isAnimationPlayed ? "Play Animation" : "Stop Animation"}
      </button>
    <SpiderManArea  isAnimationPlayed={isAnimationPlayed} />
    </>
  )
}

export default App