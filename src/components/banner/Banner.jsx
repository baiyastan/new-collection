import React from 'react'

import "./Banner.css"

function Banner() {
  return (
    <section className='home-banner'>
        <div className='container'>
            <div className='banner-title'>
                <h2>Оптовый пошив одежды любой сложности под ключ</h2>
                <p>Для поставщикав маркетплейсов, оптовых покупателей и розничных магазинов</p>
            </div>
            <div className='banner-image'>
                <img src='https://zipunya-collection.kg/assets/img/first.jpeg' alt='banner image' className='banner-image-back'/>            
            </div>
        </div>
    </section>
  )
}

export default Banner