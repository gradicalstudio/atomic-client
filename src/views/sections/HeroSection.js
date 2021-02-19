import React from "react";
import BackgroundSlider from "react-background-slider";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const HeroSection = ({ loading, data }) => {
  return (
    <div>
      <BackgroundSlider
        images={
          !loading && data
            ? data.images
            : ["https://homepages.cae.wisc.edu/~ece533/images/sails.png"]
        }
        duration={1.2}
        transition={2}
      />
      <div>
        <div className="af-class-container-3 w-container">
          <div
            data-collapse="small"
            data-animation="default"
            data-duration={400}
            role="banner"
            className="af-class-navbar-2 w-nav"
          >
            <nav role="navigation" className="af-class-nav-menu w-nav-menu">
              <div className="af-class-div-block-52 af-class-home">
                <div
                  data-w-id="60609fa0-55a6-1725-68a5-7b8019cad45f"
                  className="af-class-div-block-52 af-class-home af-class-line"
                />
                <a
                  href="#home"
                  data-w-id="4a234753-522f-27c7-9193-3505699e2ddb"
                  className="af-class-nav-link w-nav-link"
                >
                  Home
                </a>
              </div>
              <div className="af-class-div-block-52 af-class-home">
                <div
                  data-w-id="60609fa0-55a6-1725-68a5-7b8019cad45f"
                  className="af-class-div-block-52 af-class-home af-class-line"
                />
                <a
                  href="#Footer"
                  data-w-id="4a234753-522f-27c7-9193-3505699e2ddf"
                  className="af-class-nav-link w-nav-link"
                >
                  Contact
                </a>
              </div>
              <div className="af-class-div-block-52 af-class-home">
                <div
                  data-w-id="60609fa0-55a6-1725-68a5-7b8019cad45f"
                  className="af-class-div-block-52 af-class-home af-class-line"
                />
                <a
                  href="#About"
                  data-w-id="4a234753-522f-27c7-9193-3505699e2ddd"
                  className="af-class-nav-link w-nav-link"
                >
                  About
                </a>
              </div>
            </nav>
            <div className="af-class-menu-button w-nav-button">
              <div className="af-class-icon w-icon-nav-menu" />
            </div>
          </div>
        </div>
        <div className="af-class-container-2 w-container">
          <div className="af-class-hero-text-holder">
            <img
              src="images/ARROW-LOGO.svg"
              loading="lazy"
              width={1320}
              data-w-id="947a1079-f298-0995-1c23-9233cb87d024"
              alt=""
              className="af-class-hero-text"
            />
            <a href="#book-a-tour" className="af-class-button-9 w-button">
              BOOK A TOUR
            </a>
          </div>
          <h2 data-w-id="Heading" className="af-class-hero-sub-text">
            {!loading && data ? data.heroSubTitle : <LoadingSkeleton />}
            {/* <br />
            Designed for today’s creative, mobile and entrepreneurial minds. */}
          </h2>
          <a href="#About" className="af-class-scroll-button w-inline-block">
            <img
              src="images/Group-1.svg"
              loading="lazy"
              width={36}
              data-w-id="3fd87806-117a-3a3a-6c61-ecb7e8964a7b"
              alt=""
              className="af-class-image-26"
            />
          </a>
        </div>
        <div className="af-class-div-block-57 af-class-cover-photo">
          <img
            src="images/Rooftop-cafe-1.jpg"
            loading="lazy"
            data-w-id="Image"
            sizes="100vw"
            srcSet="images/Rooftop-cafe-1-p-500.jpeg 500w, images/Rooftop-cafe-1-p-800.jpeg 800w, images/Rooftop-cafe-1-p-1080.jpeg 1080w, images/Rooftop-cafe-1.jpg 1440w"
            alt=""
            className="af-class-image-65"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
