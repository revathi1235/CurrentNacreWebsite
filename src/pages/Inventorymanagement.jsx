import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import purvey_apora_black from "../Assets/purvey_apora_black.png";
import Chart2 from "./Chart2";
import multichannelintegration from "../Assets/work3.jpg";
import improveresouceutilisation from "../Assets/Improveresourceutilisation.svg";
import efficiency from "../Assets/Efficiency.svg";
import improvedorderaccuracy from "../Assets/improvedorderaccuracy.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft,faQuoteRight } from "@fortawesome/free-solid-svg-icons";
function Inventorymanagement() {
  const navigate = useNavigate();
  const handleInbountreceipt = () => {
    navigate("/inbountreceipt");
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

 
        const handleRequestdemo=()=>{
            navigate('/contactus')
        }
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Purvey WMS provides real-time inventory visibility, allowing you to monitor stock levels, track movement, and make informed decisions. Ensure accurate stock management and minimize stockouts with detailed item location and status tracking." />
        <meta name="keywords" content="real-time inventory, warehouse management system, WMS, stock management, inventory tracking, stock levels, minimize stockouts" />
        <meta name="author" content="Purvey WMS" />
        <meta property="og:title" content="Real-Time Inventory Visibility - PURVEY Warehouse Management System" />
        <meta property="og:description" content="Gain real-time visibility into your inventory with Purvey WMS. Track stock levels, monitor movement, and make data-driven decisions to ensure accurate stock management and avoid stockouts." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/real-time-inventory" />
        <title>Real-Time Inventory Visibility - PURVEY WMS</title>
      </Helmet>
      <div style={{ height: "40vh" }}>
        <div className="starting-picklistgeneration">
          <h1 className="gradient-text">
            Master Your Inventory
            <br />
          </h1>
          <h3 className="gradient-text">
            Streamlined Management Solutions for Success{" "}
          </h3>

          <div className="aboutpage-subtitle">
            <h6 className="gradient-text-h6">
              <img src={purvey_apora_black} alt="purvey_apora_black image" style={{ height: "80px" }} />
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
                  <h6 class="level-22 rectangle2 me-2" onClick={handleDispatch}>
                    Dispatch
                  </h6>
                </li>
                <li>
                  <h6
                    class="level-22 rectangle2  bg-success text-white"
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

      {/* <div className='firstdiv-multichannelintegration ' >
    <div className='multichannelintegration-image'>
        <img src={multichannelintegration} alt="" />
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>
          <h4 style={{fontFamily:"pirulen",fontSize:"30px",letterSpacing:"3px"}}>
         Inventory Management
          </h4>
          Quality Assurance process in our PURVEY Warehouse Management System (WMS) is a fully scalable and customizable function. We understand the critical importance of maintaining high-quality standards and ensuring accuracy in every shipment that leaves your warehouse. With our comprehensive Quality Assurance feature within PURVEY WMS, you can streamline your quality control process, minimize errors, and deliver superior products to your customers.
PURVEY WMS offers a standardized and configurable Quality Assurance process that aligns with your specific business requirements. You can define and implement consistent quality control procedures across all product categories, ensuring uniformity and adherence to quality standards.
          </p></div>
   </div> */}
      {/* <div className="firstdiv-multichannelintegration ">
      <div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../Assets/invmanage.jpg" alt="invmanage image" />
    </div>
</div>
        <div className="multichannelintegration-content">
          <p style={{ textAlign: "justify", padding: "40px" }}>
            PURVEY WMS provides real-time visibility into your inventory,
            allowing you to monitor stock levels, track movement, and make
            informed decisions. You can easily view the quantity, location, and
            status of each item, ensuring accurate stock management and
            minimizing stockouts.
          </p>
        </div>
      </div> */}
<div style={{height:'30vh'}} className='mob-multi-space'></div>
<div className='multi-main'>
<div className='multi-img-div'>
<img src="../Assets/invmanage.jpg" alt="invmanage image" />

</div>
<div className='multi-content'>
<p className='fs-5'> <FontAwesomeIcon icon={faQuoteLeft} style={{color:'blue',fontSize:"30px"}}/> PURVEY WMS provides real-time visibility into your inventory,
            allowing you to monitor stock levels, track movement, and make
            informed decisions. You can easily view the quantity, location, and
            status of each item, ensuring accurate stock management and
            minimizing stockouts. <FontAwesomeIcon icon={faQuoteRight} style={{color:'blue',fontSize:"30px"}}/></p>
</div>
</div>
   
{/* <div style={{height:"40vh",border:"1px solid blue",width:'90%',margin:'30px auto'}}>
<div style={{}}>
<img src='../../Assets/accinv.jpg' alt="accinv" />
<p>
              <b>Efficient Data Capture for Accurate Inventory</b> With our WMS seamlessly integrating barcode and RFID technologies, you can efficiently capture data, quickly scan items, update inventory records, and minimize manual errors. This results in significantly improved inventory accuracy and streamlined processes.
            </p>
</div>
</div> */}




      {/* <Container className="seconddiv-orderprocessing-container">
        <div className="valuedelivered-maindiv-orderprocessing">
          <div className="valuedelivered-firstdiv-orderprocessing">
            <img src='../../Assets/accinv.jpg' alt="accinv" />
            <p>
              <b>Efficient Data Capture for Accurate Inventory</b> With our WMS seamlessly integrating barcode and RFID technologies, you can efficiently capture data, quickly scan items, update inventory records, and minimize manual errors. This results in significantly improved inventory accuracy and streamlined processes.
            </p>
          </div>
          <div className="valuedelivered-seconddiv-orderprocessing">
            <img src='../../Assets/invseg.webp' alt="invseg image" />
            <p>
              <b>Inventory Segmentation for Efficient Organization
              </b> With our Inventory Management feature, you can classify and segment your inventory based on criteria like product category, SKU, or demand. This approach enhances organization, optimizes storage, and accelerates item retrieval, driving improved operational efficiency.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src='../../Assets/autoreply.png' alt="autoreply image" />
            <p>
              <b>Automated Replenishment for Optimal Control</b> PURVEY WMS automates the replenishment process by setting reorder points and triggering alerts when stock levels drop below defined thresholds. This ensures timely replenishment, reduces stockouts, and helps maintain optimal inventory levels for efficient operations.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src='../../Assets/lottrack.jpg' alt="lottrack image" />
            <p>
              <b>Batch & Lot Tracking: Compliance & Efficiency</b> Our WMS supports batch and lot tracking, allowing you to trace the movement and usage of specific batches or lots of items. This is particularly beneficial for industries with strict compliance requirements or products with expiration dates, ensuring regulatory compliance and minimizing wastage.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src='../../Assets/cyclecount.jpg' alt="cyclecount image" />
            <p>
              <b>Cycle Counting & Inventory Management Efficiency</b> Our Inventory Control feature includes cycle counting functionality, enabling you to conduct periodic stock counts without disrupting daily operations. This ensures ongoing accuracy and helps identify discrepancies for prompt resolution. Additionally, our WMS facilitates efficient management of physical inventory processes, minimizing errors and streamlining reconciliation.
            </p>
          </div>
        </div>
      </Container> */}


      
<div style={{height:'10vh'}} className='mob-multi-space'></div>
<h1 style={{fontFamily:"Good Times",textAlign:'center'}}>Features</h1>
<div style={{height:"5vh"}}></div>
<Container>
  <Row>
 
    <Col lg={3} className="ms-5">
    <div class="cardBox">
  <div class="card-box-new">
    <h2>Efficient Data Capture for Accurate Inventory</h2>
    
    <div class="content-new-box" >
      {/* <h3>How's it goin Fam ?</h3> */}
      <p>With our WMS seamlessly integrating barcode and RFID technologies, you can efficiently capture data, quickly scan items, update inventory records, and minimize manual errors. This results in significantly improved inventory accuracy and streamlined processes.</p>
    </div>
  </div>
  
</div>
    </Col>
    <Col lg={1}></Col>
    <Col lg={3}>
    <div class="cardBox">
  <div class="card-box-new">
    <h2>Inventory Segmentation for Efficient Organization</h2>
    
    <div class="content-new-box" >
      {/* <h3>How's it goin Fam ?</h3> */}
      <p> With our Inventory Management feature, you can classify and segment your inventory based on criteria like product category, SKU, or demand. This approach enhances organization, optimizes storage, and accelerates item retrieval, driving improved operational efficiency.</p>
    </div>
  </div>
  
</div>
    </Col>
    <Col lg={1}></Col>  
    <Col lg={3}>
    <div class="cardBox">
  <div class="card-box-new">
    <h2>Automated Replenishment for Optimal Control</h2>
    
    <div class="content-new-box" >
      {/* <h3>How's it goin Fam ?</h3> */}
      <p>PURVEY WMS automates the replenishment process by setting reorder points and triggering alerts when stock levels drop below defined thresholds. This ensures timely replenishment, reduces stockouts, and helps maintain optimal inventory levels for efficient operations.</p>
    </div>
  </div>
  
</div>
    </Col>
  </Row>
</Container>
<div style={{height:"5vh"}}></div>

{/* <Container>
<div className="valuedelivered-maindiv-orderprocessing">
          <div className="valuedelivered-firstdiv-orderprocessing">
            <img src='../../Assets/accinv.jpg' alt="accinv" />
            <p>
              <b>Efficient Data Capture for Accurate Inventory</b> With our WMS seamlessly integrating barcode and RFID technologies, you can efficiently capture data, quickly scan items, update inventory records, and minimize manual errors. This results in significantly improved inventory accuracy and streamlined processes.
            </p>
          </div>  
          </div>
</Container> */}


      <Container>
        <div class="image-container-multichannelintegration">
          <div class="overlay">
            <p className="mt-3">
            With PURVEY WMS, you can streamline your inventory management, improve accuracy, and optimize operational efficiency. By leveraging real-time visibility, barcode and RFID integration, and automated replenishment, you can maintain optimal inventory levels, reduce stockouts, and enhance customer satisfaction. Choose our WMS to gain control over your inventory and drive success in your warehouse operations.
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
                Enhanced Product Quality
              </h2>
              <p class="service_para-inbountreceipt">
                Our Quality Assurance process enables you to maintain strict
                quality standards for every product leaving your warehouse. By
                identifying and rectifying any deviations or defects, you can
                deliver superior quality products to your customers, enhancing
                their satisfaction and loyalty.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Reduced Returns and complaints
              </h2>
              <p class="service_para-inbountreceipt">
                With accurate and comprehensive quality control measures in
                place, you can minimize returns and customer complaints due to
                substandard or defective products. This saves costs associated
                with returns processing and improves your overall customer
                experience.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
              Compliance with Regulations and Standards
              </h2>
              <p class="service_para-inbountreceipt">
                Our WMS helps ensure compliance with industry regulations and
                quality standards. By implementing standardized quality
                assurance procedures, you can meet legal requirements,
                industry-specific guidelines, and customer expectations for
                product quality.
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
                Automation of the quality assurance process streamlines
                inspection procedures, and improves overall operational
                efficiency. This allows your team to focus on value-added tasks
                and optimize productivity.{" "}
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Enhanced Brand Reputation
              </h2>
              <p class="service_para-inbountreceipt">
                By consistently delivering high-quality products, you can
                strengthen your brand reputation and differentiate yourself in
                the market. Positive customer experiences and a reputation for
                quality contribute to increased customer trust and loyalty.
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

export default Inventorymanagement;
