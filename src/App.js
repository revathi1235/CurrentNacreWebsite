
import './App.css';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Content from './pages/Content';
import Multichannelintegration from './pages/Multichannelintegration'
// import Deconsolidation from './pages/Deconsolidation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
// import NavbarCommon from './pages/NavbarCommon';
import Inboundreceipt from './pages/Inboundreceipt';
// import CommonContact from './pages/CommonContact';
import Navbar from './CommonNavbar/Navbar'
import AporaFulfillmentautomation from './pages/AporaFulfillmentautomation';
import Services from './pages/Services';
import Orderprocessing from './pages/OrderProcessing';
import Picklistgeneration from './pages/Picklistgeneration';
import Workforcemanagement from './pages/Workforcemanagement';
import Picksequencing from './pages/Picksequencing';
import Pickandshipping from './pages/Pickandshipping';
import Fulfillmentvalidation from './pages/Fulfillmentvalidation';
import Ecommerceintegration from './pages/Ecommerceintegration';
import Contactus from './pages/Contactus';
import Purveyordermanagementsystem from './pages/Purveyordermanagementsystem';
import Crossdocking from './pages/Crossdocking'
import Purveydeconsolidation from './pages/Purveydeconsolidation';
import Qualitycheck from './pages/Qualitycheck';
import Repackingandputaway from './pages/Repackingandputaway';
import Pickmanagement from './pages/Pickmanagement';
import Dispatch from './pages/Dispatch';
import Inventorymanagement from './pages/Inventorymanagement';
import APIintegration from './pages/APIintegration';
import IOTintegration from './pages/IOTintegration';
import Articles from './pages/Articles';
import Productwarehousemanagementsystem from './pages/Productwarehousemanagementsystem';
import Blogs from './pages/Blogs';
import LastmileDelivery from './pages/Deliverymanagementsystem';
import Yardmanagement from './pages/Yardmanagement';
import Deliverymanagementsystem from './pages/Deliverymanagementsystem';
import Oncloud from './pages/Oncloud';
import ScrollToTop from './ScrollToTop';
import ReactGA from 'react-ga4'

function App() {

  const TRACKING_ID='G-EB2KNZYZYT';
  ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    ReactGA.send({hitType:'pageview',page:window.location.pathname + window.location.search , title:'Home page'})
  }, [])
  
  return (
    <Router>
    <div className="App">
   
    <Navbar/>
    <ScrollToTop />

    <Routes>
    
     <Route path='/' element={<Content/>}/>
     <Route path='/aboutus' element={<AboutUs/>}/>
     <Route path='/aporafulfillmentautomation' element={<AporaFulfillmentautomation/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/multichannelintegration' element={<Multichannelintegration/>}/>
    <Route path='/orderprocessing' element={<Orderprocessing/>}/>
    <Route path='/picklistgeneration' element={<Picklistgeneration/>}/>
    <Route path='/workforcemanagement' element={<Workforcemanagement/>}/>
    <Route path='/picksequencing' element={<Picksequencing/>}/>
    <Route path='/pickandshipping' element={<Pickandshipping/>}/>
    <Route path='/fulfillmentvalidation' element={<Fulfillmentvalidation/>}/>
    <Route path='/ecommerceintegration' element={<Ecommerceintegration/>}/>
    <Route path='/contactus' element={<Contactus/>}/>
    < Route path='/purveyordermanagementsystem' element={<Purveyordermanagementsystem/>}/>
    <Route path='/inboundreceipt' element={<Inboundreceipt/>}/>
    <Route path='/crossdocking' element={<Crossdocking/>}/>
    <Route path='/purveydeconsolidation' element={<Purveydeconsolidation/>}/>
    <Route path='/qualitycheck' element={<Qualitycheck/>}/> 
    <Route path='/repackingandputaway' element={<Repackingandputaway/>}/>
    <Route path='/aporapickmanagement' element={<Pickmanagement/>}/>
    <Route path='/dispatch' element={<Dispatch/>}/>
    <Route path='/inventorymanagement' element={<Inventorymanagement/>}/>
    <Route path='/apiintegration' element={<APIintegration/>}/>
    <Route path='/iotintegration' element={<IOTintegration/>}/>
    <Route path='/articles' element={<Articles/>}/>
    <Route path='/productwarehousemanagementsystem' element={<Productwarehousemanagementsystem/>}/>
    <Route path='/blog' element={<Blogs/>}/>
    <Route path='/deliverymanagementsystem' element={<Deliverymanagementsystem/>}/>
    <Route path='/yardmanagement' element={<Yardmanagement/>}/>
     <Route path='/oncloud' element={<Oncloud/>}/>
     
     
   </Routes>
    </div>
    </Router>
  );
}

export default App;
