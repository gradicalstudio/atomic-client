/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6024d30efc3d96e8efad7c32").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
  { loading: fetch("https://min30327.github.io/luxy.js/dist/js/luxy.js").then(body => body.text()), isAsync: false },
  { loading: Promise.resolve("var isMobile=/iPhone|iPad|Android/i.test(navigator.userAgent);isMobile||luxy.init({wrapper:\"#luxy\",wrapperSpeed:.065});"), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6024d30efc3d966f5cad7c33'
    htmlEl.dataset['wfSite'] = '6024d30efc3d96e8efad7c32'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\atomic-d10870.webflow.css);

          @media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"Div Block 46\"] {display:flex;-webkit-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"Div Block\"] {-webkit-transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"TextBlock 5\"] {color:rgb(15,14,12);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"b484cb5e-26ef-bfdc-5554-c3090bc92c25\"] {display:none;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"87861ede-c820-cbd2-d8d7-563042229b64\"] {display:block;}}
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div id="luxy" className="af-class-smooth-wrapper">
              <div id="home" data-w-id="Div Block" className="af-class-section-1">
                <div className="af-class-container-3 w-container">
                  <div data-collapse="small" data-animation="default" data-duration={400} role="banner" className="af-class-navbar-2 w-nav">
                    <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                      <div className="af-class-div-block-52 af-class-home">
                        <div data-w-id="60609fa0-55a6-1725-68a5-7b8019cad45f" className="af-class-div-block-52 af-class-home af-class-line" />
                        <a href="#home" data-w-id="4a234753-522f-27c7-9193-3505699e2ddb" className="af-class-nav-link w-nav-link">Home</a>
                      </div>
                      <div className="af-class-div-block-52 af-class-home">
                        <div data-w-id="60609fa0-55a6-1725-68a5-7b8019cad45f" className="af-class-div-block-52 af-class-home af-class-line" />
                        <a href="#Footer" data-w-id="4a234753-522f-27c7-9193-3505699e2ddf" className="af-class-nav-link w-nav-link">Contact</a>
                      </div>
                      <div className="af-class-div-block-52 af-class-home">
                        <div data-w-id="60609fa0-55a6-1725-68a5-7b8019cad45f" className="af-class-div-block-52 af-class-home af-class-line" />
                        <a href="#About" data-w-id="4a234753-522f-27c7-9193-3505699e2ddd" className="af-class-nav-link w-nav-link">About</a>
                      </div>
                    </nav>
                    <div className="af-class-menu-button w-nav-button">
                      <div className="af-class-icon w-icon-nav-menu" />
                    </div>
                  </div>
                </div>
                <div className="af-class-container-2 w-container">
                  <div className="af-class-hero-text-holder"><img src="images/ARROW-LOGO.svg" loading="lazy" width={1320} data-w-id="947a1079-f298-0995-1c23-9233cb87d024" alt className="af-class-hero-text" />
                    <a href="#book-a-tour" className="af-class-button-9 w-button">BOOK A TOUR</a>
                  </div>
                  <h2 data-w-id="Heading" className="af-class-hero-sub-text">Workspaces that spark exponential growth.<br />Designed for today’s creative, mobile and entrepreneurial minds.</h2>
                  <a href="#About" className="af-class-scroll-button w-inline-block"><img src="images/Group-1.svg" loading="lazy" width={36} data-w-id="3fd87806-117a-3a3a-6c61-ecb7e8964a7b" alt className="af-class-image-26" /></a>
                </div>
                <div className="af-class-div-block-57 af-class-cover-photo"><img src="images/Rooftop-cafe-1.jpg" loading="lazy" data-w-id="Image" sizes="100vw" srcSet="images/Rooftop-cafe-1-p-500.jpeg 500w, images/Rooftop-cafe-1-p-800.jpeg 800w, images/Rooftop-cafe-1-p-1080.jpeg 1080w, images/Rooftop-cafe-1.jpg 1440w" alt className="af-class-image-65" /></div>
              </div>
              <section id="About" className="af-class-section-2">
                <div className="af-class-columns-2 w-row">
                  <div className="af-class-column-2 w-col w-col-6">
                    <div data-w-id="Div Block 53" style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-_1st-text-block">
                      <h1 className="af-class-heading-18">At The Atomic, we exist to</h1>
                      <h1 className="af-class-heading-18 af-class-h2-2">enable innovation for the</h1>
                      <h1 className="af-class-heading-18 af-class-h2-3">new generation.</h1>
                    </div>
                  </div>
                  <div className="af-class-column-3 w-col w-col-6">
                    <p style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-paragraph-1 af-class-title"><span className="af-class-text-span-6">We offer a place for you to work,<br />‍</span>create and collabrate.</p>
                    <p data-w-id="Paragraph" style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-para-2"><span>Closely located to Technopark - Trivandrum<br />‍</span><span>The Atomic is a vibrant ecosystem for the<br />modern workforce.</span></p>
                  </div>
                </div>
                <div data-w-id="Container 4" className="af-class-container-5 w-container"><img src="images/Lobby_2-3.svg" loading="lazy" width={450} style={{WebkitTransform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} alt className="af-class-image-9" /><img src="images/Front-desk-1.svg" loading="lazy" width={504} style={{WebkitTransform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} alt className="af-class-image-10" /><img src="images/Group-6.svg" loading="lazy" width={512} style={{WebkitTransform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} alt className="af-class-image-11" /></div>
              </section>
              <div className="af-class-section-22">
                <div data-w-id="Row 7" className="af-class-columns-9 w-row">
                  <div data-w-id="Column_1 7" className="af-class-column-14 w-col w-col-6">
                    <div data-duration-in={300} data-duration-out={100} className="af-class-tabs-4 w-tabs">
                      <div className="af-class-tabs-content-3 w-tab-content">
                        <div data-w-tab="Tab 1" className="af-class-tab-pane-tab-1-2 w-tab-pane w--tab-active">
                          <h2 style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-heading af-class-purple af-class-hotdesk af-class-heading-16">Desks for as <br />short as a day.</h2>
                          <p style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-paragraph-3 af-class-hotdesk-para">Perfect for the modern-day nomad - flexible and at your convenience. Find your desk, plug in and take the new world of work one day at a time.</p>
                          <a href="#book-a-tour" style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-div-block-38 af-class-button af-class-run-your-event af-class-hotdesk w-inline-block">
                            <div className="af-class-text-block-16">ENQUIRE NOW</div><img src="images/ARROW.svg" loading="lazy" alt className="af-class-image-42" />
                          </a>
                          <div style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-text-block-19">COVID-19 Precautions are enabled at our spaces. <a href="#" className="af-class-link-3">Download the manual.</a>
                          </div>
                        </div>
                        <div data-w-tab="Tab 2" className="w-tab-pane" />
                        <div data-w-tab="Tab 3" className="w-tab-pane" />
                      </div>
                      <div style={{WebkitTransform: 'translate3d(40px, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(40px, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(40px, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(40px, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-tabs-menu-3 w-tab-menu">
                        <a data-w-tab="Tab 1" className="af-class-hot-desk af-class-tab w-inline-block w-tab-link w--current">
                          <div className="af-class-text-block-21">Hot Desk</div>
                        </a>
                        <a data-w-tab="Tab 2" className="af-class-dedicated af-class-tab w-inline-block w-tab-link">
                          <div className="af-class-text-block-22">Dedicated Desk</div>
                        </a>
                        <a data-w-tab="Tab 3" className="af-class-private af-class-tab w-inline-block w-tab-link">
                          <div className="af-class-text-block-23">Private Office</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-w-id="Column_2 8" style={{WebkitTransform: 'translate3d(40vh, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(40vh, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(40vh, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(40vh, 0vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-column-13 w-col w-col-6" />
                </div>
              </div>
              <div className="af-class-section-13">
                <div className="af-class-columns-8 w-row">
                  <div className="af-class-column-9 w-col w-col-6">
                    <div className="af-class-container-13 w-container">
                      <div data-duration-in={500} data-duration-out={500} className="af-class-tabs-parent w-tabs">
                        <div className="af-class-tabs-menu-2 w-tab-menu">
                          <a data-w-tab="Tab 1" data-w-id="54c823a5-9d2d-16ea-d6a1-d452d3cdff71" className="af-class-tabs-2 af-class-hotdeskcover af-class-tab-menu-1 w-inline-block w-tab-link w--current">
                            <div className="af-class-tab-text af-class-menu-text af-class-hot-desk">Hot Desk</div>
                          </a>
                          <a data-w-tab="Tab 3" className="af-class-tabs-2 af-class-hotdeskcover af-class-tab-menu-1 w-inline-block w-tab-link">
                            <div className="af-class-tab-text af-class-menu-text af-class-dedicated-desk">Dedicated Desk</div>
                          </a>
                          <a data-w-tab="Tab 4" className="af-class-tabs-2 af-class-hotdeskcover af-class-tab-menu-1 w-inline-block w-tab-link">
                            <div className="af-class-tab-text af-class-menu-text af-class-private-office">Private Office</div>
                          </a>
                        </div>
                        <div className="af-class-tabs-content-2 w-tab-content">
                          <div data-w-tab="Tab 1" className="af-class-tab-1 w-tab-pane w--tab-active">
                            <div className="af-class-the-lounge">
                              <h2 data-w-id="54c823a5-9d2d-16ea-d6a1-d452d3cdff9a" style={{WebkitTransform: 'translate3d(0, 50%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 50%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 50%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 50%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-heading af-class-purple af-class-hotdesk">Desks for as short as a day.</h2>
                              <p data-w-id="54c823a5-9d2d-16ea-d6a1-d452d3cdff9c" style={{opacity: 0, WebkitTransform: 'translate3d(0, 30%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 30%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 30%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 30%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-paragraph-3 af-class-hotdesk-para">Perfect for the modern-day nomad - flexible and at your convenience. Find your desk, plug in and take the new world of work one day at a time.</p>
                              <a href="#book-a-tour" className="af-class-div-block-38 af-class-button af-class-desk w-inline-block">
                                <div className="af-class-text-block-16">ENQUIRE NOW</div><img src="images/ARROW.svg" loading="lazy" alt className="af-class-image-42" />
                              </a>
                            </div>
                            <div className="af-class-text-block-19">COVID-19 Precautions are enabled at our spaces. <a href="#" className="af-class-link-3">Download the manual.</a>
                            </div>
                          </div>
                          <div data-w-tab="Tab 3" className="af-class-tab-1 w-tab-pane">
                            <div className="af-class-the-lounge">
                              <h2 className="af-class-heading af-class-purple">Something a little more permanent.</h2>
                              <p className="af-class-paragraph-3 af-class-hotdesk-para">Settle into your own work space. Designed for those who require more gear to get the job done. Do your own thing while being part of Atomic’s diverse community.</p>
                              <a href="#book-a-tour" className="af-class-div-block-38 af-class-button w-inline-block">
                                <div className="af-class-text-block-16">ENQUIRE NOW</div><img src="images/ARROW.svg" loading="lazy" alt className="af-class-image-42" />
                              </a>
                              <div className="af-class-text-block-19">COVID-19 Precautions are enabled at our spaces. <a href="#" className="af-class-link-3">Download the manual.</a>
                              </div>
                            </div>
                          </div>
                          <div data-w-tab="Tab 4" className="af-class-tab-3 w-tab-pane">
                            <div>
                              <h2 className="af-class-heading af-class-purple">Secure spaces for growing teams.</h2>
                              <p className="af-class-paragraph-4">Do great work together. Ideal for teams and enterprises who require a convenient and secure workspace to spark ideas and start conversations.<br /></p>
                              <a href="#book-a-tour" className="af-class-div-block-38 af-class-button w-inline-block">
                                <div className="af-class-text-block-16">ENQUIRE NOW</div><img src="images/ARROW.svg" loading="lazy" alt className="af-class-image-42" />
                              </a>
                              <div className="af-class-text-block-19">COVID-19 Precautions are enabled at our spaces. <a href="#" className="af-class-link-3">Download the manual.</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-column-8 w-col w-col-6">
                    <div className="af-class-div-block-51"><img src="images/Hot-desk-ad-phone-booth.jpg" loading="lazy" sizes="100vw" srcSet="images/Hot-desk-ad-phone-booth-p-500.jpeg 500w, images/Hot-desk-ad-phone-booth-p-1080.jpeg 1080w, images/Hot-desk-ad-phone-booth.jpg 1500w" alt className="af-class-image-52" /></div>
                  </div>
                </div>
              </div>
              <div data-w-id="Div Block 10" className="af-class-section-4">
                <div className="af-class-container-9 w-container">
                  <h1 style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-heading-16 af-class-xo">What’s Included</h1>
                  <h3 style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-paragraph-2">Our way of making sure you get to focus on what you do best - brilliant work. We’re commited to creating a space and environment for teams to make The Atomic their home, their workplace and their playground.</h3>
                  <div style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="w-layout-grid af-class-grid-12">
                    <div id="w-node-div-block-31-5cad7c33" className="af-class-include af-class-wifi"><img src="images/Wifi.svg" loading="lazy" width={55} alt className="af-class-image-wiifi" />
                      <div className="af-class-text-block-20">High Speed Internet</div>
                    </div>
                    <div id="w-node-_9ca38f5a-594b-e1f7-1272-85dba9ea2510-5cad7c33" className="af-class-include af-class-wifi"><img src="images/AC.svg" loading="lazy" width={55} alt className="af-class-air-conditioning" />
                      <div className="af-class-text-block-20">Air Conditioning</div>
                    </div>
                    <div id="w-node-c91c9680-fed5-08cb-995e-00d5d0876d81-5cad7c33" className="af-class-include af-class-wifi"><img src="images/24HR.svg" loading="lazy" width={55} alt className="af-class-_24access" />
                      <div className="af-class-text-block-20">24x7 &nbsp;Access</div>
                    </div>
                    <div id="w-node-be124558-b3b9-307a-efc2-f4c13295f70b-5cad7c33" className="af-class-include af-class-wifi"><img src="images/Pantry.svg" loading="lazy" width={55} alt className="af-class-pantry" />
                      <div className="af-class-text-block-20">Pantry</div>
                    </div>
                    <div id="w-node-_4cc2958b-b449-1149-cc32-354b42eb88ae-5cad7c33" className="af-class-include af-class-wifi"><img src="images/Office.svg" loading="lazy" width={55} alt className="af-class-office-supplies" />
                      <div className="af-class-text-block-20">Office Supplies &amp;<br />Printing</div>
                    </div>
                    <div id="w-node-d3cd41a1-8e62-806f-8348-213e94d0a184-5cad7c33" className="af-class-include af-class-wifi"><img src="images/Storage.svg" loading="lazy" width={55} alt className="af-class-storage-facility" />
                      <div className="af-class-text-block-20 af-class-office">Storage Facility</div>
                    </div>
                    <div id="w-node-_7992f296-1e7c-684f-d0f1-a5af49de2839-5cad7c33" className="af-class-include af-class-wifi"><img src="images/Parking.svg" loading="lazy" width={55} alt className="af-class-onsite-parking" />
                      <div className="af-class-text-block-20">On-Site Parking</div>
                    </div>
                    <div id="w-node-dccd72d3-bed8-ec68-109b-b5b39734ebc1-5cad7c33" className="af-class-include af-class-wifi">
                      <div className="af-class-include af-class-wifi"><img src="images/Cafe.svg" loading="lazy" width={55} alt className="af-class-wifi" /></div>
                      <div className="af-class-text-block-20 af-class-cafe">Rooftop Cafe</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section-5">
                <div data-w-id="Row 2" className="af-class-columns-3 w-row">
                  <div data-w-id="Column_1 2" className="af-class-column-4 w-col w-col-6">
                    <h1 style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-heading-16 af-class-diff af-class-run-your-event">Run your event, the way you’d want it.</h1>
                    <h4 style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-heading-11">The Atomic’s event spaces are open to public bookings throughout the year. Anything from board meetings to seminars to get-togethers can be organised conveniently. <br /><br />Rates vary with the type of event, tell us what you have planned and we’ll make it work.</h4>
                    <a href="#book-a-tour" data-w-id="056229b1-3df5-62af-bcbe-42849fad36e8" style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-div-block-38 af-class-button af-class-run-your-event w-inline-block">
                      <div data-w-id="TextBlock 5" className="af-class-text-block-16 af-class-button-2">HOST YOUR EVENT</div><img src="images/ARROW.svg" loading="lazy" data-w-id="b484cb5e-26ef-bfdc-5554-c3090bc92c25" width={12} alt className="af-class-image-37 af-class-blackarrow" /><img src="images/ARROW.svg" loading="lazy" data-w-id="87861ede-c820-cbd2-d8d7-563042229b64" alt className="af-class-image-66" />
                    </a>
                  </div>
                  <div data-w-id="Column_2 3" className="af-class-column-5 w-col w-col-6">
                    <div style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-container-17 w-container">
                      <div data-w-id="7908f217-5ab8-d52b-70eb-9d8c729443cb" style={{backgroundColor: 'rgb(255,255,255)'}} className="af-class-div-block-54 af-class-right"><img src="images/ARROW.svg" loading="lazy" width={55} style={{display: 'block'}} alt className="af-class-image-57" /><img src="images/Vector-5.svg" loading="lazy" style={{display: 'none'}} alt className="af-class-arrow-slider" /></div>
                      <div className="af-class-div-block-54 af-class-left"><img src="images/left.svg" loading="lazy" width={55} alt className="af-class-image-57" /></div><img src="images/image-2.svg" loading="lazy" alt className="af-class-image-56 af-class-top" /><img src="images/Compo-group.svg" loading="lazy" width={310} alt className="af-class-image-64" /><img src="images/image-2.svg" loading="lazy" alt className="af-class-image-56 af-class-bottom" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section-6">
                <div data-w-id="Row 3" className="af-class-columns-4 w-row">
                  <div className="af-class-column-11 w-col w-col-6">
                    <h1 style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-heading-16 af-class-surrounded">Be surrounded by <br />interesting people doing interesting things.</h1>
                  </div>
                  <div className="af-class-column-6 w-col w-col-6">
                    <h4 style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-heading-13">We believe people can be more together. <br />We empower members to spark ideas as an individual all the while drawing from and building upon the surrounding community.</h4>
                  </div>
                </div>
                <div className="af-class-container-15 w-container"><img src="images/decorative-social-space-1.jpg" loading="lazy" style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} alt className="af-class-image-54" /><img src="images/a-pair-of-hands-typing-away-close-up-1.jpg" loading="lazy" width={445} style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} alt className="af-class-image-32" /><img src="images/busy-friends-working-1.jpg" loading="lazy" style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} alt className="af-class-image-33" /></div>
              </div>
              <div className="af-class-section-8">
                <div className="af-class-div-block-53">
                  <div className="af-class-loop-text-outer">
                    <div data-w-id="Div Block 32" className="af-class-loop-text-inner">
                      <div className="af-class-loop-text">— Atomic tribe • Join the</div>
                      <div className="af-class-loop-text">— Atomic tribe • Join the</div>
                      <div className="af-class-loop-text">— Atomic tribe • Join the</div>
                      <div className="af-class-loop-text">— Atomic tribe • Join the</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="book-a-tour" data-w-id="Div Block 26" className="af-class-section-9">
                <div className="af-class-container-14 w-container">
                  <h1 style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-heading-16 af-class-cnter af-class-center">What are you waiting for?</h1>
                  <div className="af-class-text-block-18 af-class-desktop-hide af-class-show">YOU CAN ALSO REACH US BY PHONE —<br /> CALL US AT +91 85902 42448, <br />+91 94964 34303</div>
                  <div style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-form-block w-form">
                    <form id="wf-form-enquiry-form" name="wf-form-enquiry-form" data-name="enquiry form" method="get" className="af-class-form">
                      <div className="af-class-columns-6 w-row">
                        <div className="af-class-form-text w-col w-col-6"><input type="text" placeholder="Full Name*" maxLength={256} data-name id="node" required className="af-class-text-field w-input" /><input type="tel" placeholder="Phone Number*" maxLength={256} required data-name id="node" className="af-class-text-field w-input" /><select id="Requirement" name="Requirement" data-name="Requirement*" required className="af-class-text-field w-select">
                            <option value>Select one...</option>
                            <option value="First">Run an event</option>
                            <option value="Second">Book a space</option>
                            <option value="Third">Community Related</option>
                          </select></div>
                        <div className="af-class-form-text w-col w-col-6"><input type="email" className="af-class-text-field w-input" maxLength={256} data-name placeholder="Email*" id="node-2" required /><input type="email" className="af-class-text-field w-input" maxLength={256} data-name placeholder="Company Name*" id="node-2" required /><select id="Number-of-Seats-2" name="Number-of-Seats" data-name="Number of Seats" required className="af-class-text-field w-select">
                            <option value>Select one...</option>
                          </select></div>
                      </div>
                      <div className="af-class-div-block-56">
                        <div className="af-class-div-block-42"><textarea placeholder="Additional Notes" maxLength={5000} id="node-3" data-name className="af-class-text-field af-class-coments w-input" defaultValue={""} /></div>
                      </div><input type="submit" defaultValue="GET IN TOUCH" data-wait="Please wait..." className="af-class-submit-button w-button" />
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
                <div style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-text-block-18 af-class-mobile-view-1">YOU CAN ALSO REACH US BY PHONE — CALL US AT +91 85902 42448 or +91 94964 34303</div>
              </div>
              <div className="af-class-section-10">
                <div className="af-class-loop-text-outer af-class-_2nd">
                  <div data-w-id="Div Block 36" style={{WebkitTransform: 'translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-loop-text-inner af-class-_2nd">
                    <div className="af-class-text-block-14 af-class-workspace">WORKSPACE</div>
                    <div className="af-class-text-block-14 af-class-community">COMMUNITY</div>
                    <div className="af-class-text-block-14 af-class-events">EVENTS</div>
                    <div className="af-class-text-block-14 af-class-innovation">INNOVATION</div>
                    <div className="af-class-text-block-14 af-class-workspace">WORKSPACE</div>
                    <div className="af-class-text-block-14 af-class-community">COMMUNITY</div>
                    <div className="af-class-text-block-14 af-class-events">EVENTS</div>
                    <div className="af-class-text-block-14 af-class-innovation">INNOVATION</div>
                    <div className="af-class-text-block-14 af-class-workspace">WORKSPACE</div>
                  </div>
                </div>
                <div className="af-class-loop-text-outer af-class-_2nd af-class-_2nd-row">
                  <div data-w-id="0eaba232-388d-7583-1d42-4a6e2711a258" style={{WebkitTransform: 'translate3d(0vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0vw, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-loop-text-inner af-class-_2nd af-class-_3rd af-class-_2nd-row">
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
              <div>
                <div data-w-id="461260a2-54bb-0e9f-ff6d-03c3003697f1" className="af-class-section-21">
                  <div className="af-class-text-wrapper">
                    <h1 style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-heading-16">Our Social</h1>
                    <h3 style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-text-block-16 af-class-ok">Follow us on Instagram</h3>
                  </div>
                  <div style={{opacity: 0, WebkitTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 2vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-card-wrapper">
                    <div className="af-class-button-wrapper">
                      <div className="af-class-button-bg-color"><img src="https://uploads-ssl.webflow.com/6027b8e27df225a359218561/602984d134a8845b9c9f0f85_Ellipse%202.svg" loading="lazy" width={58} alt />
                        <div className="af-class-button-arrow"><img src="https://uploads-ssl.webflow.com/6027b8e27df225a359218561/6029864e35d51a9b0e01f63e_Vector%20(1).png" loading="lazy" alt /></div>
                      </div>
                    </div>
                    <div className="af-class-button-wrapper2">
                      <div className="af-class-button-bg-color af-class-custom"><img src="https://uploads-ssl.webflow.com/6027b8e27df225a359218561/602984d0f37b56ef07d80cfb_Ellipse%201.svg" loading="lazy" width={59} alt />
                        <div className="af-class-button-arrow"><img src="https://uploads-ssl.webflow.com/6027b8e27df225a359218561/6029864eb5ed084348e6bfab_Vector%20(2).png" loading="lazy" alt /></div>
                      </div>
                    </div>
                    <div className="af-class-custom-slider-wrapper">
                      <div className="af-class-slider">
                        <div className="af-class-card" />
                        <div className="af-class-card" />
                        <div className="af-class-card" />
                        <div className="af-class-card" />
                        <div className="af-class-card" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer id="Footer" className="af-class-section-11">
                <div className="af-class-columns-5 w-row">
                  <div className="af-class-column-10 w-col w-col-7"><img src="images/atomic-Svg.svg" loading="lazy" alt className="af-class-image-39 af-class-the-atoic" />
                    <div className="af-class-text-block-17 af-class-footer">Reach us at +91 85902 42448</div>
                    <div className="af-class-text-block-17 af-class-footer">or Mail at <a href="mailto:hey@theatomic.space?subject=Talk%20to%20us" className="af-class-link-4">hey@theatomic.space</a>
                    </div>
                    <div className="af-class-text-block-17 af-class-footer af-class-text">Kazhakootam, Near Technopark Phase 1, <br />695022, Trivandrum, Kerala.</div>
                    <div className="af-class-text-block-17 af-class-footer af-class-small">Follow us on</div>
                    <div className="w-layout-grid af-class-grid-16">
                      <div id="w-node-div-block-38-5cad7c33" className="af-class-div-block-40"><img src="images/Vector-2.svg" loading="lazy" width={24} alt className="af-class-image-40" /></div>
                      <div id="w-node-_76731110-5274-10c6-b10e-fec530626f1c-5cad7c33" className="af-class-div-block-40"><img src="images/Vector-3.svg" loading="lazy" width={24} alt className="af-class-image-40" /></div>
                      <div id="w-node-_333c37bd-74fd-6ab3-95e3-d3c7403553df-5cad7c33" className="af-class-div-block-40"><img src="images/Vector-1.svg" loading="lazy" width={24} alt className="af-class-image-40" /></div>
                      <div id="w-node-_0f721f33-fe87-8475-9918-fb38dc28b2f2-5cad7c33" className="af-class-div-block-40"><img src="images/Vector.svg" loading="lazy" width={24} alt className="af-class-image-40" /></div>
                    </div>
                    <div className="af-class-text-block-17">© 2021 The Atomic - All Rights Reserved</div>
                  </div>
                  <div className="w-col w-col-5">
                    <div className="af-class-container-12 w-container">
                      <div className="af-class-map w-widget w-widget-map" />
                      <div className="af-class-div-block-41"><img src="images/studio-gradical.svg" loading="lazy" alt /></div>
                    </div>
                  </div>
                </div>
                <div className="af-class-columns-5 af-class-footer-mobile-view w-row">
                  <div className="af-class-column-10 w-col w-col-6">
                    <div className="af-class-text-block-17 af-class-footer af-class-do-not-need">Follow us on</div>
                  </div>
                  <div className="af-class-column-12 w-col w-col-6">
                    <div className="af-class-map w-widget w-widget-map" />
                    <div className="af-class-text-block-17 af-class-footer">Reach us at +91 123 456 7890</div>
                    <div className="af-class-text-block-17 af-class-footer">or Mail at hi@atomic.space</div>
                    <div className="af-class-text-block-17 af-class-footer af-class-text">Kazhakootam, Near Technopark Phase 1, <br />695022, Trivandrum, Kerala.</div><img src="images/atomic-Svg.svg" loading="lazy" alt className="af-class-image-39" />
                    <div className="w-layout-grid af-class-grid-16">
                      <div id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833ef-5cad7c33" className="af-class-div-block-40"><img src="images/Vector-2.svg" loading="lazy" width={24} alt className="af-class-image-40" /></div>
                      <div id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833f1-5cad7c33" className="af-class-div-block-40"><img src="images/Vector-3.svg" loading="lazy" width={24} alt className="af-class-image-40" /></div>
                      <div id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833f3-5cad7c33" className="af-class-div-block-40"><img src="images/Vector-1.svg" loading="lazy" width={24} alt className="af-class-image-40" /></div>
                      <div id="w-node-_14c0a8ef-0ad5-2bc5-ab44-de73975833f5-5cad7c33" className="af-class-div-block-40"><img src="images/Vector.svg" loading="lazy" width={24} alt className="af-class-image-40" /></div>
                    </div>
                    <div className="af-class-text-block-17">© 2021 The Atomic - All Rights Reserved</div>
                    <div className="af-class-container-12 w-container">
                      <div className="af-class-div-block-41"><img src="images/studio-gradical.svg" loading="lazy" alt className="af-class-image-63" /></div>
                    </div>
                  </div>
                </div>
                <div className="af-class-section-16" />
              </footer>
            </div>
            <div id="luxy" className="af-class-sticky-book-a-tour">
              <a href="#book-a-tour" className="af-class-link-block-3 w-inline-block" /><img src="images/circular-atomic.svg" loading="lazy" style={{opacity: 0}} data-w-id="3e2fd565-4b18-087d-fa84-c16e821ca542" alt className="af-class-image-51" />
            </div>
            <div data-w-id="Div Block 46" className="af-class-preloader" />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */