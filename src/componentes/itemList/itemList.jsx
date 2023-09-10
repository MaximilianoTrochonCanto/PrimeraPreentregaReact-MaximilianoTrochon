import React from 'react'
import { productos } from '../../productos/productos'
import { useState } from 'react'
import Item from '../item/item'
import './itemList.css'



const ItemList = () => {
  
    const [posicion,setPosicion] = useState(1)
    const [producto,setProducto] = useState(productos.filter(p => p.categoria == "Remeras")[0])
  
    let productoSeleccionado = producto


    function cambiar(){
        setPosicion(posicion + 1)
        if(posicion<productos.length)setProducto(productos[posicion])
    }

    return (
        <div>
        <Item producto={productoSeleccionado}/>
        <button onClick={cambiar}>Siguiente</button>
        </div>
  
    )



}

export default ItemList