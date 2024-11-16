import React, { useEffect } from "react";
import "./warehouse.css"; // Include your CSS styles here
// import aporablack from "../Assets/apora_black.png";
import multichannelintegration from "../Assets/Multichannelintegration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import purvey_apora_black from "../Assets/purvey_apora_black.png";
import Chart2 from "./Chart2";
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Purvey WMS offers a comprehensive, scalable, and flexible warehouse management solution tailored to your business needs. Enhance your productivity, reduce errors, and drive profitability." />
        <meta name="keywords" content="warehouse management system, WMS software, scalable WMS, warehouse operations, logistics, warehouse productivity" />
        <meta name="author" content="Purvey WMS" />
        <meta property="og:title" content="Purvey WMS - Comprehensive Warehouse Management Solution" />
        <meta property="og:description" content="Streamline your warehouse operations with Purvey WMS. Our flexible and scalable software reduces errors, increases productivity, and boosts profitability for businesses of all sizes." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/purvey-wms" />
        <title>Purvey WMS - Warehouse Management System</title>
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









<div style={{height:'30vh'}} className='mob-multi-space'></div>
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
                    {/* <li>
                      <a href="/ourproducts">Our Products</a>
                    </li> */}
                    {/* <li>
                      <a href="/expertteam">Expert Team</a>
                    </li> */}
                    <li>
                      <a href="/#/contactus">Contact us</a>
                    </li>
                    {/* <li><a href="#">Latest News</a></li> */}
                  </ul>
                </div>
              </div>
                
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
    </>
  );
};

export default Productwarehousemanagementsystem;
