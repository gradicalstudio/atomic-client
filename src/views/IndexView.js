import React from "react";
import HeroSection from "./sections/HeroSection";
import { createScope, map, transformProxies } from "./helpers";
import AboutSection from "./sections/AboutSection";
import SpaceOverviewSection from "./sections/SpaceOverviewSection";
import WhatsIncludedSection from "./sections/WhatsIncludedSection";
import RunYourEventSection from "./sections/RunYourEventSection";
import CommunitySection from "./sections/CommunitySection";
import EnquiryForm from "./sections/EnquiryForm";
import SocialMediaSection from "./sections/SocialMediaSection";
import Footer from "./sections/Footer";

const scripts = [
  {
    loading: fetch(
      "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6024d30efc3d96e8efad7c32"
    ).then((body) => body.text()),
    isAsync: false,
  },
  {
    loading: fetch("js/webflow.js").then((body) => body.text()),
    isAsync: false,
  },
  {
    loading: fetch(
      "https://min30327.github.io/luxy.js/dist/js/luxy.js"
    ).then((body) => body.text()),
    isAsync: false,
  },
  {
    loading: Promise.resolve(
      'var isMobile=/iPhone|iPad|Android/i.test(navigator.userAgent);isMobile||luxy.init({wrapper:"#luxy",wrapperSpeed:.065});'
    ),
    isAsync: false,
  },
];

let Controller;

class IndexView extends React.Component {
  static get Controller() {
    Controller = IndexView;

    return Controller;
    // if (Controller) return Controller;

    // try {
    //   Controller = require("../controllers/IndexController");
    //   Controller = Controller.default || Controller;

    //   return Controller;
    // } catch (e) {
    //   if (e.code == "MODULE_NOT_FOUND") {
    //     Controller = IndexView;

    //     return Controller;
    //   }

    //   throw e;
    // }
  }

  componentDidMount() {
    const htmlEl = document.querySelector("html");
    htmlEl.dataset["wfPage"] = "6024d30efc3d966f5cad7c33";
    htmlEl.dataset["wfSite"] = "6024d30efc3d96e8efad7c32";

    scripts.concat(null).reduce((active, next) =>
      Promise.resolve(active).then((active) => {
        const loading = active.loading.then((script) => {
          new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script);

          return next;
        });

        return active.isAsync ? next : loading;
      })
    );
  }

  render() {
    const proxies =
      IndexView.Controller !== IndexView
        ? transformProxies(this.props.children)
        : {};

    return (
      <span>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @import url(../css/normalize.css);
          @import url(../css/webflow.css);
          @import url(../css/atomic-d10870.webflow.css);

          @media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"Div Block 46\"] {display:flex;-webkit-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"Div Block\"] {-webkit-transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"TextBlock 5\"] {color:rgb(15,14,12);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"b484cb5e-26ef-bfdc-5554-c3090bc92c25\"] {display:none;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"87861ede-c820-cbd2-d8d7-563042229b64\"] {display:block;}}
        `,
          }}
        />
        <span className="af-view">
          <div className="af-class-body">
            <div id="luxy" className="af-class-smooth-wrapper">
              <HeroSection />
              <AboutSection />
              <SpaceOverviewSection />
              <WhatsIncludedSection />
              <RunYourEventSection />
              <CommunitySection />
              <div className="af-class-section-8">
                <div className="af-class-div-block-53">
                  <div className="af-class-loop-text-outer">
                    <div
                      data-w-id="Div Block 32"
                      className="af-class-loop-text-inner"
                    >
                      <div className="af-class-loop-text">
                        — Atomic tribe • Join the
                      </div>
                      <div className="af-class-loop-text">
                        — Atomic tribe • Join the
                      </div>
                      <div className="af-class-loop-text">
                        — Atomic tribe • Join the
                      </div>
                      <div className="af-class-loop-text">
                        — Atomic tribe • Join the
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <EnquiryForm />
              <div className="af-class-section-10">
                <div className="af-class-loop-text-outer af-class-_2nd">
                  <div
                    data-w-id="Div Block 36"
                    style={{
                      WebkitTransform:
                        "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="af-class-loop-text-inner af-class-_2nd"
                  >
                    <div className="af-class-text-block-14 af-class-workspace">
                      WORKSPACE
                    </div>
                    <div className="af-class-text-block-14 af-class-community">
                      COMMUNITY
                    </div>
                    <div className="af-class-text-block-14 af-class-events">
                      EVENTS
                    </div>
                    <div className="af-class-text-block-14 af-class-innovation">
                      INNOVATION
                    </div>
                    <div className="af-class-text-block-14 af-class-workspace">
                      WORKSPACE
                    </div>
                    <div className="af-class-text-block-14 af-class-community">
                      COMMUNITY
                    </div>
                    <div className="af-class-text-block-14 af-class-events">
                      EVENTS
                    </div>
                    <div className="af-class-text-block-14 af-class-innovation">
                      INNOVATION
                    </div>
                    <div className="af-class-text-block-14 af-class-workspace">
                      WORKSPACE
                    </div>
                  </div>
                </div>
                <div className="af-class-loop-text-outer af-class-_2nd af-class-_2nd-row">
                  <div
                    data-w-id="0eaba232-388d-7583-1d42-4a6e2711a258"
                    style={{
                      WebkitTransform:
                        "translate3d(0vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="af-class-loop-text-inner af-class-_2nd af-class-_3rd af-class-_2nd-row"
                  >
                    <div className="af-class-text-block-14">INNOVATION</div>
                    <div className="af-class-text-block-14">EVENTS</div>
                    <div className="af-class-text-block-14">WORKSPACE</div>
                    <div className="af-class-text-block-14">COMMUNITY</div>
                    <div className="af-class-text-block-14">INNOVATION</div>
                    <div className="af-class-text-block-14">EVENTS</div>
                    <div className="af-class-text-block-14">WORKSPACE</div>
                    <div className="af-class-text-block-14">COMMUNITY</div>
                    <div className="af-class-text-block-14">INNOVATION</div>
                  </div>
                </div>
              </div>
              <SocialMediaSection />
              <Footer />
            </div>
            <div id="luxy" className="af-class-sticky-book-a-tour">
              <a
                href="#book-a-tour"
                className="af-class-link-block-3 w-inline-block"
              />
              <img
                src="images/circular-atomic.svg"
                loading="lazy"
                style={{ opacity: 0 }}
                data-w-id="3e2fd565-4b18-087d-fa84-c16e821ca542"
                alt
                className="af-class-image-51"
              />
            </div>
            <div data-w-id="Div Block 46" className="af-class-preloader" />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    );
  }
}

export default IndexView;

/* eslint-enable */
