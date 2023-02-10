import React from 'react'

export default function Time() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let currentTime = `${hour}: ${minutes}: ${seconds}`

    let word;

    if(hour > 17) {
        word = "evening"
    }else if(hour > 12){
        word = "afternoon"
    }else{
        word = "morning"
    }
  return (
    <div className='sayHi'>
        <h2>This part is static</h2>
       <p>Good {word}, Current Time is {currentTime}</p>
    </div>
  )
}
