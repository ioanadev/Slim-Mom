import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import './DatePicker.css'

 export const DatePk = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = (e) => {
      setIsOpen(!isOpen);
      setStartDate(e);
    };
    const handleClick = (e) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };
    return (
      <>
        <button className="example-custom-input" onClick={handleClick}>
          {format(startDate, "yyyy-MM-dd")}
        </button>
        {isOpen && (
          <DatePicker selected={startDate} onChange={handleChange} inline />
        )}
      </>
    );
  };
