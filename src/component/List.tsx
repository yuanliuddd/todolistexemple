import React from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"]
}

export default function List({ people }:IProps) {
  return <div></div>;
}