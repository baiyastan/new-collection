import React from "react";

import "./About.css";
import Delivery from "../delivery";
import ContactContent from "../contact-content";

function About() {
  return (
    <div className="about">
      <section className="about-text">
        <div className="container">
          <p>
            Компания IMPERIAL-STYLE - успешное швейное производство,
            базирующееся Кыргызстане и специализирующееся на создании
            высокачественной одежды для крупных маркетплейсов.
          </p>
          <p>
            Готовы исследовать мир стиля и качества? Присоединяйтесь к нашему
            телеграмм каналу{" "}
            <a href="https://t.me/+996500992220">"IMPERIAL-STYLE"!</a> Там вас
            ожидают эксклюзивные предложения и актуальные цены.
          </p>
          <p>
            Наше производство <br /> IMPERIAL STYLE уже 6 лет успешно
            сотрудничает с оптовыми клиентами и выполнила более миллиона заказов
            для крупных маркетплейсов, таких как Wildberries и Ozon.
          </p>
          <p>
            IMPERIAL STYLE - надежный и долгосрочный партнер более чем для 20
            крупных брендов. Мы гарантируем высокое качество пошива,
            индивудиальный подход к каждому заказу и оперативное выполнение
            работ.
          </p>
          <p>
            Не уступите возмлжность получить выгодное предложение вашего
            бизнеса! Свяжитесь с нами уже сегодня через{" "}
            <a href="https://wa.me/+996500992220">WhataApp</a>
          </p>
        </div>
      </section>
      <section className="about-description">
        <div className="container">
          <h2>О компании</h2>
          <div className="about-line"></div>
          <div className="descripton-content">
            <div className="about-left">
              <ul>
                Способы доставки
                <li>Самовывоз</li>
                <li>Транспортной компанией</li>
                <li>Автомобилем</li>
                <li>Курьером</li>
                <li>Железной дорогой</li>
              </ul>
            </div>
            <div className="about-right">
              <ul>
                Варинты оплаты
                <li>Наличными</li>
                <li>Безналичными оплата</li>
                <li>Кредитные оплата</li>
                <li>Электронные деньги</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Delivery />
      </section>
      <section className="section-contact-content">
        <div className="container">
          <h2>Возникли вопросы?</h2>
          <p>Свяжитесь с нами, для получения помощи:</p>
          <ContactContent />
        </div>
      </section>
    </div>
  );
}

export default About;
