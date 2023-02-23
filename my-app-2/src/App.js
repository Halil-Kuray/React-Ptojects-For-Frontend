import logo from './logo.svg';
import './App.css';
import ProjectMeme from './components/ProjectMeme';
import Counter from './components/Counter';
import Item from './components/Item';
import Form from './components/Form';

function App() {
  return (
    <main className="App">
      <Form/>
      <ProjectMeme/>
      <Counter/>
      <Item/>
    </main>
  );
}

export default App;
