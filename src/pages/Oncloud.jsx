import React from 'react'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons'
function Oncloud() {
  return (
    <div>
        <div className="starting-picklistgeneration">
        {/* <h1 className="gradient-text">Blogs
    <br /></h1> */}
        <h3 className="gradient-text">
         On Cloud
        </h3>

        <div className="aboutpage-subtitle">
          {/* <h6 className="gradient-text-h6">BLOGS</h6> */}
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



<div style={{height:'4vh'}}></div>
<Footer/>
    </div>
  )
}

export default Oncloud