import logo from './logo.svg';
import './App.css';
import ProjectMeme from './components/ProjectMeme';
import Counter from './components/Counter';
import Item from './components/Item';

function App() {
  return (
    <main className="App">
      <ProjectMeme/>
      <Counter/>
      <Item/>
    </main>
  );
}

export default App;
