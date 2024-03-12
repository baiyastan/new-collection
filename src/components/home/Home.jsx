import React from 'react'

import './Home.css'
import Banner from '../banner/Banner'
import Product from '../product/Product'

function Home() {
  return (
    <div className='home'>
      <Banner />
      <Product />
    </div>
  )
}

export default Home