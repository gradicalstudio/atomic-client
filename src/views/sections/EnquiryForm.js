import React from "react";

export default function EnquiryForm() {
  return (
    <div
      id="book-a-tour"
      data-w-id="Div Block 26"
      className="af-class-section-9"
    >
      <div className="af-class-container-14 w-container">
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
          className="af-class-heading-16 af-class-cnter af-class-center"
        >
          What are you waiting for?
        </h1>
        <div className="af-class-text-block-18 af-class-desktop-hide af-class-show">
          YOU CAN ALSO REACH US BY PHONE —<br /> CALL US AT +91 85902 42448,{" "}
          <br />
          +91 94964 34303
        </div>
        <div
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
          className="af-class-form-block w-form"
        >
          <form
            id="wf-form-enquiry-form"
            name="wf-form-enquiry-form"
            data-name="enquiry form"
            method="get"
            className="af-class-form"
          >
            <div className="af-class-columns-6 w-row">
              <div className="af-class-form-text w-col w-col-6">
                <input
                  type="text"
                  placeholder="Full Name*"
                  maxLength={256}
                  data-name
                  id="node"
                  required
                  className="af-class-text-field w-input"
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  maxLength={256}
                  required
                  data-name
                  id="node"
                  className="af-class-text-field w-input"
                />
                <select
                  id="Requirement"
                  name="Requirement"
                  data-name="Requirement*"
                  required
                  className="af-class-text-field w-select"
                >
                  <option value>Select one...</option>
                  <option value="First">Run an event</option>
                  <option value="Second">Book a space</option>
                  <option value="Third">Community Related</option>
                </select>
              </div>
              <div className="af-class-form-text w-col w-col-6">
                <input
                  type="email"
                  className="af-class-text-field w-input"
                  maxLength={256}
                  data-name
                  placeholder="Email*"
                  id="node-2"
                  required
                />
                <input
                  type="email"
                  className="af-class-text-field w-input"
                  maxLength={256}
                  data-name
                  placeholder="Company Name*"
                  id="node-2"
                  required
                />
                <select
                  id="Number-of-Seats-2"
                  name="Number-of-Seats"
                  data-name="Number of Seats"
                  required
                  className="af-class-text-field w-select"
                >
                  <option value>Select one...</option>
                </select>
              </div>
            </div>
            <div className="af-class-div-block-56">
              <div className="af-class-div-block-42">
                <textarea
                  placeholder="Additional Notes"
                  maxLength={5000}
                  id="node-3"
                  data-name
                  className="af-class-text-field af-class-coments w-input"
                  defaultValue={""}
                />
              </div>
            </div>
            <input
              type="submit"
              defaultValue="GET IN TOUCH"
              data-wait="Please wait..."
              className="af-class-submit-button w-button"
            />
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
      <div
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
        className="af-class-text-block-18 af-class-mobile-view-1"
      >
        YOU CAN ALSO REACH US BY PHONE — CALL US AT +91 85902 42448 or +91 94964
        34303
      </div>
    </div>
  );
}
