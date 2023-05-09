import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from ".././assets/logo.png";
import gsap from "gsap";
import { IoCall, IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const NavCon = ({ active, inView,setactive }) => {
  const [nav, setnav] = useState("home");
  const [float, setfloat] = useState(false);
  const [newpage, setnewpage] = useState(false)
  const loc = window.location.href;
  const navs = useRef(null);

  useEffect(() => {
    if (loc.includes("inquiry")) {
      setnav("inquiry");
      setnewpage(true)
      setfloat(false)
    } else if (loc.includes("products")) {
      setnav("products");
      setnewpage(true)
      setfloat(false)
    }else if (loc.includes("home")&&loc.includes("services")) {
      setnav("services");
    
    } else if (loc.includes("about")) {
      setnav("about");
      
    }else {
      console.log("false");
    }
    //  console.log(isInquiryPresent)
  }, [loc]);


  useEffect(() => {
    //check the active nav and scroll the content into viewport
    let ref = "";
    let inview = ref.current;
  if (newpage === true) {
      ref = navs;
    }
    if (ref && ref.current) {
      const executeScroll = (ref) =>
        ref.current.scrollIntoView({ behavior: "smooth" });
      executeScroll(ref);
     
      // useMountEffect(executeScroll); // Scroll on mount
    }
    //setchange(true);
    // setactive("");
  }, [newpage]);
  // useEffect(() => {
  //   if(inView===false){
  //     setfloat(true)
  //   }
  // }, [inView])
  

  // make the navigation visible after the intro
  // useLayoutEffect(() => {
  //   const tl = gsap.timeline();
  //   if (window.innerWidth >= 992) {
  //     tl.to(".content", { duration: 1, css: { opacity: 1 } }, " +=1");
  //   }
  // }, []);

  return (
    <>
    {
      inView===false && (
        <div className="placeholder" style={{height:"80px"}}></div>
      )
    }
   
    <Con ref={navs} className={inView === false ? "float" : ""}>
     
      <div className="content">
        <span>
          <img className="logo" src={logo} alt="" />
        </span>
        <div className="nav">
          <Link
            to="/home"
            className={nav === "home" ? "navs active" : "navs"}
            onClick={() => {
              active("home");
              setnav("home");
            }}
          >
            Home
          </Link>
          <Link
            to="/home/about"
            className={nav === "about" ? "navs active" : "navs"}
            onClick={() => {
              active("about");
              setnav("about");
            }}
          >
            About
          </Link>
          <Link
            to="/home/services"
            className={nav === "services" ? "navs active" : "navs"}
            onClick={() => {
              active("services");
              setnav("services");
              // setactive("services");
            }}
          >
            Our Services
          </Link>

          <Link
            to="/products"
            className={nav === "products" ? "navs active" : "navs"}
            onClick={() => {
              active("products");
              setnav("products");
              setfloat(false);
            }}
          >
            Products
          </Link>
          <Link
            to="/inquiry"
            className={nav === "inquiry" ? "navs active" : "navs"}
            onClick={() => {
              active("inquiry");
              setnav("inquiry");
              setfloat(false);
            }}
          >
            Inquire now
          </Link>
          <span>
            <IoCall className="icon" /> +63 2 247 2854
          </span>
        </div>

        {float === true ? (
          <IoClose
            className="mobilebar1"
            onClick={() => {
              float === true ? setfloat(false) : setfloat(true);
            }}
          />
        ) : (
          <FaBars
            className="mobilebar"
            onClick={() => {
              float === true ? setfloat(false) : setfloat(true);
            }}
          />
        )}
        {float && (
          <div className="floatnav">
            <Link
              to="/home"
              className={nav === "home" ? "navs1 active" : "navs1"}
              onClick={() => {
                active("home");
                setnav("home");
                setfloat(false);
              }}
            >
              Home
            </Link>
            <Link
              to="/home/about"
              className={nav === "about" ? "navs1 active" : "navs1"}
              onClick={() => {
                active("about");
                setnav("about");
                setfloat(false);
              }}
            >
              About
            </Link>
            <Link
              to="/home/services"
              className={nav === "services" ? "navs1 active" : "navs1"}
              onClick={() => {
                active("services");
                setnav("services");
                setfloat(false);
              }}
            >
              Our Services
            </Link>

            <Link
              to="/products"
              className={nav === "products" ? "navs1 active" : "navs1"}
              onClick={() => {
                active("products");
                setnav("products");
                setfloat(false);
              }}
            >
              Products
            </Link>
            <Link
              to="/inquiry"
              className={nav === "inquiries" ? "navs1 active" : "navs1"}
              onClick={() => {
                active("inquiry");
                setnav("inquiry");
                setfloat(false);
              }}
            >
              Inquire Now
            </Link>
            <span>
              <IoCall className="icon" /> +63 2 247 2854
            </span>
          </div>
        )}
      </div>
    </Con>
    {/* {
        !inView ? (<div className="placeholder"></div>): null
      } */}
    </>
  );
};
const Con = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 43;
  & .placeholder{
    height:80px;
  }
  & .mobilebar {
    display: none;
    font-size: 2rem;
    cursor: pointer;
    color:#c9ffa5;
    padding: 10px;
    position: relative;
    z-index: 30;
    &:hover {
      background-color: #acacac5f;
      border-radius: 100%;
    }
    @media (max-width: 991px) {
      display: block;
      /* color: #fff;
       */
      color: #2f2f2f;

    }
  }
  & .mobilebar1 {
    display: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 10px;
    position: relative;
    z-index: 50;
    color:#c9ffa5;
    &:hover {
      background-color: #acacac5f;
      border-radius: 100%;
    }
    @media (max-width: 991px) {
      display: block;
      color: #2f2f2f;
    }
  }
  & .floatnav {
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    margin-bottom: 2rem;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    z-index: 43;
    & .navs1 {
      text-decoration: none;
      text-align: center;
      width: 70vw;
      color: #1f1f1f;
      font-weight: 600;
      margin: 10px;
      padding: 15px 20px;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid #24753b;
      }
    }
  }
  &.float {
    position: fixed;
    opacity:0;
    top: -2rem;
    left: 0;
    right: 0;
    background-color: #fff;
    padding-top: 1rem;
    z-index: 17;
    box-shadow: 2px 0px 4px 1px rgba(0, 0, 0, 0.15);
    height: 80px;
    /* overflow: hidden; */
    // height 50px;
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    & .mobilebar {
      color: #1f1f1f;
    }
    & .logo {
      height: 80px;
      width: 80px;
      border-radius: 100%;
      margin-left: 2rem;
      opacity: 1;
      z-index: 33;
      height: auto;
    }
    & .floatnav {
      position: fixed;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      & .navs {
        text-decoration: none;
        text-align: center;
        width: 70vw;
        margin: 10px;
        padding: 15px 20px;
        border-bottom: 2px solid transparent;
        color: #1f1f1f !important;

        &:hover {
          border-bottom: 2px solid #24753b;
        }
      }
    }
    & h1 {
      color: #1f1f1f;
      font-weight: 500;
    }
    @-webkit-keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  & .content {
    position: relative;
    width: 80%;
    margin: auto;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    /* opacity: 0; */
    @media (max-width: 992px) {
      opacity: 1;
    }
  }
  & .logo {
    height: 80px;
    width: 80px;
    border-radius: 100%;
    margin-left: 2rem;
    opacity: 1;
    /* height: 0; */
  }
  & h1 {
    font-size: 1.1rem;
    color: #f5f5f5;
    font-weight: 400;
  }
  & span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
      margin-left: 1rem;
      margin-right: -1rem;
      font-size: 1.5rem;
      position: relative;
      right: -3rem;
      color: #484848;
    }
    & .navs {
      display: flex;
      margin: auto 10px;
      color: #373535;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 500;
      &.active {
        color: #5db0ff;
        font-weight: bold;
        border-bottom: 3px solid #5db0ff;
      }
      &:hover {
        color: #5db0ff;
        //font-weight: bold;
        // border-bottom: 3px solid #24753b;
      }
    }
    // margin-right: 2.5rem;
  }
  @media (max-width: 1050px) {
    & .navs {
      color: #fff !important;
      &.active {
        color: #5db0ff !important;
        font-weight: bold;
        border-bottom: 3px solid #5db0ff;
      }
    }
  }
  @media (max-width: 992px) {
    & .nav {
      display: none;
    }
    & .mobilebar {
      display: block;
    }
  }
`;
export default NavCon;
