import React,{useState,useEffect} from 'react'
import {Row,Col ,Container} from 'react-bootstrap'
import { Helmet } from 'react-helmet'; // Import Helmet
import Footer from '../components/Footer'
import './newdesigndemo.css'
import Deconsolidation from './Deconsolidation'
import AporaHomepage from './AporaHomepage'
import IndustriesServe from './IndustriesServe'
import Landingpage from './Landingpage'
import Cardflip from './Cardflip'
import Dummydemo from './Dummydemo';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import purvey_apora_black from "../Assets/purvey_apora_black.png";
import Chart2 from "./Chart2";
import { faQuoteRight,faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
// import ValuedeliveredProductwms from './ValuedeliveredProductwms'
import { useNavigate } from "react-router-dom";
import {
  faEnvelope,
  faUpLong,
  faLocationDot,
  faPhone,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";




function Content() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      const pinSpacer = document.querySelector(".pin-spacer");
      const windowHeight = window.innerHeight;
      const windowBottom = window.scrollY + windowHeight;
  
      if (pinSpacer) {
        const pinSpacerTop = pinSpacer.getBoundingClientRect().top + window.scrollY;
        const pinSpacerBottom = pinSpacerTop + pinSpacer.offsetHeight;
  
        if (pinSpacerTop < windowBottom && pinSpacerBottom > window.scrollY) {
          pinSpacer.classList.add("is-sticky");
        } else {
          pinSpacer.classList.remove("is-sticky");
        }
      }
  
      // Remove the scroll-based visibility logic for 'fade-in' and 'is-inview' classes
      const whatWeDoWraps = document.querySelectorAll(".WhatWeDo_whatWeDoWrap");
  
      // Make sure all text is visible, no need for scroll-triggered visibility changes
      whatWeDoWraps.forEach((wrap) => {
        wrap.classList.add("is-inview"); // Make sure all sections are visible on page load
        wrap.querySelector(".WhatWeDo_whatWeDoCotentList").style.transform = "translateY(0)";
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Trigger scroll event on load
    handleScroll();
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  




  // Define the content arrays
  const contentData = [
    {
      highlightText: "One of Its Kind",
      mainTitle: "Apora",
      subheading: "AI POWERED FULFILLMENT AUTOMATION",
      ctas: [
        "Save 60% Fulfillment Cost",
        "Achieve 50 % - 60 % Increase In Efficiency",
        "Accomplish 100% Same Day Delivery"
      ]
    },
    {
      highlightText: "Purvey",
      mainTitle: "WMS",
      subheading: "Warehouse Management System",
      ctas: [
        "Ensure 100% traceability of Goods",
        "Empower Your Business With Real-Time Inventory Insights",
        "Accomplish 100% Same Day Delivery"
      ]
    },
    {
      highlightText: "On",
      mainTitle: "CLOUD",
      subheading: "Embrace  Elastic  Scalability  Without  Capital  Spend",
      ctas: [
        "Save UpTo 50% on IT Cost",
        "90% of Saas Users find it Easy To Use",
        "Saas as an Secure as on Premises Software"
      ]
    }
  ];


  const [contentIndex, setContentIndex] = useState(0);
  
  // Handle content flipping with interval
  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 3000); // Time between content change

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [contentData.length]);





  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  //   }, 2000); // Change image every 2 seconds

  //   return () => clearInterval(interval); // Clean up on unmount
  // }, []);




  return (
    <div>
       <Helmet>
        <title>Apora - AI Powered Fulfillment Automation</title>
        <meta name="description" content="Discover Apora, an AI-powered fulfillment automation system designed to save costs and improve efficiency in warehouse management." />
        <meta name="keywords" content="Apora, Fulfillment Automation, Warehouse Management, AI Solutions" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Apora - AI Powered Fulfillment Automation" />
        <meta property="og:description" content="Discover Apora, an AI-powered fulfillment automation system designed to save costs and improve efficiency in warehouse management." />
        <meta property="og:image" content="../Assets/Banner picture1.png" />
        <meta property="og:url" content="https://www.yourwebsite.com/apora" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apora - AI Powered Fulfillment Automation" />
        <meta name="twitter:description" content="Discover Apora, an AI-powered fulfillment automation system designed to save costs and improve efficiency in warehouse management." />
        <meta name="twitter:image" content="../Assets/Banner picture1.png" />
      </Helmet>
     <Dummydemo/>
        <Container >
      {/* <Row className='primary-heading' >
        <Col lg={1}></Col>
        <Col lg={7} className="text-lg-start text-center px-5 ">
          <div className="text-container">
              <>
                <span className="highlight-text" style={{ fontFamily: "Good Times" }}>{contentData[contentIndex].highlightText}</span>
                <span className="main-title" style={{ fontFamily: "pirulen" }}>{contentData[contentIndex].mainTitle}</span>
                <span className="subheading" style={{ fontFamily: "Good Times" }}>{contentData[contentIndex].subheading}</span>
              <div className='cta-full-div'>
              {contentData[contentIndex].ctas.map((cta, index) => (
                  <span className='cta' style={{ fontFamily: "arial" }} key={index}>{cta}</span>
                ))}
              </div>
              </>
            </div>
        </Col>
     
      
      </Row> */}
      {/* <Cardflip/> */}
   
    </Container>
    <Deconsolidation/>
    <AporaHomepage/>
    <IndustriesServe/>


    <div style={{ marginTop: "100px" }} className='mob-footer'>
        <footer class="footer-section">
          <div class="container">
            <div class="footer-cta pt-5 pb-5">
              <div class="row">
                <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="footer-widget-heading">
                      <h3>Find Us</h3>

                      <span style={{ color: "black" }}>
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          style={{ color: "black" }}
                        />{" "}
                        Malambuzha Rd,
                    
                        <br />
                        Palakkad Kerala <br />
                        678002
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                    <i class="fas fa-phone"></i>
                    <div class="footer-widget-heading">
                      <h3>Call us</h3>
                      <span style={{ color: "black" }}>
                        {" "}
                        <FontAwesomeIcon
                          icon={faPhone}
                          style={{ color: "black" }}
                        />{" "}
                       <a href="tel:+91 7736742072" className="text-black"> +91 7736742072</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                    <i class="far fa-envelope-open"></i>
                    <div class="footer-widget-heading">
                      <h3>Mail us</h3>
                      <span style={{ color: "black" }}>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ color: "black" }}
                        />{" "}
                       <a href="mailto:info@nacresys.com" className="text-black">info@nacresys.com</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-content pt-5 ">
              <div class="row">
                <div class="col-xl-4 col-lg-4 mb-50">
                  <div class="footer-widget">
                    <div class="footer-logo">
                      <a href="/index">
                        <im
                          g
                          src="./Assets/ns black transparent.png"
                          class="img-fluid"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div class="footer-text">
                      <p>
                        A decade old software development company continuously
                        focused in delivering higher levels of automation
                        leveraging new and upcoming technologies such as AI and
                        internet of things. We build solutions which are
                        scalable and can integrate seamlessly with other
                        software solutions that exist.
                      </p>
                    </div>
                    <div class="footer-social-icon">
                      <span>Follow us</span>
                      <a href="https://www.facebook.com/NacreSystem">
                        {" "}
                        <FontAwesomeIcon icon={faFacebook} />{" "}
                        <i class="fab fa-facebook-f facebook-bg"></i>
                      </a>
                      <a href="https://www.instagram.com/nacresystem/">
                        {" "}
                        <FontAwesomeIcon icon={faSquareInstagram} />{" "}
                        <i class="fab fa-facebook-f facebook-bg"></i>
                      </a>
                      <a href="/https://www.linkedin.com/company/13752108/admin/dashboard/">
                        <FontAwesomeIcon icon={faLinkedin} />{" "}
                        <i class="fab fa-twitter twitter-bg"></i>
                      </a>
                      <a href="/google">
                        <i class="fab fa-google-plus-g google-bg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget ">
                  <div class="footer-widget-heading ms-1">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                   
                    <li>
                      <a href="/#/services">services</a>
                    </li>
                    {/* <li><a href="#">portfolio</a></li> */}
                   
                    <li>
                      <a href="/#/aboutus">About us</a>
                    </li>
                    <li>
                      <a href="/casestudies">Articles</a>
                    </li>
                    <li>
                      <a href="/blogs">Blogs</a>
                    </li>
                    <li>
                      <a href="/#/contactus">Contact us</a>
                    </li>
                    {/* <li><a href="#">Latest News</a></li> */}
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget ">
                  <div class="footer-widget-heading ms-1">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="/#/productwarehousemanagementsystem">Product Warehouse Management System</a>
                    </li>
                   
                    <li>
                      <a href="/#/services">services</a>
                    </li>
                    {/* <li><a href="#">portfolio</a></li> */}
                   
                    <li>
                      <a href="/#/aboutus">About us</a>
                    </li>
                    <li>
                      <a href="/casestudies">Articles</a>
                    </li>
                    <li>
                      <a href="/blogs">Blogs</a>
                    </li>
                    <li>
                      <a href="/#/contactus">Contact us</a>
                    </li>
                    {/* <li><a href="#">Latest News</a></li> */}
                  </ul>
                </div>
              </div>
                {/* <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div class="footer-widget">
                    <div class="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div class="footer-text mb-25">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill
                        the form below.
                      </p>
                    </div>
                    <div class="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button>
                          <FontAwesomeIcon
                            icon={faShare}
                            style={{ color: "white" }}
                          />
                        </button>
                      </form>
                    </div>
                    <p className="text-black mt-3">2011 © Nacre System All rights reserved.</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
       
        </footer>
        <button 
        onClick={scrollToTop} 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '40px',
          padding: '10px 15px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        <FontAwesomeIcon icon={faUpLong}/>
      </button>
      </div>

    </div>
  )
}

export default Content