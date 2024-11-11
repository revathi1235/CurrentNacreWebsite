import React, { useState, useEffect } from "react";

import { Row, Col, Container } from "react-bootstrap";
// Sample data for headers and corresponding items with images
const data = {
  "Yard Management": {
    items: [
      {
        name: "Our <a href='/#/yardmanagement' target='_blank' style={{ color: 'blue' }}>Yard Management</a> function generates unique QR code labels, defining zones and enhancing warehouse yard organization.",
         
        image: "../Assets/rowrack.jpg",
        description:
          "In warehouse yard management, the lack of clear zone definition, aisle, rack, and tote labelling can lead to several issues, including loss due to item misplacement and expiry, adding to operational inefficiencies, safety risks, and financial losses.",
      },
      {
        name: "Labels improve item placement and retrieval processes, reducing time spent searching for inventory.",
      },
      {
        name: 
     
          "Our  Streamlined operations lead to increased efficiency, minimizing delays in <a href='/#/repackingandputaway' target='_blank' style={{ color: 'blue' }}>PutAway  </a> and retrieval tasks.'",
     
        
      },
      {
        name: "Improved efficiency supports timely deliveries, enhancing overall customer satisfaction and operational performance.",
      },
    ],
  },
  "Material inward": {
    items: [
      {
        name:"<a href='/#/productwarehousemanagementsystem' target='_blank' style={{ color: 'blue' }}>PURVEY WMS </a>: utilizes QR code label generation to ensure precise tracking of inventory levels and locations, reducing discrepancies.",
        image: "../Assets/materialinward.jpg",
        description:
          "The lack of pallet, bag, and carton level tracking can lead to significant discrepancies in inventory counts. Inaccurate records may result in overstocking or stockouts, negatively affecting order fulfillment, operational efficiency, and ultimately impacting customer satisfaction and the overall profitability of the warehouse.",
      },
      {
        name: "The system ensures that received items match purchase orders, facilitating efficient receiving and minimizing errors.",
      },
      {
        name: "QR codes enable effective tracking of product lots, improving the ability to trace items throughout the supply chain for quality control.",
      },
      {
        name: "PURVEY WMS optimizes  <a href='/#/crossdocking' target='_blank' style={{ color: 'blue' }}>crossdocking</a>: processes by efficiently managing incoming and outgoing shipments, reducing handling time and improving operational flow.",
      },
    ],
  },
  "Deconsolidation & Crossdocking": {
    items: [
      {
        name: "Enhanced Inventory Accuracy: Barcode/QR codes generated at the item level ensure precise tracking during <a href='/#/purveydeconsolidation' target='_blank' style={{ color: 'blue' }}>deconsolidation </a> reducing discrepancies and improving overall inventory accuracy.",
        image: "../Assets/crossdocking.jpeg",
        description:
          "The deconsolidation process in warehouses faces challenges such as inefficient workflows, inaccurate inventory tracking, and poor visibility of incoming shipments. Manual processes introduce errors and slow operations, while inadequate space utilization and safety hazards further complicate handling.",
      },
      {
        name: "Improved Visibility: Real-time tracking through barcodes/QR codes provides better visibility of inventory levels and locations, allowing for quicker identification and resolution of issues during deconsolidation.",
        image: "../Assets/Picture6.svg",
        description:
          "From receipt to storage, connect GRNs with packages for total transparency.",
      },
    ],
  },
  "Quality Assurance": {
    items: [
      {
        name: "Streamlined Inspection: QR/barcode scan-based results enable quick marking of items as approved or rejected, speeding up the inspection process.",
        image: "../Assets/qc.JPG",
        description:
          "Quality assurance in warehouses faces challenges such as inconsistent inspection processes, poor documentation, and inefficient staging for approved and rejected items. These issues lead to delays, miscommunication, and inadequate visibility. ",
      },
      {
        name: "Organized Staging: Scanned data assigns specific areas for approved and rejected items, reducing congestion and improving processing speed.",
        image: "../Assets/goodsreceipt.svg",
        description:
          "Ensure accuracy in inventory with Goods Receipt Note to package linking.",
      },
      {
        name: "Real-Time Visibility: QR/barcode systems provide instant status updates, allowing staff to quickly locate approved or rejected products.",
        image: "../Assets/Package linking.png",
        description:
          "Transform your logistics with direct package to item level connections.",
      },
      {
        name: "Optimized Storage: Scanning technology offers clear guidance for storing items based on their status, enhancing space utilization and accessibility.",
        image: "../Assets/acceptance.svg",
        description:
          "Optimize workflows by effectively separating acceptance from rejection.",
      },
    ],
  },
  "Unpacking And Repacking": {
    items: [
      {
        name: "Enhanced Traceability: Scan-based serialization allows precise tracking from bulk packaging to the source, ensuring accountability.",
        image: "../Assets/unpack.JPG",
        description:
          "Unpacking and repacking bulk items in a food and beverage warehouse presents challenges, including inefficient processes, inaccurate portioning, item loss, and cross-contamination risks. These issues can impact operational efficiency, product quality and impact profitability.",
      },
      {
        name: "Improved Compliance: It maintains a detailed audit trail, helping businesses meet regulatory requirements and industry standards.",
        image: "../Assets/work3.jpg",
        description:
          "Track item losses seamlessly to enhance operational efficiency",
      },
      {
        name: "Efficient Recall Management: Serialization enables quick identification of affected items during recalls, facilitating faster responses.",
        image: "../Assets/work4.jpg",
        description:
          "Streamline operations by effectively assigning staging locations for every item.",
      },
      {
        name: "Increased Inventory Accuracy: It improves inventory management with real-time visibility, reducing discrepancies and ensuring accurate records",
        image: "../Assets/work3.jpg",
        description: "",
      },
    ],
  },
  'PutAway': {
    items: [
      {
        name: " Maximized Space Utilization: Market rack locations and dynamic <a href='/repackingandputaway' target='_blank' style={{ color: 'blue' }}>putaway</a>:  optimize storage, ensuring efficient use of all areas.",
        image: "../Assets/putaway.jpg",
        description:
          "Inefficient putaway processes in warehouses lead to significant pain points, including delayed inventory placement and increased handling times. These issues negatively impact space management, causing congestion and hindering optimal storage utilization. Additionally, poor batch management can result in inventory discrepancies and difficulties in tracking product expiration dates, affecting overall operational efficiency.",
      },
      {
        name: "Improved Inventory Flow: Dynamic methods enhance inventory management, reducing congestion and improving transitions.",
        image: "../Assets/work3.jpg",
        descr:
          "Simplify your warehouse operations with real-time automated put away lists.",
      },
      {
        name: "Enhanced Picking Efficiency: Proximity AI algorithms optimize item placement, minimizing picker travel time and boosting speed.",
        image: "../Assets/work4.jpg",
        description:
          "Optimize order fulfillment through strategic item staging location signage.",
      },
      {
        name: "Data-Driven Decisions: Proximity AI allows placing the same item from different batches close together, making picking easier and faster by reducing travel time for staff and streamlining order fulfillment.",
        image: "../Assets/work3.jpg",
        description:
          "Optimize your storage strategy with proximity-based put away location indicators.",
      },
    ],
  },
  'Picking': {
    items: [
      {
        name: "Bulk Picking: Orders are typically picked in larger quantities to meet bulk shipping requirements, reducing handling time.",
        image: "../Assets/dispatch_lady.jpg",
        description:
          "Warehouse picking for wholesale and retail with FIFO include inventory management complexity, order prioritization, picking errors, and space utilization. Challenges also involve labor issues and balancing speed with accuracy.",
      },
      {
        name: "Batch Processing: Orders are processed in batches to maximize efficiency and reduce travel time within the warehouse.",
        image: "../Assets/work3.jpg",
        description:
          "Optimize your retail operations with an efficient dispatch method",
      },
      {
        name: "Individual Item Picking: Orders are picked item-by-item to fulfill specific retail needs, ensuring accuracy in smaller quantities.",
        image: "../Assets/work4.jpg",
        description:
          "Automated FIFO picking: the smart way to manage your inventory flow.",
      },
      {
        name: "Prioritized Picking: Retail orders are prioritized based on urgency, ensuring timely fulfillment and customer satisfaction.",
        image: "../Assets/work3.jpg",
        description:
          "Boost efficiency with multiple order simultaneous picking for streamlined operations.",
      },
    ],
  },

"Delivery Management System": {
   items : [
    {
      name: "Route Optimization: Smart algorithms optimize routes considering traffic, priorities, and proximity, reducing costs and delays.",
      image: "../Assets/tms (2).jpg",
      description:'Distribution centers face challenges in optimizing delivery management, such as inefficient route planning, poor real-time tracking, and inconsistent proof of delivery, leading to higher costs and delays. Last-mile delivery, complicated by urban congestion, is a critical area for improving overall efficiency and customer satisfaction.'
    },
    {
      name: "Real-Time Tracking: GPS-enabled systems provide real-time fleet monitoring through centralized dashboards for quick decision-making.",
    },
    {
      name: "Proof of Delivery: Electronic signatures and barcode scanning ensure accurate, verifiable delivery confirmations, minimizing disputes.",
    },
    {
      name: "<a href='/www' target='_blank' style={{ color: 'blue' }}>Last-Mile Optimization</a>: Advanced logistics models and micro-fulfillment centers enhance last-mile efficiency, reducing congestion and improving delivery precision.",
    },
  ]
  
},

};

