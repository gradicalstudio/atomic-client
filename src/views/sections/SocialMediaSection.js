import React, { useState, useEffect, createRef } from "react";
import "../../scripts/instagramFeed";
import $ from "jquery";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { isMobile } from "react-device-detect";

export default function SocialMediaSection() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [changeStatus, setChangeStatus] = useState(null);
  const cars = createRef();

  //theatomicspaces

  useEffect(() => {
    setLoading(true);

    $.instagramFeed({
      username: "ithub",

      get_data: true,
      callback: function (data) {
        setPosts(
          data.edge_owner_to_timeline_media.edges.map((el) => ({
            original: el.node.display_url,
            thumbnail: el.node.thumbnail_src,
          }))
        );

        setLoading(false);
      },
    });
  }, [changeStatus]);

  if (loading) {
    setTimeout(() => {
      setChangeStatus(Math.random());
    }, 2000);
  }

  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         color: "white",
  //         fontSize: 20,
  //       }}
  //     >
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div
        data-w-id="461260a2-54bb-0e9f-ff6d-03c3003697f1"
        className="af-class-section-21"
        style={{ backgroundColor: "black" }}
      >
        <div className="af-class-text-wrapper">
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
            className="af-class-heading-16"
          >
            Our Social
          </h1>
          <a
            href="https://www.instagram.com/theatomicspaces"
            target="_blank"
            rel="noreferrer"
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
              paddingTop: isMobile ? 25 : 20,
            }}
            className="af-class-text-block-16 af-class-ok"
          >
            Follow us on Instagram
          </a>
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
          className="af-class-card-wrapper"
        >
          <div
            className="af-class-button-wrapper"
            onClick={() => cars.current.prev()}
            style={{ cursor: "pointer", zIndex: 10 }}
          >
            {posts ? (
              <div className="af-class-button-bg-color">
                <img
                  src="https://uploads-ssl.webflow.com/6027b8e27df225a359218561/602984d134a8845b9c9f0f85_Ellipse%202.svg"
                  loading="lazy"
                  width={58}
                  alt=""
                />
                <div className="af-class-button-arrow">
                  <img
                    src="https://uploads-ssl.webflow.com/6027b8e27df225a359218561/6029864e35d51a9b0e01f63e_Vector%20(1).png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div
            className="af-class-button-wrapper2"
            onClick={() => cars.current.next()}
            style={{ cursor: "pointer", zIndex: 10 }}
          >
            {posts ? (
              <div className="af-class-button-bg-color af-class-custom">
                <img
                  src="https://uploads-ssl.webflow.com/6027b8e27df225a359218561/602984d0f37b56ef07d80cfb_Ellipse%201.svg"
                  loading="lazy"
                  width={59}
                  alt=""
                />
                <div className="af-class-button-arrow">
                  <img
                    src="https://uploads-ssl.webflow.com/6027b8e27df225a359218561/6029864eb5ed084348e6bfab_Vector%20(2).png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            ) : null}
          </div>

          <div>
            {!loading ? (
              posts && posts.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    overflowX: "auto",
                    marginTop: 50,
                    zIndex: 1,
                  }}
                >
                  <OwlCarousel
                    style={{ height: isMobile ? 260 : 410 }}
                    ref={cars}
                    items={5}
                    merge
                    autoWidth={false}
                    className="owl-theme"
                    loop
                    dots={false}
                    margin={20}
                    responsive={{
                      200: {
                        items: 1,
                        margin: 10,
                        stagePadding: 40,
                      },
                      500: {
                        items: 2,
                        margin: 10,
                        stagePadding: 20,
                      },
                      700: {
                        items: 3,
                        margin: 10,
                        stagePadding: 100,
                      },
                      1000: {
                        items: 3,
                        margin: 10,
                        stagePadding: 10,
                      },
                      1200: {
                        items: 3,
                        margin: 10,
                      },
                    }}
                  >
                    {posts.map((post) => {
                      return (
                        <div
                          style={{
                            height: isMobile ? 260 : 410,
                            width: isMobile ? 260 : 410,
                          }}
                        >
                          <img src={post.original} alt="" />
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>
              ) : (
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  No posts found...
                </p>
              )
            ) : (
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 20,
                }}
              >
                Loading....
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
