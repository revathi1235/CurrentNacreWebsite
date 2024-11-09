import React, { useState, useEffect } from 'react';
import './commoncss.css';

const Cardflip = () => {
  const [contentIndex, setContentIndex] = useState(0);

  const contentData = [
    {
      highlightText: "One of Its Kind",
      mainTitle: "Apora",
      subheading: "AI POWERED FULFILLMENT AUTOMATION",
      ctas: [
        "Save 60% Fulfillment Cost",
        "Achieve 50 % - 60 % Increase In Efficiency",
        "Accomplish 100% Same Day Delivery"
      ],
      image: "../Assets/graphs.svg"  // Add your image path here
    },
    {
      highlightText: "Purvey",
      mainTitle: "WMS",
      subheading: "Warehouse Management System",
      ctas: [
        "Ensure 100% traceability of Goods",
        "Empower Your Business With Real-Time Inventory Insights",
        "Accomplish 100% Same Day Delivery"
      ],
      image: "../Assets/apora.svg"  
       // Add your image path here
    },
    {
      highlightText: "On",
      mainTitle: "CLOUD",
      subheading: "Embrace Elastic Scalability Without Capital Spend",
      ctas: [
        "Save UpTo 50% on IT Cost",
        "90% of Saas Users find it Easy To Use",
        "SaaS as Secure as on Premises Software"
      ],
      image: "../Assets/cloud.svg"   // Add your image path here
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 3000); // Time between content change

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [contentData.length]);

  return (
    <div style={{ padding: "30px" }}>
      <div className="containernew">
        <div className='one'>
          <div className="two text-overlay-new">
            <span className="highlight-text" style={{ fontFamily: "Good Times" }}>
              {contentData[contentIndex].highlightText}
            </span>
            <span className="main-title" style={{ fontFamily: "pirulen" }}>
              {contentData[contentIndex].mainTitle}
            </span>
            <span className="subheading" style={{ fontFamily: "Good Times" }}>
              {contentData[contentIndex].subheading}
            </span>
            <div className='cta-full-div'>
              {contentData[contentIndex].ctas.map((cta, index) => (
                <span className='cta' style={{ fontFamily: "arial" }} key={index}>
                  {cta}
                </span>
              ))}
            </div>
          </div>
          <div className='three' >
            <img src={contentData[contentIndex].image} alt="Content Image" className="small-image-new" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardflip;
