import React from "react";
import work4 from '../Assets/work4.jpg'
import { Container,Row,Col
 } from "react-bootstrap";
 import { Helmet } from 'react-helmet';
 import { useNavigate } from 'react-router-dom';

 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faSquare ,faQuoteLeft,faQuoteRight} from "@fortawesome/free-solid-svg-icons";
 import { Card } from "react-bootstrap";
import Footer from "../components/Footer";
function Deliverymanagementsystem() {
  const navigate=useNavigate()
        const handleRequestdemo=()=>{
            navigate('/contactus')
        }
  return (
    <div>
      <Helmet>
      <title>Warehouse Management: Putaway, Yard & Delivery Efficiency | Delivery Management page</title>

        <meta name="description" content="Optimize warehouse operations with advanced inventory, putaway, fulfillment automation, and yard management to enhance efficiency and customer satisfaction." />
      </Helmet>
      <div className="starting-picklistgeneration  ">
        <h1 className="gradient-text"> Delivery Management System</h1>

        <div className="button-container ms-4"></div>
      </div>




        {/* <div className="yardmanagement-firstdiv">
    <div className="yardmanagement-seconddiv">
      <img src='../../Assets/deliverywms.jpg' alt="delivery wms image" />
    </div>
    <div className="yardmanagement-thirddiv">
      <div className="col-12 d-flex flex-column align-items-center">
        <p className="yardmanagment-content text-justify p-5">
        Route optimization is a critical component in logistics and transportation, where the goal is to find the most efficient routes for vehicles to reduce costs and delays. By leveraging smart algorithms, businesses can optimize routes by considering various factors like traffic conditions, delivery priorities, and proximity.
        </p>

        
      </div>
    </div>
  </div> */}

<div style={{height:'5vh'}} className='mob-multi-space'></div>
 <div className='multi-main'>
<div className='multi-img-div'>
<img src="../../Assets/del.jpeg" alt="" />

</div>
<div className='multi-content'>
  <p style={{fontSize:'23px'}}>  <FontAwesomeIcon icon={faQuoteLeft} style={{color:'blue',fontSize:"30px"}}/> Route optimization is a critical component in logistics and transportation, where the goal is to find the most efficient routes for vehicles to reduce costs and delays. By leveraging smart algorithms, businesses can optimize routes by considering various factors like traffic conditions, delivery priorities, and proximity.
  <FontAwesomeIcon icon={faQuoteRight} style={{color:'blue',fontSize:"30px"}}/></p>
</div>
</div>


<div style={{height:'5vh'}} className='mob-multi-space'></div>











<Container className="deliverymanagement-system-seconddiv">
              <Row>
                <Col className="d-flex flex-column align-items-center">
                  <h3>Factors Considered in Route Optimization</h3>
                  <hr style={{ border: "4px double green", width: "300px" }} />
                
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
              <div className="py-5">
              <p className="fs-5 fw-bold">  &#9632; Traffic Conditions:</p>
              <hr style={{ border: "4px double green", width: "200px" }} />
           
              </div>
                </Col>
             
            
             </Row>
         
            </Container>
            <Container >
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
                    style={{ width: "30rem", borderTop: "3px solid blue " ,borderBottom: "3px solid green "}}
                    className="h-100"
                  >
                    <Card.Body>
                     
                      <Card.Text>
                      &#9632; Real-time traffic data helps avoid congested areas and find alternate routes.

                      </Card.Text>
                      <Card.Text>
                      &#9632; Minimizes delays caused by accidents, road closures, or heavy traffic.


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
                   
                      <Card.Text>
                      &#9632; Routes are optimized based on urgency, with priority deliveries given faster or more direct routes.
                      </Card.Text>
                      <Card.Text>
                      &#9632; Helps meet customer deadlines while optimizing vehicle capacity.

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
              <p className="fs-5 fw-bold">  &#9632; Delivery Priorities</p>
              <hr style={{ border: "4px double green", width: "200px" }} />
           
              </div>
                </Col>
             
            
             </Row>
           </Container>
           <Container>
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
                    
                      <Card.Text>
                      &#9632; Routes are optimized based on urgency, with priority deliveries given faster or more direct routes.
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
                     
                      <Card.Text>
                      &#9632;   Helps meet customer deadlines while optimizing vehicle capacity.                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>




            <Container>
           <Row>
                <Col lg={4}>
              <div className="py-5">
              <p className="fs-5 fw-bold">  &#9632; Proximity and Geographical Considerations:</p>
              <hr style={{ border: "4px double green", width: "300px" }} />
           
              </div>
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
                 
                      <Card.Text>
                      &#9632;  Routes are designed based on geographic proximity to reduce unnecessary detours.                      </Card.Text>
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
                      <Card.Text>
                      &#9632;   Ensures that vehicles take the shortest or most efficient paths to reduce travel time.                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>






            <Container>
           <Row>
                <Col lg={4}>
              <div className="py-5">
              <p className="fs-5 fw-bold">  &#9632; Weather and Environmental Factors :</p>
              <hr style={{ border: "4px double green", width: "300px" }} />
           
              </div>
                </Col>
             
             
             </Row>
           </Container>
           <Container className="mb-3">
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
                      <Card.Text>
                      &#9632;  Weather conditions such as rain or snow can impact route planning, and smart algorithms adjust accordingly.                    </Card.Text>
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
                
                      <Card.Text>
                      &#9632;  Helps avoid areas prone to flooding or other hazards.                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>














            <div className='valuedelivered-section-inbountreceipt'>
  <div className='value-del-aporafulfillment'>
    <h1  className="subheading-dms">Key Benefits of Route Optimization
    </h1>
    </div>
    <div class="container-inbountreceipt mt-5">
          <div className="row-inbountreceipt">
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
              Cost Reduction
              </h2>
              <p class="service_para-inbountreceipt">
              Optimized routes lead to lower fuel consumption, reduced vehicle wear, and fewer overtime costs.           </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
              Faster Deliveries
              </h2>
              <p class="service_para-inbountreceipt">
              By avoiding traffic congestion and inefficiencies, deliveries are made faster, improving customer satisfaction.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
              Improved Resource Utilization
              </h2>
              <p class="service_para-inbountreceipt">
              Vehicles are used more efficiently, reducing idle time and enhancing overall productivity.
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





  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<button className="custom-btn btn-5">
            <span onClick={handleRequestdemo}>Request Demo</span>
          </button>
</div>
<div style={{height:'4vh'}}></div>



<Footer/>
    </div>
  );
}

export default Deliverymanagementsystem;
