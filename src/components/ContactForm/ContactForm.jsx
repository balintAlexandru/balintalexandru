import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactFormStyle.scss";
import {
  lineShowAnimation,
  triggerHideAnimation,
  triggerScaleAnimation,
  triggerShowAnimation,
  triggerVerticalAnimation,
  triggerXPozAnimation,
} from "../../utils/gsap/animations";
import { FaHandshake } from "react-icons/fa";

const ContactForm = ({ click, setTriggerContactAnimation }) => {
  const [messageModel, setMessageModel] = useState({
    text: "",
    color: "",
    icon: false,
  });
  const [formModel, setFormModel] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [firstClick, setFirstClick] = useState(true);

  const form = useRef();

  const currenHeight = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return "6.4rem";
    } else if (width >= 2880 && width <= 3840) {
      return "8rem";
    } else if (width >= 2304 && width <= 2560) {
      return "7rem";
    } else {
      return "4.5rem";
    }
  };

  const currentScaleCircle = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return 2;
    } else if (width >= 2880 && width <= 3840) {
      return 1.7;
    } else if (width >= 2304 && width <= 2560) {
      return 1.5;
    } else if (width >= 1024 && width <= 1280) {
      return 0.8;
    } else {
      return 1;
    }
  };

  const textAreaAdjust = () => {
    if (document.querySelector("textarea").value.length < 160) {
      document.querySelector("textarea").style.height = currenHeight();
      document.querySelector("textarea").style.height =
        1.2 + document.querySelector("textarea").scrollHeight + "px";
    }
  };

  const verticalAnimationSize = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return 70;
    } else if (width >= 2880 && width <= 3840) {
      return 60;
    } else if (width >= 2304 && width <= 2560) {
      return 60;
    } else {
      return 0;
    }
  };

  const showMessage = () => {
    triggerVerticalAnimation(".message-wrapper", 0.3, 0, -110);
    triggerVerticalAnimation(
      ".message-wrapper",
      0.3,
      1.5,
      verticalAnimationSize()
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      formModel.email.length <= 0 ||
      formModel.name.length <= 0 ||
      formModel.message.length <= 0
    ) {
      setMessageModel({
        text: "Please complete all fields !",
        color: "#a12020",
        icon: false,
      });
      showMessage();
    } else if (localStorage.getItem("messageSent") === "true") {
      setMessageModel({
        text: "Email sent recently, try again in 5 minutes",
        color: "#a12020",
        icon: false,
      });
      showMessage();
    } else {
      if (firstClick) {
        setFirstClick(false);
        localStorage.setItem("messageSent", "true");
        setMessageModel({
          text: "Message successfully sent !",
          color: "#188d18",
          icon: true,
        });
        showMessage();

        emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            {
              from_name: formModel.email,
              to_name: formModel.name,
              message: formModel.message,
            },
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then(
            () => {
              click();
              triggerHideAnimation(".circle-large", 0.2);
              triggerHideAnimation(".circle-small", 0.2);
              setTimeout(() => {
                setTriggerContactAnimation(false);
              }, 2000);
              setTimeout(() => {
                localStorage.setItem("messageSent", "false");
              }, 300000);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    }
  };

  useEffect(() => {
    triggerScaleAnimation(".circle-large", 1, 0.5, currentScaleCircle());
    triggerScaleAnimation(".circle-small", 1, 0.5, currentScaleCircle());
    lineShowAnimation(".contact-line", 1, 0.5);
    triggerShowAnimation(".contact-message", 1.2, 0.8);
    triggerShowAnimation(".contact-title", 1.2, 0.8);
    triggerXPozAnimation("form", -90, 0, 0, 1, 1, 0.5);
  }, []);

  return (
    <div className="contact-form-wrapper">
      <hr className="contact-line" />
      <h1 className="contact-message">WANNA DISCUSS A NEW PROJECT ?</h1>
      <h3 className="contact-title">GET IN TOUCH</h3>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          onChange={(event) => {
            setFormModel({
              ...formModel,
              name: event.target.value,
            });
          }}
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email"
          onChange={(event) => {
            setFormModel({
              ...formModel,
              email: event.target.value,
            });
          }}
        />

        <textarea
          name="message"
          placeholder="Message"
          onKeyUp={() => textAreaAdjust()}
          onChange={(event) => {
            setFormModel({
              ...formModel,
              message: event.target.value,
            });
          }}
        />
        <input type="submit" value="Send" className="input-button" />
        <div
          className="message-wrapper"
          style={{ backgroundColor: messageModel.color }}
        >
          <p className="contact-message">{messageModel.text}</p>
          {messageModel.icon && <FaHandshake color="white" fontSize={"3rem"} />}
        </div>
      </form>
      <span className="contact-copyright">© Balint Alexandru 2023</span>
    </div>
  );
};

export default ContactForm;
