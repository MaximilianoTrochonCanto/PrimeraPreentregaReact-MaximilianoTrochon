import React from 'react'
import './item.css'

const Item = ({producto}) => {
  return (
    <div className='producto col-6 py-1 mt-3 mx-auto'>
        
        <h1 className='col-12 p-2'>{producto.categoria}: {producto.nombre}</h1>
        <img className="productoimg" src={producto.imagen} alt="" />
        <p>Precio: ${producto.precio}</p>
        <p>Stock: {producto.stock}</p>        
    </div>
  )
}

export default Item