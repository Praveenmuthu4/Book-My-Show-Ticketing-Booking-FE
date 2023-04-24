import React from 'react'
import './TopContent.css';

export default function TopBottomContent() {
  return (
    <div className="filters-wrapper">
      <div className="filters-container">
        <div className="sticky-filtertitle"></div>
        <div className="showtime-filters struktur ">
          <div className="dates-wrapper ">
            <ul
              id="showDates"
              className="dates-container slick-initialized slick-slider"
            >
              <button
                className="buttons prev slick-arrow slick-disabled"
                aria-label="Previous"
                role="button"
                href="#"
                aria-disabled="true"
                
              >
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                >
                  <use></use>
                </svg>
              </button>
              <div aria-live="polite" className="slick-list draggable">
                <div
                  className="slick-track"
                >
                  <li
                    className="date-details _active slick-slide slick-current slick-active"
                    data-slick-index="0"
                    aria-hidden="false"
                  >
                    <a
                      className="date-href"
                      href="/buytickets/viduthalai-part-1-chennai/movie-chen-ET00310832-MT/today"
                      onclick="BMS.Misc.fnBusy(true);"
                    >
                      <div className="date-day">Sun </div>
                      <div className="date-numeric">23 </div>
                      <div className="date-month">Apr </div>
                    </a>
                  </li>
                  <li
                    className="date-details  slick-slide"
                    data-slick-index="1"
                    aria-hidden="true"
                  >
                    <a
                      className="date-href"
                      href="/buytickets/viduthalai-part-1-chennai/movie-chen-ET00310832-MT/tomorrow"
                      onclick="BMS.Misc.fnBusy(true);"
                    >
                      <div className="date-day">Mon </div>
                      <div className="date-numeric">24 </div>
                      <div className="date-month">Apr </div>
                    </a>
                  </li>
                  <li
                    className="date-details  slick-slide"
                    data-slick-index="2"
                    aria-hidden="true"
                  >
                    <a
                      className="date-href"
                      href="/buytickets/viduthalai-part-1-chennai/movie-chen-ET00310832-MT/20230425"
                      onclick="BMS.Misc.fnBusy(true);"
                    >
                      <div className="date-day">Tue </div>
                      <div className="date-numeric">25 </div>
                      <div className="date-month">Apr </div>
                    </a>
                  </li>
                  <li
                    className="date-details  slick-slide"
                    data-slick-index="3"
                    aria-hidden="true"
                  >
                    <a
                      className="date-href"
                      href="/buytickets/viduthalai-part-1-chennai/movie-chen-ET00310832-MT/20230426"
                      onclick="BMS.Misc.fnBusy(true);"
                    >
                      <div className="date-day">Wed </div>
                      <div className="date-numeric">26 </div>
                      <div className="date-month">Apr </div>
                    </a>
                  </li>
                  <li
                    className="date-details  slick-slide"
                    data-slick-index="4"
                    aria-hidden="true"
                  >
                    <a
                      className="date-href"
                      href="/buytickets/viduthalai-part-1-chennai/movie-chen-ET00310832-MT/20230427"
                      onclick="BMS.Misc.fnBusy(true);"
                    >
                      <div className="date-day">Thu </div>
                      <div className="date-numeric">27 </div>
                      <div className="date-month">Apr </div>
                    </a>
                  </li>
                </div>
              </div>

              <button
                className="buttons next slick-arrow"
                aria-label="Next"
                role="button"
                href="#"
                aria-disabled="false"
              >
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                >
                  <use></use>
                </svg>
              </button>
            </ul>
          </div>
          <div className="dropdown-block ">
            <button className="btn _default __reset">RESET</button>
            <button className="btn _tres __done">DONE</button>
            <div className="dropdown highlighted _disabled">
              <div className="__text _languages-text _highlighted">
                Tamil - 2D{" "}
              </div>
              <i className="__icon icon-arrow-down ">
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                >
                  <use></use>
                </svg>
              </i>
              <ul
                className="__menu"
                id="filterLanguage"
                data-type="_highlighted languages"
              >
                <li className="languages" data-value="Tamil-2D">
                  <a href="/buytickets/viduthalai-part-1-chennai/movie-chen-ET00310832-MT/20230423">
                    <label>Tamil - 2D </label>
                    <div className="mini-loader">
                      <div className="mini"></div>
                      <div></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown filter" data-type="prices">
              <div
                className="__text _prices-text"
                data-placeholder="Filter Price Range"
              >
                Filter Price Range
              </div>
              <i className="__icon icon-arrow-down">
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                >
                  <use></use>
                </svg>
              </i>
              <ul className="__menu" id="filterPrice" data-type="prices">
                <li className="prices" data-range="0-100" data-value="1">
                  <input
                    type="checkbox"
                    id="filter-0-100"
                    className="price-filter-input"
                    value="1"
                  />
                  <label for="filter-0-100">
                    <span className="__tick">
                      <svg
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 100 100"
                      >
                        <use></use>
                      </svg>
                    </span>
                    Rs. 0-100{" "}
                  </label>
                  <div className="mini-loader">
                    <div className="mini"></div>
                  </div>
                </li>
                <li className="prices" data-range="101-200" data-value="2">
                  <input
                    type="checkbox"
                    id="filter-101-200"
                    className="price-filter-input"
                    value="2"
                  />
                  <label for="filter-101-200">
                    <span className="__tick">
                      <svg
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 100 100"
                      >
                        <use></use>
                      </svg>
                    </span>
                    Rs. 101-200{" "}
                  </label>
                  <div className="mini-loader">
                    <div className="mini"></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="dropdown filter" data-type="showtimes">
              <div
                className="__text _prices-text"
                data-placeholder="Filter Show Timings"
              >
                Filter Show Timings
              </div>
              <i className="__icon icon-arrow-down">
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                >
                  <use ></use>
                </svg>
              </i>
              <ul className="__menu" id="" data-type="showtimes">
                <li
                  className="showTimes-filter-list-item"
                  data-value="morning"
                  data-range="00:00-11:59"
                >
                  <input
                    type="checkbox"
                    id="filter-morning"
                    className="showtimings-filter-input"
                    value="morning"
                  />
                  <label for="filter-morning">
                    <span className="__tick">
                      <svg
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 100 100"
                      >
                        <use></use>
                      </svg>
                    </span>
                    Morning{" "}
                    <small className="__count">
                      <span>12:00-11:59 AM</span>
                      <svg
                        enable-background="new 0 0 100 100"
                        viewBox="0 0 100 100"
                        y="0px"
                        x="0px"
                        version="1.1"
                      >
                        <use></use>
                      </svg>
                    </small>{" "}
                  </label>
                  <div className="mini-loader">
                    <div className="mini"></div>
                  </div>
                </li>
                <li
                  className="showTimes-filter-list-item"
                  data-value="afternoon"
                  data-range="12:00-15:59"
                />
                <input
                  type="checkbox"
                  id="filter-afternoon"
                  className="showtimings-filter-input"
                  value="afternoon"
                />
                <label for="filter-afternoon">
                  <span className="__tick">
                    <svg
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      enable-background="new 0 0 100 100"
                    >
                      <use></use>
                    </svg>
                  </span>
                  Afternoon{" "}
                  <small className="__count">
                    <span>12:00-3:59 PM</span>
                    <svg
                      enable-background="new 0 0 100 100"
                      viewBox="0 0 100 100"
                      y="0px"
                      x="0px"
                      version="1.1"
                    >
                      <use></use>
                    </svg>
                  </small>{" "}
                </label>
                <div className="mini-loader">
                  <div className="mini"></div>
                </div>

                <li
                  className="showTimes-filter-list-item"
                  data-value="evening"
                  data-range="16:00-18:59"
                >
                  <input
                    type="checkbox"
                    id="filter-evening"
                    className="showtimings-filter-input"
                    value="evening"
                  />
                  <label for="filter-evening">
                    <span className="__tick">
                      <svg
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 100 100"
                      >
                        <use></use>
                      </svg>
                    </span>
                    Evening{" "}
                    <small className="__count">
                      <span>4:00-6:59 PM</span>
                      <svg
                        enable-background="new 0 0 100 100"
                        viewBox="0 0 100 100"
                        y="0px"
                        x="0px"
                        version="1.1"
                      >
                        <use></use>
                      </svg>
                    </small>{" "}
                  </label>
                  <div className="mini-loader">
                    <div className="mini"></div>
                  </div>
                </li>
                <li
                  className="showTimes-filter-list-item"
                  data-value="night"
                  data-range="19:00-23:59"
                >
                  <input
                    type="checkbox"
                    id="filter-night"
                    className="showtimings-filter-input"
                    value="night"
                  />
                  <label for="filter-night">
                    <span className="__tick">
                      <svg
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 100 100"
                      >
                        <use></use>
                      </svg>
                    </span>
                    Night{" "}
                    <small className="__count">
                      <span>7:00-11:59 PM</span>
                      <svg
                        enable-background="new 0 0 100 100"
                        viewBox="0 0 100 100"
                        y="0px"
                        x="0px"
                        version="1.1"
                      >
                        <use></use>
                      </svg>
                    </small>{" "}
                  </label>
                  <div className="mini-loader">
                    <div className="mini"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="showtimes-search">
            <div className="__search">
              <span className="icon-search">
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                >
                  <use></use>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
