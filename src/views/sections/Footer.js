import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

export default function Footer() {
  const [center, setCenter] = useState({
    lat: 59.95,
    lng: 30.33,
  });

  const [zoom, setZoom] = useState(11);
  return (
    <footer id="Footer" className="af-class-section-11">
      <div className="af-class-columns-5 w-row">
        <div className="af-class-column-10 w-col w-col-7">
          <img
            src="images/atomic-Svg.svg"
            loading="lazy"
            alt=""
            className="af-class-image-39 af-class-the-atoic"
          />
          <div className="af-class-text-block-17 af-class-footer">
            Reach us at +91 85902 42448 or
          </div>
          <div
            className="af-class-text-block-17 af-class-footer"
            style={{ paddingTop: 5, paddingBottom: 20 }}
          >
            <p>+91 94964 34303</p>
          </div>
          <div className="af-class-text-block-17 af-class-footer">
            or Mail at{" "}
            <a
              href="mailto:hey@theatomic.space?subject=Talk%20to%20us"
              className="af-class-link-4"
            >
              hey@theatomic.space
            </a>
          </div>
          <div className="af-class-text-block-17 af-class-footer af-class-text">
            Kazhakootam, Near Technopark Phase 1, <br />
            695022, Trivandrum, Kerala.
          </div>
          {/* <div className="af-class-text-block-17 af-class-footer af-class-small">
            Follow us on
          </div>
          <div
            className="w-layout-grid"
            style={{
              display: "flex",
              gap: 70,
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <a
              id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833ef-5cad7c33"
              className="af-class-div-block-40"
              href="https://www.instagram.com/theatomic.space/"
            >
              <img
                src="images/Vector-2.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </a>
            <a
              id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833f1-5cad7c33"
              className="af-class-div-block-40"
              href="https://www.facebook.com/The-Atomic-110576397747050"
            >
              <img
                src="images/Vector-3.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </a>

            <a
              id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833f5-5cad7c33"
              className="af-class-div-block-40"
              href="https://www.linkedin.com/company/theatomic/"
            >
              <img
                src="images/Vector.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </a>
          </div> */}
          <div className="af-class-text-block-17">
            © 2021 The Atomic - All Rights Reserved
          </div>
        </div>
        <div className="w-col w-col-5">
          <div className="af-class-container-12 w-container">
            <div className=" w-widget w-widget-map map">
              {/* <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDlQ81Hk2i5LQD9TLNa6vDIkpoRxwzbVvQ",
                }}
                defaultCenter={center}
                defaultZoom={zoom}
              >
                <div
                  lat={8.556269645690918}
                  lng={76.87676239013672}
                  text="My Marker"
                />
              </GoogleMapReact> */}
            </div>

            <div className="af-class-div-block-41">
              <img src="images/studio-gradical.svg" loading="lazy" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="af-class-columns-5 af-class-footer-mobile-view w-row">
        <div className="af-class-column-10 w-col w-col-6">
          <div className="af-class-text-block-17 af-class-footer af-class-do-not-need">
            Follow us on
          </div>
        </div>
        <div className="af-class-column-12 w-col w-col-6">
          {/* <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDlQ81Hk2i5LQD9TLNa6vDIkpoRxwzbVvQ",
            }}
            defaultCenter={center}
            defaultZoom={zoom}
            style={{ height: 100, width: 100 }}
          >
            <div
              lat={8.556269645690918}
              lng={76.87676239013672}
              text="My Marker"
            />
          </GoogleMapReact> */}
          <div className="w-widget w-widget-map map"></div>
          <div className="af-class-text-block-17 af-class-footer">
            Reach us at +91 85902 42448 or
          </div>
          <div
            className="af-class-text-block-17 af-class-footer"
            style={{ marginTop: -10 }}
          >
            <p>+91 94964 34303</p>
          </div>
          <div className="af-class-text-block-17 af-class-footer">
            or Mail at hey@theatomic.space
          </div>
          <div className="af-class-text-block-17 af-class-footer af-class-text">
            Kazhakootam, Near Technopark Phase 1, <br />
            695022, Trivandrum, Kerala.
          </div>
          <img
            src="images/atomic-Svg.svg"
            loading="lazy"
            alt=""
            className="af-class-image-39"
          />
          {/* <div
            className="w-layout-grid"
            style={{
              display: "flex",
              gap: 45,
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <a
              id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833ef-5cad7c33"
              className="af-class-div-block-40"
              href="https://www.instagram.com/theatomic.space/"
            >
              <img
                src="images/Vector-2.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </a>
            <a
              id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833f1-5cad7c33"
              className="af-class-div-block-40"
              href="https://www.facebook.com/The-Atomic-110576397747050"
            >
              <img
                src="images/Vector-3.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </a>

            <a
              id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833f5-5cad7c33"
              className="af-class-div-block-40"
              href="https://www.linkedin.com/company/theatomic/"
            >
              <img
                src="images/Vector.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </a>
          </div> */}
          <div className="af-class-text-block-17">
            © 2021 The Atomic - All Rights Reserved
          </div>
          <div className="af-class-container-12 w-container">
            <div className="af-class-div-block-41">
              <img
                src="images/studio-gradical.svg"
                loading="lazy"
                alt=""
                className="af-class-image-63"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="af-class-section-16" />
    </footer>
  );
}
