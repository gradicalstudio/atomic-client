/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import AtomicMainPage from "./AtomicMainPage";

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

// let Controller;

const IndexView = () => {
  // static get Controller() {
  //   Controller = IndexView;

  //   return Controller;
  //   // if (Controller) return Controller;

  //   // try {
  //   //   Controller = require("../controllers/IndexController");
  //   //   Controller = Controller.default || Controller;

  //   //   return Controller;
  //   // } catch (e) {
  //   //   if (e.code == "MODULE_NOT_FOUND") {
  //   //     Controller = IndexView;

  //   //     return Controller;
  //   //   }

  //   //   throw e;
  //   // }
  // }

  useEffect(() => {
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
  }, []);

  return (
    <span>
      {/* <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url(../css/normalize.css);
          @import url(../css/webflow.css);
          @import url(../css/atomic-d10870.webflow.css);

        `,
        }}
      /> */}
      <span className="af-view">
        <div className="af-class-body">
          <AtomicMainPage />
          <a
            href="#book-a-tour"
            id="luxy"
            className="af-class-sticky-book-a-tour"
          >
            <a
              href="#book-a-tour"
              className="af-class-link-block-3 w-inline-block"
            />
            <img
              src="images/circular-atomic.svg"
              loading="lazy"
              style={{ opacity: 0 }}
              data-w-id="3e2fd565-4b18-087d-fa84-c16e821ca542"
              alt=""
              className="af-class-image-51"
            />
          </a>
          <div data-w-id="Div Block 46" className="af-class-preloader" />
          {/* [if lte IE 9]><![endif] */}
        </div>
      </span>
    </span>
  );
};

export default IndexView;

/* eslint-enable */
