import './App.css';
import React, { useState, useContext, createContext } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const context = createContext();

function App() {
  const [mode, setMode] = useState("light");
  const styles = {
    background: mode === "light" ? "white" : "black"
  };
  const obj = {mode:mode, setMode:setMode, styles:styles}
  
  return (
    <context.Provider value={obj}>
      <div style={styles} className="App">
      <List />
    </div>
    </context.Provider>
    
  );
}

const List = () => (
  <ul>
    <ListItem value="Light"/>
    <ListItem value="Dark"/>
  </ul>
);

const ListItem = ({ value }) => (
  <li>
    <Button value={value}/>
  </li>
);

const Button = ({value}) => {
  const { mode, setMode } = useContext(context);
  const styles = {
    background: mode === "light" ? "black" : "white",
    color : mode === "light" ? "white":"black"
  }
  return (
    <div className="App">
      <button style={styles} onClick={() => setMode(value === "Light" ? "light":"dark")}>{value}{value==="Light" ? <LightModeIcon/> : <DarkModeIcon/>}</button>
    </div>
  );
}

export default App;
