import { useRef } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Datepicker.scss";

export default function Datepicker({ selected, setSelected }) {
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
      <p className="deadline-txt">Deadline</p>
      <div className="calendar">
        <input
          id="date"
          className="deadline_input"
          type="text"
          value={value}
          placeholder={format(new Date(), "y-MM-dd")}
          ref={dateInput}
          onFocus={handleBlur}
          readOnly
        />

        <DayPicker mode="single" selected={selected} onSelect={setSelected} />
      </div>
    </>
  );
}
