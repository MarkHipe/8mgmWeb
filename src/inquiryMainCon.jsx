import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import NavCon from "./components/NavCon";
import OurProducts from "./components/OurProducts";
import { InView } from "react-intersection-observer";
import ContactUs from "./components/ContactUs";
import img8 from "./assets/Footer.jpg";
function InquiryMainCon() {
  const [inview, setinview] = useState(0);
  const [active, setactive] = useState("products");

  const nav = useRef(null);

  return (
    <>
      <Con className="">
        <InView onChange={setinview}>
          <div ref={nav}>
            <NavCon active={setactive} currActive={active} inView={inview} />
          </div>
        </InView>
        <div className="con">
          <div className="OurProducts">
            <ContactUs />
          </div>
        </div>
        <div className="imgBanner">
          <img src={img8} alt="" />
          <div className="button">{/* <button>Contact Us</button> */}</div>
        </div>
      </Con>
    </>
  );
}
const Con = styled.div`
  width: 100vw;
  & .con {
    /* padding-top: 4rem; */
  }
  & .imgBanner {
      display: flex;
      /* margin-top: 2rem; */
      margin: 1rem 0;
      height: 350px;
      justify-content: center;
      overflow: hidden;
      & img {
        width: 100%;
        // position: absolute;
        height: 400px;
        object-fit: cover;
        //cursor: pointer;
        animation: zoom-out 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        @keyframes zoom-out {
          0% {
            transform: scale(1.15);
          }

          100% {
            transform: scale(1);
          }
        }
        &:hover {
          animation: zoom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          @keyframes zoom {
            0% {
              transform: scale(1);
            }
            60% {
              transform: scale(1.18);
            }
            100% {
              transform: scale(1.15);
            }
          }
        }
      }
      & button {
        background: rgba(90, 185, 117, 0.4);
        border: 3px solid #24753b;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        position: absolute;
        border-radius: 5px;
        padding: 10px 30px;
        position: relative;
        text-transform: uppercase;
        //left: 45vw;
        bottom: -210px;
        cursor: pointer;
        color: #fff;
        font-size: 20px;
        // text-shadow:  0px 2px rgba(0, 0, 0, 0.25);
        &:hover {
          background: #24753b;
        }
      }
    }
`;

export default InquiryMainCon;
