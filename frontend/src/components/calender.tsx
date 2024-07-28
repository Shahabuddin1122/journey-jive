"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { addMonths } from "date-fns";
import "./Calender.css";
import {format} from "node:url";

const Calendar = ({dateSelector}:{dateSelector: (date:string)=> void}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        const formattedDate = startDate.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        dateSelector(formattedDate)
    };
    return (
        <div className="full-screen-calendar">
            <DatePicker
                selected={startDate}
                onChange={onChange}
                minDate={new Date()}
                maxDate={addMonths(new Date(), 5)}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                showDisabledMonthNavigation
            />
        </div>
    );
};

export default Calendar;
