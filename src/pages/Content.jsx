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
import { faFacebook,faYoutube, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
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


  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Nacre System",
    "url": "https://www.nacresys.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.nacresys.com/#/warehouseoperations",
    }
  };


  return (
    <div>
       <Helmet>
        <title>Warehouse Management: Optimize Yard, Resources, and Delivery Efficiency
        </title>
        <meta name="description" content="Optimize warehouse operations with advanced inventory, putaway, fulfillment automation, and yard management. Boost customer satisfaction with efficient service and systems." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
                      />{" "} <br />
                      Malampuzha Rd,
                      <br />
                      Palakkad<br /> Kerala <br />
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
                      <a href="tel: +91 7736742072" className="text-black">
                        {" "}
                        +91 7736742072
                      </a>
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
                      <a href="mailto:info@nacresys.com" className="text-black">
                        info@nacresys.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>





          <Row className="mt-4">
            <Col lg={2}>
            <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="/index">
                      <img
                        src="../Assets/ns black transparent.png"
                        class="img-fluid"
                        alt="logo image"
                      />
                    </a>
                    <div class="footer-text">
                    <p style={{textAlign:'justify'}}>
                    A decade-old software development company focused on automation, leveraging AI and IoT to build scalable, seamless solutions that integrate with existing software.
                    </p>
                  </div>
                  </div>
                 
              
                  <div class="footer-social-icon mt-3 ms-3 mb-3 ">
                    <span>Follow us</span>
                    <a href="https://www.instagram.com/nacresystem/">
                      {" "}
                      <FontAwesomeIcon icon={faSquareInstagram} />{" "}
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="https://www.facebook.com/NacreSystem">
                      {" "}
                      <FontAwesomeIcon icon={faFacebook} />{" "}
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/nacresystem/">
                      <FontAwesomeIcon icon={faLinkedin} />{" "}
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="https://www.youtube.com/@nacresystem1972">
                      <FontAwesomeIcon icon={faYoutube} />{" "}
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="/google">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                  
    
                </div>
            </Col>
            <Col lg={2} >
            <div class="footer-widget-heading">
    <h3>Useful Links</h3>
    <ul class="footer-links ">
      <li><a href="/" className="text-black">Home</a></li>
      <li><a href="/aboutus" className="text-black">About Us</a></li>
      <li><a href="/services" className="text-black">Services</a></li>
      <li><a href="/articles" className="text-black">Articles</a></li>
      <li><a href="/blog" className="text-black">Blogs</a></li>
    </ul>
  </div>

 


  {/* <div class="footer-widget-heading-h3">
                      <h3>Warehouse Management</h3>
                   
                    <ul class="footer-links ">
      <li><a href="/productwarehousemanagementsystem" className="text-black">Purvey Warehouse Management System</a></li>
      <li><a href="/aporafulfillmentautomation" className="text-black">Apora Omni Channel Fulfillment Automation</a></li>
      <li><a href="/deliverymanagementsystem" className="text-black">Delivery Management System</a></li>
      <li><a href="/yardmanagement" className="text-black">Yard Management</a></li>
    </ul>
   
    </div> */}
            </Col>
            {/* <Col lg={3}>
            <div class="footer-widget-heading-h3">
                      <h3>Warehouse Management</h3>
                   
                    <ul class="footer-links ">
      <li><a href="/productwarehousemanagementsystem" className="text-black">Purvey Warehouse Management System</a></li>
      <li><a href="/aporafulfillmentautomation" className="text-black">Apora Omni Channel Fulfillment Automation</a></li>
      <li><a href="/deliverymanagementsystem" className="text-black">Delivery Management System</a></li>
      <li><a href="/yardmanagement" className="text-black">Yard Management</a></li>
    </ul>
    <div className="mt-5">
    <p className="text-black mt-5">2011 © Nacre System All rights reserved.</p>

    </div>
    </div>
            </Col> */}




            <Col lg={4}>
            <div class="footer-widget-heading-h3">
                      <h3>Purvey Warehouse Management System</h3>
                   <Row>
                    <Col lg={5}>
                    <ul class="footer-links ">
      <li><a href="/inboundreceipt" className="text-black">Inbound Receipt</a></li>
      <li><a href="/crossdocking" className="text-black">Cross Docking</a></li>
      <li><a href="/purveydeconsolidation" className="text-black">Deconsolidation</a></li>
      <li><a href="/qualitycheck" className="text-black">Quality Check</a></li>
      <li><a href="/repackingandputaway" className="text-black">Repacking and Putaway</a></li>
      </ul>
                    </Col>
                    <Col lg={5}>
                    <ul class="footer-links ">
                    <li><a href="/aporapickmanagement" className="text-black">Pick Management</a></li>
      <li><a href="/dispatch" className="text-black">Dispatch</a></li>
      <li><a href="/inventorymanagement" className="text-black">Inventory Management</a></li>
      <li><a href="/apiintegration" className="text-black">API Integration</a></li>
      <li><a href="/iotintegration" className="text-black">IOT Integration</a></li>
    </ul>
                    </Col>
                   </Row>
                   
    
    
    </div>
            </Col>



            <Col lg={4}>
            <div class="footer-widget-heading-h3">
                      <h3 style={{fontSize:'19px'}}>APORA Omni Channel Fulfillment Automation</h3>
                   <Row>
                    <Col lg={6}>
                    <ul class="footer-links ">
      <li><a href="/multichannelintegration" className="text-black">Multi-Channel Integration</a></li>
      <li><a href="/orderprocessing" className="text-black">Order Processing </a></li>
      <li><a href="/picklistgeneration" className="text-black">Picklist Generation</a></li>
      <li><a href="/workforcemanagement" className="text-black">Work Force Management</a></li>
        </ul>
                    </Col>
                    <Col lg={6}>
                    <ul class="footer-links ">
                    <li><a href="/picksequencing" className="text-black">Pick Sequencing </a></li>
      <li><a href="/pickandshipping" className="text-black">Package and Shipping</a></li>
      <li><a href="/fulfillmentvalidation" className="text-black">Fulfillment Validation </a></li>
      <li><a href="/ecommerceintegration" className="text-black">E-Commerce Integration</a></li>
    </ul>
                    </Col>
                   </Row>
                   
    
   
    </div>

    <div className="mt-5 bg-territory">
    <p className="text-black mt-5">2011 © Nacre System All rights reserved.</p>

    </div>
            </Col>
          </Row>
         
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