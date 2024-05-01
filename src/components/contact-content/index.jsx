import React from "react";

import EmailSvg from "../../assets/svg/email.svg";
import MessageSvg from "../../assets/svg/message.svg";
import PhoneSvg from "../../assets/svg/phone.svg";

import "../contact/Contact.css";

function ContactContent() {
  return (
    <>
      <div className="contact-item-title">
        <div className="info-contact">
          <div className="info-contact-icon">
            <div className="info-text-icon">
              <img src={PhoneSvg} alt="svg" />
            </div>
            <div className="info-contact-title">Телефон</div>
          </div>
          <div className="contact-text-info display">
            <strong>
              Бишкек:
              <a href="tel:9965500992220">+9965 500 992 220</a>
            </strong>
            <p>
              Кыргызская Республика, <br /> г. Бишкек, ул. Дзержинского, 245
            </p>
          </div>
        </div>
        <div className="contact-line"></div>
        <div className="info-contact">
          <div className="info-contact-icon">
            <div className="info-text-icon">
              <img src={MessageSvg} alt="svg" />
            </div>
            <div className="info-contact-title">Мессенджеры</div>
          </div>
          <div className="contact-text-info display">
            <strong>
              WhatsApp:{" "}
              <a href="https://wa.me/+9965500992220">+9965 500 992 220</a>
            </strong>
            <strong>
              Telegram:{" "}
              <a href="https://t.me/+9965500992220">+9965 500 992 220</a>
            </strong>
          </div>
        </div>
        <div className="contact-line"></div>
        <div className="info-contact email">
          <div className="info-contact-icon">
            <div className="info-text-icon">
              <img src={EmailSvg} alt="svg" />
            </div>
            <div className="info-contact-title">Эл. почта</div>
          </div>
          <div className="contact-text-info email-style">
            <p>По всем вопросам пишите нам на почту</p>
            <a href="molito: imperial.style3@gmail.com">
              imperial.style3@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactContent;
