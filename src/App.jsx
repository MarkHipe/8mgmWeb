import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainCon from "./MainCon";
import ProductMainCon from "./ProductMainCon";
import InquiryMainCon from "./inquiryMainCon";
function App() {
  // const [inview, setinview] = useState(0);
  // const [active, setactive] = useState("home");

  // const nav = useRef(null);
  // const home = useRef(null);
  // const about = useRef(null);
  // const products = useRef(null);
  // const services = useRef(null);
  // const contact = useRef(null);
  // let blobWrapper = useRef(null);
  // const homeView = useIsInViewport(home);
  // const aboutView = useIsInViewport(about);
  // const productsView = useIsInViewport(products);

  // useLayoutEffect(() => {
  //   if (window.innerWidth >= 992) {
  //     const tl = gsap.timeline();
  //     tl.to(
  //       blobWrapper,
  //       { duration: 3, ease: "power1.inOut", css: { scale: 1 } },
  //       "+=1"
  //     );
  //     // tl.to(".backgroundImg", { duration: .5, css: { opacity:0} }, "-=3");

  //     // tl.to(".App", { duration: .5, css: { opacity:0} }, "-=2.5");
  //     // tl.to(".backgroundImg", { duration: 1, css: { opacity:1} }, "-=1.5");

  //     tl.to(
  //       ".App",
  //       { duration: 0.5, css: { position: "relative", opacity: 1 } },
  //       "-=2"
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   //check the active nav and scroll the content into viewport
  //   let ref = "";
  //   let inview = ref.current;
  //   if (active === "") {
  //     ref = top;
  //   } else if (active === "home") {
  //     ref = home;
  //   } else if (active === "about") {
  //     ref = about;
  //   } else if (active === "products") {
  //     ref = products;
  //   } else if (active === "services") {
  //     ref = services;
  //   } else if (active === "contact") {
  //     ref = contact;
  //   }
  //   if (ref && ref.current) {
  //     const executeScroll = (ref) =>
  //       ref.current.scrollIntoView({ behavior: "smooth" });
  //     executeScroll(ref);
  //     setactive(inview);
  //     // useMountEffect(executeScroll); // Scroll on mount
  //   }
  //   //setchange(true);
  //   // setactive("");
  // }, [active]);

  return (
    <Router>
      <Con className="App">
        <Routes>
          <Route path="/" element={<MainCon />} />

          <Route path="/home" element={<MainCon />} />
          <Route path="/home/about" element={<MainCon />} />
          <Route path="/home/services" element={<MainCon />} />

          <Route path="/products" element={<ProductMainCon />} />
          <Route path="/inquiry" element={<InquiryMainCon />} />

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </Con>
      <style jsx>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        nav,
        span,
        div {
          font-family: "Roboto", sans-serif !important;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          top: 0;
          left: 0;
          box-sizing: border-box;
        }
        p {
          text-align: justify;
          scroll-behavior: smooth;
        }
      `}</style>
    </Router>
  );
}
const Con = styled.div`
  overflow-x: hidden;
`;

export default App;
