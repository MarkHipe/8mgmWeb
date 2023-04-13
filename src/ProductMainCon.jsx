import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import NavCon from "./components/NavCon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContents from "./components/MainContents";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import img8 from "./assets/FOOTER.jpg";
import OurProducts from "./components/OurProducts";
import MeetOurTeam from "./components/MeetOurTeam";
import ContactUs from "./components/ContactUs";
import blob from "./assets/greenBlob.svg";
import { useIsInViewport } from "./utils/UseInView";
import { gsap } from "gsap";
import { InView } from "react-intersection-observer";
import Footer from "./components/Footer";
function ProductMainCon() {
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
        <div className="OurProducts" >
          <OurProducts />
        </div>
      </div>
       
      </Con>
    
    </>
  );
}
const Con = styled.div`
 width: 100vw;
& .con{
    padding-top: 4rem;
}
`;

export default ProductMainCon;
