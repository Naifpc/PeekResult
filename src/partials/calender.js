import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarGfg() {
    const [value, onChange] = useState(new Date());

    return (
        <div className='container-fluid'>

            <Calendar 
                
                onChange={onChange}
                value={value}
                className="w-100 bg-body-secondary border-0 rounded"
            />
        </div>
    );
}

