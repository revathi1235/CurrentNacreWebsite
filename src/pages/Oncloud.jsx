import React from 'react'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Container, Row ,Col} from 'react-bootstrap'
function Oncloud() {
  return (
    <div>
        <div className="starting-picklistgeneration">
        {/* <h1 className="gradient-text">blog
    <br /></h1> */}
        <h3 className="gradient-text">
         On Cloud
        </h3>

        <div className="aboutpage-subtitle">
          {/* <h6 className="gradient-text-h6">blog</h6> */}
        </div>
      </div>









      
<div className='multi-main'>
<div className='multi-img-div'>
<img src="../Assets/cloud.svg" alt="cross docking image" />

</div>
<div className='multi-content'>
  <p className='fs-5'>  <FontAwesomeIcon icon={faQuoteLeft} style={{color:'blue',fontSize:"30px"}}/> The "On Cloud" is a cutting-edge technology that revolutionizes the way businesses operate in the digital age. Built on the foundation of cloud computing, our innovative solutions offer a multitude of key value propositions, empowering organizations to thrive in today's competitive landscape. Our "On Cloud" eliminates the burden of complex and costly on-premises software installations. With no need for extensive hardware investments or intricate infrastructure setups, businesses can easily access the software and experience the flexibility and convenience of cloud-based technology. This not only saves valuable resources but also enables seamless scalability, allowing businesses to grow and adapt without the constraints of physical limitations.
  <FontAwesomeIcon icon={faQuoteRight} style={{color:'blue',fontSize:"30px"}}/></p>
</div>
</div>
<div style={{height:'3vh'}}></div>
<Container>
  <Row>
    <Col lg={6}>
    <p style={{textAlign:'justify'}} className='fs-5'>On Cloud is its inherent scalability and agility. As businesses evolve, so do their needs. The solution seamlessly accommodates changing requirements, enabling organizations to effortlessly scale up or down as demand fluctuates. This flexibility is especially vital for mid-size distribution centers, warehouses and fulfilment centers, as it empowers them to handle seasonal peaks and effectively respond to market shifts, ensuring optimal operational efficiency and customer satisfactionz.</p>
    <p style={{textAlign:'justify'}} className='fs-5'>With robust security measures and reliable data backups, "On Cloud" prioritizes data protection and business continuity. </p>
    </Col>
    <Col lg={6}>
    <p style={{textAlign:'justify'}} className='fs-5'>The remarkable capability of "On Cloud" lies in its seamless integration with devices and existing legacy software systems, ensuring effortless connectivity and interoperability.

Embrace the future of business operations with "On Cloud" - a revolutionary platform that offers Purvey, a Warehouse Management System (WMS), and APORA, a Multi-channel fulfilment automation solution. These scalable, cost-effective, secure, and convenient solutions are delivered through Software as a Service (SaaS). Unlock your organization's true potential and gain a competitive edge in the digital era with this game-changing platform.</p>
    </Col>
  </Row>
</Container>
<div style={{height:'4vh'}}></div>
<Footer/>
    </div>
  )
}

export default Oncloud