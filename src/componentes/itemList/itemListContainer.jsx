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
    const [alertsMsg,setAlertMsg] = useState(<p></p>)
    const [compraValida,setCompraValida] = useState(true)


    function navegar(){

         if(posicion == productosCat.length-1){            
            setPosicion(0)
            setProducto(productosCat[posicion])
            
        }else{            
            setPosicion(posicion+1)
            setProducto(productosCat[posicion])
            
        }
    }

    


    
    useEffect(()=>{

    },[producto])

    function comprar(){
        if(producto.stock>0){
        setProducto({
            ...producto,
            stock: producto.stock -= 1
        })
        const productoCambiado = {...producto}        
        setProducto(productoCambiado)
        }else{
            alert("No hay stock")
        }
    }

    

    
        return (
        <div>        
         <h2 className='p-1 mt-2'>{greetings}</h2>   
        <Item producto={producto}/>                 
        <Button variant="primary" className='Navegar' onClick={() => navegar()}>Siguiente</Button>
        <Button variant="primary" className='Comprar' onClick={() => comprar()}>Comprar</Button>
        
        </div>
    )
    



}

export default ItemListContainer