import React, { useState } from 'react'

function ProductName({items, onClickItem}) {
    const [activeItem, setActiveItem] = useState(null)

    const onSelecItem = (index) => {
        setActiveItem(index)
    }

  return (
    <div className='categories'>
      <ul>
        <li className={activeItem === null ? 'item-active' : ''}  onClick={() => onSelecItem(null)}>Все</li>
        {
            items.map((name, index) => (
                <li className={activeItem === index ? 'item-active' : ''} 
                    onClick={() => onSelecItem(index)} 
                    key={`${name}_${index}`}>
                        {name}
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default ProductName
