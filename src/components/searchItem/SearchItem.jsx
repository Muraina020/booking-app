import React from 'react'
import "./searchItem.css"
import ResultPrice from '../../components/resultPrice/ResultPrice'

const rooms = [
  {
    id: 1,
    src: "https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1",
    title: "Tower Street Apartment",
    distance: "500m from center",
    taxi: "Free airport taxi",
    conditon: "Studio apartment with air conditioning",
    space: "Entire apartment • 1 bedroom • 1 bathroom • 22m",
    concel: "Free Cancellation",
    later: "You can cancel later, so lock in this great price today!",
  },
  {
    id: 2,
    src: "https://cf.bstatic.com/xdata/images/hotel/square600/490708694.webp?k=7c02417ea5192e1cb40f468d0eff305b07dcc30a706e921d28ec02b93f4cde3b&o=",
    title: "Tower Street Apartment"
  },
  {
    id: 3,
    src: "https://cf.bstatic.com/xdata/images/hotel/square600/489797763.webp?k=36cfe5553d78c52de0a1b0bc1ee910a48e90e2c7395fa587ccb7af5aab5a44d4&o=",
    title: "Tower Street Apartment",
  },
  {
    id: 4,
    src: "https://cf.bstatic.com/xdata/images/hotel/square600/477310655.webp?k=47b7b52bc14bb7b79e2d2b612a65b31fd8c1adaaed030cd6e787f280943c08c6&o=",
    title: "Tower Street Apartment"
  },
  {
    id: 5,
    src: "https://cf.bstatic.com/xdata/images/hotel/square600/484809905.webp?k=d7beef19814ddca37fba3616ec92c7f78cc521812f859fa438ebc8bf1fe0a5cc&o=",
    title: "Tower Street Apartment",
    
  },
  {
    id: 6,
    src: "https://cf.bstatic.com/xdata/images/hotel/square600/481879127.webp?k=400b90d4f66107435b9a64b15c628e4f64eca3fc621035387ef4647851dd7f86&o=",
    title: "Tower Street Apartment"
  },
]

const SearchItem = () => {
  return (
    <div className='resultContainer'>
    <div className='result'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" alt="" className="resImg" />

        <div className="resDesc">
        <h1 className="resTitle">Tower Street Apartment</h1>
        <span className="resDistance">500m from center</span>
        <span className="resTaxi">Free airport taxi</span>
        <span className="resCond">Studio apartment with air conditioning</span>
        <span className="resSpace">Entire apartment • 1 bedroom • 1 bathroom • 22m²</span>
        <span className="resConcel">Free Cancellation</span>
        <span className="resLater">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="resPriceOpt">
            <ResultPrice/>
      </div>
    </div>
    <div className='result'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/490708694.webp?k=7c02417ea5192e1cb40f468d0eff305b07dcc30a706e921d28ec02b93f4cde3b&o="  className="resImg"/>

        <div className="resDesc">
        <h1 className="resTitle">Tower Street Apartment</h1>
        <span className="resDistance">500m from center</span>
        <span className="resTaxi">Free airport taxi</span>
        <span className="resCond">Studio apartment with air conditioning</span>
        <span className="resSpace">Entire apartment • 1 bedroom • 1 bathroom • 22m²</span>
        <span className="resConcel">Free Cancellation</span>
        <span className="resLater">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="resPriceOpt">
            <ResultPrice/>
      </div>
    </div>
    <div className='result'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/489797763.webp?k=36cfe5553d78c52de0a1b0bc1ee910a48e90e2c7395fa587ccb7af5aab5a44d4&o=" alt="" className="resImg" />

        <div className="resDesc">
        <h1 className="resTitle">Tower Street Apartment</h1>
        <span className="resDistance">500m from center</span>
        <span className="resTaxi">Free airport taxi</span>
        <span className="resCond">Studio apartment with air conditioning</span>
        <span className="resSpace">Entire apartment • 1 bedroom • 1 bathroom • 22m²</span>
        <span className="resConcel">Free Cancellation</span>
        <span className="resLater">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="resPriceOpt">
            <ResultPrice/>
      </div>
    </div>
    <div className='result'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/477310655.webp?k=47b7b52bc14bb7b79e2d2b612a65b31fd8c1adaaed030cd6e787f280943c08c6&o=" alt="" className="resImg" />

        <div className="resDesc">
        <h1 className="resTitle">Tower Street Apartment</h1>
        <span className="resDistance">500m from center</span>
        <span className="resTaxi">Free airport taxi</span>
        <span className="resCond">Studio apartment with air conditioning</span>
        <span className="resSpace">Entire apartment • 1 bedroom • 1 bathroom • 22m²</span>
        <span className="resConcel">Free Cancellation</span>
        <span className="resLater">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="resPriceOpt">
            <ResultPrice/>
      </div>
    </div>
    <div className='result'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/484809905.webp?k=d7beef19814ddca37fba3616ec92c7f78cc521812f859fa438ebc8bf1fe0a5cc&o=" alt="" className="resImg" />

        <div className="resDesc">
        <h1 className="resTitle">Tower Street Apartment</h1>
        <span className="resDistance">500m from center</span>
        <span className="resTaxi">Free airport taxi</span>
        <span className="resCond">Studio apartment with air conditioning</span>
        <span className="resSpace">Entire apartment • 1 bedroom • 1 bathroom • 22m²</span>
        <span className="resConcel">Free Cancellation</span>
        <span className="resLater">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="resPriceOpt">
            <ResultPrice/>
      </div>
    </div>
    <div className='result'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/481879127.webp?k=400b90d4f66107435b9a64b15c628e4f64eca3fc621035387ef4647851dd7f86&o=" alt="" className="resImg" />

        <div className="resDesc">
        <h1 className="resTitle">Tower Street Apartment</h1>
        <span className="resDistance">500m from center</span>
        <span className="resTaxi">Free airport taxi</span>
        <span className="resCond">Studio apartment with air conditioning</span>
        <span className="resSpace">Entire apartment • 1 bedroom • 1 bathroom • 22m²</span>
        <span className="resConcel">Free Cancellation</span>
        <span className="resLater">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="resPriceOpt">
            <ResultPrice/>
      </div>
    </div>
    </div>
  )
}

export default SearchItem