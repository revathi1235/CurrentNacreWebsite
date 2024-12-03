import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Cardflip from './Cardflip'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

function Articles() {
  const navigate=useNavigate()
        const handleRequestdemo=()=>{
            navigate('/contactus')
        }
  return (
    <div>
      
      <Helmet>
        <title>Warehouse Management: Putaway, Yard & Delivery Efficiency | articles page</title>
        <meta name="description" content="Optimize warehouse operations with advanced inventory, putaway, fulfillment automation, and yard management to enhance efficiency and customer satisfaction." />
      
      </Helmet>
         <div className='starting-picklistgeneration'>
    {/* <h1 className="gradient-text">blog
    <br /></h1> */}
    <h3 className="gradient-text"> Articles   </h3>

    <div className='aboutpage-subtitle'>
      
    {/* <h6 className='gradient-text-h6'>the Power of Our Product Solutions.</h6> */}
    </div>
    </div>
       <Container >
        <Row>
          <Col lg={5}>
                <Container>
                   <iframe className='article-one'  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7218860272906588161" height="828" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

                </Container>
          </Col>
          <Col lg={2}></Col>
          <Col lg={5}>
          <iframe className='article-one' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7198559254495059969" height="838" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </Col>
        </Row>
       </Container>
       
       <Container >
        <Row>
          <Col lg={5}>
          <iframe className='article-one' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7145307059549290496" height="865" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </Col>
          <Col lg={2}></Col>
          <Col lg={5}>
          <iframe className='article-one' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7114572055873785856" height="865" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </Col>
        </Row>
       </Container>



       <Container >
        <Row>
          <Col lg={5}>
          <iframe className='article-one' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7094636868473917441" height="912" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </Col>
          <Col lg={2}></Col>
          <Col lg={5}>
          <iframe className='article-one' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7084059403984793600" height="835" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </Col>
        </Row>
       </Container>









       <Container >
        <Row>
          <Col lg={5}>
          <iframe className='article-one' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7090205460896624640" height="735" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>          </Col>
          <Col lg={2}></Col>
          <Col lg={5}>
          <iframe className='article-one' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7081568169663889408" height="745" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>          </Col>
        </Row>
       </Container>






       <Container >
        <Row>
          <Col lg={5}>
          <iframe className='article-one' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7076905190984994816" height="876" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>          </Col>
          <Col lg={2}></Col>
          <Col lg={5}>
          <iframe className='article-one' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7073925218993405952" height="797" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>          </Col>
        </Row>
       </Container>







       <Container >
        <Row>
          <Col lg={5}>
          <iframe className='article-one' src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7066282555775340544" height="801" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>          </Col>
          <Col lg={2}></Col>
          <Col lg={5}>
          
          </Col>
        </Row>
       </Container>

       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<button className="custom-btn btn-5">
            <span onClick={handleRequestdemo}>Request Demo</span>
          </button>
</div>
<div style={{height:'4vh'}}></div>
       <Footer/>
    </div>

  )
}

export default Articles