import React from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
}

export default function List({ people }: IProps) {

  const peopleList = people.map((ppl) => (
    <li key={ppl.name}>
      <img src={ppl.img} alt="" style={{width:'12rem'}} />
      <p>{ppl.name}</p>
      <p>{ppl.age}</p>
    </li>
  ));

  return (
    <div>
      <ul>{peopleList}</ul>
    </div>
  );
}