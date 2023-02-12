
import Time from "./components/Time"
import Card from"./components/Card"
import './App.css';

function App() {
   return (
    <div className="App">
        <Time/>
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
    </div>
)
}

export default App;
