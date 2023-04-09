import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="row">
            <img
              src={logo}
              style={{
                height: "40px",
                width: "auto",
                display: "block",
                margin: "auto",
                padding: "5px",
              }}
              alt="This is an image"
            />
          </div>
          <div className="row">
            <select
              name="station"
              id="station"
              style={{ borderRadius: "10px" }}
            >
              <option value="0" defaultChecked disabled>
                Select Station
              </option>
              <option value="1">Main Campus</option>
              <option value="2">EME</option>
              <option value="3">MCS</option>
            </select>
          </div>
        </div>
        <div className="col">Bulletin</div>
        <div className="col">Chart</div>
        <div className="col">Data</div>
        <div className="col">Map</div>
        <div className="col">Analytics</div>
        <div className="col">Bulletin</div>
        <div className="col-2">My-Profile</div>
      </div>
      <div className="row mt-2">
        <div className="col-2">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <label htmlFor="span" style={{ marginRight: "3px" }}>
            Span{" "}
          </label>
          <input type="date" name="span" id="span" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
