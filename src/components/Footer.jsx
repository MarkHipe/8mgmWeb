import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import IMC from "../assets/logo.png";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <Con>
      <div className="wrap">
        <div className="wrapper">
          <img src={IMC} alt="" />
          
          <div className="contacts">
            <span>
              <GoLocation className="icon" />
              Main Office:
              <br />
              Unit 905, Pearl of The Orient Tower, Roxas Boulevard, Ermita, Manila
            </span>
            <span>
              Main Office:
              <br />
              <FiPhoneCall className="icon" />
              +63 2 247 2854 / 247 0855
            </span>
          </div>
        </div>
        <div className="wrapper">
          <h1>Categories</h1>
          <span className="line"></span>
          <div className="list">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>
            <p
              onClick={() => {
                navigate("/about");
              }}
            >
              About Us
            </p>
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
              Our Services
            </p>
            <p
              onClick={() => {
                navigate("/products");
              }}
            >
              Our Products
            </p>
         
            <p
              onClick={() => {
                navigate("/inquiry");
              }}
            >
              Inquire Now
            </p>
          </div>
        </div>
        <div className="wrapper">
          <h1>Information</h1>
          <span className="line"></span>
          <div className="list">
            <p>Testimonials</p>
            <p
              onClick={() => {
                navigate("/privacy-policy");
              }}
            >
              Privacy Policy
            </p>
            <p
              onClick={() => {
                navigate("/terms&conditions");
              }}
            >
              Terms and Conditions
            </p>
          </div>
        </div>
        <div className="wrapper">
          <h1>Our Services</h1>
          <span className="line"></span>
          <div className="list">
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
            Office and School Supplies
            </p>
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
             Hotel and Casino Gifts
            </p>
            <p
              onClick={() => {
                navigate("/services");
              }}
            >
             Corporate Giveaways
            </p>
           </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  background-color: #ffff;
  padding: 3rem 0;
  position: relative;
  z-index: 2;
  & .wrap {
    display: flex;
    /* justify-content: space-around; */
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
    /* justify-content: center; */
    /* align-items: center; */
    color: #005279;
    @media (max-width:1000px){
      /* justify-content:center ; */
      /* align-items: center; */
      }
    & .wrapper {
      display: flex;
      flex-direction: column;
      padding: 10px;
      width: 250px;
      margin: 0 auto;
      @media (max-width:1292px){
        width:200px;
      }
      @media (max-width:1000px){
        width: 40vw;
      }
      @media (max-width:568px){
        width: 70vw;
      }
      & .contacts {
        display: flex;
        flex-direction: column;
        & span {
          font-size: 13px;
          line-height: 20px;
          & .icon {
            color: #c58803;
            margin-right: 10px;
          }
          margin: 10px 0;
        }
      }
      img {
        width: 150px;
        margin-bottom: 1rem;
        /* background-color: #fff; */
        padding: 10px;
      }
      & h1 {
        font-size: 1rem;
      }
      & span {
      }
      & p {
        font-size: 14px;
        color: #545454;
        margin-top: -3px;
        cursor: pointer;
        text-align: justify;
        line-height: 20px;
        &:hover {
          color: #c58803;
        }
      }
    }
  }
`;
export default Footer;
