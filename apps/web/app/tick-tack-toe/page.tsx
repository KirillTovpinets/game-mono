"use client";
import { FunctionComponent } from "react";
import TicTacToe from "tic-tac-toe";
import layout from "../layout.module.css";
interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <div className={layout.tickTackToe}>
      <TicTacToe />
    </div>
  );
};

export default Page;
