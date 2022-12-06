import React from 'react'
import { IState as Props } from "../App";


interface IAddGuest {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}

export default function AddGuest({ setPeople , people }:IAddGuest) {
  return (
    <div>AddGuest</div>
  )
}
