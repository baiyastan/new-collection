import React from "react";

import EmailSvg from "../../assets/svg/email.svg";
import MessageSvg from "../../assets/svg/message.svg";
import PhoneSvg from "../../assets/svg/phone.svg";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <section className="contact-title">
        <div className="container">
          <div className="contact-text">Контактная информация</div>
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
                <p>Кыргызская Республика, <br /> г. Бишкек, ул. Дзержинского, 245</p>
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
          <div className="contact-item">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11694.612984983713!2d74.5670842871582!3d42.8801625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8196b576869%3A0x9d2d0a8f99659b89!2z0KTQuNGC0L3QtdGBINC60LvRg9CxIE1heGltdW0gRml0bmVzcw!5e0!3m2!1sru!2skg!4v1710054646174!5m2!1sru!2skg"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
