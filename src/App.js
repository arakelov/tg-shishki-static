import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import "./fonts/Inconsolata-Regular.ttf";
import { Button } from 'react-materialize';


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
      tg.ready();
// eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Header />

      <h3>Welcome to SHISHKI</h3>
      <Button onClick ={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;