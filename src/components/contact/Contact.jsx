import React from "react";

import "./Contact.css";
import ContactContent from "../contact-content";

function Contact() {
  return (
    <div className="contact">
      <section className="contact-title">
        <div className="container">
          <div className="contact-text">Контактная информация</div>
          <ContactContent />
          <div className="contact-item">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.495459074533!2d74.65612927661542!3d42.862385571150654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb6e6ba1ee899%3A0x7c710f7101707036!2zMzYg0YPQu9C40YbQsCDQntCx0LXRgNC-0L0sINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1714726117535!5m2!1sru!2skg"
                width="600"
                height="450"
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
