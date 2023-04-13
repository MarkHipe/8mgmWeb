import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  IoCall,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io5";

import { CiLocationOn, CiMail } from "react-icons/ci";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import logo from ".././assets/logo.png";
import img1 from "../assets/slidePics/01.jpg";
import img2 from "../assets/slidePics/02.jpg";
import img3 from "../assets/slidePics/03.jpg";
import img4 from "../assets/slidePics/04.jpg";
import img5 from "../assets/slidePics/05.jpg";
import img6 from "../assets/slidePics/06.jpg";
import img7 from "../assets/slidePics/07.jpg";
import img8 from "../assets/slidePics/08.jpg";
import img9 from "../assets/slidePics/09.jpg";

//import { ScrollSmoother } from "gsap/all";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

const member = [
  {
    id: 0,
    images: img1,
  },
  {
    id: 1,
    images: img2,
  },
  {
    id: 2,
    images: img3,
  },
  {
    id: 3,
    images: img4,
  },
  {
    id: 4,
    images: img5,
  },
  {
    id: 5,
    images: img6,
  },
  {
    id: 6,
    images: img7,
  },
  {
    id: 7,
    images: img8,
  },
  {
    id: 8,
    images: img9,
  },
  {
    id: 1,
    images: img1,
  },
];
const MainContents = ({ actives }) => {
  const [active, setactive] = useState(0);

  // Intro Animation //
  // useLayoutEffect(() => {
  //   if (window.innerWidth >= 992) {
  //     const tl = gsap.timeline();
  //     tl.to(".logos", {
  //       duration: 1.5,
  //       ease: "power1.inOut",
  //       css: {
  //         width: "100px",
  //         position: "relative",
  //         margin: "auto",
  //         display: "flex",
  //         alignSelf: "center",
  //         top: "-20vh",
  //         opacity: 1,
  //       },
  //     });

  //     tl.to(".first-text", {
  //       duration: 1.5,
  //       ease: "power1.inOut",
  //       css: { opacity: 1 },
        
  //     },"-=1");

  //     tl.to(".second-text", {
  //       duration: 1,
  //       ease: "power1.inOut",
  //       css: { opacity: 1, y: 0, left: "20px" },
  //     },"-=1");
  //     tl.to(".second-text", {
  //       duration: 0.5,
  //       ease: "power1.inOut",
  //       css: { opacity: 0 },
  //     });
  //     tl.to(
  //       ".first-text",
  //       { duration: 0.5, ease: "power1.inOut", css: { opacity: 0 } },
  //       "-=1"
  //     );

  //     tl.to(".logos", {
  //       duration: 1,
  //       ease: "power1.inOut",
  //       css: {
  //         left: "10vw",
  //         position: "absolute",
  //         margin: "auto",
  //         display: "flex",
  //         alignSelf: "flex-start",
  //         top: "10vh",
  //       },
  //     });
  //     //tl.to(".logos", { duration: 1, css: {y:-120} }, );

  //     tl.to(
  //       ".wrap",
  //       {
  //         duration: 1,
  //         ease: "power1.inOut",
  //         css: { y: 0, visibility: "visible" },
  //       },
  //       "-=1"
  //     );
  //     tl.to(
  //       ".swiperCon",
  //       { duration: 1, ease: "power1.inOut", css: { x: 0 } },
  //       "-=1"
  //     );
  //     tl.to(
  //       ".intro",
  //       { duration: 1, ease: "power1.inOut", css: { display:"none" } },
  //       "-=1"
  //     );
  //     // if (window.innerWidth <= 992) {
  //     //   tl.to(".logos", {
  //     //     duration: 1.5,
  //     //     ease: "power1.inOut",
  //     //     css: {
  //     //       width: "40px",
  //     //     opacity:1
  //     //     },
  //     //   });
  //     // }
  //   }
  // }, []);

  return (
    <Con id="smooth-wrapper">
      <img className="logos" src={logo} alt="" />
      {/* <img className="logos1" src={logo} alt="" /> */}

      {/* <div className="intro">
        <div className="introText">
          <h2 className="first-text">Need It?</h2>
          <h1 className="second-text">WE HAVE IT!</h1>
        </div>
      </div> */}
      <div className="wrap" id="smooth-content">
        <div className="left">
          <div className="header">
            <h2>NEED IT?</h2>
            <h1>WE HAVE IT!</h1>
            <p>
              From <b>Office Supplies</b> and <b>Equipment</b> to{" "}
              <b> Corporate Giveaways</b> and <b>Gifts</b>, we've got you
              covered!
            </p>
            <div className="buttons">
              <button
                className="services"
                onClick={() => {
                  actives("services");
                }}
              >
                Our Services
              </button>
              <button
                className="contacts"
                onClick={() => {
                  actives("contact");
                }}
              >
                Inquire Now!
              </button>
            </div>
          </div>
        </div>
        <span className="sns">
          <div className="line"></div>
          <a href="https://www.facebook.com/8mgmtrading.com.ph">
            <IoLogoFacebook className="icon" />
          </a>
          <a href="https://www.linkedin.com/company/8mgmtrading/about/">
            <IoLogoLinkedin className="icon" />
          </a>
          <a href="">
            <CiMail className="icon" />
          </a>

          <a href="https://www.instagram.com/8mgm_trading/">
            <IoLogoInstagram className="icon" />
          </a>
          <div className="line"></div>
        </span>
        <div className="right">
          {/* <div className="circle"></div> */}
          <div className="swiperCon">
            <Swiper
              spaceBetween={5}
              slidesPerView={2}
              initialSlide={0}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              // onInit={(swiper) => console.log(swiper)}
              onSlideChange={(swiper) => {
                // console.log("Slide index changed to: ", swiper.activeIndex);
                setactive(swiper.activeIndex);
              }}
              // onReachEnd={() => console.log("Swiper end reached")}
            >
              {member?.map((mem, index) => (
                <SwiperSlide
                  key={index}
                  className={active === index ? "swipeCon active" : "swipeCon"}
                >
                  <img
                    src={mem.images}
                    alt={mem?.name}
                    className={active === index ? "active" : ""}
                    style={{
                      position: "relative",
                      className: active === index ? "slide active" : "slide",
                      width: active === index ? "280px" : "200px",
                      height: active === index ? "400px" : "300px",
                      borderRadius: "15px",
                      boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.3)",
                      top: active === index ? "0rem" : "7vh",
                      // right: active === index ? "0rem" : "3vh",
                      // zIndex: active === index ? "20" : "10",
                      overflow: "hidden",
                      objectFit: "cover",
                      marginTop: "1rem",
                      filter:
                        active === index ? "brightness(1)" : "brightness(0.90)",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  color: #fff;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  max-height: 800px;
  & .logos {
    border-radius: 100%;
    margin: auto;
    /* display: flex; */
    position: absolute;
    height: 80px;
    display: flex;
    top: 2rem;
    /* z-index: 46; */
    left: 5rem;
    /* align-self: center; */
    /* top: 50%;
    left: 50%;
    z-index: 33;
    opacity: 1;
    transform: translate(-50%, -50%); */

    /* place-self: center; */
    @media (max-width: 992px) {
      /* display: none; */
      left: "";
      right: "";
      transform: none;
      position: absolute;
      left: 3rem;
      top: 2rem;
      opacity: 1;
      height: 70px;
    }
  }
  & .logos1 {
    display: none;

    /* place-self: center; */
    @media (max-width: 992px) {
      /* display: none; */
      display: block;
      left: "";
      right: "";
      transform: none;
      position: absolute;
      left: 3rem;
      top: 2rem;
      opacity: 1;
      height: 70px;
    }
  }

  & .intro {
    @media (max-width: 992px) {
      display: none;
    }
    width: 100vw;
    height: 100vh;
    /* max-width: 1800px; */
    margin: auto;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -6rem;
    left: 0;
    flex-direction: column;
    z-index: 45;
    & .introText {
      display: inline-flex;
    }
    & h1,
    h2 {
      font-size: 6rem;
      letter-spacing: 4px;
      opacity: 1;
    }

    & h3 {
      font-size: 3rem;
    }
    & .first-text {
      opacity: 0;
    }
    & .second-text {
      opacity: 0;
      transform: translateY(200px);
    }
    /* & .logos {
      margin: auto;
    } */
  }
  & span.sns {
    position: absolute;
    margin-top: 30vh;
    float: left;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    & a {
      color: #fff;
    }
    & .icon {
      margin: 0.5rem 1.5rem;
    }
    & .line {
      height: 3rem;
      width: 1px;
      background-color: #d7d7d7;
      margin: auto;
    }
  }
  & .wrap {
    width: 100%;
    height: 100vh;
    /* max-height: 800px; */
    display: flex;
    // background-color: #95ffff54;
    /* transform: translateY(1000px); */
    /* visibility: hidden; */
    visibility: visible;
    @media (max-width: 992px) {
      visibility: visible;
      transform: none;
      /* max-height: 800px; */
    }
    & .left {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media (max-width: 768px) {
        width: 100vw;
      }
      & .header {
        width: 70%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: -3rem;

        & h2 {
          font-size: 2.5rem;
          margin: 0;
        }

        & h1 {
          font-size: 3.5rem;
          margin: 0 3rem;
          color: #75bbff;
        }
        & p {
          //text-transform: uppercase;
          color: #e3e3e3;
          margin-top: 3rem;
          font-size: 1.2rem;
          line-height: 24px;
          letter-spacing: 1px;
        }
        & span {
          font-size: 25px;
          margin-top: 8rem;
          white-space: nowrap;
          color: #d8d8d8;
          & .icon {
            margin-right: 0.5rem;
          }
        }
        @media (max-width: 768px) {
          width: 80vw;
          margin-left: 10vw;
          margin-top: -6rem;
          & h1 {
            font-size: 2.5rem;
          }
          & p {
            font-size: 0.9rem;
          }
        }
        & .buttons {
          margin-top: 3rem;
          @media (max-width: 768px) {
            display: flex;
            flex-wrap: wrap;
          }
          & button {
            border: none;
            border-radius: 20px;
            padding: 10px 40px;
            margin-right: 2rem;
            text-transform: uppercase;
            font-weight: 600;
            white-space: nowrap;
            cursor: pointer;
            margin: 1rem;
            &.services {
              color: #24753b;
              background-color: #ffe9e9;
              padding: 11px 40px;
              &:hover {
                background-color: #44ff79;
              }
            }
            &.contacts {
              border: 2px solid #d7d7d7;
              background-color: transparent;
              color: #fff;
              &:hover {
                color: #fff;
                background-color: #0cff5155;
                border: 2px solid #0cff5155;
              }
            }
          }
        }
      }
    }
    & .right {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        display: none;
      }
      & .circle {
        position: absolute;
        width: 350px;
        height: 350px;
        left: 70%;
        top: 270px;

        background: #005cb4;
        border-radius: 368.5px;
      }
      & .swiperCon {
        position: relative;
        font-family: sans-serif;
        text-align: center;
        margin: auto;
        width: 80%;
        /* transform: translateX(1000px); */
        height: 550px;
        justify-content: center;
        align-self: center;
        right: 4rem;
        top: 2rem;
        @media (max-width: 992px) {
          width: 100%;
        }
        & img {
          position: relative;
          z-index: 5;
          &.active {
            z-index: 8;
          }
        }
        & .swipeCon {
          z-index: 5;
          &.active {
            z-index: 8;
          }
        }
      }
    }
  }
`;

export default MainContents;
