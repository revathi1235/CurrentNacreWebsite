import React from "react";
import { Container } from "react-bootstrap";
import purvey_apora_black from "../Assets/purvey_apora_black.png";
import Chart2 from "./Chart2";
import multichannelintegration from "../Assets/work3.jpg";
import improveresouceutilisation from "../Assets/Improveresourceutilisation.svg";
import efficiency from "../Assets/Efficiency.svg";
import improvedorderaccuracy from "../Assets/improvedorderaccuracy.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Purveydeconsolidation() {
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
          <h2 className="gradient-text">
            Maximize Efficiency with Expert Deconsolidation
            <br />
          </h2>
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
                    class="level-22 rectangle2 me-2  bg-success text-white"
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
          DECONSOLIDATION
          </h4>Purvey WMS's Deconsolidation Module, is an essential component of our advanced Warehouse Management System. Designed to streamline the process of breaking down consolidated shipments, our module enables efficient sorting, labelling, and allocation of individual items or smaller units. With Purvey WMS, you can optimize your deconsolidation operations, reduce processing time, and ensure accurate distribution to their respective destinations or storage locations. <br />
          Purvey WMS simplifies the unpacking and unloading process of consolidated shipments. The software provides clear guidance to warehouse staff, ensuring that items are efficiently unpacked and ready for further processing.
          </p></div>
   </div> */}

      <div className="firstdiv-multichannelintegration ">
        <div className="multichannelintegration-image wrapper">
          <img src={multichannelintegration} alt="" className="image--cover" />
        </div>
        <div className="multichannelintegration-content">
          <p style={{ textAlign: "justify", padding: "40px" }}>
            Purvey WMS's Deconsolidation Module, is an essential component of
            our advanced Warehouse Management System. Designed to streamline the
            process of breaking down consolidated shipments, our module enables
            efficient sorting, labelling, and allocation of individual items or
            smaller units. With Purvey WMS, you can optimize your
            deconsolidation operations, reduce processing time, and ensure
            accurate distribution to their respective destinations or storage
            locations. <br />
            Purvey WMS simplifies the unpacking and unloading process of
            consolidated shipments. The software provides clear guidance to
            warehouse staff, ensuring that items are efficiently unpacked and
            ready for further processing.
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
              <b>Sorting and Allocating Individual Items</b>  is made easy with our Deconsolidation Module, which organizes items based on predefined rules or criteria such as SKU, destination, or order number. This ensures accurate placement for seamless distribution or storage.
            </p>
          </div>
          <div className="valuedelivered-seconddiv-orderprocessing">
            <img src={efficiency} alt="" />
            {/* <h6>Reduced Complexity</h6> */}
            <p>
              <b>Real-Time Verification and Quality Checks</b>  with Purvey WMS ensure accuracy on deconsolidated items, reducing discrepancies and upholding high standards of product quality and integrity.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src={improvedorderaccuracy} alt="" />
            {/* <h6>Increased Productivity</h6> */}
            <p>
              <b>Generation of Labels or Barcodes</b>  through the Deconsolidation Module ensures proper identification, traceability, and seamless tracking of deconsolidated items throughout the warehouse or supply chain.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src={improvedorderaccuracy} alt="" />
            {/* <h6>Improved Resource Utilization</h6> */}
            <p>
              <b>Appropriate Destination or Storage Location</b> is achieved through
              AI-powered order synchronization, which considers the proximity of
              items within the warehouse. By synchronizing orders based on
              similar item locations, staff can navigate efficiently, minimizing
              travel time and maximizing the use of labor and equipment,
              ultimately leading to significant cost savings for the operation.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-orderprocessing">
            <img src={improvedorderaccuracy} alt="" />
            {/* <h6>Improved Resource Utilization</h6> */}
            <p>
              <b>Generates Detailed Documentation
              </b>  and reports through our Deconsolidation Module, capturing records of received items, destination assignments, discrepancies, and other relevant data for audit purposes and performance analysis.
            </p>
          </div>  
        </div>
      </Container>

      <Container>
        <div class="image-container-multichannelintegration">
          <div class="overlay">
            <p>
              "If you are looking for a way to improve your business's
              efficiency and profitability, a cross-docking system is a valuable
              tool that can help you achieve your goals."
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
                Streamlined Operations
              </h2>
              <p class="service_para-inbountreceipt">
                With Purvey WMS's Deconsolidation Module, you can streamline
                your warehouse operations by reducing the time and effort
                required to break down consolidated shipments. This results in
                faster order processing and improved overall efficiency.{" "}
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Enhanced Inventory Control
              </h2>
              <p class="service_para-inbountreceipt">
                Accurate sorting, tracking, and inventory updates provided by
                our module contribute to improved inventory control. You can
                reduce stockouts, minimize excess inventory, and ensure optimal
                stock management throughout your warehouse.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">Increased Accuracy</h2>
              <p class="service_para-inbountreceipt">
                By leveraging the automation and verification capabilities of
                Purvey WMS, you can significantly reduce errors in the
                deconsolidation process. This leads to enhanced accuracy,
                reducing the risk of misplacements or shipping incorrect items.
              </p>
            </div>
          </div>
        </div>
        <div class="container-inbountreceipt">
          <div className="row-inbountreceipt">
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Improved Customer Satisfaction
              </h2>
              <p class="service_para-inbountreceipt">
                Efficient deconsolidation with Purvey WMS means faster order
                fulfilment and accurate deliveries. This translates into
                improved customer satisfaction, as orders are processed
                promptly, and products reach customers in a timely manner.{" "}
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Scalability and Integration
              </h2>
              <p class="service_para-inbountreceipt">
                Our Deconsolidation Module seamlessly integrates with other
                modules within Purvey WMS and can scale alongside your growing
                business needs. Whether you handle a few shipments or high
                volumes, our software adapts to support your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Purveydeconsolidation;
