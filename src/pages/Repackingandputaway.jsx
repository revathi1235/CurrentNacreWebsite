import React from 'react'
import { Container } from 'react-bootstrap'
import purvey_apora_black from '../Assets/purvey_apora_black.png'
import Chart2 from './Chart2'
import multichannelintegration from '../Assets/work3.jpg'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import efficiency from '../Assets/Efficiency.svg'
import './commoncss.css'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';
import {Row,Col,Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons'


function Repackingandputaway() {
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The Repacking & Put Away module in PURVEY WMS optimizes warehouse operations by simplifying repacking, updating packaging information, and ensuring accurate inventory management for efficient order fulfillment." />
        <meta name="keywords" content="repacking, warehouse management system, WMS, put away, inventory management, order fulfillment, packaging, warehouse optimization" />
        <meta name="author" content="Purvey WMS" />
        <meta property="og:title" content="Repacking & Put Away Module - PURVEY Warehouse Management System" />
        <meta property="og:description" content="Optimize warehouse operations with the Repacking & Put Away module in PURVEY WMS. Streamline repacking, manage packaging, and maintain accurate inventory for efficient order fulfillment and storage." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/repacking-put-away" />
        <title>Repacking & Put Away Module - PURVEY WMS</title>
      </Helmet>
      <div style={{height:"40vh"}}>
 <div className='starting-picklistgeneration'>
    <h1 className="gradient-text">Efficient Repacking and Put-Away Solutions 

    <br /></h1>
    <h3 className="gradient-text">for Streamlined Operations</h3>

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={purvey_apora_black} alt="" style={{height:"80px"}}/></h6>
    </div>
    </div>

    <div style={{height:"20vh"}} className='mt-5'>
    <div>
        <div class="container-chart2">
  <h1 class="level-12 rectangle "   onClick={handlePurveywms}>Purvey</h1>
  <ol class="level-22-wrapper">
    <li>
      <h6 class="level-22 rectangle2" onClick={handleInbountreceipt}>Inbound Receipt</h6>
     
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
      <h6 class="level-22 rectangle2  bg-success text-white" onClick={handleRepackingandputaway}>Repacking and Putaway</h6>
     
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

 </div>



   {/* <div className='firstdiv-multichannelintegration ' >
    <div className='multichannelintegration-image'>
        <img src={multichannelintegration} alt="" />
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>
          <h4 style={{fontFamily:"pirulen",fontSize:"30px",letterSpacing:"3px"}}>
        Repacking and Putaway
          </h4>
          Our cutting-edge PURVEY Warehouse Management System introduces a powerful Repacking & Put Away module designed to optimize your warehouse operations. With our advanced features and user-friendly interface, you can revolutionize your repacking and storage processes for enhanced efficiency and productivity.
          Our Repacking & Put Away module simplifies the repacking process by providing intuitive tools to manage and track repackaged items. Seamlessly break down or combine products, update packaging information, and maintain accurate inventory records. This ensures precision in order fulfilment and inventory management.            </p></div>
   </div> */}

{/* <div className='firstdiv-multichannelintegration ' >
<div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../Assets/repa.jpg" alt="" />
    </div>
</div>
    <div className='multichannelintegration-content'>
    
        <p style={{textAlign:"justify",padding:"40px"}}> Our cutting-edge PURVEY Warehouse Management System introduces a powerful Repacking & Put Away module designed to optimize your warehouse operations. With our advanced features and user-friendly interface, you can revolutionize your repacking and storage processes for enhanced efficiency and productivity.
        Our Repacking & Put Away module simplifies the repacking process by providing intuitive tools to manage and track repackaged items. Seamlessly break down or combine products, update packaging information, and maintain accurate inventory records. This ensures precision in order fulfilment and inventory management.    </p>
    </div>
   </div> */}


<div style={{height:'30vh'}} className='mob-multi-space'></div>
<div className='multi-main'>
<div className='multi-img-div'>

<p className='fs-5'> <FontAwesomeIcon icon={faQuoteLeft} style={{color:'blue',fontSize:"30px"}}/> Our cutting-edge PURVEY Warehouse Management System introduces a powerful Repacking & Put Away module designed to optimize your warehouse operations. With our advanced features and user-friendly interface, you can revolutionize your repacking and storage processes for enhanced efficiency and productivity.
Our Repacking & Put Away module simplifies the repacking process by providing intuitive tools to manage and track repackaged items. Seamlessly break down or combine products, update packaging information, and maintain accurate inventory records. This ensures precision in order fulfilment and inventory management. <FontAwesomeIcon icon={faQuoteRight} style={{color:'blue',fontSize:"30px"}}/></p>
</div>
<div className='multi-content'>
<img src="../Assets/repa.jpg" alt="" />
</div>
</div>








<div className="container" >
<div style={{height:'10vh'}}>
</div>
<h1 style={{textAlign:'center',fontFamily:'good Times'}}>Features</h1>
<div style={{height:'3vh'}}>
</div>
    <Row className='py-5'>
        <Col md={5} className='total-div-repackputaway'>  {/* Added text-center here */}
        <img src="../Assets/Repackingputaway.jpg"  />

        </Col>
        <Col md={6} className="cards-column">
            <Row className="justify-content-center d-block">
                <Col md={12} className="mb-4">
                    <Card style={{ width: '40rem' ,borderTop:'4px solid green'}}>
                        <Card.Body>
                            <Card.Title>Streamlining Operations and Maximizing Storage Capacity</Card.Title>
                            <Card.Text>
                            our WMS software’s Repacking & Put Away module uses intelligent algorithms to assign the optimal storage location for repacked items. This reduces wasted space and minimizes retrieval times, enhancing overall warehouse efficiency.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} className="mb-4">
                    <Card style={{ width: '40rem',borderTop:'4px solid green' }}>
                        <Card.Body>
                            <Card.Title>Organized Storage & Tracking Efficiency </Card.Title>
                            <Card.Text>
                            are at your fingertips with our comprehensive location management capabilities. Define and manage location hierarchies, assign dedicated storage areas for repacked items, and easily monitor the availability and capacity of each location, eliminating time wasted on searching for misplaced items.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} className="mb-4">
                    <Card style={{ width: '40rem',borderTop:'4px solid green' }}>
                        <Card.Body>
                            <Card.Title>Intelligent Put-Away Strategies </Card.Title>
                            <Card.Text>
                            are tailored to your specific needs with our software. Whether it’s random put-away, zone-based storage, or dynamic slotting, our module seamlessly applies these strategies to enhance operational efficiency and ensure the optimal method for your warehouse.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} className="mb-4">
                    <Card style={{ width: '40rem',borderTop:'4px solid green' }}>
                        <Card.Body>
                            <Card.Title>Comprehensive Tasks Assignment </Card.Title>
                            <Card.Text>
                            is made easy with our Repacking & Put Away module, which generates detailed tasks displayed on handheld devices or management terminals. These tasks specify the repacked items and their designated storage locations, ensuring accuracy and boosting productivity for warehouse operators.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Col>
    </Row>
