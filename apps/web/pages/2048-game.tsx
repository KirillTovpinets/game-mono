'use client';
import Game2048 from '2048-game';
import type { ReactElement } from 'react';

function Page(): ReactElement {
  return (
    <div>
      <Game2048 />
    </div>
  );
}

export default Page;
