import {svg, pre, h} from '@cycle/dom';
import xs from 'xstream';
import _ from 'lodash';

// import LetterBag from './letter-bag';

const initialState = {
  board: Board()
};

function debug (value) {
  return pre('.debug', JSON.stringify(value, null, 2));
}

function Board () {
  return _.range(0, 11).map((row) =>
    _.range(0, 11).map((column) => Square(row, column))
  );
}

function Square (row, column) {
  return {row, column};
}

function renderSquare (square) {
  const squareSize = innerWidth / 11;

  return (
    h('rect', {
      attrs: {
        width: squareSize,
        height: squareSize,
        x: square.row * squareSize,
        y: square.column * squareSize,
        fill: '#272759',
        stroke: 'aliceblue'
      }
    })
  );
}

function view (state) {
  return (
    h('svg', {attrs: {width: innerWidth, height: innerHeight}}, [
      ..._.flatten(state.board).map(renderSquare)
    ])
  );
}

export default function App ({DOM, Animation}) {
  const state$ = xs.of(initialState);

  return {
    DOM: state$.map(view)
  };
}
