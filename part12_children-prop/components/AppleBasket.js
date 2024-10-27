import React from 'react';


export const AppleBasket=({appleCount,basketName})=>{
    return (
        <div className="apple-basket">
            <h1>
                <span>{appleCount}</span>Apples
            </h1>
            <p className="BasketName">{basketName}</p>
        </div>
    )
}