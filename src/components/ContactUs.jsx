import React, { useRef, useState } from "react";
import styled from "styled-components";
import { CiLocationOn, CiMail } from "react-icons/ci";
import {
  IoCall,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io5";
import emailjs from "@emailjs/browser";

const contact = [
  {
    name: "Location",
    icon: <CiLocationOn />,
    label:
      "Unit 905, Pearl of The Orient Tower, Roxas Boulevard, Ermita, Manila",
  },
  {
    name: "mail",
    icon: <CiMail />,
    label: "info@8mgmtrading.com.ph",
  },
  {
    name: "Call",
    icon: <IoCall />,
    label: "+63 2 247 2854 / 247 0855",
  },
  {
    name: "instagram",
    icon: <IoLogoInstagram />,
    label: "8mgmtrading.com.ph",
  },
  {
    name: "linkedin",
    icon: <IoLogoLinkedin />,
    label: "company/8mgmtrading",
  },
  {
    name: "facebook",
    icon: <IoLogoFacebook />,
    label: "@8mgm_trading",
  },
];

const ContactUs = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2kyg8fg",
        "template_y37oc6p",
        form.current,
        "gt7Ij578hHgsOnJWC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          if (result.text === "OK") {
            setsuccess(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    setname("");
    setemail("");
    setmessage("");
  };

  return (
    <Con>
      <div className="wrapper">
        <div className="heading">
          <h2>Contact Us</h2>{" "}
          <p>
            Feel free to contact us anytime, We will get back to you as soon as
            we can
          </p>
        </div>
        <div className="cardCon">
          <div className="card">
            {" "}
            <div className="form">
              <h1>LEAVE US A MESSAGE</h1>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  name="user_name"
                  type="text"
                  placeholder="Name"
                  onChange={(event) => setname(event.target.value)}
                  value={name}
                />
                <input
                  name="user_email"
                  type="email"
                  placeholder="Email"
                  onChange={(event) => setemail(event.target.value)}
                  value={email}
                />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Message"
                  onChange={(event) => setmessage(event.target.value)}
                  value={message}
                ></textarea>
                <div className="btn">
                  <input className="button" type="submit" value="SEND" />
                </div>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="mapWrapper">
              {" "}
              <iframe
                style={{ width: "100%", height: "400px" }}
                class="gmap_iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?hl=en&amp;q=Corner,1240 Roxas Blvd Ermita, 667 Zone 072, Manila, 1000, Metro Manila, Philippines&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <div className="header">
              {/* <h1>CONTACT US</h1> */}

              <div className="contacts">
                <div className="left">
                  {contact.slice(0, 3).map((item, i) => {
                    return (
                      <div className="contact" key={i}>
                        {item.icon}
                        <p>{item.label}</p>
                      </div>
                    );
                  })}
                </div>{" "}
                <div className="right">
                  {contact.slice(3, 7).map((item, i) => {
                    return (
                      <div className="contact" key={i}>
                        {item.icon}
                        <p>{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Con>
  );
};

const Con = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  & .wrapper {
    width: 100%;
    .heading {
      width: 100%;
      justify-content: center;
      align-items: center;
      & h2 {
        text-align: center;
        font-size: 3rem;
        color: #24753b;
      }
      & p{
        text-align:center;
        position: relative;
        top:-1rem;
      }
    }

    & .cardCon {
      display: flex;
      background-color: #24753b;
      justify-content: center;
      // border-radius: 20px;
      height: 600px;

      & .card {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: relative;
        left: -1rem;
        & .form {
          background-color: #ffff;
          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
          //border-radius: 20px;
          /* border-top-right-radius: 100%;
          border-bottom-right-radius: 100%; */
          padding: 20px;
          width: 400px;
          height: 560px;
          // margin-left: -10rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          & form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 80%;
            margin: 1rem;
          }
          & h1 {
            color: #393939;
            font-size: 20px;
            font-weight: bold;
            margin: 1rem;
            margin-top: 2rem;
          }
          & input,
          textarea {
            border: none;
            outline: none;
            font-size: 14px;
            width: 80%;
            margin: 0.5rem auto;
            // height: 30px;
            padding: 10px;
            color: #0c0c0c;
            background-color: #eeeeee6b;
            border: none;
            border-bottom: 1px solid;
            outline: none;
          }
          & .btn {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 1rem;
            & .button {
              border: none;
              padding: 10px 30px;
              border-radius: 20px;
              background-color: #24753b;
              color: #fff;
            }
          }
        }
      }
      & .right {
        width: 70%;
        & .mapWrapper {
          margin: 1rem auto;
          margin-right: 2rem;
          justify-content:center;
          align-items:center;
        }
        & .header {
          & h1 {
            color: #fff;
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          & p {
            color: #efefef;
            font-size: 1rem;
            margin-top: -0.5rem;
          }
        }
        & .contacts {
          display: flex;

          justify-content: center;
          align-items: center;

          width: 100%;
          margin: 1rem;
          margin-top: 2rem;
          & .contact {
            color: #fff;
            font-size: 1rem;

            display: inline-flex;
            & p {
              margin-top: 0;
              font-size: 1rem;
              margin-left: 10px;
            }
          }
          & .left {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          & .right {
            display: flex;
            flex-direction: column;
          }
        }
      }
      @media (max-width: 992px) {
        & .card {
          width: 40%;
        }
        & .right {
          width: 60%;
        }
      }
      @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        & .card {
          width: 100vw;
          left: 0rem;
          & .form {
            border-radius: 10px;
            margin-top: 20px;
            & form {
              margin: 0;
            }
          }
        }
        & .right {
          width: 100%;
          margin: auto;
          margin: 1rem 0;

          & .mapWrapper {
            margin: 1rem auto;
            margin-right: 0;
          }
          & .header {
            width: 90vw;
            margin-top: 2rem;
            margin-left: 8vw;
            & h1 {
              font-size: 1.3rem;
            }
          }
          & .contacts {
            width: 90vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media (max-width: 768px) {
              margin: 3rem 0;
            }
            @media (max-width: 412px) {
              flex-wrap: wrap;
            }
            & p {
              font-size: 14px !important;
            }
            & .contact {
            }
          }
        }
      }
    }
  }
`;

export default ContactUs;
