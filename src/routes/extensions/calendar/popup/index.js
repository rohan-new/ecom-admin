import React from "react";
import BigCalendar from "react-big-calendar";
import events from "../events";
import moment from "moment";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const Popup = () => {
  return (
    <div className="gx-main-content">
      <div className="gx-rbc-calendar">
        <h3 className='callout'>
          Click the "+x more" link on any calendar day that cannot fit all the days events to
          see an inline popup of all the events.
        </h3>
        <BigCalendar
          popup
          events={events}
          defaultDate={new Date(2015, 3, 1)}
        />
      </div>
    </div>
  )
};

export default Popup;
