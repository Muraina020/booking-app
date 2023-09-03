import React from 'react'
import "./searchItem.css"
import ResultPrice from '../../components/resultPrice/ResultPrice'

const SearchItem = () => {
  return (
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
  )
}

export default SearchItem