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
  const [people, setPeople] = useState<IState['people']>([{name:'yuan',age:18,img:'zzzz'}]);

  return (
    <div className="App">
      <h1>Guest List To Party</h1>
      <List people={people} />
      <AddGuest setPeople={setPeople} people={ people} />
    </div>
  );
}

export default App;