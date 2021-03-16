import React, { useEffect, useState } from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SpaceOverviewSection from "./sections/SpaceOverviewSection";
import WhatsIncludedSection from "./sections/WhatsIncludedSection";
import RunYourEventSection from "./sections/RunYourEventSection";
import CommunitySection from "./sections/CommunitySection";
import EnquiryForm from "./sections/EnquiryForm";
import SocialMediaSection from "./sections/SocialMediaSection";
import Footer from "./sections/Footer";
import { db } from "../firebase";
import { Preloader, Placeholder } from "react-preloading-screen";
import getBlobComponent from "./BlobComponent";

export default function AtomicMainPage() {
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState(null);

  const fetchAtomicPageDetails = async () => {
    setLoading(true);
    let res = await db
      .collection("atomicLandingPage")
      .doc("Aw6fT3wFRWFsGqqnjJlt")
      .get();
    console.log("Data", res.data());
    setLoading(false);
    setPageData(res.data());
  };

  const RunYourEventSectionBlob = getBlobComponent(RunYourEventSection);
  const SpaceOverviewSectionBlob = getBlobComponent(SpaceOverviewSection);

  useEffect(() => {
    fetchAtomicPageDetails();
  }, []);

  return (
    <div>
      <Preloader>
        <div id="luxy" className="af-class-smooth-wrapper">
          <HeroSection
            loading={loading}
            data={pageData ? pageData.heroSection : null}
          />
          <AboutSection
            loading={loading}
            data={pageData ? pageData.aboutSection : null}
          />
          <SpaceOverviewSectionBlob
            loading={loading}
            data={pageData ? pageData.spaceOverviewSection : null}
          />
          <WhatsIncludedSection />
          <RunYourEventSectionBlob
            loading={loading}
            data={pageData ? pageData.runYourEvent : null}
          />
          <CommunitySection
            loading={loading}
            data={pageData ? pageData.communitySection : null}
          />
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

        <Placeholder>
          <span></span>
        </Placeholder>
      </Preloader>
    </div>
  );
}
