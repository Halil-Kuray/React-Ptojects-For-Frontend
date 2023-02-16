import React from "react";

export default function Meme () {

    function handleClick(e){
        e.preventDefault()
        console.log("I was clicked!")
    }

    return (
        <section>
            <form>
                <label>first input</label>
                <input type="text" />
                <label>Second Input</label>
                <input type="text" />
                <button onClick={handleClick}> Get a new meme image</button>
            </form>

        </section>
    )
}