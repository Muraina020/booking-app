import React from 'react'
import "./resultPrice.css"

const ResultPrice = () => {
  return (
    <div className='resultPrice'>
    <div className="reRating">
        <div className="reText">Excellent</div>
        <button className="resPriceBtn">8.9</button>
    </div>
    <div className="reTaxOpt">
        <span className="rePriceOpt">$125</span>
        <span className="reTax">Includes taxes and fees</span>
        <button className="rePriceBtn">see availability</button>
    </div>
</div>
  )
}

export default ResultPrice