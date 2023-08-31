// import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div className='header'>
        <div className="">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
       <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                //   onChange={e=>setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                // onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                > Date </span>
              {/* {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className='date'
  minDate={new Date()}
/> } */}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                // onClick={()=>setOpenOption(!openOption)}
                  className="headerSearchText"
                >  </span>
           
            <div className="option">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                        <button 
                        //  disabled={options.adult <= 1}
                        className="optionCounterButton">-</button>
                        <span className="optionCounterNumber"></span>
                        <button className="optionCounterButton">+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                        <button 
                        //  disabled={options.children <=0}
                        className="optionCounterButton" >-</button>
                        <span className="optionCounterNumber"></span>
                        <button className="optionCounterButton" >+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                        <button 
                        // disabled={options.room <= 1}
                        className="optionCounterButton" >-</button>
                        <span className="optionCounterNumber"></span>
                        <button className="optionCounterButton">+</button>
                    </div>
                </div>
            </div>
                </div>
                <div className="headerSearchItem">
                <button className="headerBtn"  >
                  Search
                </button>
              </div>
        </div>
    
        </div>
    </div>
  )
}

export default Header