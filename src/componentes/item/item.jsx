import React from 'react'
import './item.css'

const Item = ({producto}) => {
  return (
    <div className='producto col-6 mt-3 mx-auto'>
        
        <h1>{producto.nombre}</h1>
        <img className="productoimg" src={producto.imagen} alt="" />
        <p>Precio: ${producto.precio}</p>        
    </div>
  )
}

export default Item