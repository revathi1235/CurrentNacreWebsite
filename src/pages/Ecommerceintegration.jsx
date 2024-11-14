import React from 'react'
import royalbluebg from '../Assets/royalbluebg.jpg'
import aporablack from '../Assets/apora_black.png'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import multibanner from '../Assets/multibanner.png'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import ListGroup from 'react-bootstrap/ListGroup';
import { Container,Row,Col,Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import orderprocessing from '../Assets/orderprocessing.svg'
import './Responsive.css'
import multichannelintegration from '../Assets/Multichannelintegration.svg'
import { useNavigate } from 'react-router-dom';
import Chart  from './Chart';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

const items = [
  { id: 1, title: 'The Leading AI-Powered Fulfilment Automation System', imgSrc: '../Assets/cuttingedge.webp', description: 'Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.' },
  { id: 2, title: 'Hybrid Proprietary Methodology, Opti-Pick', imgSrc: 'image2.jpg', description: 'Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business.' },
  { id: 3, title: 'Unlocking Fulfilment Automation Potential', imgSrc: 'image3.jpg', description: 'Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.' },
];

function Ecommerceintegration() {

  const [selectedItem, setSelectedItem] = useState(items[0]); // Default to the first item

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };


  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '', image: '' });

  const cardContents = [
    {
      title: "The Leading AI-Powered Fulfilment Automation System",
      body: "Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.",
      image: "../Assets/work3.jpg" // Update as needed for each card
    },
    {
      title: "Hybrid Proprietary Methodology, Opti-Pick",
      body: "Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business..",
      image: "../Assets/work4.jpg" // Replace with actual image path
    },
    {
      title: "Unlocking Fulfilment Automation Potential",
      body: "Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.",
      image: "../Assets/integration.webp" // Replace with actual image path
    },
  ];

  const images = [
    {
      default: '../Assets/eco.jpg',
      hover: '../Assets/work2.webp',
    },
    {
      default: '../Assets/eco.jpg',
      hover: '../Assets/work3.jpg',
    },
    {
      default: '../Assets/eco.jpg',
      hover: '../Assets/work4.jpg',
    },
  ];

  const handleShow = (index) => {
    setModalContent(cardContents[index]);
    setShowModal(true);
  };







  const [activeTab, setActiveTab] = useState(''); // Set default active tab

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };
  const navigate=useNavigate()
  const handleMultichannelintegration=()=>{
      navigate('/multichannelintegration')
  }
  const handleOrderProcessing=()=>{
      navigate('/orderprocessing')
  }
  const handlePicklistgeneration=()=>{
      navigate('/picklistgeneration')
  }
  const handleWorkforcemanagement=()=>{
      navigate('/workforcemanagement')
  }
  const handlePicksequencing=()=>{
      navigate('/picksequencing')
  }
  const handlePickandshipping=()=>{
      navigate('/pickandshipping')
  }
  const handleFulfillmentvalidation=()=>{
      navigate('/fulfillmentvalidation')
  }
  const handleEcommerceintegration=()=>{
      navigate('/ecommerceintegration')
  }
  const handleApora=()=>{
    navigate('/aporafulfillmentautomation')
  }
  
