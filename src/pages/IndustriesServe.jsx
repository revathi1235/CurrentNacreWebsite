import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import web1 from '../videos/web1.mp4'
import Videoplay from "./Videoplay";
function IndustriesServe() {
  const items = [
    { id: 1, title: "FMCG" },
    { id: 2, title: "APPAREL" },
    { id: 3, title: "PHARMA" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 6000);   // Change text every 6 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div style={{ height: "55vh" }} className="IndustriesServe-page">
      <h2 className="IndustriesServe-heading" style={{fontFamily:"pirulen"}}>Industries We Serve</h2>
    

      <div >
  <div className="indus-maindiv" style={{ width: '100%', textAlign: 'center' }}>
    {items.map((item, index) => (
      <div
        key={item.id}
        className="fmcg-div"
       
      >
       
     <h1 className="fmcg-h1"  style={{ display: index === currentIndex ? 'block' : 'none' }}>{item.title}</h1>

      </div>
    ))}
     <video src={web1} autoPlay loop playsInline  muted className="fmcg-img"></video> 
  </div>

  
</div>

     
    </div>
  );
}

export default IndustriesServe;
