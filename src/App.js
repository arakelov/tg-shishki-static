import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  
  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
    <h1>Hello SHISHKI</h1>
      <button onClick ={onClose}>Close</button>
    </div>
  );
}

export default App;