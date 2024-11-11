import React from "react";
import { Container } from "react-bootstrap";
import purvey_apora_black from "../Assets/purvey_apora_black.png";
// import Chart2 from "./Chart2";
import multichannelintegration from "../Assets/work3.jpg";
import improveresouceutilisation from "../Assets/Improveresourceutilisation.svg";
import efficiency from "../Assets/Efficiency.svg";
import improvedorderaccuracy from "../Assets/improvedorderaccuracy.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Qualitycheck() {
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
  return (
    <div>
      <div style={{ height: "40vh" }}>
        <div className="starting-picklistgeneration">
          <h1 className="gradient-text">
            Commitment to Quality: Excellence in Every Detail
            <br />
          </h1>
          {/* <h3 className="gradient-text">Across All Touchpoints.</h3> */}

          <div className="aboutpage-subtitle">
            <h6 className="gradient-text-h6">
              <img src={purvey_apora_black} alt="" style={{ height: "80px" }} />
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
                  <h6
                    class="level-22 rectangle2 bg-success text-white"
                    onClick={handleQualitycheck}
                  >
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

      {/* <div className='firstdiv-multichannelintegration ' >
    <div className='multichannelintegration-image'>
        <img src={multichannelintegration} alt="" />
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>
          <h4 style={{fontFamily:"pirulen",fontSize:"30px",letterSpacing:"3px"}}>
          Quality check
          </h4>
          Quality Assurance process in our PURVEY Warehouse Management System (WMS) is a fully scalable and customizable function. We understand the critical importance of maintaining high-quality standards and ensuring accuracy in every shipment that leaves your warehouse. With our comprehensive Quality Assurance feature within PURVEY WMS, you can streamline your quality control process, minimize errors, and deliver superior products to your customers.
PURVEY WMS offers a standardized and configurable Quality Assurance process that aligns with your specific business requirements. You can define and implement consistent quality control procedures across all product categories, ensuring uniformity and adherence to quality standards.
          </p></div>
   </div> */}

      <div className="firstdiv-multichannelintegration ">
        <div className="multichannelintegration-image wrapper">
          <img src={multichannelintegration} alt="" className="image--cover" />
        </div>
        <div className="multichannelintegration-content">
          
          <p style={{ textAlign: "justify", padding: "40px" }}>
            Quality Assurance process in our PURVEY Warehouse Management System
            (WMS) is a fully scalable and customizable function. We understand
            the critical importance of maintaining high-quality standards and
            ensuring accuracy in every shipment that leaves your warehouse. With
            our comprehensive Quality Assurance feature within PURVEY WMS, you
            can streamline your quality control process, minimize errors, and
            deliver superior products to your customers. PURVEY WMS offers a
            standardized and configurable Quality Assurance process that aligns
            with your specific business requirements. You can define and
            implement consistent quality control procedures across all product
            categories, ensuring uniformity and adherence to quality standards.
          </p>
        </div>
      </div>

      <div className="seconddiv-multichannelintegration">
        <h1>Features</h1>
      </div>
      <Container className="seconddiv-orderprocessing-container">
        <div className="valuedelivered-maindiv-orderprocessing">
          <div className="valuedelivered-firstdiv-orderprocessing">
            <img src={improveresouceutilisation} alt="" />
            {/* <h6>Enhanced Efficiency</h6> */}
            <p>
              <b>Detailed Inspection Criteria</b> can be defined through the Quality Assurance feature, covering aspects like physical attributes, functional tests, packaging checks, and more. This ensures each item undergoes a thorough inspection before shipping, guaranteeing top quality and customer satisfaction.
            </p>
          </div>
          <div className="valuedelivered-seconddiv-orderprocessing">
            <img src={efficiency} alt="" />
            {/* <h6>Reduced Complexity</h6> */}
            <p>
              <b>Real-Time Visibility into the Quality Status
              </b> of your inventory is enabled with PURVEY WMS. Track and monitor quality checkpoints, identify potential issues, and take proactive actions to resolve them, ensuring only compliant, high-quality products are dispatched.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src={improvedorderaccuracy} alt="" />
            {/* <h6>Increased Productivity</h6> */}
            <p>
              <b>Generates Automated Quality Alerts</b>  with PURVEY WMS whenever deviations or non-conformances are detected during inspections, enabling timely corrective actions to prevent shipping defective products and uphold your reputation for superior quality.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src={improvedorderaccuracy} alt="" />
            {/* <h6>Improved Resource Utilization</h6> */}
            <p>
              <b>Seamless Integration
              </b>  with various testing equipment, such as scales, scanners, and measuring devices, is provided by our Quality Assurance module. This ensures accurate measurements, efficient data capture during inspections, and reduces manual errors while improving overall efficiency.
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <div class="image-container-multichannelintegration">
          <div class="overlay">
            <p className="mt-3">
              "Quality Assurance process in our advanced WMS, you can ensure
              superior product quality, minimize errors, and maintain customer
              satisfaction. By leveraging our standardized procedures, real-time
              tracking, and automated alerts, you can streamline your quality
              control process, reduce returns, and enhance your brand
              reputation. Choose our WMS to optimize your quality assurance
              operations and deliver excellence in every shipment."
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
                their satisfaction and loyalty.{" "}
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Reduced Returns and Complaints
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

      <Footer />
    </div>
  );
}

export default Qualitycheck;
