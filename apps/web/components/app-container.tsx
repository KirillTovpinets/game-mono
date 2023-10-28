import { default as Game2048 } from "../pages/2048-game";
import { default as Snake } from "../pages/snake";
import { default as Tetris } from "../pages/tetris";
import { default as TickTackToe } from "../pages/tick-tack-toe";

export const AppContainer = [
  <Tetris />,
  <Game2048 />,
  <Snake />,
  <TickTackToe />,
];
