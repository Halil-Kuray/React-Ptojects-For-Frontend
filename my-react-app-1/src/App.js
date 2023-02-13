
import Time from "./components/Time"
import Card from"./components/Card"
import Joke from "./components/Joke"
import jokesData from "./jokesData"
import JokeMap from "./components/JokeMap"
import './App.css';

function App() {
   return (
    <article className="App">
        <section>
          <Time/>
        </section>
        
        <hr/>

        <section className="cats">
          <Card 
              name="Mr. Whiskerson"
              phone="(212) 555-1234"
              email="mr.whiskaz@catnap.meow"
          />
          <Card
              name="Fluffykins"
              phone="(212) 555-2345"
              email="fluff@me.com"
          />
          <Card 
              name="Felix"
              phone="(212) 555-4567"
              email="thecat@hotmail.com"
          />
          <Card 
              name="Pumpkin"
              phone="(0800) CAT KING"
              email="pumpkin@scrimba.com"
          />
        </section>

        <hr/>
        
        <section className="cats">
        <Joke 
                setup="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it." 
            />
            <Joke 
                setup="How did the hacker escape the police?" 
                punchline="He just ransomware!" 
            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?" 
                punchline="Scurvy." 
            />
            <Joke 
                setup="Why do bees stay in the hive in the winter?" 
                punchline="Swarm." 
            />
            <Joke 
                setup="What's the best thing about Switzerland?" 
                punchline="I don't know, but the flag is a big plus!" 
            />
        </section>

        <hr/>

        <section>
          <h2 style={{color:"red", margin:"25px"}}>In This Part Data Were Exported Via Props and Mapped .</h2>
          <JokeMap data={jokesData} />
        </section>
    </article>
)
}

export default App;
