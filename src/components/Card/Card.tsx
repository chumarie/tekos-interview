import React from "react";
import type { ReactElement } from "react";

interface Props {
  items: { title: string; img: string };
}

export default function Card({ items }: Props): ReactElement {
  const { img, title } = items;
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt="" />
    </div>
  );
}
