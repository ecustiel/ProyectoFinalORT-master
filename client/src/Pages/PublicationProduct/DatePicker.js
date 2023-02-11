//import "antd/dist/antd.css";
import { DatePicker } from "antd";
import { useState } from "react";
import moment from "moment";
const { RangePicker } = DatePicker;

function DatePickerNow() {
  const [dates, setDates] = useState([]);

  return (
    <div style={{ margin: 20 }}>
      <RangePicker
        onChange={(values) => {
          setDates(
            values.map((item) => {
              return moment(item).format("DD-MM-YYYY");
            })
          );
        }}
      />
    </div>
  );
}

export default DatePickerNow;