// ==================================================================
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="center-center">
        <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Revolutionize your e-commerce order fulfillment with API-based integrations. Seamlessly connect online stores with warehouse systems for real-time order synchronization, inventory management, tracking, and improved processing efficiency." />
        <meta name="keywords" content="e-commerce API integration, order fulfillment, inventory management, real-time synchronization, warehouse integration, order tracking, API for e-commerce, order accuracy, operational efficiency, seamless integration" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="API-Based E-Commerce Integration for Efficient Order Fulfillment" />
        <meta property="og:description" content="Streamline your e-commerce order fulfillment with API-based integrations. Real-time synchronization, inventory management, and order tracking improve operational efficiency and customer satisfaction." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/api-ecommerce-integration" />
        <title>API-Based E-Commerce Integration for Efficient Order Fulfillment</title>
      </Helmet>
 <div style={{height:"40vh"}}>
 <div className='starting-picklistgeneration'>
    <h1 className="gradient-text">Boost Same-Day Delivery with Multi-Order Fulfillment.
    <br /></h1>
    {/* <h3 className="gradient-text">Enhanced E-Commerce Performance</h3> */}

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={aporablack} alt="apora black image" style={{height:"80px"}}/></h6>
    </div>
    </div>

   
    <div style={{height:"20vh"}} className='mt-5'>
    <div>
        <div class="container-chart">
  <h1 class="level-1 rectangle "  onClick={handleApora}>APORA</h1>
  <ol class="level-2-wrapper">
    <li>
      <h6 class="level-2 rectangle" onClick={handleMultichannelintegration}>Multi-Channel Integration</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleOrderProcessing}> Order Processing</h6>
     
    </li>
      <li>
      <h6 class="level-2 rectangle" onClick={handlePicklistgeneration}>Pick List Generation</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleWorkforcemanagement}>Work Force Management</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handlePicksequencing}>  Pick Sequencing</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handlePickandshipping}>Package & Shipping</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleFulfillmentvalidation}> Fulfillment Validation</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle  bg-success text-white" onClick={handleEcommerceintegration}>  E-Commerce Integration</h6>
     
    </li>
  </ol>
</div>


    </div>
 </div>

 </div>




 {/* <div className='firstdiv-multichannelintegration'>
 <div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../../Assets/ecomint.jpg" alt="ecomint image" />
    </div>
</div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>In e-commerce, efficient order fulfilment is essential to meet customer expectations and drive business growth.
        API-based e-commerce portals integrations revolutionize order fulfilment by seamlessly connecting online stores with the warehouse fulfilment system. Real-time order synchronization, inventory management, order tracking, and streamlined processing are just a few of the benefits provided by these integrations. With seamless data exchange, order consolidation, customization options, and scalability, businesses can enhance their operational efficiency, improve order accuracy, and deliver exceptional customer experiences.</p>    </div>
   </div> */}

<div style={{height:'30vh'}} className='mob-multi-space'></div>
 <div className='multi-main'>
 <div className='multi-content'>
  <p style={{fontSize:'21.5px'}}>  <FontAwesomeIcon icon={faQuoteLeft} style={{color:'blue',fontSize:"30px"}}/> In e-commerce, efficient order fulfilment is essential to meet customer expectations and drive business growth.
  API-based e-commerce portals integrations revolutionize order fulfilment by seamlessly connecting online stores with the warehouse fulfilment system. Real-time order synchronization, inventory management, order tracking, and streamlined processing are just a few of the benefits provided by these integrations. With seamless data exchange, order consolidation, customization options, and scalability, businesses can enhance their operational efficiency, improve order accuracy, and deliver exceptional customer experiences.<FontAwesomeIcon icon={faQuoteRight} style={{color:'blue',fontSize:"30px"}}/></p>
</div>
<div className='multi-img-div'>
<img src="../../Assets/ecomint.jpg" alt="ecomint image" />

</div>

</div>



   <div className="container mt-5 valuedelivered-workforcemanagement">
        <div className="d-flex justify-content-center">
          <h2 className="gradient-text">Features</h2>
        </div>
        <div className="row justify-content-center ">
          {/* Card 1 */}
          <div className="col-md-4 col-sm-12 mb-4">
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Real-Time Data Exchange</h5>
            {/* <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../../Assets/realtimedataexchange.jpg' alt='Order Analysis' />
            </div> */}
            <div className='bio-orderprocessing' >
              <p style={{color:"black",fontSize:"18px"}}>The API-based integration system enables real-time data exchange between e-commerce portals and the warehouse fulfilment system. It utilizes secure and reliable APIs to transfer order information, inventory updates, and tracking details, ensuring accurate and up-to-date data throughout the order fulfilment process.</p>
            </div>
          </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 col-sm-12 mb-4">
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Order Consolidation

