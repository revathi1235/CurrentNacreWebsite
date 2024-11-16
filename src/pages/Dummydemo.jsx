import React, { useEffect } from "react";
import "./dummy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Dummydemo() {
  useEffect(() => {
    const slider = document.querySelector(".slider-homepage");

    if (!slider) return;

    function activate(e) {
      const items = document.querySelectorAll(".item-homepage");
      if (e.target.matches(".next-homepage")) {
        slider.append(items[0]); // Move the first item to the end
      }
      if (e.target.matches(".prev-homepage")) {
        slider.prepend(items[items.length - 1]); // Move the last item to the beginning
      }
    }

    function autoplay() {
      const items = document.querySelectorAll(".item-homepage");
      if (items.length > 0) {
        slider.append(items[0]); // Automatically move the first item to the end
      }
    }

    // Add click event listener
    document.addEventListener("click", activate, false);

    // Set autoplay with a 3000ms interval
    const interval = setInterval(autoplay, 5000);

    // Cleanup both event listener and interval on component unmount
    return () => {
      document.removeEventListener("click", activate, false);
      clearInterval(interval);
    };
  }, []);

  const navigate = useNavigate();
  const handleApora = () => {
    navigate("/aporafulfillmentautomation");
  };
  const handleWMS = () => {
    navigate("/productwarehousemanagementsystem");
  };
  const handleDelivery = () => {
    navigate("/deliverymanagementsystem");
  };
  const handleOncloud=()=>{
    navigate('/oncloud')
  }
  return (
    <div>
      <div class="new-div-homepage">
        <main class="main-homepage">
          <ul class="slider-homepage">
          <li
              class="item-homepage"
              style={{ backgroundImage: "url('../Assets/cloud.jpg')" }}
            >
              {/* <div class="bg-homepageeffect"> */}
              <div class="content-homepage">
                <h2 class="title-homepage">On</h2>
                <h2 class="title-homepage">CLOUD</h2>
                <h3 class="title-homepage-h3">
                  Embrace Elastic Scalability Without Capital Spend
                </h3>
                <p class="description-homepage"> Save UpTo 50% on IT Cost </p>
                <p class="description-homepage">
                  {" "}
                  90% of Saas Users find it Easy To Use{" "}
                </p>
                <p class="description-homepage">
                  {" "}
                  SaaS as Secure as on Premises Software{" "}
                </p>
                <button onClick={handleOncloud}>Read More</button>
              </div>
              {/* </div> */}
            </li>
            <li
              class="item-homepage"
              style={{ backgroundImage: "url('../Assets/warehouse.jpg')" }}
            >
              {/* <div class="bg-homepageeffect"> */}
              <div class="content-homepage">
                <h2 class="title-homepage">Purvey</h2>
                <h2 class="title-homepage">WMS</h2>
                <h3 class="title-homepage-h3">Warehouse Management System</h3>
                <p class="description-homepage">
                  {" "}
                  Ensure 100% traceability of Goods{" "}
                </p>
                <p class="description-homepage">
                  {" "}
                  Empower Your Business With Real-Time Inventory Insights
                </p>
                <p class="description-homepage">
                  {" "}
                  Accomplish 100% Same Day Delivery{" "}
                </p>
                <button onClick={handleWMS}>Read More</button>
              </div>
              {/* </div> */}
            </li>
            <li
              class="item-homepage"
              style={{
                backgroundImage: "url('../../Assets/aporahomepage.png')",
              }}
            >
              {/* <div class="bg-homepageeffect">  */}
                <div class="content-homepage">
                  <h2 class="title-homepage">One of Its Kind</h2>
                  <h2 class="title-homepage">Apora</h2>
                  <h3 class="title-homepage-h3">
                    AI POWERED FULFILLMENT AUTOMATION
                  </h3>
                  <p class="description-homepage">
                    {" "}
                    Save 60% Fulfillment Cost{" "}
                  </p>
                  <p class="description-homepage">
                    {" "}
                    Achieve 50 % - 60 % Increase In Efficiency
                  </p>
                  <p class="description-homepage">
                    {" "}
                    Accomplish 100% Same Day Delivery{" "}
                  </p>
                  <button onClick={handleApora}>Read More</button>
                </div>
                {/* </div> */}
            </li>
            <li
              class="item-homepage"
              style={{ backgroundImage: "url('../Assets/deltruck.jpg')" }}
            >
              {/* <div class="bg-homepageeffect"> */}
              <div class="content-homepage">
                <h2 class="title-homepage">Delivery Management system</h2>
                <p class="description-homepage">
                  Route optimization is a critical component in logistics and
                  transportation, where the goal is to find the most efficient
                  routes for vehicles to reduce costs and delays. By leveraging
                  smart algorithms, businesses can optimize routes by
                  considering various factors like traffic conditions, delivery
                  priorities, and proximity.
                </p>
                <button onClick={handleDelivery}>Read More</button>
              </div>
              {/* </div> */}
            </li>
            <li
              class="item-homepage"
              style={{ backgroundImage: "url('../../Assets/vehicle.jpeg')" }}
            >
              {/* <div class="bg-homepageeffect"> */}
              <div class="content-homepage">
                <h2 class="title-homepage">Yard Management</h2>
                <p class="description-homepage">
                  Effective yard management is critical to warehouse operations.
                  Without clear zone definitions, and proper labeling of aisles,
                  racks, and totes, warehouses face numerous challenges{" "}
                </p>
                <button>Read More</button>
              </div>
              {/* </div> */}
            </li>
          
          </ul>
          <nav class="nav-homepage">
            <ion-icon
              class="btn-homepage prev-homepage"
              name="arrow-back-outline"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </ion-icon>
            <ion-icon
              class="btn-homepage next-homepage"
              name="arrow-forward-outline"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </ion-icon>
          </nav>
        </main>
      </div>
    </div>
  );
}

export default Dummydemo;
