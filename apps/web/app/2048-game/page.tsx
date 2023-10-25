'use client';
import Game2048 from '2048-game';
import type { FunctionComponent } from 'react';

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <div>
      <Game2048 />
    </div>
  );
};

export default Page;
