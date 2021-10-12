import React, { useState } from 'react'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import BirthdayTable from './BirthdayTable';


function Calendarr() {
  
  const [date, setDate] = useState(new Date());
    
    return (
      <>
      <div className="featured" style={{marginTop:'25px'}}>
      <div className="featuredItem">
      <div className="featuredMoneyContainer">
      <div>
      <div className='calendar-container' >
        <Calendar  onChange={setDate} value={date}  
      
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}/>
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p></div>
    </div>
    </div>
    
    
      <div className="featuredItem">
        <BirthdayTable></BirthdayTable>
      </div>
      </div>
    </>
    )
}

export default Calendarr
