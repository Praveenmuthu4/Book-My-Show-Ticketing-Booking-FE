import React from "react";
import "./ColorIndicator.css";

export default function ColorIndicator() {
  return (
    <div className="attributes-container">
      <div className="offer-details-container legends-section"></div>
      <div className="legends-container">
        <div className="showtimes-legend">
          <div className="legend-icon"></div>
          <div className="legend-text">Available</div>
        </div>
        <div className="showtimes-legend">
          <div className="legend-icon fast"></div>
          <div className="legend-text">Fast Filling</div>
        </div>
        <div className="showtimes-legend">
          <div className="__subtitle">LAN</div>
          <div className="legend-text">Subtitles Language</div>
        </div>
      </div>
    </div>
  );
}
