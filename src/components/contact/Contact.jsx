import React from "react";

import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <section className="contact-title">
        <div className="container">
          <div className="contact-text">Контактная информация</div>
          <div className="contact-item-title">
            <div className="info-contact">
              <div className="info-text-icon">
                <FiPhone />
              </div>
              <div className="info-text-text">Телефон</div>
            </div>
            <div className="info-contact">
              <div className="info-text-icon">
                <MdOutlineMessage/>
              </div>
              <div className="info-text-text">Мессенджеры</div>
            </div>
            <div className="info-contact">
              <div className="info-text-icon">
                <TfiEmail />
              </div>
              <div className="info-text-text">Эл. почта</div>
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
