import React, { useEffect } from "react";
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
import img from "../Container/Images/Rectangle 9 (1).png";
import img10 from "../Container/Images/Rectangle 9.png";
import img11 from "../Container/Images/Rectangle 9 (2).png";
import baseURL from "./baseUrl";
import "./Services.css";
import { useState } from "react";
import axios from "axios";
const handleCopyLink = () => {
  const link = window.location.href;
  navigator.clipboard.writeText(link);
  alert("Link copied to clipboard!");
};
const handleShare = (platform) => {
  const url = window.location.href;
  let shareUrl = "";

  switch (platform) {
    case "whatsapp":
      shareUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
      break;
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case "instagram":
      alert("Instagram does not support direct web sharing. Please share manually.");
      return;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      break;
    default:
      return;
  }
  window.open(shareUrl, "_blank");
};
export default function Landingpage() {
  const [likeCounts, setLikeCounts] = useState([]); // Change here
   const [data, setData] = useState([]);
   const [newblogdata, setnewblogData] = useState([]);
   const [showSharePopup, setShowSharePopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(()=>{
    axios.get(`${baseURL}/homes`, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
     }).then(response => {
      setData(response.data.data);
      console.log(response.data.data.id);
     }).catch(error =>{
      error = 'response not be lie '
      console.log( 'fetch error ', error)
     })
      axios.get(`${baseURL}/blogs/latest_blog`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }}).then(response => {
        setnewblogData(response.data.data);
        setLikeCounts(Array(response.data.data.length).fill(0));
        console.log(response.data.data)

      }).catch(error =>{
        error = 'error in new blog';
        console.log(error)
      })
  },[])
  const handleLike = (index) => {
    const updatedLikes = [...likeCounts];
    updatedLikes[index] = updatedLikes[index] === 0 ? 1 : 0; // Toggle between 0 and 1
    setLikeCounts(updatedLikes);
};

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
  const toggleSharePopup = () => {
    setShowSharePopup(!showSharePopup);
  };
  return (
    <div className="mainallaresame">
      <div className="main_landing">
        
       { 
        data.map((hero,key)=>(
          <section key={key}>

          <div className="container-fluid text-white back-ground" style={{
    background: `linear-gradient(rgba(9, 16, 5, 0.5), rgba(13, 16, 13, 1.3)), url("${hero.attributes.image.url}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}}>
            <div class="container home-section">
              <div class="row">
                <div class="col-lg-12">
                  <div class="maindiv">
                    <div class="childdiv">
                      <div>
                        {/* <h2 class="h2edit mb-0">{hero.attributes.title}</h2> */}
                        <h2 class="h2edit mb-0">Positive Ayurveda</h2>
                         <h2 class="h2edit"> Healthcare</h2>
                        {/* <h2 class="h2edit"> Healthcare</h2> */}
                      </div>
                      <div class="p2">
                        <p class="pedit ">
                          Uncovers the profound and ancient as wisdom of Ayurvedic{" "}
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
                          health solutions, allowing as nature's remedies to guide
                          you{" "}
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
            </section>
        ))
     }
      
        <section className="tranform-your-health-section">
        <div className="container-fluid">
          <div className="container">
            <div className="row rever">
              <div className="col-lg-6 ps-3  pe-3">
                <img
                  src={img6}
                  className="transfer pt-3"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-lg-6  d-flex">
                <div className="about-section"> 
                <div className=" ms -5 ">
                  <p className="text-secondary  ">About</p>
                  <h2 class="hedit"> Transform your health</h2>
                  <h2 class="hedit"> with Positive Ayurveda</h2>
                  <p className="pedits peditss">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non{" "}
                  </p>{" "}
                  <p className="pedits">
                    {" "}
                    sed est cursus. Vel hac convallis ipsum, facilisi odio
                    pellentesque{" "}
                  </p>{" "}
                  <p className="pedits">bibendum viverra tempus.”</p>
                  <div className="d-flex  " style={{}}>
                    <p style={{ fontSize: "12px", whiteSpace: "nowrap" }}>
                      Albert Flores
                    </p>
                    <p
                      style={{ fontSize: "12px", whiteSpace: "nowrap" }}
                      className="ms-4"
                    >
                      Co-Founder
                    </p>
                  </div>
                  <div className="Transform_health">
                    <hr />
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary btns_learn-more rounded-pill"
                  >
                    Learn More
                    <i class="fa-solid fa-arrow-right fa-xl rotate-icon"></i>
                    

                  </button>
                </div>
                   </div>
                
              </div>
            </div>
          </div>
        </div>
        </section>
     
    
        <section>
        <div className="container-fluid main-fluiddiv light_color ">
          <div className="container pb-5">
            <div className="text-center p-5">
              <h2 className="text-white">
                <b>Latest New</b>
              </h2>
              <h4 className=" text-white">Blog</h4>
            </div>
            <div className="row rw">
            {
      newblogdata.map((newblogs , key)=>(
              <div className="col-lg-4 col-lg  col-md-6 col-sm-12 p-4" key={key}>
                <div style={{boxShadow: "8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25)"}}>
                  <img src={newblogs.attributes.image.url} />
                  <div className="p-4 Ayurveda_med">
                    <p className="head mt-0">{newblogs.attributes.title}</p>
                    <p className="head1">
                      <b>
                       {newblogs.attributes.body}
                      </b>
                    </p>
                    <p className="date mt-2">{newblogs.attributes.created_at}</p>
                    <hr />
                    <p className="d-flex">
                    <i className={`fa-regular fa-heart me-2 d-flex gap-1 align-items-center ${likeCounts[key] ? 'liked' : ''}`} onClick={() => handleLike(key)}>
        <p className="m-0">{likeCounts[key]}</p>
    </i>                      <i class="fa-solid fa-eye ms-2 me-2 d-flex gap-1 align-items-center"><p className="m-0">{newblogs.attributes.view}</p></i>
                      <div className="">
                          <button className="share-btn" onClick={toggleSharePopup}>
                            <i className="fa-solid fa-share-nodes me-2 ms-2 d-flex gap-1 align-items-center"></i>                        
                          </button>
                          {showSharePopup && (
                        <div className="share-popup">
                        <div className="share-popup-content">
                          <p>Share this page on:</p>
                          <div className="social-icons">
                            <button onClick={handleCopyLink} className="btn btn-outline-light mx-2">
                              <i className="fa-solid fa-link"></i>
                            </button>
                            <button onClick={() => handleShare("whatsapp")} className="btn btn-outline-light mx-2">
                              <i className="fa-brands fa-whatsapp"></i>
                            </button>
                            <button onClick={() => handleShare("facebook")} className="btn btn-outline-light mx-2">
                              <i className="fa-brands fa-facebook"></i>
                            </button>
                            <button onClick={() => handleShare("instagram")} className="btn btn-outline-light mx-2">
                              <i className="fa-brands fa-instagram"></i>
                            </button>
                            <button onClick={() => handleShare("linkedin")} className="btn btn-outline-light mx-2">
                              <i className="fa-brands fa-linkedin"></i>
                            </button>
                          </div>
                          <button className="btn btn-danger mt-3" onClick={toggleSharePopup}>Close</button>
                        </div>
                      </div>
                          )}
                        </div>
                    </p>
                  </div>
                </div>
              </div>
               ))
              }
              
            </div>
          </div>
        </div>
        </section>
      <section>
      <div className="container-fluid light_color">
          <div className="container  text-center pb-2">
            <p className="fs-2" style={{ color: "#1E520C" }}>
              <b>Customer Review</b>
            </p>
            <div className="d-flex add_for_slider">
            <div className="icon_arrow">
            <span
                className="controls"
                onClick={() => prevSlide(-1)}
                id="left-arrow"
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </span>
            </div>
           
            <div id="slider">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide text-white  ${
                    index === currentSlide ? "active" : "inactive"
                  }`}
                  style={{ display: index === currentSlide ? "block" : "none" }}
                >
                  <div className=" " style={{ border: "none" }}>
                    <div className="row g-0 bg-colors">
                      <div className="col-lg-4 col-md-12 col-sm-12  ">
                        <img
                          src={slide.img}
                          className="img-fluid rounded-start onetwo"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-12 col-lg-8 col-sm-12 p-5 text-start towone">
                        <div className="card-body  " style={{}}>
                          <h2 className="card-title">{slide.title}</h2>
                          <i className="fa-solid fa-quote-left fs-1 mt-3"></i>
                          <h5 className="card-text  fonts">{slide.text}</h5>
                          <i className="fa-solid fa-quote-right d-flex fs-1 justify-content-end"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="icon_arrow">
<span
                className="controls"
                id="right-arrow"
                onClick={() => nextSlide(1)}
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span> 
            </div>
      
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
      </section>
     

        <Footer />
      </div>
    </div>
  );
}