</h5>
            {/* <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../../Assets/consolidation-warehousing.jpg' alt='Order Analysis' />
            </div> */}
            <div className='bio-orderprocessing' >
              <p style={{color:"black",fontSize:"18px"}}>The integration system consolidates orders from different e-commerce platforms into a centralized order management system. It gathers orders from various channels, merges them into a single interface, and transfers them to the warehouse system for processing. This consolidation simplifies order management, reduces complexity, and improves operational efficiency.</p>
            </div>
          </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 col-sm-12 mb-4">
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Customization and Flexibility</h5>
            {/* <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../../Assets/customization.jpg' alt='Order Analysis' />
            </div> */}
            <div className='bio-orderprocessing' >
              <p style={{color:"black",fontSize:"18px"}}>API-based integrations offer customization options to align with specific business requirements. The system allows businesses to configure workflows, define order processing rules, and implement business logic tailored to their needs. This flexibility ensures a seamless integration that adapts to unique fulfilment processes and maximizes operational efficiency.




</p>
            </div>
          </div>
          </div>
        </div>
      </div>



    <div className='seconddiv-orderprocessing'>
    <h1>Value Delivered</h1>
</div>
{/* <Container fluid className='seconddiv-orderprocessing-container'>
 

    <div className='valuedelivered-maindiv-orderprocessing'>
  <div className='valuedelivered-firstdiv-orderprocessing'>
    <img src='../../Assets/optimized.webp' alt="optimized image" />
    <p> <b>Real-Time Order Sync</b> is enabled through API-based integrations, ensuring seamless synchronization between e-commerce portals and the warehouse fulfillment system. As soon as a customer places an order, the integration instantly transfers the details to the warehouse, eliminating delays, reducing manual data entry, and providing up-to-date information for efficient processing.</p>
  </div>
  <div className='valuedelivered-seconddiv-orderprocessing'>
    <img src='../../Assets/ordervarify.jpg' alt="order varify image" />
    <p> <b>Order Tracking and Notifications
    </b>  are streamlined through API-based integrations, which automatically update shipment statuses and tracking numbers on the e-commerce portal. Customers can easily access real-time tracking information, while automated notifications, including order confirmations, shipping updates, and delivery alerts, improve transparency and communication.</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'>
    <img src='../../Assets/orderprocessing.webp' alt="order processing image" />
    <p> <b>Streamlined Order Processing
    </b> is achieved through API-based integrations, which automatically transfer order details—including product information, quantities, customer data, and shipping preferences—from e-commerce platforms to the warehouse fulfilment system. This eliminates manual intervention, reduces errors, and accelerates fulfilment times.</p>
  </div>
 
</div>
</Container> */}

<div className="valuedelivered-thirddiv-workforcemanagement mt-3">
            {/* <img src='../../Assets/ordersync.png' alt="" style={{height:'20vh'}}/> */}
            <h6></h6>
            <p><span className='fs-4'>Real-Time Order Sync</span>  is enabled through API-based integrations, ensuring seamless synchronization between e-commerce portals and the warehouse fulfillment system. As soon as a customer places an order, the integration instantly transfers the details to the warehouse, eliminating delays, reducing manual data entry, and providing up-to-date information for efficient processing.
              
            </p>
          </div>

          <div className="valuedelivered-thirddiv-workforcemanagement mt-3">
            {/* <img src='../../Assets/ordersync.png' alt="" style={{height:'20vh'}}/> */}
            <h6></h6>
            <p><span className='fs-4'>Order Tracking and Notifications</span> are streamlined through API-based integrations, which automatically update shipment statuses and tracking numbers on the e-commerce portal. Customers can easily access real-time tracking information, while automated notifications, including order confirmations, shipping updates, and delivery alerts, improve transparency and communication.
              
            </p>
          </div>


          <div className="valuedelivered-thirddiv-workforcemanagement mt-3">
            {/* <img src='../../Assets/ordersync.png' alt="" style={{height:'20vh'}}/> */}
            <h6></h6>
            <p><span className='fs-4'>Streamlined Order Processing</span>  is achieved through API-based integrations, which automatically transfer order details—including product information, quantities, customer data, and shipping preferences—from e-commerce platforms to the warehouse fulfilment system. This eliminates manual intervention, reduces errors, and accelerates fulfilment times.
              
            </p>
          </div>
<div className='resp-footer mt-5'>
  <Footer/>
</div>

    </div>
  )
}

export default Ecommerceintegration