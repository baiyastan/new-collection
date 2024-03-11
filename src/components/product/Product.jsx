import React from 'react'

import ProductName from './ProductName'
import Card from './Card'

import './Product.css'

function Product() {
  return (
    <section className='product'>
      <div className='container'>
        <div className='product-title'>Какие изделия шьём</div>
        <div className='product-text'>Специализируемся на мужской, женской и детской одежде 1-2-3 слоя. Шьём всё, кроме вязаных изделий и нежного белья</div>
        <div className='product-box'>
            <div className='product-box-name'>
                <ProductName onClickItem={(name) => console.log(name)} items={['Платья', 'Рубашка', 'Брюки', 'Двойка', 'Футболка', 'Домашная одежда', 'Юбки']}/>
            </div>
            <div className='product-box-card'>
              <Card />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Product
