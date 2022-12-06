import React, { useState } from "react";
import { IState as Props } from "../App";

interface IAddGuest {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}

export default function AddGuest({ setPeople, people }: IAddGuest) {
  const [input, setInput] = useState();

  return <div>  </div>;
}
