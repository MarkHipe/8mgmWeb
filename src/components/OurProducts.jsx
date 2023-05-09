import React, { useState } from "react";
import styled from "styled-components";
import { products } from "../api/products.js";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import logo from "./../assets/logo.png";



const OurProducts = () => {
  const [prev, setprev] = useState(0);
  const [active, setactive] = useState("School");
  return (
    <Con>
      {/* <img className="logos" src={logo} alt="" /> */}

      <div className="heading">
        <h1>Our Products</h1>
        {/* <div className="cat">
          <span
            className={active === "School" ? "active" : ""}
            onClick={() => {
              setactive("School");
            }}
          >
            School
          </span>
          <span
            className={active === "Office" ? "active" : ""}
            onClick={() => {
              setactive("Office");
            }}
          >
            Office
          </span>
          <span
            className={active === "Hotel" ? "active" : ""}
            onClick={() => {
              setactive("Hotel");
            }}
          >
            Hotel
          </span>
          <span
            className={active === "Casino" ? "active" : ""}
            onClick={() => {
              setactive("Casino");
            }}
          >
            Casino
          </span>
        </div> */}
      </div>
      <div className="contents">
        <div className="contentWrap">
          {/* <div className="productPrevCon">
            <div className="imgWrap">
              <img src={products[0].image} alt="" />
            </div>{" "}
            <div className="details">
              <div className="info">
                <h1>{products[0].name}</h1>
                <p>{products[0].description}</p>
              </div>
              <div className="subInfo">
                <h1>₱{products[0].price}.00</h1>
              </div>
            </div>
          </div> */}
          <div className="previewCon">
            <div className="description">
              <div className="wrap">
                <h1>{products[prev].name}</h1>
                <h3> We provide school supplies</h3>
                <p>{products[0].description}</p>
              </div>
            </div>
            <div className="imageWrap">
              <img src={products[prev].image} alt="" />
            </div>
          </div>
          <div className="prodSlider">
            <Swiper
              modules={[Grid, Pagination]}
              slidesPerView={3}
              grid={{
                rows: 2,
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 576px
                1: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                  },
                },
                768: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                  },
                },
                992: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                  },
                },
                1299: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                  },
                  spaceBetween: 10,
                },
              }}
            >
              {products.map((prod, i) => {
                return (
                  <SwiperSlide className="perSlide">
                    <div className="prodCard">
                      <img
                        src={prod.image}
                        alt=""
                        className={prev === i ? "active" : ""}
                        onClick={() => {
                          setprev(i);
                        }}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Con>
  );
};

const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  // background: linear-gradient(150.33deg, #b5ffca 5.97%, #4aff7e 82.86%);
  padding-bottom: 2rem;
  color: #424242;
  & .logos{
    height:80px;

  }
  & .heading {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color:#24753b;
    & h1 {
      font-size: 3rem;
      color: #fff;
      // border-bottom: 1px solid;
    }
    & .cat {
      display: flex;
      width: 95%;
      margin: auto;
      justify-content: flex-end;
      align-items: center;
      margin-top: 2rem;
      & span {
        margin: auto 10px;
        &.active {
          color: #24753b;
          font-weight: 600;
        }
      }
    }
  }
  & .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    & .previewCon {
      width: 75%;
      display: flex;
      @media (max-width: 992px) {
        width: 90%;
      }
      @media (max-width: 532px) {
        display: flex;
        flex-direction: column;
        & .description {
          width: 80vw !important;
        }
        & .imageWrap img {
          object-fit: contain;
        }
      }
      & .description {
        width: 35%;
        display: flex;
        // justify-content: center;
        // align-items: center;
        margin: .5rem 3rem;
        font-size:13px;
        flex-direction: column;

        & .wrap {
          margin: 0rem auto;
          & h1 {
            color: #24753b;
          }
          & h3 {
            color: #5cab72;
            font-size: 1.5rem;
            margin-top: 1rem;
          }
          & p {
            width: 80%;
            line-height: 24px;
          }
        }
        @media (max-width: 992px) {
          width: 50%;
          & .wrap {
            margin: 0rem auto;
            & h1 {
              font-size: 18px;
            }
            & h3 {
              color: #5cab72;
              font-size: 1rem;
              margin-top: 1rem;
            }
            & p {
              width: 80%;
              font-size: 14px;
            }
          }
        }
      }
      & .imageWrap {
        display: flex;
        justify-content: center;
        margin: auto;
        height: 400px;
        width: 400px;
        background-color: transparent;
        box-shadow: 0px 0px 40px rgba(0, 92, 180, 0.35);
        border-radius: 100%;
        object-fit: contain;
        @media (max-width: 992px) {
          height: 300px;
          width: 300px;
        }
        @media (max-width: 768px) {
          height: 250px;
          width: 250px;

          margin-top: 2rem;
        }
      }
    }
    & .contentWrap {
      display: flex;

      justify-content: center;
      align-items: center;
      @media (max-width: 992px) {
        flex-direction: column;
        margin-top: 3rem;
      }
      & .productPrevCon {
        width: 40%;
        height: 540px;
        display: flex;
        border: 1px solid #bebebe;
        border-radius: 20px;
        margin: auto;
        margin-right: 1rem;
        & .imgWrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          & img {
            width: 300px;

            border-radius: 4px;
          }
        }
        & .details {
          display: flex;
          justify-content: center;
          //align-items: center;
          flex-direction: column;
          width: 50%;
          & .info {
            height: 30%;
            padding: 10px;
            & h1 {
              font-size: 25px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            & p {
              font-size: 14px;
              font-weight: normal;
              color: #3b3b3b;
            }
          }
          & .subInfo {
            display: flex;
            padding: 10px;
            flex-direction: column;
            width: 85%;
            border-radius: 20px;
            background-color: #24753b;
            height: 50%;
            color: #fff;
            & h1 {
              font-size: 25px;
              font-weight: bold;
              margin-bottom: 10px;
              margin-left: 10px;
            }
          }
        }
      }

      & .prodSlider {
        // width: 100%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        & .mySwiper {
          width: 35vw;
          height: 540px;
          @media (max-width: 992px) {
            width: 80vw;
          }
          @media (max-width: 562px) {
            width: 98vw;
          }
          & .swiper-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          & .perSlide {
            height: calc((100% - 40px) / 2) !important;
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }
          & img {
            cursor: pointer;
            height: 150px;
            width: 150px;
            margin: auto;
            position: relative;
            border-radius: 100%;
            z-index: 20;
            border: 1px solid #ccc;
            object-fit: cover;
            &.active {
              border: 5px solid #24753b;
            }
            /* @media (max-width: 768px) {
              width: 200px;
              height: auto;
              object-fit: cover;
            } */
          }
        }
      }
    }
  }
`;

export default OurProducts;