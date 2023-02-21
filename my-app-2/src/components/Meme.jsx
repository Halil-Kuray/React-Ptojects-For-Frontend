import React, {useState} from "react";

export default function Meme(props) {
  const data = props.data.data.memes;
  let leng = data.length;
  let randomNumber = Math.floor(Math.random() * leng);
  let randomItem = data[randomNumber];

  function handleClick(e) {
    e.preventDefault();
    console.table(randomItem);
  }

  return (
    <section>
      <form>
        <label>first input</label>
        <input type="text" />
        <label>{randomItem.name}</label>
        <input type="text" />
        <img src={randomItem.url} width={randomItem.width} height={randomItem.height} />
        <button onClick={handleClick}> Get a new meme image</button>
      </form>
    </section>
  );
}
