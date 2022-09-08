import './App.css';
import Header from './Header';

function App() {
  const handleNameChange = () => {
    const names = ['Bob', 'John', 'Dave']
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  }
  return (
    <div className="App">
     <Header />
    </div>
  );
}

export default App;
