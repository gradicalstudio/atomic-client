import React, { useState } from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import CustomStyledSelect from "../../components/CustomStyledSelect";
import { db } from "../../firebase";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { isMobile } from "react-device-detect";

const booksASpaceSeats = [
  {
    label: "Just Myself",
    value: "Just Myself",
  },
  {
    label: "2-10 Seats",
    value: "2-10 Seats",
  },
  {
    label: "11-15 Seats",
    value: "11-15 Seats",
  },
  {
    label: "50+",
    value: "50+",
  },
];

const runAnEventSeats = [
  {
    label: "Terrace (80+ seats)",
    value: "Terrace (80+ seats)",
  },
  {
    label: "Indoor (80 seats)",
    value: "Indoor (80 seats)",
  },
  {
    label: "Board room (10 seats)",
    value: "Board room (10 seats)",
  },
];

const schema = Yup.object().shape({
  fullName: Yup.string().nullable().required("Required"),
  email: Yup.string().nullable().required("Required"),
  phoneNumber: Yup.string().nullable().required("Required"),
  // companyName: Yup.string().nullable().required("Required"),
  requirement: Yup.string().nullable().required("Required"),
  noOfSeats: Yup.string().nullable().required("Required"),
});

export default function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
            validateOnBlur={false}
            validateOnChange={false}
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
                  // setIsFormSubmitted(true);
                  toast.success(
                    "Thanks for submitting, we’ll get in touch with you soon."
                  );
                  form.resetForm();
                })
                .catch((error) => {
                  // setIsFormSubmittingFailed(true);
                  toast.error("Failed to submit enquiry");
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
                >
                  <div className="af-class-columns-6 w-row">
                    <div className="af-class-form-text w-col w-col-6">
                      <Field
                        placeholder="Full Name*"
                        name="fullName"
                        maxLength={256}
                        style={{
                          width: "96%",
                          marginBottom: 10,
                          padding: 20,
                          fontSize: isMobile ? 14 : 20,
                          borderStyle: isMobile ? "none" : "solid",
                          borderColor: "black",
                        }}
                      />
                      <ErrorMessage
                        name="fullName"
                        render={(msg) => (
                          <div
                            style={{
                              color: "red",
                              marginBottom: 10,
                            }}
                          >
                            {msg}
                          </div>
                        )}
                      />
                      <Field
                        placeholder="Phone Number*"
                        maxLength={256}
                        name="phoneNumber"
                        style={{
                          width: "96%",
                          marginBottom: 10,
                          padding: 20,
                          fontSize: isMobile ? 14 : 20,
                          borderStyle: isMobile ? "none" : "solid",
                          borderColor: "black",
                        }}
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        render={(msg) => (
                          <div style={{ color: "red", marginBottom: 10 }}>
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
                        maxLength={256}
                        placeholder="Email*"
                        id="node-2"
                        style={{
                          width: "96%",
                          marginBottom: 10,
                          padding: 20,
                          fontSize: isMobile ? 14 : 20,
                          borderStyle: isMobile ? "none" : "solid",
                          borderColor: "black",
                        }}
                      />
                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <div style={{ color: "red", marginBottom: 10 }}>
                            {msg}
                          </div>
                        )}
                      />
                      <Field
                        maxLength={256}
                        name="companyName"
                        placeholder="Company Name"
                        id="node-2"
                        style={{
                          width: "96%",
                          marginBottom: 10,
                          padding: 20,
                          fontSize: isMobile ? 14 : 20,
                          borderStyle: isMobile ? "none" : "solid",
                          borderColor: "black",
                        }}
                      />
                      <ErrorMessage
                        name="companyName"
                        render={(msg) => (
                          <div style={{ color: "red", marginBottom: 10 }}>
                            {msg}
                          </div>
                        )}
                      />
                      <div style={{ width: "96%" }}>
                        <Field
                          name="noOfSeats"
                          options={
                            values.requirement === "Book a space"
                              ? booksASpaceSeats
                              : runAnEventSeats
                          }
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
                          >
                            {msg}
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div
                    className="af-class-div-block-56"
                    style={{
                      width: "98%",
                      position: "relative",

                      left: 10,
                    }}
                  >
                    <div
                      style={{
                        width: isMobile ? "98%" : "110%",
                        marginLeft: isMobile ? -10 : -20,
                        marginTop: isMobile ? 10 : 0,
                      }}
                    >
                      <Field
                        as="textarea"
                        style={{
                          width: "100%",
                          marginBottom: 10,
                          padding: 20,
                          fontSize: isMobile ? 14 : 20,
                          borderStyle: isMobile ? "none" : "solid",
                          borderColor: "black",
                          borderWidth: 2,
                        }}
                        rows={6}
                        placeholder="Additional Notes"
                        maxLength={5000}
                        id="node-3"
                        name="additionalNotes"
                      />
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="af-class-submit-button w-button"
                    style={{ outline: "none" }}
                  >
                    {!isSubmitting ? "GET IN TOUCH" : "Please wait..."}
                  </button>
                </Form>
              );
            }}
          </Formik>

          {/* {isFormSubmitted ? (
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
          ) : null} */}
          {/* {isFormSubmittingFailed ? (
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
          ) : null} */}
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
