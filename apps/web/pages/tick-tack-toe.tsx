"use client";
import type { ReactElement } from "react";
import TicTacToe from "tic-tac-toe";
import layout from "../styles/layout.module.css";

function Page(): ReactElement {
  return (
    <div className={layout.tickTackToe}>
      <TicTacToe />
    </div>
  );
}

export default Page;
