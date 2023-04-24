import React from "react";
import './StartPage.css';
import { useNavigate } from "react-router-dom";

export default function StartPage() {

    const navigate = useNavigate();

  return (
    <div class="sc-jtRfpW iiUjqw in-animation">
    <div className="sc-kTUwUJ iqZbdl in-animation" opacity="1">
      <div direction="column" className="sc-jTzLTM sc-epGmkI iFoYwG">
        <div className="sc-bvTASY hZBmDF">
          <div className="sc-cCVOAp hSVOyZ">
            <div className="sc-jTzLTM sc-cfWELz ggLWHF">
              <div className="sc-jTzLTM sc-kAdXeD ivzghM">
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <title>Search</title>
                  <path
                    d="M11.8 10.864L8.859 7.918a4.912 4.912 0 0 0-.444-6.47A4.888 4.888 0 0 0 4.928 0a4.888 4.888 0 0 0-3.485 1.449 4.942 4.942 0 0 0 0 6.979 4.888 4.888 0 0 0 3.485 1.449c1.052 0 2.105-.33 2.976-1.005l2.96 2.93a.658.658 0 0 0 .476.198.686.686 0 0 0 .477-.198.672.672 0 0 0-.016-.938zm-6.855-2.32c-.97 0-1.858-.38-2.549-1.054C1 6.09 1 3.802 2.396 2.387a3.578 3.578 0 0 1 2.549-1.054c.97 0 1.858.379 2.548 1.054s1.052 1.58 1.052 2.551c0 .971-.378 1.86-1.052 2.552a3.539 3.539 0 0 1-2.548 1.053z"
                    fill="#777"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                autocomplete="off"
                placeholder="Search for your city"
                className="sc-hCaUpS cLnzvB"
                value=""
              />
            </div>
          </div>
        </div>
        <div className="sc-hycgNl hYTorf">
          <span className="sc-chAAoq jjOJFJ">Popular Cities</span>
          <ul className="sc-bNQFlB URchM">
            <li className="sc-hizQCF dSgOQo">
              <div className="sc-eNPDpu fVBwIY">
                <div className="sc-cgHJcJ hPcraY">
                  <img
                    src="//in.bmscdn.com/m6/images/common-modules/regions/mumbai.png"
                    alt="MUMBAI"
                    className="sc-fQkuQJ ciyWra"
                  />
                </div>
                <span className="sc-dRCTWM JQbba">Mumbai</span>
              </div>
            </li>
            <li className="sc-hizQCF dSgOQo">
              <div className="sc-eNPDpu fVBwIY">
                <div className="sc-cgHJcJ hPcraY">
                  <img
                    src="//in.bmscdn.com/m6/images/common-modules/regions/ncr.png"
                    alt="NCR"
                    className="sc-fQkuQJ ciyWra"
                    onClick={()=>navigate('/explore/home/chennai')}

                  />
                </div>
                <span className="sc-dRCTWM JQbba">Delhi-NCR</span>
              </div>
            </li>
            <li className="sc-hizQCF dSgOQo">
              <div className="sc-eNPDpu fVBwIY">
                <div className="sc-cgHJcJ hPcraY">
                  <img
                    src="//in.bmscdn.com/m6/images/common-modules/regions/bang.png"
                    alt="BANG"
                    className="sc-fQkuQJ ciyWra"
                    onClick={()=>navigate('/explore/home/chennai')}

                  />
                </div>
                <span className="sc-dRCTWM JQbba">Bengaluru</span>
              </div>
            </li>
            <li className="sc-hizQCF dSgOQo">
              <div className="sc-eNPDpu fVBwIY">
                <div className="sc-cgHJcJ hPcraY">
                  <img
                    src="//in.bmscdn.com/m6/images/common-modules/regions/hyd.png"
                    alt="HYD"
                    className="sc-fQkuQJ ciyWra"
                    onClick={()=>navigate('/explore/home/chennai')}

                  />
                </div>
                <span className="sc-dRCTWM JQbba">Hyderabad</span>
              </div>
            </li>
            <li className="sc-hizQCF dSgOQo">
              <div className="sc-eNPDpu fVBwIY">
                <div className="sc-cgHJcJ hPcraY">
                  <img
                    src="//in.bmscdn.com/m6/images/common-modules/regions/ahd.png"
                    alt="AHD"
                    className="sc-fQkuQJ ciyWra"
                    onClick={()=>navigate('/explore/home/chennai')}

                  />
                </div>
                <span className="sc-dRCTWM JQbba">Ahmedabad</span>
              </div>
            </li>
            <li className="sc-hizQCF dSgOQo">
              <div className="sc-eNPDpu fVBwIY">
                <div className="sc-cgHJcJ hPcraY">
                  <img
                    src="//in.bmscdn.com/m6/images/common-modules/regions/chd.png"
                    alt="CHD"
                    className="sc-fQkuQJ ciyWra"
                    onClick={()=>navigate('/explore/home/chennai')}

                  />
                </div>
                <span className="sc-dRCTWM JQbba">Chandigarh</span>
              </div>
            </li>
            <li className="sc-hizQCF dSgOQo">
              <div className="sc-eNPDpu fVBwIY">
                <div className="sc-cgHJcJ hPcraY">
                  <img
                    src="//in.bmscdn.com/m6/images/common-modules/regions/chen.png"
                    alt="CHEN"
                    className="sc-fQkuQJ ciyWra"
                    onClick={()=>navigate('/explore/home/chennai')}
                  />
                </div>
                <span className="sc-dRCTWM JQbba">Chennai</span>
              </div>
            </li>
            <li className="sc-hizQCF dSgOQo">
              <div className="sc-eNPDpu fVBwIY">
                <div className="sc-cgHJcJ hPcraY">
                  <img
                    src="//in.bmscdn.com/m6/images/common-modules/regions/pune.png"
                    alt="PUNE"
                    className="sc-fQkuQJ ciyWra"
                    onClick={()=>navigate('/explore/home/chennai')}
                    
                  />
                </div>
                <span className="sc-dRCTWM JQbba">Pune</span>
              </div>
            </li>
            <li className="sc-hizQCF dSgOQo">
              <div className="sc-eNPDpu fVBwIY">
                <div className="sc-cgHJcJ hPcraY">
                  <img
                    src="//in.bmscdn.com/m6/images/common-modules/regions/kolk.png"
                    alt="KOLK"
                    className="sc-fQkuQJ ciyWra"
                    onClick={()=>navigate('/explore/home/chennai')}

                  />
                </div>
                <span className="sc-dRCTWM JQbba">Kolkata</span>
              </div>
            </li>
            <li className="sc-hizQCF dSgOQo">
              <div className="sc-eNPDpu fVBwIY">
                <div className="sc-cgHJcJ hPcraY">
                  <img
                    src="//in.bmscdn.com/m6/images/common-modules/regions/koch.png"
                    alt="KOCH"
                    className="sc-fQkuQJ ciyWra"
                    onClick={()=>navigate('/explore/home/chennai')}

                  />
                </div>
                <span className="sc-dRCTWM JQbba">Kochi</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="sc-hycgNl hYTorf">
          <span cursor="pointer" color="#DC3558" className="sc-chAAoq NVnzM">
            View All Cities
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}
