import React from "react";
import './Venue.css';
import { useNavigate } from "react-router";

export default function Venue() {
  const navigate = useNavigate();
 return (
    <ul id="venuelist">
      <li
        className="list"
        data-id="ACON"
        data-name="AGS Cinemas OMR: Navlur"
        data-sub-region-id="CHEN"
        data-sub-region-name="Chennai"
        data-lat="12.8505"
        data-lng="80.2257"
        data-session-count="0"
        data-allow-sales="Y"
        data-venue-app="VS"
        data-is-new-cinema="N"
        data-is-food-sales="Y"
        data-is-multiplex="Y"
        data-message-type="AC"
        data-message-title="Terms &amp; Conditions"
        data-message="<font color=`#ff0000`>Kindly check your showtimes while booking as there are mid-night shows available as well.</font><br><font color=``ff0000``>Ticket price inclusive of 3D glass charges.</font><br><strong>1.Wearing a face mask and following other Covid guidelines are mandatory (As per the directions from your local authorities).</strong><br>2.Tickets once purchased cannot be cancelled, exchanged or refunded.<br>3.Tickets purchased online are not eligible for discounts, schemes or promotions of any kind.<br>4.To collect tickets from the Box Office, it is mandatory for the cardholder to be present in person with the card used for the transaction, along with the booking confirmation (SMS/computer printout) to help minimize the risk of fraud.<br>5.Online bookings on our site are carried out over a secure payment gateway.<br>6.Tickets purchased online for a particular multiplex are valid for that multiplex only. <font color=``ff0000``><br>7.Children below the age of 18 cannot be admitted for movies certified `A`.<br>8.Please carry proof of age for movies certified `A`.</font><br>9.Please purchase tickets for children 3 years and above.<br>10.To counter unforeseen delays, please collect your tickets half an hour before show time.<br>11.Outside food and beverages are not allowed inside the cinema premises.<br>12.A convenience fee per ticket is levied on all tickets booked online.<br>13.Ticket holders are required to abide by the policies laid down by the AGS Cinemas management.<br>14.Smoking is strictly prohibited inside the theatre premises.<br>15.People under the influence of Alcohol/Drugs will not be allowed inside the cinema premises."
        data-is-full-seat-layout="Y"
        data-offline="false"
        data-is-down="false"
        data-venuedownmsg=""
        data-has-unpaid="false"
        data-has-mticket="true"
        data-has-cod="false"
        data-has-cop="false"
        data-position-key="1"
      >
        <div className="listing-info">
          <div className="img-container">
            <span className="icon-star star"></span>
          </div>
          <div className="details">
            <span className="heart-it" data-id="ACON">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enable-background="new 0 0 100 100"
              >
                <use></use>
              </svg>
            </span>
            <span className="icon-location">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enable-background="new 0 0 100 100"
              >
                <use></use>
              </svg>
            </span>
            <div className="__name ">
              <div className="__title">
                <a
                  className="__venue-name"
                  onclick="BMS.Misc.fnBusy(true);"
                  href="/bookingSelection"
                >
                  AGS Cinemas OMR: Navlur
                </a>
                <div
                  className="info-section"
                  onclick="toggleCinemaShowcaseModal(this);"
                  data-venue-code="ACON"
                >
                  <img
                    src="https://in.bmscdn.com/moviemode/cinemaphotoshowcase/info.png"
                    className="venue-info-icon lazy"
                    onerror="this.src='https:/\/\in.bmscdn.com/m6/images/common/placeholder.png'; this.onerror='';"
                  />
                  <div className="venue-info-text">INFO</div>
                </div>
              </div>
              <div className="st-distance _none">
                <span className="__dis-icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                  >
                    <use></use>
                  </svg>
                </span>
                <span className="__distance"></span>
              </div>
              <div className="unpaid-mticket-wrapper">
                <div className="__mticket-info">
                  <span className="icon">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      enable-background="new 0 0 100 100"
                    >
                      <use></use>
                    </svg>
                  </span>
                  <label>M-Ticket</label>
                </div>
                <div className="__fnb-info ">
                  <span className="icon">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      enable-background="new 0 0 100 100"
                    >
                      <use></use>
                    </svg>
                  </span>
                  <label>Food &amp; Beverage</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body showtimes-details-container ">
          <div className="offer-details-container"></div>
          <div className="showtime-pill-wrapper">
            <div className="showtime-pill-container _available" data-online="Y">
              <a
                className="showtime-pill"
                href="/booktickets/ACON/16997"
                data-session-id="16997"
                data-showtime-code="1515"
                data-showtime-filter-index="afternoon"
                data-date-time="03:15 PM"
                data-display-showtime="03:15 PM"
                data-is-atmos-enabled="N"
                data-availability="A"
                data-cut-off-date-time="202304231500"
                data-venue-code="ACON"
                data-event-id="ET00310832"
                data-attributes="4K DOLBY ATMOS"
                data-overall-avail-status="3"
                data-categories='{"price":"60.00","desc":"PEARL","availabilityClass":"_sold","availabilityText":"Sold Out","priceCode":"0002","availStatus":"0","overallSeatsStatus":"3"}'
                data-cat-popup='[{"price":"190.00","desc":"DIAMOND","availabilityClass":"_available","availabilityText":"Available","priceCode":"0001","availStatus":"3","overallSeatsStatus":"3"},{"price":"60.00","desc":"PEARL","availabilityClass":"_sold","availabilityText":"Sold Out","priceCode":"0002","availStatus":"0","overallSeatsStatus":"3"}]'
                data-price-filter-index="[1,2]"
                data-is-unpaid="0"
                data-unpaid-quota="0"
                data-seats-percent=""
                data-session-popup-desc=""
              >
                <div className="__details">
                  <div className="__text">03:15 PM </div>
                </div>
                <div className="attribute">4K DOLBY ATMOS</div>
              </a>
            </div>
          </div>
          <div className="venue-flags">
            <span className="gold-icon"></span>
            <span className="venue-flags-details">Non-cancellable</span>
          </div>{" "}
        </div>
      </li>
    </ul>
  );
}