</div>

















{/* <Container  className='seconddiv-orderprocessing-container'>
 

    <div className='valuedelivered-maindiv-orderprocessing' >

  <div className='valuedelivered-firstdiv-orderprocessing'>
    <img src='../../Assets/storagecapacity.jpg' alt="" />
    <p><b>Streamlining Operations and Maximizing Storage Capacity</b>  our WMS software’s Repacking & Put Away module uses intelligent algorithms to assign the optimal storage location for repacked items. This reduces wasted space and minimizes retrieval times, enhancing overall warehouse efficiency.</p>
  </div>
  <div className='valuedelivered-seconddiv-orderprocessing'>
    <img src='../../Assets/scalabilityandflexibility.jpg' alt="" />
    <p><b>Organized Storage & Tracking Efficiency</b> are at your fingertips with our comprehensive location management capabilities. Define and manage location hierarchies, assign dedicated storage areas for repacked items, and easily monitor the availability and capacity of each location, eliminating time wasted on searching for misplaced items.</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'>
    <img src='../../Assets/putaway.jpg' alt="" />
    <p><b> Intelligent Put-Away Strategies
    </b> are tailored to your specific needs with our software. Whether it’s random put-away, zone-based storage, or dynamic slotting, our module seamlessly applies these strategies to enhance operational efficiency and ensure the optimal method for your warehouse.</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'>
    <img src='../../Assets/assignment.jpg' alt="" />
    <p><b>Comprehensive Tasks Assignment
    </b> is made easy with our Repacking & Put Away module, which generates detailed tasks displayed on handheld devices or management terminals. These tasks specify the repacked items and their designated storage locations, ensuring accuracy and boosting productivity for warehouse operators.</p>
  </div>
</div>
</Container> */}


<Container >
<div class="image-container-multichannelintegration">
  
  <div class="overlay">
    <p >Transform your warehouse into a well-oiled machine with our state-of-the-art Repacking & Put Away module. Experience the benefits of optimized storage space, efficient repacking processes, and increased operational productivity.</p>
  </div>
</div>
</Container>



<div className='valuedelivered-section-inbountreceipt'> 
  <div className='value-del-aporafulfillment'>
    <h1 style={{fontSize:"30px",marginTop:"50px"}}>Value Delivered</h1>
    </div>
    <div class="container-inbountreceipt">
          <div className="row-inbountreceipt">
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
               Optimized Storage Space
              </h2>
              <p class="service_para-inbountreceipt">
              The Repacking & Put Away module helps you maximize your warehouse's storage capacity by efficiently repacking items and utilizing available space more effectively. With intelligent algorithms and storage allocation strategies, you can avoid wasted space and ensure optimal utilization of every inch of your warehouse.{" "}
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
               Improved Inventory Accuracy
              </h2>
              <p class="service_para-inbountreceipt">
              By accurately repacking items and updating packaging information within the WMS software, you can maintain precise inventory records. This reduces the risk of discrepancies, improves inventory accuracy, and enables seamless order fulfilment. Real-time updates ensure that your inventory information remains up to date at all times.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">Enhanced Operational Efficiency</h2>
              <p class="service_para-inbountreceipt">
              The module streamlines the repacking and put-away processes, reducing manual effort and minimizing errors. With clear instructions and tasks assigned to warehouse operators, you can achieve faster and more accurate handling of repacked items. This results in increased operational efficiency and overall productivity. 
              </p>
            </div>
          </div>
        </div>
        <div class="container-inbountreceipt">
          <div className="row-inbountreceipt">
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
             Faster Order Fulfillment
              </h2>
              <p class="service_para-inbountreceipt">
              With optimized storage allocation and streamlined processes, locating and retrieving repacked items becomes quicker and easier. Warehouse operators can efficiently access the right items in designated locations, enabling faster order fulfilment and ensuring customer satisfaction with prompt deliveries.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
               Increased Flexibility
              </h2>
              <p class="service_para-inbountreceipt">
              Repacking & Put Away in WMS provides the flexibility to break down or combine products as needed, allowing you to adapt to changing customer demands and market trends. This flexibility enables you to efficiently manage product variations, bundle products for promotions, or customize orders based on customer preferences.              
              </p>
            </div>
          
          </div>
        </div>
  </div>


<Footer/>

    </div>
  )
}

export default Repackingandputaway