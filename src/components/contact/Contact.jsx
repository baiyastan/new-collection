import React from 'react'

import "./Contact.css"
import Banner from '../banner/Banner'

function Contact() {
  return (
    <div className='contact'>
      <div className='container'>
        <Banner />
      </div>
      <section className='contact-title'>
        <div className='container'>
          <div className='contact-text'>Контактная информация</div>
          <div className='contact-text-p'>Захотите посмотреть на наше производство - приглашаем в гости. Перед посеващением, обязательно свяжитесь с нами, чтобы согласовать время</div>
          </div>
      </section>
    </div>
  )
}

export default Contact