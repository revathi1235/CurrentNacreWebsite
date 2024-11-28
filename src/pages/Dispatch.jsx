import React, {useState} from "react";
import { Container } from "react-bootstrap";
import purvey_apora_black from "../Assets/purvey_apora_black.png";
import Chart2 from "./Chart2";
import multichannelintegration from "../Assets/work3.jpg";
import improveresouceutilisation from "../Assets/Improveresourceutilisation.svg";
import efficiency from "../Assets/Efficiency.svg";
import improvedorderaccuracy from "../Assets/improvedorderaccuracy.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight,faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet';

function Dispatch() {
  const navigate = useNavigate();
  const handleInbountreceipt = () => {
    navigate("/inboundreceipt");
  };
  const handleCrossdocking = () => {
    navigate("/crossdocking");
  };
  const handleDeconsolidation = () => {
    navigate("/purveydeconsolidation");
  };
  const handleQualitycheck = () => {
    navigate("/qualitycheck");
  };
  const handleRepackingandputaway = () => {
    navigate("/repackingandputaway");
  };
  const handlePickmanagement = () => {
    navigate("/aporapickmanagement");
  };
  const handleDispatch = () => {
    navigate("/dispatch");
  };
  const handleInventorymanagement = () => {
    navigate("/inventorymanagement");
  };
  const handleAPIintegration = () => {
    navigate("/apiintegration");
  };
  const handleIotintegration = () => {
    navigate("/iotintegration");
  };
  const handlePurveywms = () => {
    navigate("/productwarehousemanagementsystem");
  };










  const [activeTab, setActiveTab] = useState("home");

  const handleChange = (e) => {
    setActiveTab(e.target.id);
  };


        const handleRequestdemo=()=>{
            navigate('/contactus')
        }
  return (
    <div>
        <Helmet>    
              <title>Warehouse Management: Putaway, Yard & Delivery Efficiency | Dispatch Page</title>

        <meta name="description" content="Optimize warehouse operations with advanced inventory, putaway, fulfillment automation, and yard management to enhance efficiency and customer satisfaction." />
      </Helmet>
      <div style={{ height: "40vh" }}>
        <div className="starting-picklistgeneration">
          <h1 className="gradient-text">
            Efficient Dispatch Services for
            <br />
          </h1>
          <h3 className="gradient-text">Seamless Operations</h3>

          <div className="aboutpage-subtitle">
            <h6 className="gradient-text-h6">
              <img src={purvey_apora_black} alt="purvey apora image" style={{ height: "80px" }} />
            </h6>
          </div>
        </div>

        <div style={{ height: "20vh" }} className="mt-5">
          <div>
            <div class="container-chart2">
              <h1 class="level-12 rectangle " onClick={handlePurveywms}>
                Purvey
              </h1>
              <ol class="level-22-wrapper">
                <li>
                  <h6
                    class="level-22 rectangle2"
                    onClick={handleInbountreceipt}
                  >
                    Inbound Receipt
                  </h6>
                </li>
                <li>
                  <h6 class="level-22 rectangle2" onClick={handleCrossdocking}>
                    {" "}
                    Cross Docking
                  </h6>
                </li>
                <li>
                  <h6
                    class="level-22 rectangle2 me-2"
                    onClick={handleDeconsolidation}
                  >
                    Deconsolidation
                  </h6>
                </li>
                <li>
                  <h6 class="level-22 rectangle2" onClick={handleQualitycheck}>
                    Quality Check
                  </h6>
                </li>
                <li>
                  <h6
                    class="level-22 rectangle2"
                    onClick={handleRepackingandputaway}
                  >
                    Repacking and Putaway
                  </h6>
                </li>
                <li>
                  <h6
                    class="level-22 rectangle2"
                    onClick={handlePickmanagement}
                  >
                    Pick Management
                  </h6>
                </li>
                <li>
                  <h6
                    class="level-22 rectangle2 me-2  bg-success text-white"
                    onClick={handleDispatch}
                  >
                    Dispatch
                  </h6>
                </li>
                <li>
                  <h6
                    class="level-22 rectangle2"
                    onClick={handleInventorymanagement}
                  >
                    {" "}
                    Inventory management
                  </h6>
                </li>
                <li>
                  <h6
                    class="level-22 rectangle2"
                    onClick={handleAPIintegration}
                  >
                    {" "}
                    Api Integration
                  </h6>
                </li>
                <li>
                  <h6
                    class="level-22 rectangle2"
                    onClick={handleIotintegration}
                  >
                    {" "}
                    IOT Integration
                  </h6>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* 
   <div className='firstdiv-multichannelintegration ' >
    <div className='multichannelintegration-image'>
        <img src={multichannelintegration} alt="" />
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>
          <h4 style={{fontFamily:"pirulen",fontSize:"30px",letterSpacing:"3px"}}>
  Dispatch
          </h4>
          Quality Assurance process in our PURVEY Warehouse Management System (WMS) is a fully scalable and customizable function. We understand the critical importance of maintaining high-quality standards and ensuring accuracy in every shipment that leaves your warehouse. With our comprehensive Quality Assurance feature within PURVEY WMS, you can streamline your quality control process, minimize errors, and deliver superior products to your customers.
PURVEY WMS offers a standardized and configurable Quality Assurance process that aligns with your specific business requirements. You can define and implement consistent quality control procedures across all product categories, ensuring uniformity and adherence to quality standards.
          </p></div>
   </div> */}

      {/* <div className="firstdiv-multichannelintegration ">
      <div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../Assets/dispach.jpg" alt="dispatch image" />
    </div>
</div>
        <div className="multichannelintegration-content">
          <p style={{ textAlign: "justify", padding: "40px" }}>
            {" "}
            Welcome to the Dispatch Management functionality in PURVEY, our advanced Warehouse Management System (WMS). We understand the importance of efficient order fulfilment and timely delivery to your customers.
            With our comprehensive Dispatch Management feature, we aim to optimize the dispatch process, enhance visibility, and ensure accurate and swift shipment of goods. Utilizing state-of-the-art technology and advanced capabilities, PURVEY WMS guarantees seamless and efficient dispatch management for your warehouse operations.
          </p>
        </div>
      </div> */}














<div style={{height:'30vh'}} className='mob-multi-space'></div>
<div className='multi-main'>
<div className='multi-img-div'>
<img src="../Assets/dispach.jpg" alt="dispatch image" />

</div>
<div className='multi-content'>
<p className='fs-5'> <FontAwesomeIcon icon={faQuoteLeft} style={{color:'blue',fontSize:"30px"}}/>  Welcome to the Dispatch Management functionality in PURVEY, our advanced Warehouse Management System (WMS). We understand the importance of efficient order fulfilment and timely delivery to your customers.
With our comprehensive Dispatch Management feature, we aim to optimize the dispatch process, enhance visibility, and ensure accurate and swift shipment of goods. Utilizing state-of-the-art technology and advanced capabilities, PURVEY WMS guarantees seamless and efficient dispatch management for your warehouse operations. <FontAwesomeIcon icon={faQuoteRight} style={{color:'blue',fontSize:"30px"}}/></p>
</div>
</div>














      <div className="seconddiv-multichannelintegration">
        <h1>Features</h1>
      </div>
      {/* <Container className="seconddiv-orderprocessing-container">
        <div className="valuedelivered-maindiv-orderprocessing">
          <div className="valuedelivered-firstdiv-orderprocessing">
            <img src='../../Assets/orderconsol.jpg' alt="order consolidation image" />
            <p>
              <b>Order consolidation </b> in PURVEY WMS allows multiple orders
              to be combined into a single shipment, optimizing packing and
              cutting shipping costs. By efficiently grouping orders based on
              predefined criteria, you can streamline the dispatch process and
              boost productivity.
            </p>
          </div>
          <div className="valuedelivered-seconddiv-orderprocessing">
            <img src='../../Assets/orderprocessing.webp' alt="order processing image" />
            <p>
              <b>Real-time Inventory Tracking </b> with our Dispatch Management
              feature allows you to monitor available stock, allocate items for
              dispatch, and ensure accurate order fulfillment, reducing
              stockouts and delays.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src='../../Assets/orderallo.jpg' alt="order allocation image" />
            <p>
              <b>Order Prioritization</b> in PURVEY WMS is driven by predefined
              rules, customer preferences, and service level agreements,
              ensuring that urgent or high-priority orders are dispatched
              promptly, boosting customer satisfaction and loyalty.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src={improvedorderaccuracy} alt="improved accuracy image" />
            <p>
              <b>Carrier Integration </b> in PURVEY WMS allows seamless
              coordination and communication with various carriers. Effortlessly
              generate shipping labels, track shipments, and manage
              carrier-specific requirements, ensuring smooth collaboration and
              on-time deliveries.
            </p>
          </div>
          <div className="valuedelivered-seconddiv-orderprocessing">
            <img src='../../Assets/routeopti.jpg' alt="route optimization image" />
            <p>
              <b>Route optimization </b> in our Dispatch Management
              functionality utilizes advanced algorithms to select the most
              efficient shipping routes, minimizing transit time, reducing
              transportation costs, and enhancing overall delivery efficiency.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src='../../Assets/proofdelivery.webp' alt="proof delivery image" />
            <p>
              <b>Proof of Delivery</b> in PURVEY WMS is captured through
              electronic signature or barcode scanning, providing confirmation
              of successful deliveries and streamlining the reconciliation of
              shipments.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src='../../Assets/repa.jpg' alt="repacking iamge" />
            <p>
              <b>Reporting and Analytics</b> in our WMS offer in-depth insights
              into order processing times, delivery performance, carrier
              effectiveness, and overall dispatch efficiency, enabling
              data-driven decision-making to optimize operations.
            </p>
          </div>
        </div>
      </Container> */}


<h1 style={{textAlign:'center',fontFamily:'Good Times'}}>Features</h1>
<div className="container-new-col">
      <div className="container-new">
        <div className="content-input">
          {/* Radio Inputs */}
          <input
            type="radio"
            name="slider"
            id="home"
            checked={activeTab === "home"}
            onChange={handleChange}
          />
          <input
            type="radio"
            name="slider"
            id="blog"
            checked={activeTab === "blog"}
            onChange={handleChange}
          />
          <input
            type="radio"
            name="slider"
            id="help"
            checked={activeTab === "help"}
            onChange={handleChange}
          />
          <input
            type="radio"
            name="slider"
            id="code"
            checked={activeTab === "code"}
            onChange={handleChange}
          />
          <input
            type="radio"
            name="slider"
            id="about"
            checked={activeTab === "about"}
            onChange={handleChange}
          />
          <input
            type="radio"
            name="slider"
            id="nn"
            checked={activeTab === "nn"}
            onChange={handleChange}
          />
          <input
            type="radio"
            name="slider"
            id="mm"
            checked={activeTab === "mm"}
            onChange={handleChange}
          />

          {/* Labels */}
          <div className="list-disp">
            <label htmlFor="home" className="home">
              <span>Order Consolidation</span>
            </label>
            <label htmlFor="blog" className="blog">
              <span>Real-time Inventory Tracking</span>
            </label>

            <label htmlFor="help" className="help">
              <span>Order Prioritization</span>
            </label>

            <label htmlFor="code" className="code">
              <span>Carrier Integration</span>
            </label>
            <label htmlFor="about" className="about">
              <span>Route Optimization</span>
            </label>
            <label htmlFor="nn" className="nn">
              <span>Proof of Delivery</span>
            </label>
            <label htmlFor="mm" className="mm">
              <span>Reporting and Analytics</span>
            </label>
            <div
              className="slider"
              style={{ top: `${["home", "blog", "help", "code", "about", "nn", "mm"].indexOf(activeTab) * 60}px` }}
            ></div>
          </div>

         
          <div className="text-disp-content">
            {activeTab === "home" && (
              <p className="fs-4">
               In PURVEY WMS allows multiple orders to be combined into a single shipment, optimizing packing and cutting shipping costs. By efficiently grouping orders based on predefined criteria, you can streamline the dispatch process and boost productivity.
              </p>
            )}
            {activeTab === "blog" && (
              <p className="fs-4">
              With our Dispatch Management feature allows you to monitor available stock, allocate items for dispatch, and ensure accurate order fulfillment, reducing stockouts and delays.
              </p>
            )}
            {activeTab === "help" && (
              <p className="fs-4">
                In PURVEY WMS is driven by predefined rules, customer preferences, and service level agreements, ensuring that urgent or high-priority orders are dispatched promptly, boosting customer satisfaction and loyalty.
              </p>
            )}
            {activeTab === "code" && (
              <p className="fs-4">
                In PURVEY WMS allows seamless coordination and communication with various carriers. Effortlessly generate shipping labels, track shipments, and manage carrier-specific requirements, ensuring smooth collaboration and on-time deliveries.
              </p>
            )}
            {activeTab === "about" && (
              <p className="fs-4">
                In our Dispatch Management functionality utilizes advanced algorithms to select the most efficient shipping routes, minimizing transit time, reducing transportation costs, and enhancing overall delivery efficiency.
              </p>
            )}
            {activeTab === "nn" && (
              <p className="fs-4">
                In PURVEY WMS is captured through electronic signature or barcode scanning, providing confirmation of successful deliveries and streamlining the reconciliation of shipments.
              </p>
            )}
            {activeTab === "mm" && (
              <p className="fs-4">
               In our WMS offer in-depth insights into order processing times, delivery performance, carrier effectiveness, and overall dispatch efficiency, enabling data-driven decision-making to optimize operations.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>






















   

      <div className="valuedelivered-section-inbountreceipt">
        <div className="value-del-aporafulfillment">
          <h1 style={{ fontSize: "30px", marginTop: "50px" }}>
            Value Delivered
          </h1>
        </div>
        <div class="container-inbountreceipt">
          <div className="row-inbountreceipt">
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Enhanced Order Fulfilment
              </h2>
              <p class="service_para-inbountreceipt">
                With our Dispatch Management feature, you can streamline your
                order fulfilment process, reducing lead times and ensuring
                accurate and on-time delivery. This enhances customer
                satisfaction and strengthens your competitive advantage.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
              Improved Inventory Control
              </h2>
              <p class="service_para-inbountreceipt">
                Real-time inventory tracking and order allocation capabilities
                in PURVEY WMS enable accurate stock management. You can
                efficiently allocate items for dispatch, reducing stockouts and
                optimizing inventory levels.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">Cost Optimization</h2>
              <p class="service_para-inbountreceipt">
                By consolidating orders and optimizing shipping routes, our
                Dispatch Management feature helps reduce transportation costs
                and improve operational efficiency. This leads to significant
                cost savings for your warehouse operations.
              </p>
            </div>
          </div>
        </div>
        <div class="container-inbountreceipt">
          <div className="row-inbountreceipt">
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Increased Operational Efficiency
              </h2>
              <p class="service_para-inbountreceipt">
                Automation of labelling, documentation, and routing processes
                minimizes manual errors, reduces administrative tasks, and
                enhances overall operational efficiency. Your team can focus on
                value-added activities, improving productivity.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Customer Satsfaction and Loyalty
              </h2>
              <p class="service_para-inbountreceipt">
                Swift and accurate dispatches result in satisfied customers who
                receive their orders on time. This builds customer trust,
                encourages repeat purchases, and enhances long-term loyalty.
              </p>
            </div>
          </div>
        </div>
      </div>





      <div style={{height:'4vh'}}></div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<button className="custom-btn btn-5">
            <span onClick={handleRequestdemo}>Request Demo</span>
          </button>
</div>
<div style={{height:'4vh'}}></div>
      <Footer />
    </div>
  );
}

export default Dispatch;
