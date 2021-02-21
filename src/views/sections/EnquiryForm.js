import React, { useState } from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import CustomStyledSelect from "../../components/CustomStyledSelect";
import { db } from "../../firebase";
import { format } from "date-fns";

const schema = Yup.object().shape({
  fullName: Yup.string().nullable().required("Required"),
  email: Yup.string().nullable().required("Required"),
  phoneNumber: Yup.string().nullable().required("Required"),
  companyName: Yup.string().nullable().required("Required"),
  requirement: Yup.string().nullable().required("Required"),
  noOfSeats: Yup.string().nullable().required("Required"),
});

export default function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormSubmittingFailed, setIsFormSubmittingFailed] = useState(false);
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
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phoneNumber: "",
              companyName: "",
              requirement: "",
              noOfSeats: "",
              additionalNotes: "",
            }}
            validationSchema={schema}
            onSubmit={(values, form) => {
              console.log("Values", values);
              setIsSubmitting(true);
              db.collection("enquiries")
                .add({
                  ...values,
                  createdAt: format(new Date(), "PPP"),
                  status: true,
                })
                .then(() => {
                  setIsSubmitting(false);
                  setIsFormSubmitted(true);
                  form.resetForm();
                })
                .catch((error) => {
                  setIsFormSubmittingFailed(true);
                  console.log(error);
                });
            }}
          >
            {({ values, errors }) => {
              console.log(errors);
              return (
                <Form
                  id="wf-form-enquiry-form"
                  name="wf-form-enquiry-form"
                  data-name="enquiry form"
                  method="get"
                  className="af-class-form"
                  onFocus={() => {
                    setIsFormSubmitted(false);
                    setIsFormSubmittingFailed(false);
                  }}
                >
                  <div className="af-class-columns-6 w-row">
                    <div className="af-class-form-text w-col w-col-6">
                      <Field
                        placeholder="Full Name*"
                        name="fullName"
                        maxLength={256}
                        className="af-class-text-field w-input"
                      />
                      <ErrorMessage
                        name="fullName"
                        render={(msg) => (
                          <div
                            style={{ color: "red", marginBottom: 10 }}
                            className="text-red-600 text-sm"
                          >
                            {msg}
                          </div>
                        )}
                      />
                      <Field
                        placeholder="Phone Number*"
                        maxLength={256}
                        name="phoneNumber"
                        className="af-class-text-field w-input"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        render={(msg) => (
                          <div
                            style={{ color: "red", marginBottom: 10 }}
                            className="text-red-600 text-sm"
                          >
                            {msg}
                          </div>
                        )}
                      />

                      <div style={{ width: "96%", marginBottom: 10 }}>
                        <Field
                          name="requirement"
                          options={[
                            {
                              label: "Run an event",
                              value: "Run an event",
                            },
                            {
                              label: "Book a space",
                              value: "Book a space",
                            },
                            {
                              label: "Community Related",
                              value: "Community Related",
                            },
                          ]}
                          component={(props) => (
                            <CustomStyledSelect
                              {...props}
                              isClearable
                              placeholder="Select requirement*"
                            />
                          )}
                        />
                        <ErrorMessage
                          name="requirement"
                          render={(msg) => (
                            <div
                              style={{
                                color: "red",
                                marginBottom: 10,
                                marginTop: 10,
                              }}
                              className="text-red-600 text-sm"
                            >
                              {msg}
                            </div>
                          )}
                        />
                      </div>
                    </div>
                    <div className="af-class-form-text w-col w-col-6">
                      <Field
                        name="email"
                        className="af-class-text-field w-input"
                        maxLength={256}
                        placeholder="Email*"
                        id="node-2"
                      />
                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <div
                            style={{ color: "red", marginBottom: 10 }}
                            className="text-red-600 text-sm"
                          >
                            {msg}
                          </div>
                        )}
                      />
                      <Field
                        className="af-class-text-field w-input"
                        maxLength={256}
                        name="companyName"
                        placeholder="Company Name*"
                        id="node-2"
                      />
                      <ErrorMessage
                        name="companyName"
                        render={(msg) => (
                          <div
                            style={{ color: "red", marginBottom: 10 }}
                            className="text-red-600 text-sm"
                          >
                            {msg}
                          </div>
                        )}
                      />
                      <div style={{ width: "96%" }}>
                        <Field
                          name="noOfSeats"
                          options={Array(10)
                            .fill()
                            .map((el, index) => ({
                              label: index + 1,
                              value: index + 1,
                            }))}
                          component={(props) => (
                            <CustomStyledSelect
                              {...props}
                              isClearable
                              placeholder="No. of seats*"
                            />
                          )}
                        />
                      </div>
                      <ErrorMessage
                        name="noOfSeats"
                        render={(msg) => (
                          <div
                            style={{
                              color: "red",
                              marginBottom: 10,
                              marginTop: 10,
                            }}
                            className="text-red-600 text-sm"
                          >
                            {msg}
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="af-class-div-block-56">
                    <div className="af-class-div-block-42">
                      <Field
                        as="textarea"
                        rows={4}
                        placeholder="Additional Notes"
                        maxLength={5000}
                        id="node-3"
                        name="additionalNotes"
                        className="af-class-text-field af-class-coments w-input"
                      />
                    </div>
                  </div>
                  {/* <input
                    type="submit"
                    defaultValue="GET IN TOUCH"
                    data-wait="Please wait..."
                    className="af-class-submit-button w-button"
                  /> */}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="af-class-submit-button w-button"
                  >
                    {!isSubmitting ? "SUBMIT" : "Please wait..."}
                  </button>
                </Form>
              );
            }}
          </Formik>

          {isFormSubmitted ? (
            <div>
              <div
                style={{
                  color: "#1df700",
                  backgroundColor: "#e8ffe6",
                  fontSize: 26,
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 40,
                  padding: 10,
                  borderRadius: 50,
                }}
              >
                Thank you! Your submission has been received!
              </div>
            </div>
          ) : null}
          {isFormSubmittingFailed ? (
            <div>
              <div
                style={{
                  color: "#ff0000",
                  backgroundColor: "#ffebeb",
                  fontSize: 26,
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 40,
                  padding: 10,
                  borderRadius: 50,
                }}
              >
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          ) : null}
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
