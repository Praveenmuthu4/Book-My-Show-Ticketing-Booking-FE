import React from "react";
import "./BookingPage.css";
import Header from "../Header/Header";
import TopBottomContent from "../TopContent/TopBottomContent";
import ColorIndicator from "../ColorIndicator/ColorIndicator";

export default function BookingPage() {
  return (
    <div>
    <Header/>
    <div className="venue-info-wrapper">
      <div className="wrapper">
        <div className="venue-info-container">
          <div className="cinema-photo-showcase-gallery"></div>
          <h1>
            <div className="cinema-name-wrapper">
              <meta itemprop="name" content="AGS Cinemas: Villivakkam" />

              <span className="heart-icon">
                <svg
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use></use>
                </svg>
              </span>

              <span
                itemprop="address"
                itemscope=""
                itemtype="http://schema.org/PostalAddress"
              >
                <meta
                  itemprop="streetAddress"
                  content="No. 1/1, Mettu Street Villivakkam, Chennai"
                />
                <meta itemprop="addressRegion" content="Tamil Nadu" />
                <meta itemprop="addressCountry" content="India" />
                <meta itemprop="postalCode" content="600049" />
              </span>
              <a
                href="/cinemas/chennai/ags-cinemas-villivakkam/ACVM"
                className="venue-heading"
                itemprop="url"
              >
                AGS Cinemas: Villivakkam
              </a>
            </div>
          </h1>
          <address className="address-wrapper">
            <span className="icon-location">
              <svg
                width="16"
                height="22"
                viewBox="0 0 16 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.3501 7.83321C2.3501 4.74969 4.84979 2.25 7.93331 2.25C11.0168 2.25 13.5165 4.74969 13.5165 7.83321C13.5165 8.40704 13.2929 9.28882 12.8724 10.3924C12.4606 11.4733 11.8911 12.6893 11.2673 13.9008C10.0719 16.2226 8.70244 18.4799 7.93331 19.6546C7.16418 18.4799 5.79475 16.2226 4.59932 13.9008C3.97555 12.6893 3.40599 11.4733 2.99419 10.3924C2.57373 9.28882 2.3501 8.40704 2.3501 7.83321ZM7.93331 0.75C4.02136 0.75 0.850098 3.92126 0.850098 7.83321C0.850098 8.69787 1.16205 9.7967 1.59248 10.9265C2.03157 12.079 2.62822 13.3493 3.26571 14.5874C4.54062 17.0636 6.0062 19.464 6.78055 20.6313C7.03684 21.0177 7.46966 21.25 7.93331 21.25C8.39696 21.25 8.82978 21.0177 9.08607 20.6313C9.86042 19.464 11.326 17.0636 12.6009 14.5874C13.2384 13.3493 13.8351 12.079 14.2741 10.9265C14.7046 9.7967 15.0165 8.69787 15.0165 7.83321C15.0165 3.92126 11.8453 0.75 7.93331 0.75ZM7.93333 3.91663C5.77025 3.91663 4.01672 5.67015 4.01672 7.83323C4.01672 9.99632 5.77025 11.7498 7.93333 11.7498C10.0964 11.7498 11.8499 9.99632 11.8499 7.83323C11.8499 5.67015 10.0964 3.91663 7.93333 3.91663ZM5.51672 7.83323C5.51672 6.49858 6.59868 5.41663 7.93333 5.41663C9.26799 5.41663 10.3499 6.49858 10.3499 7.83323C10.3499 9.16789 9.26799 10.2498 7.93333 10.2498C6.59868 10.2498 5.51672 9.16789 5.51672 7.83323Z"
                  fill="black"
                ></path>
              </svg>
            </span>
            <span className="venue-location">
              No. 1/1, Mettu Street Villivakkam, Behind, Villivakkam Bus Depot,
              Chennai, Tamil Nadu 600049, India
            </span>
            <a
              className="map-icon"
              href="https://maps.google.co.in/?q=13.104724,80.208997(AGS Cinemas: Villivakkam)"
              target="_blank"
            >
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8611 2.26753C13.8648 2.26878 13.872 2.2723 13.8797 2.28001C13.8873 2.28763 13.8908 2.29474 13.8921 2.29843L9.03847 13.9339C9.03626 13.9392 9.03414 13.9446 9.03212 13.9499C9.02732 13.9518 9.02018 13.9541 9.01037 13.956C9.00307 13.9485 8.99558 13.9393 8.98887 13.9293C8.98588 13.9248 8.98341 13.9207 8.9814 13.917L7.92379 8.5629C7.88459 8.36445 7.72968 8.20917 7.53132 8.1695L2.27187 7.11761C2.27386 7.11364 2.27653 7.10884 2.2801 7.10323C2.29313 7.08274 2.31456 7.05769 2.34525 7.03273L13.8611 2.26753ZM13.5418 1.31879C13.9463 1.18394 14.3392 1.32526 14.5868 1.57291C14.8344 1.82055 14.9758 2.21336 14.8409 2.61791C14.837 2.62952 14.8328 2.64099 14.828 2.65229L9.96725 14.3049C9.81214 14.7388 9.39251 14.9598 8.9666 14.9598C8.7025 14.9598 8.48847 14.8321 8.34878 14.7064C8.20537 14.5773 8.08803 14.4052 8.02559 14.2179C8.01891 14.1978 8.0135 14.1774 8.00941 14.1566L7.00751 9.08454L2.00187 8.08342C1.98154 8.07935 1.96149 8.07402 1.94182 8.06747C1.52699 7.92919 1.2666 7.53023 1.2666 7.12646C1.2666 6.70638 1.53417 6.36938 1.82258 6.1771C1.84974 6.159 1.8786 6.1436 1.90876 6.13112L13.5087 1.33112C13.5196 1.32662 13.5306 1.32251 13.5418 1.31879Z"
                  fill="#5E8AFF"
                ></path>{" "}
              </svg>{" "}
            </a>{" "}
            <section
              className="details-wrapper"
              onclick="toggleCinemaPhotoShowcaseDetailsSection()"
            >
              {" "}
              <div className="details-text">Details</div>{" "}
              <div className="chevron-icon">
                {" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <use ></use>{" "}
                </svg>{" "}
              </div>{" "}
            </section>
          </address>
          <section className="cinema-photo-showcase-panel">
            <div className="cinema-photo-showcase-wrapper">
              {" "}
              <div className="venue-facilities-wrapper">
                {" "}
                <div className="venue-facility-title venue-flow">
                  Available Facilities
                </div>{" "}
                <div className="venue-facilities">
                  {" "}
                  <div className="venue-facility-item">
                    {" "}
                    <div className="facility-icon-wrapper">
                      {" "}
                      <img
                        src="https://in.bmscdn.com/moviemode/cinemafacilities/fnb.png"
                        className="lazy"
                        onerror="this.src='//in.bmscdn.com/m6/images/common/placeholder.png'; this.onerror='';"
                      />{" "}
                    </div>{" "}
                    <div className="facility-text"> F&amp;B </div>{" "}
                  </div>{" "}
                  <div className="venue-facility-item">
                    {" "}
                    <div className="facility-icon-wrapper">
                      {" "}
                      <img
                        src="https://in.bmscdn.com/moviemode/cinemafacilities/mticket.png"
                        className="lazy"
                        onerror="this.src='//in.bmscdn.com/m6/images/common/placeholder.png'; this.onerror='';"
                      />{" "}
                    </div>{" "}
                    <div className="facility-text"> MTicket </div>{" "}
                  </div>{" "}
                  <div className="venue-facility-item">
                    {" "}
                    <div className="facility-icon-wrapper">
                      {" "}
                      <img
                        src="https://in.bmscdn.com/moviemode/cinemafacilities/parking.png"
                        className="lazy"
                        onerror="this.src='//in.bmscdn.com/m6/images/common/placeholder.png'; this.onerror='';"
                      />{" "}
                    </div>{" "}
                    <div className="facility-text"> Parking Facility </div>{" "}
                  </div>{" "}
                  <div className="venue-facility-item">
                    {" "}
                    <div className="facility-icon-wrapper">
                      {" "}
                      <img
                        src="https://in.bmscdn.com/moviemode/cinemafacilities/food_court.png"
                        className="lazy"
                        onerror="this.src='//in.bmscdn.com/m6/images/common/placeholder.png'; this.onerror='';"
                      />{" "}
                    </div>{" "}
                    <div className="facility-text"> Food Court </div>{" "}
                  </div>
                </div>{" "}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </div>
  );
}

