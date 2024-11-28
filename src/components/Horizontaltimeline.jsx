import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSun } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const ContentToggle = () => {
  // State to manage which content is visible, only one can be visible at a time
  const [visibleContent, setVisibleContent] = useState("a");

  // State for the content of a, b, c, d

  // Effect to load content on page load
  useEffect(() => {
    setVisibleContent("a"); // Set default content (you can set any default here)
  }, []);

  // Function to handle content change
  const handleClick = (contentKey) => {
    setVisibleContent(contentKey);
  };
  const getButtonStyle = (contentKey) => {
    return contentKey === visibleContent
      ? { backgroundColor: "green", color: "white" }
      : {};
  };

  return (
    <div>
      {/* Render clickable elements for a, b, c, d */}

      <div className="btn-grp-servicepage d-flex mt-3">
        <button
          className="service-button"
          onClick={() => handleClick("a")}
          style={getButtonStyle("a")}
        >
          Implementation
        </button>

        {/* <button className="service-button" onClick={scrollToProcessEnhancement}>
            Process Enhancement
          </button> */}
        <button
          className="service-button ms-2"
          onClick={() => handleClick("b")}
          style={getButtonStyle("b")}
        >
          Post Implementation Support
        </button>
        <button
          className="service-button ms-2"
          onClick={() => handleClick("c")}
          style={getButtonStyle("c")}
        >
          User Training
        </button>
        <button
          className="service-button ms-2"
          onClick={() => handleClick("d")}
          style={getButtonStyle("d")}
        >
          Integration
        </button>
      </div>
      {/* Render only the selected content */}
      <div>
        {visibleContent === "a" && (
          <div>
             <div style={{padding:"20px"}}>
               <h3 className="heading2-servicepage">
              Faster and easier to deploy.
            </h3>
               </div>
            <Row>
              <Col lg={6} className="mt-3">
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "10px 0",
                  }}
                >
                    <span style={{ display: "flex", alignItems: "center" }}>
                   
                    <FontAwesomeIcon
                      icon={faSquare}
                     
                    /> Our implementation process begins with a flexible,
                    rules-based platform built on modern technology and a
                    service-oriented architecture, delivering faster
                    time-to-value.
                  </span>
                </div> */}
              

               <div>
               <span><FontAwesomeIcon icon={faSquare}/> Our implementation process begins with a flexible,
                    rules-based platform built on     <span className="ms-3">modern technology and a
                    service-oriented architecture, delivering faster
                    time-to-value.</span>  </span>
               </div>
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "10px 0",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <FontAwesomeIcon
                      icon={faSquare}
                      style={{ marginRight: "8px" }}
                    />
                    Tailored product features and best practices to streamline
                    each phase of implementation.
                  </span>
                </div> */}
                <br />
                 <span><FontAwesomeIcon icon={faSquare}/>  Tailored product features and best practices to streamline
                 each phase of <span className="ms-3">implementation.</span></span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "10px 0",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <FontAwesomeIcon
                      icon={faSquare}
                      style={{ marginRight: "8px" }}
                    />
                    Industry-specific templates, allowing customers to avoid
                    starting from scratch
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "10px 0",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <FontAwesomeIcon
                      icon={faSquare}
                      style={{ marginRight: "8px" }}
                    />
                    Choice of cloud-based or on-premise deployment models.
                  </span>
                </div>
                <span><FontAwesomeIcon icon={faSquare}/> Intuitive dashboard wizards, screen builders, and a visual workflow editor that utilizes <span className="ms-3"> “if this, then that” logic for scenario setup.</span></span>
              </Col>
              <Col lg={6}>
                <img
                  src="../Assets/multipleordersynchronisation.png"
                  alt="process enhancement images"
                  className="deconsolidation-img"
                />
              </Col>
            </Row>

            <h1
              style={{ textAlign: "center", fontFamily: "pirulen" }}
              className="mt-5"
            >
              Our Approach
            </h1>
            <Container className="mt-3">
              <Row className="d-flex">
                <Col
                  lg={4}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                  <Card
                    style={{ width: "18rem", borderTop: "3px solid blue " }}
                    className="h-100"
                  >
                    <Card.Body>
                      <Card.Title>Configuration</Card.Title>
                      <Card.Text>
                        Leveraging workflow-driven applications, we configure
                        solutions to align with your specific business
                        requirements. Our team ensures that all WMS applications
                        are finely tuned and optimized to support the unique
                        demands of your supply chain operations.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={4}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                  <Card
                    style={{ width: "18rem", borderTop: "3px solid blue " }}
                    className="h-100"
                  >
                    <Card.Body>
                      <Card.Title>Discovery</Card.Title>
                      <Card.Text>
                        We conduct an in-depth analysis of your business to
                        collaborate on identifying the most effective processes
                        and solutions, tailored to address your current
                        challenges and future needs.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={4}
                  md={6}
                  sm={12}
                  className="d-flex align-items-stretch"
                >
                  <Card
                    style={{ width: "18rem", borderTop: "3px solid blue " }}
                    className="h-100"
                  >
                    <Card.Body>
                      <Card.Title>Methodology</Card.Title>
                      <Card.Text>
                        Our rapid implementation methodology enables an average
                        go-live time within a matter of weeks, and for more
                        focused applications, customers can begin capturing
                        results in just a few months.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        {visibleContent === "b" && (
          <div>
            {/* <h2
              style={{ textAlign: "center", fontFamily: "pirulen" }}
              className="mt-5"
            >
              Responsive and Personalized Customer Service
              <hr style={{ border: "4px double blue" }} />
            </h2> */}
             <div style={{padding:"20px"}}>
               <h3 className="heading2-servicepage">
               Responsive and Personalized Customer Service
            </h3>
            <hr style={{ border: "4px double blue",maxWidth:"auto" }} />
               </div>
            <Container>
              <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                  <p className="fs-5">
                    Our size offers unique advantages, particularly in customer
                    service, personalized attention, and support. We’re agile
                    and less constrained by bureaucracy, which means our team is
                    ready to think outside the box to help customers address
                    challenges and capture new opportunities. When your business
                    or your team needs to pivot, you can rely on timely access
                    to the right Nacre system experts, ensuring you’re equipped
                    to adapt quickly to evolving customer and market demands.
                  </p>
                  <Col lg={1}></Col>
                </Col>
              </Row>
             
            </Container>
            <Container>
              <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                  <p className="fs-5">
                  With skilled professionals positioned to support distribution centers worldwide, we offer both remote and on-site assistance.
                  </p>
                  <Col lg={1}></Col>
                </Col>
              </Row>
             
            </Container>
            <Container className="mt-5">
              <Row>
                <Col>
                  <h3>Flexible Support Options</h3>
                  <hr style={{ border: "4px double green", width: "300px" }} />
                  <Row>
                    <Col lg={3}></Col>
                    <Col lg={8}>
                      <p className="fs-5">
                        Nacre system's customer support and technical service
                        teams provide on-site assistance or securely access
                        customer systems remotely to conduct tasks such as
                        diagnostics, troubleshooting, and critical system
                        updates.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>

            <Container className="mt-5">
              <Row>
                <Col>
                  <h3>Customer Experience</h3>
                  <hr style={{ border: "4px double green", width: "300px" }} />
                  <Row>
                    <Col lg={3}></Col>
                    <Col lg={8}>
                      <p className="fs-5">
                        We prioritize swift, effective support to ensure our
                        customers can reach the right expert at the right time
                        for rapid issue resolution.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        {visibleContent === "c" && (
          <div>
            <Row className="d-flex align-items-center">
              <Col lg={6} className="mt-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "10px 0",
                  }}
                >
                  <span
                    style={{ display: "flex", alignItems: "center" }}
                    className="fs-5"
                  >
                    Our customized training materials and curriculum help users
                    become proficient more quickly. Nacre's system ensures that
                    the configured and personalized software training is
                    consistently applied across the enterprise, leading to more
                    successful deployments of supply chain execution software.
                  </span>
                </div>
              </Col>
              <Col lg={6} className="d-flex justify-content-center">
                <img
                  src="../Assets/work3.jpg"
                  alt="process enhancement images"
                  className="deconsolidation-img"
                />
              </Col>
            </Row>

            <Container className="mt-5">
              <Row>
                <Col>
                  <h3>End-To-End Support</h3>
                  <hr style={{ border: "4px double green", width: "300px" }} />
                  <Row>
                    <Col lg={3}></Col>
                    <Col lg={8}>
                      <p className="fs-5">
                      Our customized training materials and curriculum help users become proficient more quickly. Nacre's system ensures that the configured and personalized software training is consistently applied across the enterprise, leading to more successful deployments of supply chain execution software.Our training programs are specifically designed to align with your business's unique needs, requirements, and processes. Nacre system's training experts create customized, high-quality curricula tailored to each customer, ensuring the content is relevant for key personnel—from end-users to supervisors—based on their specific roles and responsibilities.

Nacre system offers specialized training and personalized educational content to help you maximize the potential of your WMS, TMS, and supply chain execution service.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        {visibleContent === "d" && (
          <div>
            {/* <h1 style={{textAlign:"center",fontFamily:"pirulen"}} className='mt-5'>Our Approach</h1> */}
            <Container className="mt-5">
              <Row>
                <Col>
                  <h3>E-Commerce Integration</h3>
                  <hr style={{ border: "4px double green", width: "300px" }} />
                  <Row>
                    <Col lg={3}></Col>
                    <Col lg={8}>
                      <p className="fs-5">
                      In e-commerce, efficient order fulfillment is crucial for meeting customer expectations and driving growth. API-based integrations connect online stores with warehouse systems, enabling real-time order synchronization, inventory management, and streamlined processing. These integrations enhance operational efficiency, improve accuracy, and deliver exceptional customer experiences with scalability and customization options.
                      </p>
                    </Col>

                  </Row>
                </Col>
              </Row>
            </Container>
            <Container className="mt-5">
              <Row>
                <Col>
                  <h3>API  Integration</h3>
                  <hr style={{ border: "4px double green", width: "300px" }} />
                  <Row>
                    <Col lg={3}></Col>
                    <Col lg={8}>
                      <p className="fs-5">
                      As technology evolves, businesses seek to improve efficiency and connectivity. API integration in PURVEY WMS enables seamless data exchange between systems like ERP, CRM, and e-commerce platforms, ensuring real-time synchronization, eliminating manual entry, and reducing errors. It also offers scalability, allowing businesses to grow and integrate new  systems smoothly.
                      </p>
                    </Col>
                    
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container className="mt-5">
              <Row>
                <Col>
                  <h3>IOT Integration</h3>
                  <hr style={{ border: "4px double green", width: "300px" }} />
                  <Row>
                    <Col lg={3}></Col>
                    <Col lg={8}>
                      <p className="fs-5">
                      IOT integration in PURVEY WMS enhances warehouse operations by providing real-time asset tracking, optimizing resource use, improving inventory management, and enabling faster, more accurate order fulfillment, boosting efficiency and customer satisfaction.
                      </p>
                    </Col>
                    
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentToggle;
