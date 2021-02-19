import React, { useState } from "react";
import LoadingSkeleton from "../../components/LoadingSkeleton";

export default function RunYourEventSection({ loading, data }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <div className="af-class-section-5">
      <div data-w-id="Row 2" className="af-class-columns-3 w-row">
        <div data-w-id="Column_1 2" className="af-class-column-4 w-col w-col-6">
          <h1
            style={{
              opacity: 0,
              WebkitTransform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="af-class-heading-16 af-class-diff af-class-run-your-event"
          >
            {!loading && data ? data.heading : <LoadingSkeleton />}
          </h1>
          <h4
            style={{
              opacity: 0,
              WebkitTransform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="af-class-heading-11"
          >
            {!loading && data ? data.paragraphs[0] : <LoadingSkeleton />}
            <br />
            <br />
            {!loading && data ? data.paragraphs[1] : <LoadingSkeleton />}
          </h4>
          <a
            href="#book-a-tour"
            data-w-id="056229b1-3df5-62af-bcbe-42849fad36e8"
            style={{
              opacity: 0,
              WebkitTransform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="af-class-div-block-38 af-class-button af-class-run-your-event w-inline-block"
          >
            <div
              data-w-id="TextBlock 5"
              className="af-class-text-block-16 af-class-button-2"
            >
              HOST YOUR EVENT
            </div>
            <img
              src="images/ARROW.svg"
              loading="lazy"
              data-w-id="b484cb5e-26ef-bfdc-5554-c3090bc92c25"
              width={12}
              alt=""
              className="af-class-image-37 af-class-blackarrow"
            />
            <img
              src="images/ARROW.svg"
              loading="lazy"
              data-w-id="87861ede-c820-cbd2-d8d7-563042229b64"
              alt=""
              className="af-class-image-66"
            />
          </a>
        </div>
        <div data-w-id="Column_2 3" className="af-class-column-5 w-col w-col-6">
          <div
            style={{
              WebkitTransform:
                "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0,
            }}
            className="af-class-container-17 w-container"
          >
            <button
              onClick={() => {
                console.log(currentImageIndex);
                if (currentImageIndex < data.images.length - 1) {
                  setCurrentImageIndex(currentImageIndex + 1);
                }
              }}
              data-w-id="7908f217-5ab8-d52b-70eb-9d8c729443cb"
              style={{ backgroundColor: "rgb(255,255,255)" }}
              className="af-class-div-block-54 af-class-right"
            >
              <img
                src="images/ARROW.svg"
                loading="lazy"
                width={55}
                style={{ display: "block" }}
                alt=""
                className="af-class-image-57"
              />
              <img
                src="images/Vector-5.svg"
                loading="lazy"
                style={{ display: "none" }}
                alt=""
                className="af-class-arrow-slider"
              />
            </button>
            <button
              onClick={() => {
                if (currentImageIndex > 0) {
                  setCurrentImageIndex(currentImageIndex - 1);
                }
              }}
              className="af-class-div-block-54 af-class-left"
            >
              <img
                src="images/left.svg"
                loading="lazy"
                width={55}
                alt=""
                className="af-class-image-57"
              />
            </button>
            <img
              src={
                !loading && data
                  ? data.images[currentImageIndex]
                  : "images/image-2.svg"
              }
              loading="lazy"
              height={450}
              width={500}
              alt=""
              className="af-class-image-56 af-class-top"
            />
            <img
              src="images/Compo-group.svg"
              loading="lazy"
              width={310}
              alt=""
              className="af-class-image-64"
            />
            <img
              src={
                !loading && data
                  ? data.images[currentImageIndex]
                  : "images/image-2.svg"
              }
              loading="lazy"
              height={450}
              width={500}
              alt=""
              className="af-class-image-56 af-class-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
