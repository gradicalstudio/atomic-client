import React from "react";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import Placeholder from "../../images/PLACEHOLDER.jpg";

export default function AboutSection({ loading, data }) {
  return (
    <section id="About" className="af-class-section-2">
      <div className="af-class-columns-2 w-row">
        <div className="af-class-column-2 w-col w-col-6">
          <div
            data-w-id="Div Block 53"
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
            className="af-class-_1st-text-block"
          >
            <h1 className="af-class-heading-18">
              {!loading && data ? data.header : <LoadingSkeleton />}
            </h1>
          </div>
        </div>
        <div className="af-class-column-3 w-col w-col-6">
          <p
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
            className="af-class-paragraph-1 af-class-title"
          >
            <span>
              {!loading && data ? data.paragraphs[0] : <LoadingSkeleton />}
              <br />‍
            </span>
          </p>
          <p
            data-w-id="Paragraph"
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
            className="af-class-para-2"
          >
            <span>
              {!loading && data ? data.paragraphs[1] : <LoadingSkeleton />}
              <br />‍
            </span>
          </p>
        </div>
      </div>
      <div data-w-id="Container 4" className="af-class-container-5 w-container">
        <img
          src={!loading && data ? data.images[0] : Placeholder}
          loading="lazy"
          width={450}
          style={{
            WebkitTransform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0,
          }}
          alt=""
          className="af-class-image-9"
        />
        <img
          src={!loading && data ? data.images[1] : Placeholder}
          loading="lazy"
          width={504}
          style={{
            WebkitTransform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0,
          }}
          alt=""
          className="af-class-image-10"
        />
        <img
          src={!loading && data ? data.images[2] : Placeholder}
          loading="lazy"
          width={512}
          style={{
            WebkitTransform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0,
          }}
          alt=""
          className="af-class-image-11"
        />
      </div>
    </section>
  );
}
