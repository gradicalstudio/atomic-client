/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import Placeholder from "../../images/PLACEHOLDER.jpg";
import { isMobile } from "react-device-detect";

export default function SpaceOverviewSection({ loading, data }) {
  const [currentTab, setCurrentTab] = useState("hotDesk");
  return (
    <div className="af-class-section-22">
      <div data-w-id="Row 7" className="af-class-columns-9 w-row">
        <div
          data-w-id="Column_1 7"
          className="af-class-column-14 w-col w-col-6"
        >
          <div
            data-duration-in={300}
            data-duration-out={100}
            className="af-class-tabs-4 w-tabs"
          >
            <div className="af-class-tabs-content-3 w-tab-content">
              <div
                data-w-tab="Tab 1"
                className="af-class-tab-pane-tab-1-2 w-tab-pane w--tab-active"
              >
                <h2
                  style={{
                    opacity: 1,
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="af-class-heading af-class-purple af-class-hotdesk af-class-heading-16"
                >
                  {!loading && data ? (
                    data[currentTab].heading
                  ) : (
                    <LoadingSkeleton />
                  )}
                </h2>
                <p
                  style={{
                    opacity: 1,
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="af-class-paragraph-3 af-class-hotdesk-para"
                >
                  {!loading && data ? (
                    data[currentTab].paragraph
                  ) : (
                    <LoadingSkeleton />
                  )}
                </p>
                <a
                  href="#book-a-tour"
                  style={{
                    opacity: 1,
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="af-class-div-block-38 af-class-button af-class-run-your-event af-class-hotdesk w-inline-block"
                >
                  <div className="af-class-text-block-16">ENQUIRE NOW</div>
                  <img
                    src="images/ARROW.svg"
                    loading="lazy"
                    alt=""
                    className="af-class-image-42"
                  />
                </a>
                <div
                  style={{
                    opacity: 1,
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="af-class-text-block-19"
                >
                  COVID-19 Precautions are enabled at our spaces.{" "}
                  <a
                    href="https://drive.google.com/file/d/1ZqQTM8tsQgKyFmaPugL8W_RoD8n0qgPO/view?usp=sharing"
                    className="af-class-link-3"
                    download
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download the manual.
                  </a>
                </div>
              </div>
              <div data-w-tab="Tab 2" className="w-tab-pane" />
              <div data-w-tab="Tab 3" className="w-tab-pane" />
            </div>
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                opacity: 1,
                backgroundColor: "white",
                height: isMobile ? 40 : 60,
              }}
              className="af-class-tabs-menu-3 w-tab-menu"
            >
              <button
                onClick={() => setCurrentTab("hotDesk")}
                // data-w-tab="Tab 1"
                style={{
                  backgroundColor: currentTab === "hotDesk" ? "black" : "white",
                  color: currentTab === "hotDesk" ? "white" : "black",
                  borderRadius: "50px",
                  outline: "none",
                  width: "30%",
                  fontSize: isMobile ? 12 : 20,

                  height: isMobile ? 38 : 52,
                  paddingRight: isMobile ? 0 : 10,
                  paddingLeft: isMobile ? 0 : 10,
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                <div>Hot Desk</div>
              </button>
              <button
                onClick={() => setCurrentTab("dedicatedDesk")}
                // data-w-tab="Tab 2"
                style={{
                  backgroundColor:
                    currentTab === "dedicatedDesk" ? "black" : "white",
                  color: currentTab === "dedicatedDesk" ? "white" : "black",
                  borderRadius: "50px",
                  outline: "none",
                  width: "40%",
                  fontSize: isMobile ? 12 : 20,

                  height: isMobile ? 38 : 52,
                  paddingRight: isMobile ? 0 : 10,
                  paddingLeft: isMobile ? 0 : 10,
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                <div>Dedicated Desk</div>
              </button>
              <button
                onClick={() => setCurrentTab("privateDesk")}
                // data-w-tab="Tab 3"
                style={{
                  backgroundColor:
                    currentTab === "privateDesk" ? "black" : "white",
                  color: currentTab === "privateDesk" ? "white" : "black",
                  borderRadius: "50px",
                  outline: "none",
                  width: "40%",
                  fontSize: isMobile ? 12 : 20,

                  height: isMobile ? 38 : 52,

                  paddingRight: isMobile ? 0 : 10,
                  paddingLeft: isMobile ? 0 : 10,
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                <div>Private Desk</div>
              </button>
            </div>
          </div>
        </div>
        <img
          src={
            !loading && data && data[currentTab].image
              ? data[currentTab].image
              : Placeholder
          }
          alt=""
          loading="eager"
          data-w-id="Column_2 8"
          style={{
            WebkitTransform:
              "translate3d(0, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 1,
          }}
          className="af-class-column-13 w-col w-col-6"
        />
      </div>
    </div>
  );
}
