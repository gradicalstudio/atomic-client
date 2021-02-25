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
            Reach us at +91 85902 42448
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
          <div className="af-class-text-block-17 af-class-footer af-class-small">
            Follow us on
          </div>
          <div className="w-layout-grid af-class-grid-16">
            <div
              id="w-node-div-block-38-5cad7c33"
              className="af-class-div-block-40"
            >
              <img
                src="images/Vector-2.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </div>
            <div
              id="w-node-_76731110-5274-10c6-b10e-fec530626f1c-5cad7c33"
              className="af-class-div-block-40"
            >
              <img
                src="images/Vector-3.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </div>
            <div
              id="w-node-_333c37bd-74fd-6ab3-95e3-d3c7403553df-5cad7c33"
              className="af-class-div-block-40"
            >
              <img
                src="images/Vector-1.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </div>
            <div
              id="w-node-_0f721f33-fe87-8475-9918-fb38dc28b2f2-5cad7c33"
              className="af-class-div-block-40"
            >
              <img
                src="images/Vector.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </div>
          </div>
          <div className="af-class-text-block-17">
            © 2021 The Atomic - All Rights Reserved
          </div>
        </div>
        <div className="w-col w-col-5">
          <div className="af-class-container-12 w-container">
            <div className=" w-widget w-widget-map">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyA8mst49AyWk8Mlm1x-wU561gaXxxHCpCM",
                }}
                defaultCenter={center}
                defaultZoom={zoom}
              >
                <div lat={59.955413} lng={30.337844} text="My Marker" />
              </GoogleMapReact>
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
          <div className="w-widget w-widget-map">
            <GoogleMapReact
              defaultCenter={center}
              defaultZoom={zoom}
              style={{ height: 100, width: 100 }}
            >
              <div lat={59.955413} lng={30.337844} text="My Marker" />
            </GoogleMapReact>
          </div>
          <div className="af-class-text-block-17 af-class-footer">
            Reach us at +91 123 456 7890
          </div>
          <div className="af-class-text-block-17 af-class-footer">
            or Mail at hi@atomic.space
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
          <div className="w-layout-grid af-class-grid-16">
            <div
              id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833ef-5cad7c33"
              className="af-class-div-block-40"
            >
              <img
                src="images/Vector-2.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </div>
            <div
              id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833f1-5cad7c33"
              className="af-class-div-block-40"
            >
              <img
                src="images/Vector-3.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </div>
            <div
              id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833f3-5cad7c33"
              className="af-class-div-block-40"
            >
              <img
                src="images/Vector-1.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </div>
            <div
              id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833f5-5cad7c33"
              className="af-class-div-block-40"
            >
              <img
                src="images/Vector.svg"
                loading="lazy"
                width={24}
                alt=""
                className="af-class-image-40"
              />
            </div>
          </div>
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
