import React from 'react'
import web from '../videos/web.mp4'
function Videoplay() {
  return (
    <div>
        <video src={web} autoplsy loop muted/>
    </div>
  )
}

export default Videoplay