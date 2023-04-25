import React from "react";
import "./SeatBooking.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SeatingLayout from "../SeatingLayout/SeatingLayout";

export default function SeatBooking() {
  return (
    <div>
    <div className="container">
      <header className="bkf-header">
        <span className="st-back-btn">
          <ChevronLeftIcon />
        </span>
      </header>
      <div className="header-container">
        <h2>
          <div>
            <span className="__event-name">
              <a id="strEvtName" href="#" onclick="fnClCallout();">
                Viduthalai Part - 1
              </a>
            </span>
          </div>
          <div>
            <span className="__event-details">
              <span id="strVenName">AGS Cinemas OMR: Navlur</span>
              <span>|</span>
              <span id="strDate">Today, 24 Apr, 03:15 PM</span>
            </span>
          </div>
        </h2>
      </div>
      <div className="text-adult-movie" id="SetaErrMsg">
        <span className="error-text" id="SLNew_CenMsg">
          Adult Movie - Children below 18 years are not allowed.
        </span>
      </div>
    </div>
    <SeatingLayout/>
    </div>
  );
}
