import { useState, useRef } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Datepicker.scss";

export default function Datepicker() {
  const [selected, setSelected] = useState();

  let value;
  if (selected) {
    value = format(selected, "PP");
  }

  const dateInput = useRef(null);
  function handleBlur() {
    dateInput.current.blur();
  }

  return (
    <>
      <label htmlFor="date">
        Deadline
        <input
          id="date"
          className="deadline_input"
          type="text"
          value={value}
          placeholder={format(new Date(), "y-MM-dd")}
          ref={dateInput}
          onFocus={handleBlur}
        />
        <DayPicker mode="single" selected={selected} onSelect={setSelected} />
      </label>
    </>
  );
}
