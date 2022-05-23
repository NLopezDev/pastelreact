import React, { useState } from "react";

const ItemCount = () => {
    const[contador, setContador]=useState(0)

    const sumar = () => {
        if(contador<6){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador>0){
            setContador(contador - 1)
        }
    }

    return(
        <div>
            <button onClick={sumar}>+</button>
            <span>(contador)</span>
            <button onClick={restar}>-</button>
        </div>
    )
}

export default ItemCount;