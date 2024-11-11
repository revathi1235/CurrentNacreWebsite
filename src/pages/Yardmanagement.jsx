import React, { useState } from "react";
import work4 from '../Assets/work4.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { Container,Row,Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
function Yardmanagement() {
    // const [isvisibleone, setIsvisibleone] = useState(true);
    // const [isvisibletwo, setIsvisibletwo] = useState(false);
    // const [isvisiblethree, setIsvisiblethree] = useState(false);
  
    // const handleAddwarehouse = () => {
    //   setIsvisibleone(true);
    //   setIsvisibletwo(false);
    //   setIsvisiblethree(false);
    // };
  
    // const handleAdddep = () => {
    //   setIsvisibleone(false);
    //   setIsvisibletwo(true);
    //   setIsvisiblethree(false);
    // };
  
    // const handleAddfec = () => {
    //   setIsvisibleone(false);
    //   setIsvisibletwo(false);
    //   setIsvisiblethree(true);
    // };
  return (
    <div>
      <div className="starting-picklistgeneration  ">
        <h1 className="gradient-text">Yard Management</h1>
        <div className="button-container ms-4"></div>
      </div>

      {/* <div id="tree">
  <ul>
  <li>
  <span className="yard-heading-chart text-white">Yard Management</span>
      <ul>
        <li><span onClick={handleAddwarehouse}>Add Warehouse</span>
         
        </li>
        <li><span onClick={handleAdddep}>Add Department & Sub-Department</span>
        </li>   
         <li><span onClick={handleAddfec}>Add Fecilities</span>
        </li>  
        </ul>
        </li>
        </ul> 
</div> */}

{/* {isvisibleone && (
        <div>
          <h1>Warehouse Section</h1>
        </div>
      )}

      {isvisibletwo && (
        <div>
          <h2>Department Section</h2>
        </div>
      )}

      {isvisiblethree && (
        <div>
          <h3>Facilities Section</h3>
        </div>
      )} */}

<div className="yardmanagement-firstdiv">
  <div className="yardmanagement-seconddiv">
    <img src={work4} alt="" className="image--cover" />
  </div>
  <div className="yardmanagement-thirddiv">
    <div className="col-12 d-flex flex-column align-items-center">
      <p className="yardmanagment-content text-justify p-4">
        Effective yard management is critical to warehouse operations. Without clear zone definitions, and proper labeling of aisles, racks, and totes, warehouses face numerous challenges, including:
      </p>

      <div className="d-block flex-column align-items-center">
        <p className="mb-2">
          <FontAwesomeIcon icon={faSquare} /> Misplacement of items
        </p>
        <p className="mb-2">
          <FontAwesomeIcon icon={faSquare} /> Increased risk of item expiry
        </p>
        <p className="mb-2">
          <FontAwesomeIcon icon={faSquare} /> Operational inefficiencies
        </p>
        <p className="mb-2">
          <FontAwesomeIcon icon={faSquare} /> Safety hazards
        </p>
        <p className="mb-2">
          <FontAwesomeIcon icon={faSquare} /> Financial losses
        </p>
      </div>
    </div>
  </div>
</div>












<div className="seconddiv-workforcemanagement-yardmanagement" >
        <h1 className="mt-4" style={{fontFamily:"pirulen"}}>Purvey's Yard Management Solution</h1>
      </div>


<Container className="mt-5">
              <Row>
                <Col className="d-flex flex-column align-items-center">
                  <h3>Key Features of Our Yard Management Solution</h3>
                  <hr style={{ border: "4px double green", width: "300px" }} />
                
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
              <div className="py-5">
              <p className="fs-5 fw-bold">  &#9632; Unique QR Code Labels for Zones :</p>
              <hr style={{ border: "4px double green", width: "300px" }} />
           
              </div>
                </Col>
             
              <Col lg={7} className="mt-5">
              <p className="fs-5">Our yard management function generates unique QR code labels for each defined zone within the warehouse yard. This labeling system provides :</p>
              </Col>
             </Row>
         
            </Container>
            <Container className="mt-3">
              <Row className="d-flex">
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                
                </Col>
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                  <Card
                    style={{ width: "24rem", borderTop: "3px solid blue " ,borderBottom: "3px solid green "}}
                    className="h-100"
                  >
                    <Card.Body>
                      <Card.Title>Clear Zone Identification</Card.Title>
                      <Card.Text>
                      Each zone is distinctly marked, allowing for easy navigation and organization.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                  <Card
                    style={{ width: "24rem", borderTop: "3px solid blue ",borderBottom: "3px solid green " }}
                    className="h-100"
                  >
                    <Card.Body>
                      <Card.Title>Enhanced Yard Organization    </Card.Title>
                      <Card.Text>
                      QR code labels offer a quick, scannable reference for accurate item placement and retrieval.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>

           <Container>
           <Row>
                <Col lg={4}>
              <div className="py-5">
              <p className="fs-5 fw-bold">  &#9632; Improved Item Placement and Retrieval Processes:</p>
              <hr style={{ border: "4px double green", width: "300px" }} />
           
              </div>
                </Col>
             
              <Col lg={7} className="mt-5">
              <p className="fs-5">With labeled zones, aisles, racks, and totes, locating inventory becomes faster and more efficient   :</p>
              </Col>
             </Row>
           </Container>
           <Container className="mt-3">
              <Row className="d-flex">
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                
                </Col>
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                  <Card
                    style={{ width: "24rem", borderTop: "3px solid blue ",borderBottom: "3px solid green " }}
                    className="h-100"
                  >
                    <Card.Body>
                      <Card.Title>Time Savings</Card.Title>
                      <Card.Text>
                      Staff can quickly identify item locations without extended searching.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                  <Card
                    style={{ width: "24rem", borderTop: "3px solid blue ",borderBottom: "3px solid green " }}
                    className="h-100"
                  >
                    <Card.Body>
                      <Card.Title>Reduced Misplacement Risks</Card.Title>
                      <Card.Text>
                      Clearly marked zones minimize errors in item placement, reducing the chance of loss or expiration.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>




            <Container>
           <Row>
                <Col lg={4}>
              <div className="py-5">
              <p className="fs-5 fw-bold">  &#9632; Streamlined Operations for Higher Efficiency :</p>
              <hr style={{ border: "4px double green", width: "300px" }} />
           
              </div>
                </Col>
             
              <Col lg={7} className="mt-5">
              <p className="fs-5">Enhanced organization within the yard leads to smoother daily operations              :</p>
              </Col>
             </Row>
           </Container>
           <Container className="mt-3">
              <Row className="d-flex">
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                
                </Col>
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                  <Card
                    style={{ width: "24rem", borderTop: "3px solid blue ",borderBottom: "3px solid green " }}
                    className="h-100"
                  >
                    <Card.Body>
                      <Card.Title>Minimized Delays</Card.Title>
                      <Card.Text>
                      Clearly defined zones and labeled areas prevent delays in put-away and retrieval processes.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                  <Card
                    style={{ width: "24rem", borderTop: "3px solid blue ",borderBottom: "3px solid green " }}
                    className="h-100"
                  >
                    <Card.Body>
                      <Card.Title>Optimized Task Management</Card.Title>
                      <Card.Text>
                      Tasks become more predictable, reducing idle time and bottlenecks.                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>






            <Container>
           <Row>
                <Col lg={4}>
              <div className="py-5">
              <p className="fs-5 fw-bold">  &#9632; Timely Deliveries and Improved Customer Satisfaction :</p>
              <hr style={{ border: "4px double green", width: "300px" }} />
           
              </div>
                </Col>
             
              <Col lg={7} className="mt-5">
              <p className="fs-5">Efficiency gains from streamlined yard management positively impact customer experience   :</p>
              </Col>
             </Row>
           </Container>
           <Container className="mt-3">
              <Row className="d-flex">
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                
                </Col>
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                  <Card
                    style={{ width: "24rem", borderTop: "3px solid blue ",borderBottom: "3px solid green " }}
                    className="h-100"
                  >
                    <Card.Body>
                      <Card.Title>Enhanced Delivery Timelines</Card.Title>
                      <Card.Text>
                      Faster access to inventory allows for timely order fulfillment.                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                  <Card
                    style={{ width: "24rem", borderTop: "3px solid blue ",borderBottom: "3px solid green " }}
                    className="h-100"
                  >
                    <Card.Body>
                      <Card.Title>Greater Customer Satisfaction</Card.Title>
                      <Card.Text>
                      With reduced delays and a reliable delivery process, customer satisfaction and loyalty improve.                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
























            <div className='valuedelivered-section-inbountreceipt'>
  <div className='value-del-aporafulfillment '>
    <h1 className="common-font-family-heading">Benefits of Implementing Purvey’s Yard Management Solution </h1>
    </div>
    <div class="container-inbountreceipt mt-5">
          <div className="row-inbountreceipt">
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
              Increased Warehouse Efficiency
              </h2>
              <p class="service_para-inbountreceipt">
              Streamlined workflows save time and reduce costs.              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
              Reduced Operational Costs
              </h2>
              <p class="service_para-inbountreceipt">
              Fewer misplaced items and expired goods mean less waste.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
              Enhanced Safety
              </h2>
              <p class="service_para-inbountreceipt">
              Organized zones decrease the likelihood of accidents and improve workplace safety.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
              Improved Financial Performance
              </h2>
              <p class="service_para-inbountreceipt">
              Efficiency and reduced loss translate to better financial outcomes for your business.
              </p>
            </div>
          </div>
        </div>
  </div>
    </div>
  );
}

export default Yardmanagement;
