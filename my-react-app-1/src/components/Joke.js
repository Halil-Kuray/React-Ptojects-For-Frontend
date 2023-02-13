import React from 'react'

export default function Joke(props) {
  return (
    <section>
        <h3>{props.setup} </h3>
        
        <details>
            <summary> See the punchline :)</summary>
            <p>{props.punchline} </p>
        </details>
    </section>
  )
}
