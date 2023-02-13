import React from 'react'

export default function ShopCard() {
    let data = [1,2,3,4]
    let cardComponent = data.map((item, index)=> {
        return(
            <div key={index}>
                <h1>this is header of my card</h1>
                {item%2 == 0 && <p>{item} is an even Number</p>}
                {item%2 == 1 && <p>{item} is an odd Number</p>}

            </div>
        )
    })
  return (
    <div>
       {cardComponent} 
    </div>
    
  )
}
