import React from 'react'

import Banner from '../banner/Banner'

import { FiMessageCircle } from "react-icons/fi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { LiaBinocularsSolid } from "react-icons/lia";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

import './About.css'

function About() {
  return (
    <div className='about'>
      <Banner />
      <section className='about-text'>
            <div className='container'>
              <p>Компания IMPERIAL-STYLE - успешное швейное производство, базирующееся Кыргызстане и специализирующееся на создании высокачественной одежды для крупных маркетплейсов.</p>
              <p>Готовы исследовать мир стиля и качества? Присоединяйтесь к нашему телеграмм каналу <a href="#">"IMPERIAL-STYLE"!</a>Там вас ожидают  эксклюзивные предложения и актуальные цены.</p>
              <p>Наше производство <br /> IMPERIAL STYLE уже 6 лет успешно сотрудничает с оптовыми клиентами и выполнила более миллиона заказов для крупных маркетплейсов, таких как Wildberries и Ozon.</p>
              <p>Почему выбрать именно нас: <br /> -Мы специализируемся на пашиве разнообразной одежды и трикотажных изделий, всегда учитывая особенности фигур ваших покупателей <br /> -Гарантируем разработку лекал и образцов в течение 2-3 дней, в зависимости от сложности изделия, чтобы каждая деталь сидела идеально. <br /> -В нашем ассортименте широкий выбор фурнитуры и всегда актуальных трендовых тканей, чтобы удовлетворить требования самых взыскательных клиентов. <br /> -Наша производтсвенная мощность позволяет нам создавать до 20 тысяч изделий в месяц. <br /> -Минимальный объем заказа составляет 500 единиц на одну модель с учетом разных размеров.</p>
              <p>IMPERIAL STYLE - надежный и долгосрочный партнер более чем для 20 крупных брендов. Мы гарантируем высокое качество пошива, индивудиальный подход к каждому заказу и оперативное выполнение работ.</p>
              <p>Не уступите возмлжность получить выгодное предложение вашего бизнеса! Свяжитесь с нами уже сегодня через <a href="#">WhataApp</a></p>
              </div>
      </section>
      <section className='about-description'>
            <div className='container'>
                <h2>О компании</h2>
                <div className='about-line'></div>
                <div className='descripton-content'>
                  <div className='about-left'>
                    <div className='left-title'>Тип компании</div>
                    <div className='letf-title-text'>Производитель</div>
                    <ul>
                      Объем поставок
                      <li>Крупный опыт</li>
                      <li>Мелкый опыт</li>
                      <li>Поштучно</li>
                    </ul>
                    <div className='left-title'>Минимальный заказ</div>
                    <div className='letf-title-text'>Любая</div>
                    <div className='left-face'>
                      <h2>Юр. лицо</h2>
                        <div className='face-private'>
                        <div className='face-opa'></div>
                        <RiGitRepositoryPrivateLine />
                       </div>
                        <div className='face-title'>
                          <IoCheckmarkCircle style={{color: "green"}}/>
                          <p style={{color: "green"}}>Документы проверены</p>
                        </div>
                        <div className='face-title'>
                          <LiaBinocularsSolid />
                          <p>Проверить надежность поставщика</p>
                        </div>
                        <div className='face-title'>
                          <FiMessageCircle />
                          <p>Написать отзыв</p>
                        </div>
                    </div>
                  </div>
                  <div className='about-right'>
                    <ul>
                      Варинты оплаты
                      <li>Наличными</li>
                      <li>Безналичными оплата</li>
                      <li>Кредитные оплата</li>
                      <li>Электронные деньги</li>
                    </ul>
                    <ul>
                      Способы доставки 
                      <li>Самовывоз</li>
                      <li>Транспортной компанией</li>
                      <li>Автомобилем</li>
                      <li>Курьером</li>
                      <li>Железной дорогой</li>
                    </ul>
                    <div className='about-right-pay'>Оплата на расчетный счёт, <br /> и доставка через карго</div>
                  </div>
                </div>
              </div>
      </section>
      </div>  
  )
}

export default About