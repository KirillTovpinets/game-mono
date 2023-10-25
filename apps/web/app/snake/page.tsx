'use client';

import React, { FunctionComponent } from 'react';
import SnakeGame from 'snake-game';
import layout from '../layout.module.css';
interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <div className={layout.snakeContainer}>
      <SnakeGame />
    </div>
  );
};

export default Page;
