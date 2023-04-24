import React from "react";
import "./TicketBooking.css";
import TopContent from "../TopContent/TopContent";
import ColorIndicator from "../ColorIndicator/ColorIndicator";
import Venue from "../Venues/Venue";

export default function TicketBooking() {
  return (
    <div>
      <TopContent />
      <section className="showtimes">
        <div
          class="native-promo-spot-showtimes wrapper"
          id="prod_st_banner_desktop"
          data-adunit-id="prod_st_banner_desktop"
        ></div>
        <div class="applied-filters wrapper">
          <div class="added-filters"></div>
        </div>
        <ColorIndicator />
        <Venue />
      </section>
    </div>
  );
}
