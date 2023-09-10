import React, { useEffect } from 'react'
import { productos } from '../../productos/productos'
import { useState } from 'react'
import Item from '../item/item'
import './itemListContainer.css'
import Button from 'react-bootstrap/Button';


const ItemListContainer = ({categoria,greetings}) => {
  

    
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
         <h2 className='p-1 mt-2'>{greetings}</h2>   
        <Item producto={producto}/>        
        <Button variant="primary" className='Navegar' onClick={navegar}>Siguiente</Button>
        </div>
  
    )



}

export default ItemListContainer