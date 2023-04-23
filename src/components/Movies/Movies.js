import React from "react";
import Header from "../Header/Header";
import './Movie.css';
import Filter from "../Filter/Filter";
import BookTicket from "../BookTicket/BookTicket";

export default function Movies() {
  return (
    <div>
      <Header />
      <div className="ihwnXd ">
      <Filter/>
      <BookTicket/>
      </div>
    </div>
  );
}
