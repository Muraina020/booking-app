import React, { useState } from 'react'
import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../searchItem/SearchItem'

const List = () => {
  
  const location = useLocation();
 const [destination, setDestination] = useState(location.state.destination)
 const [date, setDate] = useState(location.state.date)
 const [openDate, setOpenDate] = useState(false)
 const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className='lsItem'>
              <label>Check-in-date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/mm/yyy")} to ${format(date[0].endDate, "dd/mm/yyy")}`}</span>
              {openDate &&  (<DateRange
               onChange={(item) => setDate([item.selection])} minDate={new Date()} 
               ranges={date}
               />
               )}
            </div>
            <div className="lsItem">
            <label className="lsOptionTxt">Options</label>
            <div className="lsOptionItem">
              <label>Min Price <small>(Per Night)</small></label>
              <input type="number" />
            </div>
            <div className="lsOptionItem">
              <label>Max Price <small>(Per Night)</small></label>
              <input type="number"/>
            </div>
            <div className="lsOptionItem">
              <label>Adult </label>
              <input type="number" min={1} placeholder={options.adult}/>
            </div>
            <div className="lsOptionItem">
              <label>Children </label>
              <input type="number" min={0} placeholder={options.children}/>
            </div>
            <div className="lsOptionItem">
              <label>Room</label>
              <input type="number" min={1} placeholder={options.room}/>
            </div>
          </div>
          <button className="lsOptionBtn">Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
      </div>
  )
}

export default List