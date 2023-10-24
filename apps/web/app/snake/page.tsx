"use client";

import { FunctionComponent } from "react";
import SnakeApp from "snake-game";
import layout from "../layout.module.css";
interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <div className={layout.snakeContainer}>
      <SnakeApp />
    </div>
  );
};

export default Page;
