import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
    <div className="featuredItem">
     <img src="https://cf.bstatic.com/xdata/images/city/600x600/684500.jpg?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&amp;o=" alt="" className="featuredImg" />
     <div className="featuredTitle">
       <h1>Lekki Lagos</h1>
       <h2>123 Properties</h2>
     </div>
    </div>
    <div className="featuredItem">
     <img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="" className="featuredImg" />
     <div className="featuredTitle">
       <h1>AJA Lagos</h1>
       <h2>132 Properties</h2>
     </div>
    </div>
    <div className="featuredItem">
     <img src="https://cf.bstatic.com/xdata/images/city/600x600/822312.jpg?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&amp;o=" alt="" className="featuredImg" />
     <div className="featuredTitle">
       <h1>Abuja, Nigeria</h1>
       <h2>133 Properties</h2>
     </div>
    </div>
   </div>
  )
}

export default Featured