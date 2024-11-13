import React from 'react'
import { Container } from 'react-bootstrap'
import purvey_apora_black from '../Assets/purvey_apora_black.png'
import Chart2 from './Chart2'
import multichannelintegration from '../Assets/work3.jpg'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
// import scalabilityandflexibility from '../Assets/scalabilityandflexibility.svg'
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';

function Crossdocking() {
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
        <meta name="description" content="Efficient order fulfillment is critical to success in today's fast-paced business environment. Cross-docking reduces cycle times by sorting and consolidating goods for direct outbound shipping, improving customer satisfaction." />
        <meta name="keywords" content="order fulfillment, cross-docking, efficient shipping, logistics, customer satisfaction, order processing, cycle time reduction" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Efficient Order Fulfillment with Cross-Docking" />
        <meta property="og:description" content="Improve order fulfillment efficiency and customer satisfaction with cross-docking. Sort and consolidate goods for immediate outbound shipping, reducing cycle times and improving business competitiveness." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/order-fulfillment" />
        <title>Order Fulfillment & Cross-Docking Process</title>
      </Helmet>
      <div style={{height:"40vh"}}>
 <div className='starting-picklistgeneration'>
    <h1 className="gradient-text">Maximize Efficiency with Our Cross Docking Services
    <br /></h1>
    {/* <h3 className="gradient-text">Across All Touchpoints.</h3> */}

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={purvey_apora_black} alt="purvey apora black" style={{height:"80px"}}/></h6>
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
      <h6 class="level-22 rectangle2  bg-success text-white" onClick={handleCrossdocking}> Cross Docking</h6>
     
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

 </div>



   {/* <div className='firstdiv-multichannelintegration ' >
    <div className='multichannelintegration-image'>
        <img src={multichannelintegration} alt="" />
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"20px"}}>
          <h4 style={{fontFamily:"pirulen",fontSize:"30px",letterSpacing:"3px"}}>
          CROSS DOCKING</h4>In today's fast-paced business environment, efficient order fulfilment is critical to success. Customers expect their orders to be processed and delivered quickly and accurately, and businesses that cannot meet these expectations risk losing customers to competitors.
          One way to improve order fulfilment efficiency is to use a cross-docking system. Cross-docking is a process in which incoming goods are sorted and consolidated directly for outbound shipping, without being placed in long-term storage. This can significantly reduce order fulfilment cycle times and improve customer satisfaction.</p>
    </div>
   </div> */}
<div className='firstdiv-multichannelintegration ' >
<div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../Assets/crossdock.jpg" alt="cross docking image" />
    </div>
</div>
    <div className='multichannelintegration-content'>
    
        <p style={{textAlign:"justify",padding:"40px"}}>In today's fast-paced business environment, efficient order fulfilment is critical to success. Customers expect their orders to be processed and delivered quickly and accurately, and businesses that cannot meet these expectations risk losing customers to competitors.
        One way to improve order fulfilment efficiency is to use a cross-docking system. Cross-docking is a process in which incoming goods are sorted and consolidated directly for outbound shipping, without being placed in long-term storage. This can significantly reduce order fulfilment cycle times and improve customer satisfaction.</p>
    </div>
   </div>











<div className='seconddiv-multichannelintegration'>
    <h1>Features</h1>
</div>
<Container  className='seconddiv-orderprocessing-container'>
 

    <div className='valuedelivered-maindiv-orderprocessing' >

  <div className='valuedelivered-firstdiv-orderprocessing'>
    <img src='../../Assets/autopocessing.jpg' alt="autp processing image" />
    {/* <h6>Enhanced Efficiency</h6> */}
    <p><b>Automated Processing</b>  with the PURVEY WMS cross-docking function streamlines the entire process—from sorting and consolidation to outbound shipping—eliminating manual intervention and significantly reducing processing time.</p>
  </div>
  <div className='valuedelivered-seconddiv-orderprocessing'>
    <img src='../../Assets/mobile.jpeg' alt="mole image" />
    {/* <h6>Reduced Complexity</h6> */}
    <p><b>Hybrid Web & Mobile App Solutions</b> in the PURVEY WMS cross-docking function offer real-time visibility into all cross-docked orders, enabling businesses to track shipments, monitor progress, and receive instant notifications on key order fulfillment milestones.</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'> 
    <img src='../../Assets/qcontrol.jpg' alt="qcontrol image" />
    {/* <h6>Increased Productivity</h6> */}
    <p><b>Built-in Quality Control </b> checks within the PURVEY WMS cross-docking function ensure the accuracy and integrity of goods being processed. Any discrepancies or issues are promptly flagged for resolution, minimizing errors and enhancing customer satisfaction.</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'>
    <img src='../../Assets/decmaking.jpg' alt="decision making image" />
    {/* <h6>Improved Resource Utilization</h6> */}
    <p><b>Data-Driven Decision Making</b> is enabled by the PURVEY WMS cross-docking function, offering insights into order processing times, dock utilization, carrier performance, and overall efficiency. These insights help identify improvement areas and enhance order fulfillment efficiency.</p>
  </div>
</div>
</Container>



<Container>
<div class="image-container-multichannelintegration">
  
  <div class="overlay">
    <p >"If you are looking for a way to improve your business's efficiency and profitability, a cross-docking system is a valuable tool that can help you achieve your goals."</p>
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
            Reduced Inventory Costs
              </h2>
              <p class="service_para-inbountreceipt">
              Cross-docking eliminates the need for long-term storage, which can help businesses reduce inventory costs{" "}
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
               Improved Cash Flow
              </h2>
              <p class="service_para-inbountreceipt">
              Cross-docking can help businesses improve cash flow by reducing the amount of time that goods are tied up in inventory.
              </p>
            </div>
            <div className="service-inbountreceipt rainbow-inbountreceipt">
              <h2 class="service_heading-inbountreceipt">
                Increased Customer Satisfaction
              </h2>
              <p class="service_para-inbountreceipt">
              Cross-docking can help businesses improve customer satisfaction by reducing order fulfilment cycle times and ensuring that customers receive their orders quickly and accurately.
              </p>
            </div>
           
          </div>
        </div>
  </div>



<Footer/>

    </div>
  )
}

export default Crossdocking