import React from "react";
import './MovieList.css'
import ColorIndicator from "../ColorIndicator/ColorIndicator";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const navigate = useNavigate();
  return (
    <div>
      <ul id="showEvents">
        <ColorIndicator />

        <li className="list" data-eventcode="ET00310832" data-count="4">
          {" "}
          <div className="listing-info">
            {" "}
            <div className="img-container">
              {" "}
              <div className="__img">
                {" "}
                <img alt="" src="{{EventImage}}" />{" "}
              </div>{" "}
              <span className="icon-star star"></span>{" "}
            </div>{" "}
            <div className="details">
              {" "}
              <span className="__name">
                {" "}
                <a
                  className="nameSpan"
                  href="/seatBooking"
                  onclick={()=>navigate('/seatBooking')}

                >
                  Viduthalai Part - 1 (A)
                </a>{" "}
              </span>{" "}
              <br />{" "}
            </div>{" "}
            <div className="eventInfo">
              <a href="/explore/movies?languages=tamil">Tamil</a>, 2D
            </div>{" "}
          </div>{" "}
          <div className="body   __cn-list">
            <div data-online="Y" className="_available showtime-pill-container">
              {" "}
              <a
                className="showtime-pill data-enabled"
                data-session-id="ACVM_20484"
                data-seats-percent="undefined"
                onclick={()=>navigate('/seatBooking')}
              >
                {" "}
                <div className="__details">
                  {" "}
                  <div className="__text"> 10:10 PM </div>{" "}
                </div>{" "}
                <div className="attribute">4K DOLBY 7.1</div>{" "}
              </a>{" "}
            </div>
          </div>{" "}
        </li>
      </ul>
    </div>
  );
}
