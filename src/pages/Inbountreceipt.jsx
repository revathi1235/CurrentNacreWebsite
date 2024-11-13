import React from "react";
import { Container } from "react-bootstrap";
import purvey_apora_black from "../Assets/purvey_apora_black.png";
import Chart2 from "./Chart2";
import multichannelintegration from "../Assets/work3.jpg";
import improveresouceutilisation from "../Assets/Improveresourceutilisation.svg";
// import scalabilityandflexibility from "../Assets/scalabilityandflexibility.svg";
import efficiency from "../Assets/Efficiency.svg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import improvedorderaccuracy from "../Assets/improvedorderaccuracy.svg";
import Footer from "../components/Footer";
function Inbountreceipt() {

  const navigate=useNavigate()
const handleInbountreceipt=()=>{
  navigate('/inbountreceipt')
}
const handleCrossdocking=()=>{
  navigate('/crossdocking')
}
const handleDeconsolidation=()=>{
  navigate('/purveydeconsolidation')
}
const handleQualitycheck=()=>{
  navigate('/qualitycheck')
}
const handleRepackingandputaway=()=>{
  navigate('/repackingandputaway')
}
const handlePickmanagement=()=>{
  navigate('/aporapickmanagement')
}
const handleDispatch=()=>{
  navigate('/dispatch')
}
const handleInventorymanagement=()=>{
navigate('/inventorymanagement')
}
const handleAPIintegration=()=>{
  navigate('/apiintegration')
}
const handleIotintegration=()=>{
  navigate('/iotintegration')
}
const handlePurveywms=()=>{
  navigate('/productwarehousemanagementsystem')
}
  return (
    <div>
      <Helmet>
        <title>
          Inbound Receipt Process - PURVEY Warehouse Management System
        </title>
        <meta
          name="description"
          content="The Inbound Receipt process in PURVEY Warehouse Management System (WMS) is designed to eliminate manual errors and reduce processing time. Upon arrival, goods are quickly scanned and recorded in the system, ensuring timely updates to inventory levels and enabling real-time visibility."
        />
        <meta
          name="keywords"
          content="Inbound Receipt, Warehouse Management System, Inventory Management, Scanning, Real-time Visibility"
        />
        <meta name="author" content="Your Name or Company Name" />
        <meta
          property="og:title"
          content="Inbound Receipt Process - PURVEY Warehouse Management System"
        />
        <meta
          property="og:description"
          content="Eliminate manual errors and reduce processing time in your warehouse with PURVEY's efficient Inbound Receipt process."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/inbound-receipt"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path-to-image.jpg"
        />
      </Helmet>
      <div style={{ height: "40vh" }}>
        <div className="starting-picklistgeneration">
          <h1 className="gradient-text">
            Efficient Management of Inbound Deliveries
            <br />
          </h1>
          {/* <h3 className="gradient-text">Across All Touchpoints.</h3> */}

          <div className="aboutpage-subtitle">
            <h6 className="gradient-text-h6">
              <img src={purvey_apora_black} alt="purvey apora black image" style={{ height: "80px" }} />
            </h6>
          </div>
        </div>

        <div className="mt-5">
        <div class="container-chart2">
  <h1 class="level-12 rectangle "   onClick={handlePurveywms}>Purvey</h1>
  <ol class="level-22-wrapper">
    <li>
      <h6 class="level-22 rectangle2  bg-success text-white" onClick={handleInbountreceipt}>Inbound Receipt</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleCrossdocking}> Cross Docking</h6>
     
    </li>
      <li>
      <h6 class="level-22 rectangle2 me-2" onClick={handleDeconsolidation}>Deconsolidation</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleQualitycheck}>Quality Check</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleRepackingandputaway}>Repacking and Putaway</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handlePickmanagement}>Pick Management</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2 me-2" onClick={handleDispatch} >Dispatch</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleInventorymanagement}>  Inventory management</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleAPIintegration}>  Api Integration</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleIotintegration}>  IOT Integration</h6>
     
    </li>
  </ol>
</div>


    </div>
      </div>

      <div className="firstdiv-multichannelintegration ">
      <div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../Assets/inbountreceipt.jpg" alt="inbount receipt image" />
    </div>
