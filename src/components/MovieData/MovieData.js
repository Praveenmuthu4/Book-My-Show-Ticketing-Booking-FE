import React, { useEffect, useState } from "react"
import './MovieData.css';
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../global";

export default function MovieData(){

  const { _id } = useParams();


  const navigate = useNavigate()

  const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`${API}/allMovies`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((movie) => setMovie(movie));
    }, [_id]);

    const { image,title,certificate,language,duration,releaseDate } = movie;


    return(
      <div>
          <div class="sc-133848s-3 sc-133848s-5 gqBECX">
            <div class="sc-133848s-3 sc-133848s-10 iIGMqX">
              <div class="sc-133848s-3 cWbeuJ">
                <div class="sc-133848s-2 sc-291x3n-0 lmknRz">
                  <div class="sc-133848s-2 sc-291x3n-1 eQCApE"></div>
                </div>
              </div>
              <div class="sc-1ljcxl3-0 iUuHNJ">
                <a
                  href="/ticketingBanner"
                  class="sc-133848s-11 sc-1ljcxl3-1 eQiiBj"
                >
                  <div class="sc-dv5ht7-0 eQcIov">
                    <div class="sc-133848s-2 sc-5afure-0 bgaHZL"></div>
                    <div
                      width="100%"
                      height="100%"
                      data-content="Viduthalai Part - 1"
                      class="sc-133848s-2 sc-1t5vwh0-0 iJTXUd"
                    >
                      <div class="sc-133848s-2 sc-1t5vwh0-1 TsmVt">
                        <div height="100%" width="100%" class="sc-eykeme-0 XxsAZ">
                          <img
                            alt="Viduthalai Part - 1"
                            width="100%"
                            height="100%"
                            class="sc-eykeme-1 jbzDld"
                            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAyNy45SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310832-gxdbpzefne-portrait.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sc-133848s-3 cWbeuJ">
                      <div class="sc-133848s-2 sc-133848s-12 WfspT">
                        <div class="sc-7o7nez-0 cBsijw">Viduthalai Part - 1</div>
                      </div>
                      <div class="sc-133848s-2 sc-133848s-12 WfspT">
                        <div class="sc-7o7nez-0 bMPkUy">A</div>
                      </div>
                      <div class="sc-133848s-2 sc-133848s-12 WfspT">
                        <div class="sc-7o7nez-0 bMPkUy">Tamil</div>
                      </div>
                      <h3 class="sc-133848s-15 llTbgB">Viduthalai Part - 1</h3>
                    </div>
                  </div>
                </a>
                
                <a
                  href=""
                  class="sc-133848s-11 sc-1ljcxl3-1 eQiiBj"
                >
                  <div class="sc-dv5ht7-0 eQcIov">
                    <div class="sc-133848s-2 sc-5afure-0 bgaHZL"></div>
                    <div
                      width="100%"
                      height="100%"
                      data-content="Viduthalai Part - 1"
                      class="sc-133848s-2 sc-1t5vwh0-0 iJTXUd"
                    >
                      <div class="sc-133848s-2 sc-1t5vwh0-1 TsmVt">
                        <div height="100%" width="100%" class="sc-eykeme-0 XxsAZ">
                          <img
                            alt={movie.title}
                            width="100%"
                            height="100%"
                            class="sc-eykeme-1 jbzDld"
                            src={movie.image}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sc-133848s-3 cWbeuJ">
                      <div class="sc-133848s-2 sc-133848s-12 WfspT">
                        <div class="sc-7o7nez-0 cBsijw">{movie.title}</div>
                      </div>
                      <div class="sc-133848s-2 sc-133848s-12 WfspT">
                        <div class="sc-7o7nez-0 bMPkUy">{movie.certificate}</div>
                      </div>
                      <div class="sc-133848s-2 sc-133848s-12 WfspT">
                        <div class="sc-7o7nez-0 bMPkUy">{movie.language}</div>
                      </div>
                      <h3 class="sc-133848s-15 llTbgB">{movie.title}</h3>
                    </div>
                  </div>
                </a>





              </div>
            </div>
          </div>
        </div>
    )
  }