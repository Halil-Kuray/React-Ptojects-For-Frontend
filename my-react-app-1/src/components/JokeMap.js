import React from 'react'

export default function JokeMap( props) {
    const data = props.data
    const myHtml = data.map(item => {
        return(
            <div>
            {item.setup && <h3>{item.setup} sana mi KOYAMLKDFHLSFLD </h3>}
            
            <details>
                <summary> See the punchline :)</summary>
                <p>{item.punchline} </p>
            </details>
            </div>
        )
    })
  return (
    <section className='cats'>
        {myHtml}
    </section>
  )
}
