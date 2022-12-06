import React, { useState } from "react";
import "./App.css";
import List from './component/List'; 
import AddGuest from './component/AddGuest'

export interface IState {
  people: {
    name: string;
    age: number; 
    img: string;
    note?: string;
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "",
    },
  ]);
  
  return (
    <div className="App">
      <h1>Guest List To Party</h1>
      <List people={people} />
      <AddGuest setPeople={setPeople} people={ people} />
    </div>
  );
}

export default App;