const HeaderComponent = () => {
  const [selectedHeader, setSelectedHeader] = useState("Yard Management");
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setItems(data[selectedHeader].items); // Update items based on the selected header
    setSelectedItem(data[selectedHeader].items[0]); // Set default selected item for each header
  }, [selectedHeader]);

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  // };

  return (
    <div>
      <Container>
        <p className="font-highlight-deconsol mt-5">
          {" "}
          Revolutionize your warehouse operations with our AI-driven software
          designed for optimal warehouse management solutions.
        </p>
        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="deconsolidation-paragraph">
            Our innovative enhances efficiency by enabling the seamless
            management of your inventory and logistics, ensuring that every
            product is tracked in real-time. Experience lightning-speed
            fulfillment that significantly boosts customer satisfaction. With
            intelligent automation features and smart analytics, our <a href="/productwarehousemanagementsystem"> WMS </a>
            solution streamlines your operations, reduces costs, and maximizes
            productivity. Transform the way you manage your warehouse and take
            your logistics to the next level with our cutting-edge technology.
          </p>
          <div style={{ height: "30vh" }}></div>
        </div>
      </Container>
      <h1 className="headingStyle">Purvey - WMS</h1>

      <div className="mt-4">
        {/* Main Headers */}
        <ul className="responsive-list">
          {Object.keys(data).map((header) => (
            <li
              key={header}
              onClick={() => handleHeaderClick(header)}
              className={selectedHeader === header ? "selected-header" : ""}
            >
              {header.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>

     
      <div className="dummy-bg" >
        <Container >
          <Row>
            <Col lg={6} md={12}>
              {selectedItem && (
                <div>
                   <p className='ms-4  mt-2' style={{ fontWeight: "bold" }}>
                        "{selectedItem.description}"
    </p>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="deconsolidation-img"
                  />
                
                </div>
              )}
            </Col>
            <Col lg={6} md={12}>
            {selectedHeader && (
        <div>
          <ul className="block-list-deconsolidation mt-5">
            {items.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item.name }} />
            ))}
                  </ul>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeaderComponent;
