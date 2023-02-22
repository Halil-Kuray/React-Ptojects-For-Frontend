import React, {useState} from "react";



export default function Meme(props) {
  const data = props.data.data.memes;
  let leng = data.length;
  
  const [randomItem, setRandomItem] = useState(data[1])

  function handleClick(e) {
    e.preventDefault();
    let randomNumber = Math.floor(Math.random() * leng);
    setRandomItem(data[randomNumber])
    
  }

  return (
    <section>
      <form>
        <label>first input</label>
        <input type="text" />
        <label>{randomItem.name}</label>
        <input type="text" />
        <img src={randomItem.url} width="800px" height="800px" />
        <button onClick={handleClick}> Get a new meme image</button>
      </form>
    </section>
  );
}
