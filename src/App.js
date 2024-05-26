import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/BottomMenu/BottomMenu";
import "./fonts/Inconsolata-Regular.ttf";
// import { Button } from 'react-materialize';
import Swiper from './components/Swiper/Swiper';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import Boost from "./pages/boost";
import Task from "./pages/task";


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
      {/* <Swiper/> */}
      
      <Router>
        <SimpleBottomNavigation/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/boost" element={<Boost />}/>
          <Route path="/task" element={<Task />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;