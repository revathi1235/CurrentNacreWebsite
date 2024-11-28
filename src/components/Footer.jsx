import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  faDownLong,
  faEnvelope,
  faLocationDot,
  faPhone,
  faShare,
  faUpDown,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { Col, Row } from "react-bootstrap";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div>
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
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 15px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        <FontAwesomeIcon icon={faUpLong} />
      </button>
    </div>
  );
}

export default Footer;
