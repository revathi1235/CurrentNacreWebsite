import React, { useRef } from "react";
// import bglightgreen from '../Assets/bglightgreen2.svg';
import bluewhitebgnew from "../Assets/bluewhitebgnew.svg";
import "./commoncss.css";
import { Row,Col, Container } from "react-bootstrap";
// import aporablack from '../Assets/apora_black.png'

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





  const scrollExptrainingRef = () => {
    if (expservicesRef.current) {
      expservicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div>
      
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

     
  



















<div className="mt-4">
<Footer/>
</div>
    </div>
  );
}

export default Services;
