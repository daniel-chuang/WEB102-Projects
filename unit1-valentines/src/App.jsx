import React from "react";
import Event from "./components/Event";
import "./App.css";

function App() {
  const events = [
    {
      img: "https://upload.wikimedia.org/wikipedia/en/2/2c/SaganWalk.00.Sun%2BInner.jpg",
      name: "Carl Sagan Walk",
      location: "The Commons / Downtown",
      details: "https://en.wikipedia.org/wiki/Sagan_Planet_Walk",
    },
    {
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/brMJky1WYOULrWEWD-eVuQ/1000s.jpg",
      name: "Pho Time",
      location: "Collegetown",
      details: "https://www.ithacatogo.com/order/restaurant/pho-time-vietnamese-menu/45",
    },
    {
      img: "https://static.wixstatic.com/media/df0a87_da784e39d2a2497db410597774ad3cf3.jpg/v1/fill/w_560,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/df0a87_da784e39d2a2497db410597774ad3cf3.jpg",
      name: "Fuertes Observatory",
      location: "North Campus",
      details: "https://www.cornellastrosociety.org/open-house-nights",
    },
    {
      img: "https://pbs.twimg.com/media/Epjf8C4W8AELbBe.jpg",
      name: "Hartung-Boothroyd Observatory",
      location: "Middle of Nowhere",
      details: "https://en.wikipedia.org/wiki/Hartung%E2%80%93Boothroyd_Observatory",
    },
    {
      img: "https://lh5.googleusercontent.com/p/AF1QipOV38eY8fuPIgPu1xoS_Wegzm3XQdGCVdi6zAzM=w426-h240-k-no",
      name: "Regal Ithaca Mall",
      location: "40 Catherwood Rd",
      details: "https://www.theshopsatithacamall.com/store/Regal-Cinema/2138799884/",
    },
    {
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/uaLCVGHV_LD-RSN4Idvzrw/348s.jpg",
      name: "Fishbowl Wednesday",
      location: "Collegetown",
      details: "http://www.levelbbar.com/",
    },
    {
      img: "https://www.lifeinthefingerlakes.com/wp-content/uploads/2021/02/cat-cafe-690x394.jpg",
      name: "Alley Cat Cafe",
      location: "The Commons",
      details: "https://www.alleycatithaca.com/",
    },
    {
      img: "https://blog.resy.com/wp-content/uploads/2022/11/Moosewood_28-2000x1333.jpg",
      name: "Moosewood",
      location: "Downtown",
      details: "https://www.moosewoodrestaurant.com/",
    },
    {
      img: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_80,w_1200/v1/crm/corningfingerlakes/AF0I0030-copy_59959239-13DE-4772-A1FD5CECA9A0CE01_d042ab5e-bed5-4b0f-86706a133e3ff8c4.jpg",
      name: "Sweet Walter's",
      location: "Bully Hill Vineyards",
      details: "https://exploresteuben.com/",
    },
    {
      img: "https://smartcdn.gprod.postmedia.digital/vancouversun/wp-content/uploads/2023/05/0513-trav-cruise-Page2.jpg?quality=90&strip=all&w=400&sig=oovjS_2j8RvkAA-Bh79fxw",
      name: "Maiden of the Mist",
      location: "Niagara Falls",
      details: "https://www.moosewoodrestaurant.com/",
    },
    {
      img: "https://i0.wp.com/cornellsun.com/wp-content/uploads/2019/11/ACH1691.jpg?fit=1170%2C904&ssl=1",
      name: "Matcha Study Sesh",
      location: "Uris Library",
      details: "https://olinuris.library.cornell.edu/",
    },
  ];

  return (
    <div className="App">
      <h1>Ithaca Dates 💘</h1>
      <h2></h2>
      <div id="events-container">
        {events.map((event, i) => {
          return (
            <Event
              img={event.img}
              name={event.name}
              location={event.location}
              details={event.details}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
