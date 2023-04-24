import React from 'react'
import './TopContent.css';
import TopBottomContent from './TopBottomContent';

export default function TopContent() {
  return (
    <section className="movie-details">
    <div className="fix-height-div">
      <div className="top-section-container">
        <div className="movie-details-container">
          <div className="text-details">
            <meta itemprop="name" content="Viduthalai Part - 1 - Tamil" />
            <h1>
              <div className="cinema-name-wrapper">
                <meta
                  content="https://in.bookmyshow.com/buytickets/-chennai/movie-chen-ET00310832"
                  itemprop="url"
                />
                <a
                  href="/chennai/movies/viduthalai-part-1/ET00310832"
                  className=""
                >
                  Viduthalai Part - 1 - Tamil{" "}
                </a>
              </div>
            </h1>
            <div className="__more-movie-data">
              <span className="__censor">
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
              <span className="heart-rating" >
                <span className="heart-icon">
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
                <span className="__percent"></span>
                <br />
                <span className="__votes"></span>
              </span>
              <span className="__tags">
                <span className="__genre-tag">Action </span>
                <span className="__genre-tag">Crime </span>
                <span className="__genre-tag">Drama </span>
                <span ></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TopBottomContent/>
  </section>
  )
}
