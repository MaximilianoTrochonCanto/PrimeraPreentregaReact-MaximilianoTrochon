import React, { useEffect } from 'react'
import { productos } from '../../productos/productos'
import { useState } from 'react'
import Item from '../item/item'
import './itemList.css'
import Button from 'react-bootstrap/Button';


const ItemList = ({categoria}) => {
  

    
    let productosCat = productos.filter(p => p.categoria == categoria)
    console.log(productosCat)
    const [posicion,setPosicion] = useState(1)
    const [producto,setProducto] = useState(productosCat[0])
    

    function navegar(){

         if(posicion == productosCat.length-1){
            console.log(posicion)
            setPosicion(0)
            setProducto(productosCat[posicion])
            console.log(posicion)
        }else{
            console.log(posicion)
            setPosicion(posicion+1)
            setProducto(productosCat[posicion])
            console.log(posicion)
        }
    }
    

    return (
        <div>        
            <Item producto={producto}/>
        
        <Button variant="primary" className='Navegar' onClick={navegar}>Navegar</Button>
        </div>
  
    )



}

export default ItemList