</div>
        <div className="multichannelintegration-content">
          <p style={{ textAlign: "justify", padding: "40px" }}>
          
            The Inbound Receipt process in PURVEY Warehouse Management System
            (WMS) is designed to eliminate manual errors and reduce processing
            time. Upon arrival, goods are quickly scanned and recorded in the
            system, ensuring timely updates to inventory levels and enabling
            real-time visibility.
          </p>
        </div>
      </div>

      {/* <div className='seconddiv-multichannelintegration'>
    <h1>Efficiency And Accuracy</h1>
</div>
<div className='seconddiv-content-multichannelintegration'>
    <p>Perfect order fulfilment is crucial for maintaining a competitive edge. The key to success lies in implementing a robust multichannel integration in order fulfilment system, which streamlines operations and enhances customer satisfaction. The unique features of our system, demonstrates how it can revolutionize your order fulfilment process.
    The multichannel integration in our fulfilment management system is a game-changer for organizations aiming to enhance operational efficiency. By streamlining order fulfilment across multiple sales channels, you unlock new levels of accuracy, scalability, and flexibility. With real-time inventory visibility and centralized order management, you can meet customer demands effectively while optimizing your resources.</p>
</div> */}

      <div className="seconddiv-multichannelintegration">
        <h1>Features</h1>
      </div>
      <Container fluid>
        <div className="valuedelivered-maindiv-inbountreceipt">
          <div className="valuedelivered-firstdiv-inbountreceipt">
            <img src='../../Assets/seamlessintegration.webp' alt="seamless integration image" />
            {/* <h6>Seamless integration with supplier systems</h6> */}
            <p style={{ fontSize:"15px"}}>
           <b> Seamless Integration with Supplier Systems</b> enables PURVEY WMS to automate the exchange of information like purchase orders, advance shipment notifications, and invoices. This connectivity promotes smooth communication and strengthens supply chain collaboration.
            </p>
          </div>
          <div className="valuedelivered-seconddiv-inbountreceipt">
            <img src='../../Assets/tracking.jpg' alt="tracking image" />
           
            <p style={{ fontSize:"15px"}}>
             <b>Real-Time Tracking and Visibility </b>into inbound shipments through PURVEY WMS provide detailed insights into arrival times, quantities, and product specifics, enabling you to plan and allocate resources effectively for optimized warehouse operations
            </p>
          </div>
          <div className="valuedelivered-thirddiv-inbountreceipt">
            <img src='../../Assets/qcontrol.jpg' alt="qc control image" />
            <p style={{ fontSize:"15px"}}>
           <b> Quality Control Checks</b>  are built into the Inbound Receipt function of PURVEY WMS, ensuring that goods are inspected upon receipt for quantity accuracy, damage, and compliance with specified standards. Any discrepancies or issues are promptly flagged for resolution.
            </p>
          </div>
        </div>
        <br />
        <div className="valuedelivered-secondmaindiv-inbountreceipt">
          <div className="valuedelivered-firstdiv-inbountreceipt">
            <img src='../../Assets/compliancedocumentation.jpg' alt="compliance doc image" />
          
            <p style={{ fontSize:"15px"}}>
            <b>Compliance Documentation</b> is ensured through the Inbound Receipt function in PURVEY WMS, where receipts, supplier information, product specifications, and certificates are automatically generated and readily accessible for audits.
            </p>
          </div>
          <div className="valuedelivered-seconddiv-inbountreceipt">
            <img src={efficiency} alt="efficiency image" />
            
            <p style={{ fontSize:"15px"}}>
            <b>Streamlined Return Processes</b> in our WMS handle discrepancies, damaged goods, or rejections efficiently. The system captures all relevant details, including return reasons and resolutions, enabling prompt coordination with suppliers and minimizing supply chain disruptions
            </p>
          </div>
          <div className="valuedelivered-thirddiv-inbountreceipt">
            <img src={improvedorderaccuracy} alt="improvedorderaccuracy image" />
          
            <p style={{ fontSize:"15px"}}>
           <b> Gain Valuable Insights</b> into inbound shipments, supplier performance, receipt accuracy, and product quality, empowering data-driven decision-making.
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <div class="image-container-multichannelintegration">
          <div class="overlay">
            <p className="px-1 mt-3">
            PURVEY WMS provides exceptional Inbound Receipt functionality within our advanced Warehouse Management System. With our state-of-the-art technology and commitment to excellence, we guarantee efficient handling, accurate tracking, and streamlined operations for your incoming goods. Partner with us to leverage the power of our WMS and experience enhanced efficiency and improved inventory management in your warehouse.
            </p>
          </div>
        </div>
      </Container>

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
                Increased Efficiency
              </h2>
              <p class="service_para-inbountreceipt">
                By automating and streamlining the Inbound Receipt process, our
                PURVEY WMS eliminates manual tasks, reduces processing time, and
                increases operational efficiency, allowing your warehouse team
                to focus on higher-value activities.{" "}
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Enhanced Inventory Accuracy
              </h2>
              <p class="service_para-inbountreceipt">
                Real-time tracking, automated documentation, and quality control
                checks in our WMS ensure accurate inventory records, reducing
                discrepancies and minimizing stockouts or overstock situations.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Improved Supplier Relationships
              </h2>
              <p class="service_para-inbountreceipt">
                With seamless integration and efficient communication, our WMS
                fosters stronger supplier relationships. Timely notifications,
                quick resolutions, and accurate information exchange enhance
                collaboration and trust.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <i class="fas fa-shipping-fast"></i>
              <h2 class="service_heading-inbountreceipt">Cost Savings</h2>
              <p class="service_para-inbountreceipt">
                The Inbound Receipt function in our WMS optimizes inventory
                levels, reduces holding costs, minimizes stockouts, and
                streamlines processes. These cost-saving measures improve cash
                flow and overall supply chain efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Inbountreceipt;
