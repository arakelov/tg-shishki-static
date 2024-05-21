import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import "./fonts/Inconsolata-Regular.ttf";
// import { Button } from 'react-materialize';
import logo from './images/bush.png';


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
      tg.ready();
// eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Header />

      {/* <h3>Welcome to SHISHKI</h3> */}
      {/* <Button onClick ={onToggleButton}>Toggle</Button> */}
      <img src={logo} />


    </div>
  );
}

export default App;