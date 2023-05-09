import React, { useRef, useState } from "react";
import styled from "styled-components";
import image3 from "../assets/OURMISSION.jpg";
import image4 from "../assets/OURVISION.jpg";
import { useIsInViewport } from "../utils/UseInView";
const AboutUs = () => {
  const [hovered, sethovered] = useState(false);
  const intro = useRef(null);
  const mission = useRef(null);
  const mission2 = useRef(null);

//check if the content is in viewport returns true
  const introView = useIsInViewport(intro);

  const missionView = useIsInViewport(mission);

  const missionView2 = useIsInViewport(mission2);

  return (
    <Con>
      <div className="wrap">
        <div
          className={introView === true ? " about visible " : "about"}
          ref={intro}
        >
          <span>
            <h1>WHO WE ARE</h1>
          </span>
          <div className="text">
            <p>
              We are a private trading company located at the popular waterfront
              promenade of Manila, Roxas Boulevard, which caters a wide range of
              products to a variety of customers. We supply high value of
              quality products and equipment for schools, hospitals, offices,
              casinos and other different industries. We also offer unique and
              compelling merchandise perfect for souvenirs, giveaways and other
              related occasions.
            </p>
          </div>
        </div>
        <div className={missionView === true ? " mission visible " : "mission"}>
          <div
            className={
              missionView === true ? " circle one visible " : "circle one"
            }
          ></div>
          <div
            className={
              missionView === true ? " circle two visible " : "circle two"
            }
          ></div>
          <div
            className={
              missionView === true ? " circle three visible " : "circle three"
            }
          ></div>
          <div
            className={
              missionView === true ? " circle four visible " : "circle four"
            }
          ></div>
          <div
            className={
              missionView === true ? " circle five visible " : "circle five"
            }
          ></div>
          <div
            className={
              missionView === true ? " circle six visible " : "circle six"
            }
          ></div>
          <div
            className={
              missionView === true ? " circle seven visible " : "circle seven"
            }
          ></div>
          <div
            className={
              missionView === true ? " circle eight visible " : "circle eight"
            }
          ></div>

          <div className="img">
            <img
              src={image3}
              className={missionView === true ? "  visible " : ""}
              alt=""
            />
          </div>
          <div className="text" ref={mission}>
            <div className="head">
              <h1
                className={
                  hovered === true || missionView === true ? "animate" : ""
                }
              >
                OUR MISSION
              </h1>
              <span
                className={
                  hovered === true || missionView === true ? "animate" : ""
                }
              >
                <h1>OUR MISSION</h1>
              </span>
            </div>
            <p
              onMouseOver={() => {
                sethovered(!hovered);
              }}
            >
              Guided by our mission to relentlessly deliver the best possible
              product, service, quality and value to our customers, 8MGM Trading
              Inc. had formed an impeccable amount of positive feed backs from
              both past and present clients which are several industry players
              and government establishments.
            </p>
          </div>
        </div>
        <div className="missionp2" ref={mission2}>
          <div className={missionView2 === true ? "text  visible " : "text"}>
          <h1
                className={
                  hovered === true || missionView === true ? "animate" : ""
                }
                style={{fontSize:"3rem", }}
              >
                OUR VISION
              </h1>
            <p>
              With the use of wide distribution network and effective marketing
              schemes, we - 8MGM Trading Inc., has managed to grow continually
              since the day the business was established.
            </p>
          </div>
          <div className="img">
            {" "}
            <img
              className={missionView2 === true ? "  visible " : ""}
              src={image4}
              alt=""
            />
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3rem auto;
  height: 100%;
  // padding: 1rem;
  @media (max-width: 412px) {
    width: 95vw;
  }
  & .wrap {
    width: 100%;
    & .about {
      position: relative;
      display: flex;
      justify-content: space-between;
      // align-items: center;
      //justify-content: center;
      width: 100%;
      height: 100%;
      @media (max-width: 992px) {
        flex-direction: column;
      }
      @media (min-width: 992px) {
        &.visible {
          -webkit-animation: slide-in-left 0.5s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
          @keyframes slide-in-left {
            0% {
              -webkit-transform: translateX(-1000px);
              transform: translateX(1000px);
              opacity: 0;
            }
            100% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
              opacity: 1;
            }
          }
        }
      }
      & span {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
      }
      & .text {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        // margin: 2rem;
        & p {
          position: relative;
          right: 0;
          width: 95%;
          font-size: 15px;
          line-height: 30px;
          text-align: justify;
          background-color: #005cb4;
          padding: 3rem 4rem;
          color: #eaeaea;
          font-weight: 400;
          border-top-left-radius: 100px;
          border-bottom-left-radius: 100px;
        }
      }
    }
    & .mission {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      @media (max-width: 992px) {
        flex-direction: column-reverse;
      }
      & .circle {
        height: 20px;
        width: 20px;
        border-radius: 100%;
        background-color: #24753baa;
        position: absolute;

        &.visible {
          -webkit-animation: blink 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
          animation: blink 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          @keyframes blink {
            0% {
              opacity: 0;
            }
            25% {
              -webkit-transform: translateX(-30px);
              transform: translateX(30px);
              opacity: 0.5;
            }

            100% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
              opacity: 1;
            }
          }
        }
        &.one {
          height: 10px;
          width: 10px;
          margin-top: -8rem;
          margin-left: 15rem;
        }
        &.two {
          height: 24px;
          width: 24px;
          margin-top: -10rem;
          margin-left: 10rem;
        }
        &.three {
          height: 16px;
          width: 16px;
          margin-top: 20rem;
          margin-left: -11rem;
        }
        &.four {
          height: 28px;
          width: 28px;
          margin-top: 29rem;
          margin-left: -16rem;
          background-color: #005db48b;
        }
        &.five {
          height: 10px;
          width: 10px;
          margin-top: 25rem;
          margin-left: -17rem;
        }
        &.six {
          height: 8px;
          width: 8px;
          margin-top: 50rem;
          margin-left: -80%;
        }
        &.seven {
          height: 26px;
          width: 26px;
          margin-top: 40rem;
          margin-left: -95%;
        }
        &.eight {
          height: 18px;
          width: 18px;
          margin-top: 44rem;
          margin-left: -80%;
          background-color: #005db48b;
        }
      }
      & .img {
        margin: auto 3rem;
        display: flex;

        & img {
          height: 600px;
          width: 600px;
          border-radius: 100%;
          opacity: 0;
          @media (max-width: 992px) {
            opacity: 1;
          }
          @media (min-width: 992px) {
            &.visible {
              animation: slide-up .3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
              @keyframes slide-up {
                0% {
                  transform: translateY(800px);
                  opacity: 0;
                }

                100% {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
      & .text {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem;
        margin-right: 4rem;
        flex-direction: column;
        @media (max-width: 768px) {
          margin: 2rem auto;
         
        }
        @media (max-width: 400px) {
          margin: 2rem auto;
         position: relative;
         left: -5vw;
        }
        & h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          &.animate {
            animation: slide-text-right 0.5s
              cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            @keyframes slide-text-right {
              0% {
                transform: translateX(0px);
              }
              50% {
                transform: translateX(-20px);
              }
              100% {
                transform: translateX(0px);
              }
            }
          }
        }
        & p {
          width: 400px;
          font-size: 15px;
          //background-color: #e1f0ff;
          padding: 1rem;
          color: #525252;
          font-weight: 500;
          text-align: justify;

          line-height: 30px;
          @media (max-width: 412px) {
            margin: auto;
            width: 80vw;
          }
        }
        & span {
          position: absolute;
          color: #a7a7a73c;
          margin-top: -9.5rem;
          margin-left: -2rem;
          & h1{
          font-size: 4rem !important;
          }
          &.animate {
            animation: slide-text-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              both;
            @keyframes slide-text-left {
              0% {
                transform: translateX(0px);
              }
              50% {
                transform: translateX(20px);
              }
              100% {
                transform: translateX(0px);
              }
            }
          }
        }
      }
    }
    & .missionp2 {
      display: flex;
      width: 100%;
      height: 100%;
      @media (max-width: 992px) {
        flex-direction: column;
      }
      & .img {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        & img {
          height: 400px;
          width: 600px;
          border-top-left-radius: 200px;
          border-bottom-left-radius: 200px;
          &.visible {
            animation: shine 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            @media (max-width: 992px) {
        animation: none;
      }
            @keyframes shine {
              0% {
                //  filter: drop-shadow(0px 20px 60px rgba(4, 107, 204, 0.134));
              }

              100% {
                /* filter: drop-shadow(0px 20px 60px rgba(3, 122, 234, 0.5)); */
              }
            }
          }
        }
      }
      & .text {
        width: 150%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 3rem;
        flex-direction: column;
        opacity: 0;
        @media (max-width: 992px) {

       width: 100vw;
       margin: 3rem 0;
      }
        &.visible {
          animation: visible-text 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          @keyframes visible-text {
            0% {
              //  filter: drop-shadow(0px 20px 60px rgba(4, 107, 204, 0.134));
              opacity: 0.3;
            }

            100% {
              opacity: 1;
            }
          }
        }
        & p {
          width: 400px;
          font-size: 15px;
          line-height: 30px;
          text-align: justify;
          @media (max-width: 992px) {
            width: 50vw;
          }
          padding: 1rem;
          color: #24753b;
          font-weight: 500;
          margin: auto;
        }
      }
    }
  }
`;

export default AboutUs;
