import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram ,} from "@fortawesome/free-brands-svg-icons";

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
function Footer() {



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
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
                        />{" "}
                        Malampuzha Rd,
                       
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
                    <span style={{ color: "black" }} >
                      {" "}
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "black" }}
                      />{" "}
                    <a href="tel: +91 7736742072" className="text-black"> +91 7736742072</a> 
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
                      <img
                        src="../Assets/ns black transparent.png"
                        class="img-fluid"
                        alt="logo image"
                      />
                    </a>
                  </div>
                  <div class="footer-text">
                    <p>
                      A decade old software development company continuously
                      focused in delivering higher levels of automation
                      leveraging new and upcoming technologies such as AI and
                      internet of things. We build solutions which are scalable
                      and can integrate seamlessly with other software solutions
                      that exist.
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="https://www.instagram.com/nacresystem/">
                      {" "}
                      <FontAwesomeIcon icon={faSquareInstagram} />{" "}
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="/https://www.facebook.com/NacreSystem">
                      {" "}
                      <FontAwesomeIcon icon={faFacebook} />{" "}
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
                      <a href="/services">services</a>
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
                {/* <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div class="footer-widget">
                    <div class="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div class="footer-text mb-25">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill the
                        form below.
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
                      <p className="text-black mt-3">2011 © Nacre System All rights reserved.</p>
                    </div>
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
          right: '20px',
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
  );
}

export default Footer;
