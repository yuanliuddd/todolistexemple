import React from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
}

export default function List({ people }: IProps) {
  
  const peopleList = people.map((ppl) => (
    <li>
      <img src={ppl.img} alt="" />
    </li>
  ));

  return (
    <div>
      <ul>{peopleList}</ul>
    </div>
  );
}