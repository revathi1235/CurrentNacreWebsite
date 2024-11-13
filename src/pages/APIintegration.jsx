import React from 'react'
import { Container } from 'react-bootstrap'
import purvey_apora_black from '../Assets/purvey_apora_black.png'
import Chart2 from './Chart2'
import multichannelintegration from '../Assets/work3.jpg'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';

function APIintegration() {
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
        <meta name="description" content="Unlock the benefits of seamless communication and data exchange with API integration in Purvey WMS. Connect your warehouse management system with ERP, CRM, e-commerce platforms, and third-party logistics providers for real-time data synchronization and enhanced efficiency." />
        <meta name="keywords" content="API integration, warehouse management system, WMS, real-time data synchronization, ERP integration, CRM integration, e-commerce platforms, third-party logistics" />
        <meta name="author" content="Purvey WMS" />
        <meta property="og:title" content="API Integration in PURVEY Warehouse Management System" />
        <meta property="og:description" content="Enhance connectivity and improve operational efficiency with API integration in Purvey WMS. Streamline your warehouse processes by integrating with ERP, CRM, and other systems for real-time data exchange." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/api-integration" />
        <title>API Integration in PURVEY WMS</title>
      </Helmet>
      <div style={{height:"40vh"}}>
 <div className='starting-picklistgeneration'>
    <h1 className="gradient-text mt-3">Seamless API Integration for 

    </h1>
    <h3 className="gradient-text">Enhanced Connectivity and Performance</h3>

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={purvey_apora_black} alt="purvey apora black image" style={{height:"80px"}}/></h6>
    </div>
    </div>

    <div style={{height:"20vh"}} className='mt-5'>
    <div>
        <div class="container-chart2">
  <h1 class="level-12 rectangle "   onClick={handlePurveywms}>Purvey</h1>
  <ol class="level-22-wrapper">
    <li>
      <h6 class="level-22 rectangle2" onClick={handleInbountreceipt}>Inbound  Receipt</h6>
     
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
      <h6 class="level-22 rectangle2  bg-success text-white" onClick={handleAPIintegration}>  Api Integration</h6>
     
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
         API Integration
          </h4>
          Quality Assurance process in our PURVEY Warehouse Management System (WMS) is a fully scalable and customizable function. We understand the critical importance of maintaining high-quality standards and ensuring accuracy in every shipment that leaves your warehouse. With our comprehensive Quality Assurance feature within PURVEY WMS, you can streamline your quality control process, minimize errors, and deliver superior products to your customers.
PURVEY WMS offers a standardized and configurable Quality Assurance process that aligns with your specific business requirements. You can define and implement consistent quality control procedures across all product categories, ensuring uniformity and adherence to quality standards.
          </p></div>
   </div> */}

<div className='firstdiv-multichannelintegration ' >
<div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../Assets/apiint.jpg" alt="main image for apiintegration" />
    </div>
</div>
    <div className='multichannelintegration-content'>
    
        <p style={{textAlign:"justify",padding:"40px"}}>As technology continues to evolve, businesses are seeking ways to enhance their operations, improve connectivity, and drive efficiency. API integration in PURVEY WMS allows seamless communication and data exchange between different systems, enabling you to unlock a wide range of benefits.</p>
        <p style={{textAlign:"justify",padding:"40px"}}>API integration bridges the gap between your WMS and other systems, such as ERP, CRM, e-commerce platforms, or third-party logistics providers. This enables real-time data synchronization and eliminates manual data entry, ensuring accurate and up-to-date information across all integrated systems. With enhanced connectivity, you can streamline processes, reduce errors, and improve overall efficiency.</p>
    </div>
   </div>














<Container>
<div class="image-container-multichannelintegration">
  
  <div class="overlay">
    <p className='mt-3'>"
    API integration provides scalability and flexibility to adapt to your changing business needs. As your business grows or diversifies, you can easily integrate new systems or applications into your WMS using APIs. This flexibility allows you to expand your capabilities, integrate with new channels, and accommodate evolving business requirements without disrupting your existing operations."</p>
  </div>
</div>
</Container>


z


<Footer/>
    </div>
  )
}

export default APIintegration