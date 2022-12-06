import React, { useState } from "react";
import { IState as Props } from "../App";

interface IAddGuest {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}

export default function AddGuest({ setPeople, people }: IAddGuest) {
  const [input, setInput] = useState({
    name: "",
    age: 0,
    note: "",
    img: "",
  });

  const onSubmitHandler = (): void => {
    setPeople(input);
  };

  const onChangeHandler = (): void => {};

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type="submit"></button>
      </form>
    </div>
  );
}
