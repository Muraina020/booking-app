import React from 'react'
import "./propList.css"

const PropList = () => {
  return (
    <div className='pList'>
     <div className="pListItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/427506739.webp?k=6acc24baf51151f80ea7bbadb1d51bec7b1e422b6b85fc83ab256cdb559f5f33&o=" alt="" className="pListImg"/>
        <div className="pListTitles">
            <h1>Hotel</h1>
            <h2>133 Properties</h2>
        </div>
     </div>
     <div className="pListItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartment</h1>
            <h2>2331 hotels</h2>
        </div>
     </div>
     <div className="pListItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>133 hotels</h2>
        </div>
     </div>
     <div className="pListItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Villas</h1>
            <h2>2331 hotels</h2>
        </div>
     </div>
     <div className="pListItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Cabin</h1>
            <h2>2331 hotels</h2>
        </div>
     </div>
 
    
    </div>
  )
}

export default PropList