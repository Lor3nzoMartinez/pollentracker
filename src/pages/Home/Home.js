import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState("");
  const [lat, setLat] = useState("");

  async function getLatLong() {
    let response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=98101&key=AIzaSyDpP4fPyMwbrs1eGoDpbUZfdvaG8PV2VAo`
    );
    return response;
  }

  useEffect(() => {
    var output = getLatLong();
    
  });

  console.log(getLatLong());

  return (
    <div className="container">
      <div className="bg1">
        <h2>
          16 <span>| 24</span>
        </h2>
        {/* {lat === undefined ? <p>Loading</p> : <p>{lat}</p>} */}
      </div>
      <div className="bg1">
        <h2>
          <i className="fas fa-battery-three-quarters"></i>
        </h2>
        <p></p>
      </div>
      <div className="bg2">
        <h2>
          <i className="fas fa-running"></i>
        </h2>
        <p>Miles</p>
      </div>
      <div className="bg1">
        <h2>36 &deg;</h2>
        <p>Temperature</p>
      </div>
      <div className="bg1">
        <h2>
          <i className="fas fa-bed"></i>
        </h2>
        <p>Sleep Keep</p>
      </div>
      <div className="bg2">
        <h2>
          98 <span>bpm</span>
        </h2>
        <p>Heart Rate</p>
      </div>
      <div className="bg1">
        <h2>
          170 <span>lbs</span>
        </h2>
        <p>Weight</p>
      </div>
      <div className="bg1">
        <h2>
          28 <span>%</span>
        </h2>
        <p>Fat Percentage</p>
      </div>
      <div className="bg2">
        <h2>
          118 <span>mgdl</span>
        </h2>
        <p>Blood Glucose</p>
      </div>
      <div className="bg2">
        <h2>
          680 <span>kcal</span>
        </h2>
        <p>AVG Consumption</p>
      </div>
      <div className="bg2">
        <h2>
          <i className="fas fa-dumbbell"></i>
        </h2>
        <p>Workouts</p>
      </div>
      <div className="bg2">
        <h2>
          85 <span>%</span>
        </h2>
        <p>Body Hydration</p>
      </div>
    </div>
  );
}

export default Home;
