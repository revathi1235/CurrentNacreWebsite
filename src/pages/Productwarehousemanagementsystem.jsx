import React, { useEffect } from "react";
import "./warehouse.css"; // Include your CSS styles here
// import aporablack from "../Assets/apora_black.png";
import multichannelintegration from "../Assets/Multichannelintegration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram ,faYoutube} from "@fortawesome/free-brands-svg-icons";
import purvey_apora_black from "../Assets/purvey_apora_black.png";
import Chart2 from "./Chart2";
import {Row,Col} from 'react-bootstrap'
import { faQuoteRight,faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
// import ValuedeliveredProductwms from './ValuedeliveredProductwms'
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import {
  faEnvelope,
  faUpLong,
  faLocationDot,
  faPhone,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
const Productwarehousemanagementsystem = () => {
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
  


 
  const navigate=useNavigate()
  const handleRequestdemo=()=>{
      navigate('/contactus')
  }
  return (
    <>
      <div>

      <Helmet>
      <title>Warehouse Management: Putaway, Yard & Delivery Efficiency

| product warehouse management solutions      </title>  
        <meta name="description" content="Optimize warehouse operations with advanced inventory, putaway, fulfillment automation, and yard management to enhance efficiency and customer satisfaction." />
      </Helmet>
        <div className="starting-picklistgeneration">
          <h1 className="gradient-text">
            Purvey warehouse management system <br />
          </h1>
          {/* <h3 className="gradient-text">Solution</h3> */}

          <div className="aboutpage-subtitle">
            <h6 className="gradient-text-h6">
            <img src={purvey_apora_black} alt="purvey_apora_black image" style={{ height: "80px" }} />
            </h6>
          </div>
        </div>
        <div style={{height:"0vh"}} className='mt-5'>
<Chart2/>
 </div>





{/* <ValuedeliveredProductwms/> */}

 {/* <div className='firstdiv-multichannelintegration ' >
 <div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../Assets/productwms.jpg" alt="productwms image" />
    </div>
</div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>Our WMS is designed to provide a comprehensive solution for all your warehouse management needs. Whether you operate a small-scale facility or a large distribution centre, our scalable and flexible software can be tailored to meet your specific requirements. With Purvey WMS, you can streamline your operations, reduce errors, and enhance productivity, ultimately driving your business towards greater profitability.</p>
    </div>
   </div> */}









<div style={{height:'30vh'}} className='mob-multi-space-pwms'></div>
<div className='multi-main'>
<div className='multi-img-div'>
<img src="../Assets/productwms.jpg" alt="productwms image" />

</div>
<div className='multi-content'>
<p className='fs-5'> <FontAwesomeIcon icon={faQuoteLeft} style={{color:'blue',fontSize:"30px"}}/> Our WMS is designed to provide a comprehensive solution for all your warehouse management needs. Whether you operate a small-scale facility or a large distribution centre, our scalable and flexible software can be tailored to meet your specific requirements. With Purvey WMS, you can streamline your operations, reduce errors, and enhance productivity, ultimately driving your business towards greater profitability.<FontAwesomeIcon icon={faQuoteRight} style={{color:'blue',fontSize:"30px"}}/></p>
</div>
</div>
















        <div className="container-service">
          {/* <div className="OurFormula_sectionHeading">Our Formula</div> */}
          <div className="OurFormula_formulaSubHeading">
            <p
              style={{
                color: "black",
                textAlign: "center",
                fontFamily: "pirulen",
                marginTop:'10px'
              }}
            >
              Value Delivered
            </p>
          </div>
          <div class="container-pwms">
  <div class="item-pwms">
    <div class="title-pwms">Inventory Control</div>
    <div class="description-pwms">Maintain accurate and real-time visibility of inventory levels, reducing stockouts and overstock situations.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">Order Management</div>
    <div class="description-pwms">Efficiently process and fulfil orders, improving order accuracy and minimizing delays.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">Warehouse Optimization</div>
    <div class="description-pwms">Optimize warehouse space utilization, reducing travel time and improving picking and replenishment processes.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">Integration Capabilities</div>
    <div class="description-pwms">Seamlessly integrate with other business systems, such as ERP and CRM, for streamlined data flow and enhanced collaboration.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">Reporting and Analytics </div>
    <div class="description-pwms">Gain valuable insights into warehouse performance through comprehensive reports and analytics, enabling data-driven decision-making.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">Mobile Functionality</div>
    <div class="description-pwms">Empower employees with mobile capabilities for tasks like receiving, picking, and shipping, improving efficiency and accuracy.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">Scalability and Flexibility</div>
    <div class="description-pwms">Adapt the WMS to accommodate increased order volumes, additional warehouse locations, and evolving business needs.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">3PL Compatability</div>
    <div class="description-pwms">Seamlessly collaborate with third-party logistics providers, enhancing coordination and ensuring smooth operations.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">Cost Savings</div>
    <div class="description-pwms">Increase operational efficiency, reduce errors, and minimize labour costs through optimized processes and automation.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">Customer Satisfaction</div>
    <div class="description-pwms">Improve order accuracy, reduce lead times, and enhance overall service levels, leading to higher customer satisfaction.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">Regulatory Compliance</div>
    <div class="description-pwms">Ensure adherence to industry regulations and standards through enhanced traceability and reporting capabilities.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">Streamlined Workflows</div>
    <div class="description-pwms">Automate manual tasks and streamline workflows, reducing human error and improving productivity.</div>
  </div>
  <div class="item-pwms">
    <div class="title-pwms">Return on Investment</div>
    <div class="description-pwms">Achieve a positive return on investment by optimizing operations, reducing costs, and improving overall efficiency.</div>
  </div>
</div>




<div style={{height:'4vh'}}></div>
<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<button className="custom-btn btn-5">
            <span onClick={handleRequestdemo}>Request Demo</span>
          </button>
</div>
<div style={{height:'4vh'}}></div>

          <div style={{ height: "10vh" }}></div>
        </div>
      </div>
      <div className="desk-mob-pwms">
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
      <li><a href="/#/aboutus" className="text-black">About Us</a></li>
      <li><a href="/#/services" className="text-black">Services</a></li>
      <li><a href="/#/articles" className="text-black">Articles</a></li>
      <li><a href="/#/blog" className="text-black">Blogs</a></li>
    </ul>
  </div>

 


  {/* <div class="footer-widget-heading-h3">
                      <h3>Warehouse Management</h3>
                   
                    <ul class="footer-links ">
      <li><a href="/#/productwarehousemanagementsystem" className="text-black">Purvey Warehouse Management System</a></li>
      <li><a href="/#/aporafulfillmentautomation" className="text-black">Apora Omni Channel Fulfillment Automation</a></li>
      <li><a href="/#/deliverymanagementsystem" className="text-black">Delivery Management System</a></li>
      <li><a href="/#/yardmanagement" className="text-black">Yard Management</a></li>
    </ul>
   
    </div> */}
            </Col>
            {/* <Col lg={3}>
            <div class="footer-widget-heading-h3">
                      <h3>Warehouse Management</h3>
                   
                    <ul class="footer-links ">
      <li><a href="/#/productwarehousemanagementsystem" className="text-black">Purvey Warehouse Management System</a></li>
      <li><a href="/#/aporafulfillmentautomation" className="text-black">Apora Omni Channel Fulfillment Automation</a></li>
      <li><a href="/#/deliverymanagementsystem" className="text-black">Delivery Management System</a></li>
      <li><a href="/#/yardmanagement" className="text-black">Yard Management</a></li>
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
      <li><a href="/#/inboundreceipt" className="text-black">Inbound Receipt</a></li>
      <li><a href="/#/crossdocking" className="text-black">Cross Docking</a></li>
      <li><a href="/#/purveydeconsolidation" className="text-black">Deconsolidation</a></li>
      <li><a href="/#/qualitycheck" className="text-black">Quality Check</a></li>
      <li><a href="/#/repackingandputaway" className="text-black">Repacking and Putaway</a></li>
      </ul>
                    </Col>
                    <Col lg={5}>
                    <ul class="footer-links ">
                    <li><a href="/#/aporapickmanagement" className="text-black">Pick Management</a></li>
      <li><a href="/#/dispatch" className="text-black">Dispatch</a></li>
      <li><a href="/#/inventorymanagement" className="text-black">Inventory Management</a></li>
      <li><a href="/#/apiintegration" className="text-black">API Integration</a></li>
      <li><a href="/#/iotintegration" className="text-black">IOT Integration</a></li>
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
      <li><a href="/#/multichannelintegration" className="text-black">Multi-Channel Integration</a></li>
      <li><a href="/#/orderprocessing" className="text-black">Order Processing </a></li>
      <li><a href="/#/picklistgeneration" className="text-black">Picklist Generation</a></li>
      <li><a href="/#/workforcemanagement" className="text-black">Work Force Management</a></li>
        </ul>
                    </Col>
                    <Col lg={6}>
                    <ul class="footer-links ">
                    <li><a href="/#/picksequencing" className="text-black">Pick Sequencing </a></li>
      <li><a href="/#/pickandshipping" className="text-black">Package and Shipping</a></li>
      <li><a href="/#/fulfillmentvalidation" className="text-black">Fulfillment Validation </a></li>
      <li><a href="/#/ecommerceintegration" className="text-black">E-Commerce Integration</a></li>
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
    </>
  );
};

export default Productwarehousemanagementsystem;
