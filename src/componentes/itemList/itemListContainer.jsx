import React, { useEffect } from 'react'
import { productos } from '../../productos/productos'
import { useState } from 'react'
import Item from '../item/item'
import './itemListContainer.css'
import Button from 'react-bootstrap/Button';


const ItemListContainer = ({categoria,greetings}) => {
      
    let productosCat = productos.filter(p => p.categoria == categoria)
    const [posicion,setPosicion] = useState(1)
    const [producto,setProducto] = useState(productosCat[0])
        
    function navegar(){

         if(posicion == productosCat.length-1){            
            setPosicion(0)
            setProducto(productosCat[posicion])
            
        }else{            
            setPosicion(posicion+1)
            setProducto(productosCat[posicion])
            
        }
    }

    


    
    

    

    

    
        return (
        <div>        
         <h2 className='p-1 mt-2'>{greetings}</h2>   
        <Item producto={producto}/>                 
        <Button variant="primary" className='Navegar' onClick={() => navegar()}>Siguiente</Button>
    
        
        </div>
    )
    



}

export default ItemListContainer