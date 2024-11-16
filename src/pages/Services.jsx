import React, { useRef } from "react";
// import bglightgreen from '../Assets/bglightgreen2.svg';
import bluewhitebgnew from "../Assets/bluewhitebgnew.svg";
import "./commoncss.css";
import { Row,Col, Container } from "react-bootstrap";
// import aporablack from '../Assets/apora_black.png'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import bluebgservicepage from "../Assets/bluebgservicepage.svg.jpg";
import Timeline from "./Timeline";
import Horizontaltimeline from "../components/Horizontaltimeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

function Services() {
  // Create a ref to the target section
  const fastSectionRef = useRef(null);
  const implementationSectionRef = useRef(null);
  const processEnhancementRef = useRef(null);
  const potImplimentationSupportRef = useRef(null);
  const usertraingRef = useRef(null);
  const expservicesRef=useRef(null)
  // Function to scroll to the fast section
  const scrollToFastSection = () => {
    if (fastSectionRef.current) {
      fastSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToImplementationSection = () => {
    if (implementationSectionRef.current) {
      implementationSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProcessEnhancement = () => {
    if (processEnhancementRef.current) {
      processEnhancementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollpotImplimentationSupportRef = () => {
    if (potImplimentationSupportRef.current) {
      potImplimentationSupportRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const scrollUsertrainingRef = () => {
    if (usertraingRef.current) {
      usertraingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };



  const navigate=useNavigate()
  const handleRequestdemo=()=>{
      navigate('/contactus')
  }

  const scrollExptrainingRef = () => {
    if (expservicesRef.current) {
      expservicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div>
       <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Revolutionize your e-commerce order fulfillment with API-based integrations. Seamlessly connect online stores with warehouse systems for real-time order synchronization, inventory management, tracking, and improved processing efficiency." />
        <meta name="keywords" content="e-commerce API integration, order fulfillment, inventory management, real-time synchronization, warehouse integration, order tracking, API for e-commerce, order accuracy, operational efficiency, seamless integration" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="API-Based E-Commerce Integration for Efficient Order Fulfillment" />
        <meta property="og:description" content="Streamline your e-commerce order fulfillment with API-based integrations. Real-time synchronization, inventory management, and order tracking improve operational efficiency and customer satisfaction." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/api-ecommerce-integration" />
        <title>API-Based E-Commerce Integration for Efficient Order Fulfillment</title>
      </Helmet>
      <div className="starting-picklistgeneration  ">
        <h1 className="gradient-text">Services</h1>
        
        <div className="button-container ms-4"></div>

      
      </div>
      <div>
        <Container ref={processEnhancementRef}>
          <div className="secondsec-servicepage">
            
            <Horizontaltimeline />
          </div>
        </Container>
      </div>

     
  















      <div style={{height:'4vh'}}></div>

      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<button className="custom-btn btn-5">
            <span onClick={handleRequestdemo}>Request Demo</span>
          </button>
</div>
<div style={{height:'4vh'}}></div>

<div className="mt-4">
<Footer/>
</div>
    </div>
  );
}

export default Services;
