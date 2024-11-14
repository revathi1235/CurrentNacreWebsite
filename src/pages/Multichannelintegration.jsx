import React from 'react'
import royalbluebg from '../Assets/royalbluebg.jpg'
import aporablack from '../Assets/apora_black.png'
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet';

// import scalabilityandflexibility from '../Assets/scalabilityandflexibility.svg'
import Nav from 'react-bootstrap/Nav';
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import multibanner from '../Assets/multibanner.png'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import ListGroup from 'react-bootstrap/ListGroup';
import { Container,Row,Col,Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import './Responsive.css'
import Chart from './Chart'

import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
const items = [
  { id: 1, title: 'The Leading AI-Powered Fulfilment Automation System', imgSrc: '../Assets/cuttingedge.webp', description: 'Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.' },
  { id: 2, title: 'Hybrid Proprietary Methodology, Opti-Pick', imgSrc: 'image2.jpg', description: 'Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business.' },
  { id: 3, title: 'Unlocking Fulfilment Automation Potential', imgSrc: 'image3.jpg', description: 'Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.' },
];

function Multichannelintegration() {

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
    <>


      <Helmet>
        <title>Multi-Channel Integration | APORA Fulfilment Automation</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Description */}
        <meta name="description" content="Discover APORA's multi-channel integration solutions for fulfillment automation. Enhance efficiency, accuracy, and customer satisfaction across all sales channels." />

        {/* Keywords */}
        <meta name="keywords" content="APORA, fulfillment automation, multi-channel integration, order processing, efficiency, accuracy, resource utilization, e-commerce, inventory management" />

        {/* Author */}
        <meta name="author" content="Your Name or Company Name" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Multi-Channel Integration | APORA Fulfilment Automation" />
        <meta property="og:description" content="Enhance your business operations with APORA's cutting-edge multi-channel integration for fulfillment automation." />
        <meta property="og:image" content="URL_to_your_image" /> {/* Replace with the actual image URL */}
        <meta property="og:url" content="URL_to_your_page" /> {/* Replace with the actual URL of the page */}
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Multi-Channel Integration | APORA Fulfilment Automation" />
        <meta name="twitter:description" content="Discover how APORA's multi-channel integration can transform your fulfillment processes." />
        <meta name="twitter:image" content="URL_to_your_image" /> {/* Replace with the actual image URL */}

        {/* Favicon */}
        <link rel="icon" href="path_to_your_favicon.ico" type="image/x-icon" /> {/* Replace with the actual path to your favicon */}
      </Helmet>








    <div data-aos="fade-up"
    data-aos-anchor-placement="center-center">
 <div style={{height:"40vh"}}>
 <div className='starting-picklistgeneration'>
    <h1 className="gradient-text">Seamless Order Processing Across Channels.<br /></h1>
    {/* <h3 className="gradient-text">Across All Touchpoints.</h3> */}

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={aporablack} alt="aporablack image" style={{height:"80px"}}/></h6>
    </div>
    </div>

    <div style={{height:"20vh"}} className='mt-5'>
    <div>
        <div class="container-chart">
  <h1 class="level-1 rectangle "  onClick={handleApora}>APORA</h1>
  <ol class="level-2-wrapper">
    <li>
      <h6 class="level-2 rectangle bg-success text-white" onClick={handleMultichannelintegration}>Multi-Channel Integration</h6>
     
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
      <h6 class="level-2 rectangle" onClick={handleEcommerceintegration}>  E-Commerce Integration</h6>
     
    </li>
  </ol>
</div>


    </div>
 </div>

 </div>
<div style={{height:'30vh'}} className='mob-multi-space'></div>
<div className="multi-main" style={{ position: 'relative', width: '100%', height: 'auto' }}>
  <div className="multi-img-div">
    <img src="../Assets/newmultiimage.jpeg" alt="multi image" style={{ width: '100%', height: 'auto' }} />
  </div>
  <div className="overlay-content-one" style={{
      position: 'absolute',
      top: '20%',
      
      color: 'black',
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '30%'
  }}>
    <p>  <FontAwesomeIcon icon={faQuoteLeft} style={{color:'blue',fontSize:"30px"}}/> In today's competitive retail environment, businesses need to be able to offer their customers a seamless shopping experience across multiple channels. This means being able to take orders and fulfil them from any channel, whether it's online, in-store, or over the phone.
    Multi-channel integration is the key to providing this seamless experience. It allows businesses to connect their various sales channels to a single fulfilment system. This ensures that inventory levels are always up-to-date and that orders can be picked and packed quickly and  efficiently.<FontAwesomeIcon icon={faQuoteRight} style={{color:'blue',fontSize:"30px"}}/></p>
   
  </div>
  <div className="overlay-content" style={{
      position: 'absolute',
      top: '20%',
      right:'3%',
      color: 'black',
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '30%'
  }}>
   <p style={{marginTop:'30px', fontFamily: 'Montserrat-Bold', fontSize: '33px', color: 'black', textAlign: 'center', lineHeight: '1.6' }}>
  <FontAwesomeIcon 
    icon={faQuoteLeft} 
    style={{ color: 'blue', fontSize: '30px', marginRight: '10px' }} 
  />
  Multi-channel integration is the key to providing this seamless experience.
  <FontAwesomeIcon 
    icon={faQuoteRight} 
    style={{ color: 'blue', fontSize: '30px', marginLeft: '10px' }} 
  />
</p>

   
  </div>
</div>

 {/* <div className='multi-main'>
<div className='multi-img-div'>
<img src="../Assets/newmultiimage.jpeg" alt="multi image" />

</div> */}
{/* <div className='multi-content'>
  <p>  <FontAwesomeIcon icon={faQuoteLeft} style={{color:'blue',fontSize:"30px"}}/> In today's competitive retail environment, businesses need to be able to offer their customers a seamless shopping experience across multiple channels. This means being able to take orders and fulfil them from any channel, whether it's online, in-store, or over the phone.
  Multi-channel integration is the key to providing this seamless experience. It allows businesses to connect their various sales channels to a single fulfilment system. This ensures that inventory levels are always up-to-date and that orders can be picked and packed quickly and  efficiently.<FontAwesomeIcon icon={faQuoteRight} style={{color:'blue',fontSize:"30px"}}/></p>
</div> */}
{/* </div> */}
<div style={{height:'10vh'}} className='mob-multi-space'></div>

   {/* <div className='firstdiv-multichannelintegration ' >
   <div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../Assets/multi.png" alt="multi image" />
    </div>
</div>

    <div className='multichannelintegration-content'>
        <p >In today's competitive retail environment, businesses need to be able to offer their customers a seamless shopping experience across multiple channels. This means being able to take orders and fulfil them from any channel, whether it's online, in-store, or over the phone.
        Multi-channel integration is the key to providing this seamless experience. It allows businesses to connect their various sales channels to a single fulfilment system. This ensures that inventory levels are always up-to-date and that orders can be picked and packed quickly and efficiently.</p>
    </div>
     
   </div> */}

{/* <div class="container-multi">
<div class="image-wrapper">
<img src="../Assets/multi.png" alt="Description of Image" class="left-image-multi"/>
</div>
        <div class="text-content-multi">
            <h1>Your Title Here</h1>
            <p>This is where your text content goes. You can add more paragraphs, lists, or any other HTML elements as needed.</p>
        </div>
    </div> */}




<div className='bg-img-multi'>
<div className='seconddiv-multichannelintegration'>
    <h1 >Efficiency And Accuracy</h1>
</div>
<div className='seconddiv-content-multichannelintegration'>
    <p style={{color:'white'}}>Perfect order fulfilment is crucial for maintaining a competitive edge. The key to success lies in implementing a robust multichannel integration in order fulfilment system, which streamlines operations and enhances customer satisfaction. The unique features of our system, demonstrates how it can revolutionize your order fulfilment process.
    The multichannel integration in our fulfilment management system is a game-changer for organizations aiming to enhance operational efficiency. By streamlining order fulfilment across multiple sales channels, you unlock new levels of accuracy, scalability, and flexibility. With real-time inventory visibility and centralized order management, you can meet customer demands effectively while optimizing your resources.</p>
</div>
</div>
 






    <h1 style={{textAlign:'center',fontFamily:'Good Times'}}>Value Delivered</h1>



<Container fluid>
 

    <div className='valuedelivered-maindiv-multiintegration mt-5'>
  <div className='valuedelivered-firstdiv-multiintegration'>
    {/* <img src={improveresouceutilisation} alt="improveresouceutilisation images" /> */}
    {/* <h6>Improved Resource Utilisation</h6> */}
    <p style={{textAlign:"justify"}}> <span className='fs-4'>Improved Resource Utilisation</span> is achieved by integrating multiple channels into a unified pick management system, allowing you to optimize resources and reduce operational complexities.</p>
  </div>
  <div className='valuedelivered-seconddiv-multiintegration'>
    {/* <img src='../../Assets/realtimevisibility.png' alt="realtimevisibility image" /> */}
    {/* <h6>Real Time Visibility</h6> */}
    <p style={{textAlign:"justify"}}> <span className='fs-4'>Real Time Visibility
    </span> ensures that the status of orders across all channels is tracked individually, even as they are processed simultaneously</p>
  </div>
  <div className='valuedelivered-thirddiv-multiintegration'>
    {/* <img src={improvedorderaccuracy} alt="improvedorderaccuracy image" /> */}
    {/* <h6>Improved Order Accuracy</h6> */}
    <p style={{textAlign:"justify"}}> <span className='fs-4'>Improved Order Accuracy
    </span>  is achieved with our barcode, QR code, and RFID integrated system, which eliminates errors and inaccuracies in order fulfillment. The system automatically synchronizes order data from various channels, minimizing the risk of mismatched or duplicate orders.</p>
  </div>
  
</div>
<div className='mobileview'></div>
<div className='valuedelivered-maindiv-multiintegration multi-sec-div' style={{marginTop:"-100px"}}>
  <div className='valuedelivered-fourthdiv-multiintegration'>
  {/* <img src='../../Assets/scalabilityandflexibility.jpg' alt="scalabilityandflexibility image" /> */}
  {/* <h6>Scalability & Flexibility</h6> */}
    <p style={{textAlign:"justify"}}>  <span className='fs-4'>Scalability & Flexibility</span> are key features of our multi-channel pick management system, which adapts to your growing business needs. It handles increasing order volumes and seamlessly incorporates new sales channels, whether through online marketplaces, brick-and-mortar stores, or social media platforms, ensuring efficient order consolidation and management.</p>
  </div>
  <div className='valuedelivered-fifthdiv-multiintegration'>
    {/* <img src={efficiency} alt="efficiency image" /> */}
    {/* <h6>Increased Efficiency</h6> */}
    <p style={{textAlign:"justify"}}> <span className='fs-4'>Increased Efficiency
    </span>  is achieved through AI-powered automation that dynamically manages orders from different channels in one place. You can track order status, monitor assigned resources and their activities, and oversee fulfillment progress, all from a single interface, simplifying order processing and minimizing errors or delays.</p>
  </div>
</div>
</Container>



<Container>
<div class="image-container-multichannelintegration">
  
  <div class="overlay">
    <p className='fs-2 px-3'>"If you are looking for a way to improve your business's efficiency and profitability, a Multi - Channel Integration system is a valuable tool that can help you achieve your goals."</p>
  </div>
</div>
</Container>




    </div>
    <div className='mt-5'>
    <Footer/>
    </div>
    </>
  )
}

export default Multichannelintegration