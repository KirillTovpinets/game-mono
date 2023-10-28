"use client";
import type { ReactElement } from "react";
import SnakeGame from "snake-game";
import layout from "../styles/layout.module.css";

function Page(): ReactElement {
  return (
    <div className={layout.snakeContainer}>
      <SnakeGame />
    </div>
  );
}

export default Page;
