import React, { useState } from "react";
import { IState as Props } from "../App";

interface IAddGuest {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}

export default function AddGuest({ setPeople, people }: IAddGuest) {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });


  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setPeople([
      ...people,
      {
        name: input.name,
        age: Number(input.age),
        img: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput((prevState) => { return { ...prevState, [e.target.placeholder]: e.target.value } }); 

    
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={onChangeHandler}
          placeholder="name"
          value={input.name}
        />
        <input
          type="text"
          onChange={onChangeHandler}
          placeholder="age"
          value={input.age}
        />
        <input
          type="text"
          onChange={onChangeHandler}
          placeholder="img"
          value={input.img}
        />
        <input
          type="text"
          onChange={onChangeHandler}
          placeholder="note"
          value={input.note}
        />
        <button type="submit">Add Guest </button>
      </form>
    </div>
  );
}
