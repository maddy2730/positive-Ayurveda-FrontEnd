import React from "react";
import "./Landingpage.css";
import cardfirst from "../Container/Images/card1.png";
import cardsecond from "../Container/Images/card2.png";
import cardthird from "../Container/Images/card3.png";
import Footer from "../Container/footer/Footer";
import { Link } from "react-router-dom";
import card1 from "../Container/Images/Rectangle01.png";
import card2 from "../Container/Images/Rectangle02.png";
import card3 from "../Container/Images/Rectangle03.png";
import img1 from "../Container/Images/Line 1.png";
import img2 from "../Container/Images/Line 2.png";
import img8 from "../Container/Images/Line 8.png";
import img4 from "../Container/Images/Line 4.png";
import img5 from "../Container/Images/Line 5.png";
import Logo from "../Container/Images/NavbarLogo.png";
import img6 from "../Container/Images/Image.png";
import john from "../Container/Images/Line 1.png";
import img from   "../Container/Images/Rectangle 9 (1).png"
import img10 from   "../Container/Images/Rectangle 9.png"
import img11 from   "../Container/Images/Rectangle 9 (2).png"




import "./Services.css";
import { useState } from "react";

export default function Landingpage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: img10,
      title: "Jane Cooper",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      img: img,
      title: "Jane Cooper",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      img: img11,
      title: "Jane Cooper",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      img: img,
      title: "Jane Cooper",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    

    // Add more slides as needed
  ];

  const nextSlide = (direction) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + direction + slides.length) % slides.length
    );
  };

  const prevSlide = (direction) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + direction + slides.length) % slides.length
    );
  };
  return (
    <div>
        <div className="main_landing">
      <div class="container-fluid text-white back-ground">
        <div class="container home-section">
          <div class="row">
            <div class="col-lg-12">
              <div class="maindiv">
                <div class="childdiv">
                  <div>
                    <h2 class="h2edit mb-0">Positive Ayurveda</h2>
                    <h2 class="h2edit"> Healthcare</h2>
                  </div>
                  <div class="p2">
                    <p class="pedit ">
                      Uncover the profound and ancient wisdom of Ayurvedic{" "}
                    </p>{" "}
                    <p class="pedit ">
                      medicines, tapping into their unparalleled power to heal
                      and{" "}
                    </p>
                    <p class="pedit ">
                      rejuvenate. Embrace the transformative potential of
                      organic{" "}
                    </p>
                    <p class="pedit ">
                      {" "}
                      health solutions, allowing nature's remedies to guide you{" "}
                    </p>
                    <p class="pedit ">towards optimal well-being.</p>
                  </div>
                  <div>
                    <Link
                      class="btn text-white"
                      id="green1"
                      type="submit"
                      to="/shop"
                    >
                      GET INVOLVED
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row rever">
            <div className="col-lg-6 ">
              <img
                src={img6}
                className="transfer pt-3"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-6  ">
              <div className="mt-5 ms -5 ">
                <p className="text-secondary  ">About</p>
                <h2 class="hedit"> Transform your health</h2>
                <h2 class="hedit"> with Positive Ayurveda</h2>
                <p className="pedits  pt-5 ">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non{" "}
                </p>{" "}
                <p className="pedits">
                  {" "}
                  sed est cursus. Vel hac convallis ipsum, facilisi odio
                  pellentesque{" "}
                </p>{" "}
                <p className="pedits">bibendum viverra tempus.”</p>
                <div
                  className="d-flex  "
                  style={{ width: "30%"}}
                >
                  <p style={{ fontSize: "12px",  whiteSpace : "nowrap" }}>Albert Flores</p>
                  <p style={{ fontSize: "12px" ,  whiteSpace : "nowrap" }}>Co-Founder</p>
                </div>
                <div className="mt-5">
                  <hr />
                </div>
                <button type="button" className="btn btn-secondary mt-5 rounded-pill">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid main-fluiddiv light_color">
        <div className="container pb-5">
          <div className="text-center p-5">
            <h2 className="text-white">
              <b>Latest New</b>
            </h2>
            <h4 className=" text-white">Blog</h4>
          </div>
          <div className="row rw">
            <div className="col-lg-4 col-lg  col-md-6 col-sm-12 p-5">
              <img src={card1} />
              <div className="p-4 Ayurveda_med">
                <p className="head mt-0">Ayurveda Medicine</p>
                <p className="head1">
                  <b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </b>{" "}
                </p>
                <p className="date mt-2">20 June, 2024</p>
                <hr />
                <p>
                  <i class="fa-regular fa-heart me-2"></i>900
                  <i class="fa-solid fa-eye ms-2 me-2"></i> 830
                  <i class="fa-solid fa-share-nodes me-2 ms-2"></i>share
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-lg col-md-6 col-sm-12 card-2 p-5 ">
              <img src={card2} />
              <div className="Ayurveda_med p-4">
                <p className="head mt-0">Ayurveda Medicine</p>
                <p className="head1">
                  {" "}
                  <b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </b>
                </p>
                <p className="date mt-2">20 June, 2024</p>
                <hr />
                <p>
                  <i class="fa-regular fa-heart me-2"></i>900
                  <i class="fa-solid fa-eye ms-2 me-2"></i> 830
                  <i class="fa-solid fa-share-nodes me-2 ms-2"></i>share
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-lg col-md-6 col-sm-12 card-3 p-5">
              <img src={card3} />
              <div className="Ayurveda_med p-4">
                <p className="head mt-0">Ayurveda Medicine</p>
                <p className="head1">
                  {" "}
                  <b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </b>{" "}
                </p>
                <p className="date mt-2">20 June, 2024</p>
                <hr />
                <p>
                  <i class="fa-regular fa-heart me-2"></i>900
                  <i class="fa-solid fa-eye ms-2 me-2"></i> 830
                  <i class="fa-solid fa-share-nodes me-2 ms-2"></i>share
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="container-fluid" style={{ backgroundColor: "#306d51" }}>
        <div class=" text-center p-5">
          <div class="row text-center d-flex justify-content-center align-middle">
            <div class="col-lg-4 col-md-6 fivvesix p-5">
              <div class="card bg-white  herbal ">
                <img src={cardfirst} class="card-img-top three1" alt="..." />
                <div class="card-body bg-white  herbal ">
                  <p class="card-title mt-1 fs-3">
                    <b>Herbal Medicine</b>
                  </p>
                  <p style={{ color: "#070707B2" }}>Pure Ayurveda</p>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur and to adipiscing
                    elit,
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 fivvesix p-5">
              <div class="card bg-white  herbal ">
                <img src={cardsecond} class="card-img-top three1" alt="..." />
                <div class="card-body bg-white  herbal ">
                  <p class="card-title mt-1 fs-3">
                    <b>Fresh Product</b>
                  </p>
                  <p style={{ color: " #070707B2" }}>Pure Ayurveda</p>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur and to adipiscing
                    elit,
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6  fivvesix  p-5">
              <div class="card bg-white  herbal ">
                <img src={cardthird} class="card-img-top three1" alt="..." />
                <div class="card-body bg-white  herbal ">
                  <p class="card-title mt-1 fs-3">
                    <b>Herbal Medicine</b>
                  </p>

                  <p style={{ color: " #070707B2" }}>Pure Ayurveda</p>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur and to adipiscing
                    elit,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container-fluid ili text-light py-5">
        <div className="container mt-5 pb-5">
          <div className="text-center pt-5">
            <h2 className="h1col">
              <b>Why Positive Ayurveda</b>
            </h2>
            <h5 className="hcol">Wellness For You</h5>
          </div>
          <div className="row mt-3 mb-3 justify-content-center">
            <div className="col-lg-4 mt-5 text-end">
              <div>
                <div className="twoline lines1 mt-3">
                  <b className="colr">100 % Organic </b>
                  <img
                    src={img5}
                    className="line colr"
                    alt=""
                    style={{ width: "50%", color: "#C9F9E2" }}
                  />
                </div>
                <div className="twoline lines1 mt-3">
                  <b className="colr">Best Quality </b>
                  <img
                    src={img4}
                    className="line colr"
                    alt=""
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="mt-3 mb-3 sametowu">
                  <b className="colr">hygienic product </b>
                  <img
                    src={img1}
                    className="line colr"
                    alt=""
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="twoline1 lines1 mt-3">
                  <b className="colr">Quality tested </b>
                  <img
                    src={img2}
                    className="line colr"
                    alt=""
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="twoline1 lines1 mt-3">
                  <b className="colr">Health Care </b>
                  <img
                    src={img8}
                    className="line colr"
                    alt=""
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5 d-flex justify-content-center align-items-center logocenterauto rounded-circle border border-dotted yu">
              <img
                className="screenshot"
                src={Logo}
                alt="Screenshot"
                style={{ height: "192px" }}
              />
            </div>
            <div className="col-lg-4 mt-5 text-start">
              <div>
                <div className="twoline11 lines1 mt-3">
                  <img
                    src={img8}
                    className="line colr"
                    alt=""
                    style={{ width: "50%" }}
                  />
                  <b className="colr"> 100 % Organic </b>
                </div>
                <div className="twoline11 lines1 mt-3">
                  <img
                    src={img2}
                    className="line colr"
                    alt=""
                    style={{ width: "50%" }}
                  />
                  <b className="colr">Best Quality </b>
                </div>
                <div className="mt-3 mb-3 sametowu">
                  <img
                    src={img1}
                    className="line colr"
                    alt=""
                    style={{ width: "50%" }}
                  />
                  <b className="colr">hygienic product </b>
                </div>
                <div className="twoline12 lines1 mt-3">
                  <img
                    src={img4}
                    className="line colr"
                    alt=""
                    style={{ width: "50%" }}
                  />
                  <b className="colr">Quality tested </b>
                </div>
                <div className="twoline12 lines1 mt-3">
                  <img
                    src={img5}
                    className="line colr"
                    alt=""
                    style={{ width: "50%" }}
                  />
                  <b className="colr">Health Care </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid light_color">
        <div className="container p-3 text-center pb-2">
          <p className="fs-2" style={{ color: "#1E520C" }}>
            <b>Customer Review</b>
          </p> 
          <div id="slider">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide text-white p-5 ${
                  index === currentSlide ? "active" : "inactive"
                }`}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <div className="card" style={{ border: "none" }}>
                  <div className="row g-0 bg-colors">
                    <div className="col-md-4 p-4">
                      <img
                        src={slide.img}
                        className="img-fluid rounded-start onetwo "
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 p-5 text-start towone">
                      <div className="card-body mt-3 " style={{}}>
                        <h2 className="card-title">{slide.title}</h2>
                        <i className="fa-solid fa-quote-left fs-1 mt-3"></i>
                        <h5 className="card-text p-2 fonts">{slide.text}</h5>
                        <i className="fa-solid fa-quote-right d-flex fs-1 justify-content-end"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <span
              className="controls"
              onClick={() => prevSlide(-1)}
              id="left-arrow"
            >
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </span>
            <span
              className="controls"
              id="right-arrow"
              onClick={() => nextSlide(1)}
            >
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </div>
          <div id="dots-con">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
 
    </div>

      
  );
}
