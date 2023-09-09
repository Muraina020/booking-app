import React from 'react'
import "./featuredProp.css"



const FeaturedProp = () => {
  return (
    <div className='fp'>
     <div className="fpList">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="fpImg" />
        <div className="fpItem">
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpPlace">Old Town, Poland, Kraków</span>
            <span className="fpPrice">Starting from <small>NGN 84,532</small></span>
        </div>
        <div className="fpRating">
            <button className="fpBtn">8.7</button>
            <span className="fpText">Excellent · 2,383 reviews</span>
        </div>
     </div>
     <div className="fpList">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=" alt="" className="fpImg" />
        <div className="fpItem">
            <span className="fpName">Comfort Suites Airport</span>
            <span className="fpPlace">Austin</span>
            <span className="fpPrice">Starting from <small>NGN 800,000</small></span>
        </div>
        <div className="fpRating">
            <button className="fpBtn">9.3</button>
            <span className="fpText">Excellent · 2,383 reviews</span>
        </div>
     </div>
     <div className="fpList">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&amp;o=" alt="" className="fpImg" />
        <div className="fpItem">
            <span className="fpName">Four Seasons Hotel</span>
            <span className="fpPlace">Listbon</span>
            <span className="fpPrice">Starting from <small>NGN 750,000</small></span>
        </div>
        <div className="fpRating">
            <button className="fpBtn">8.8</button>
            <span className="fpText">Exceptional · 2,383 reviews</span>
        </div>
     </div>
     <div className="fpList">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&amp;o=" alt="" className="fpImg" />
        <div className="fpItem">
            <span className="fpName">Hilton Garden Inn</span>
            <span className="fpPlace">Berlin</span>
            <span className="fpPrice">Starting from <small>NGN 600, 000</small></span>
        </div>
        <div className="fpRating">
            <button className="fpBtn">8.6</button>
            <span className="fpText">Excellent · 2,383 reviews</span>
        </div>
     </div>
    </div>
  )
}

export default FeaturedProp