import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import "./fonts/Inconsolata-Regular.ttf";


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
      tg.ready();
// eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Header />
      <h1>Welcome to SHISHKI</h1>
      <button onClick ={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;