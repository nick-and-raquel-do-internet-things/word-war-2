import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import {makeAnimationDriver} from 'cycle-animation-driver';

import app from './src/app';

const drivers = {
  DOM: makeDOMDriver('.app'),
  Animation: makeAnimationDriver()
};

const dispose = run(app, drivers);

if (module.hot) {
  module.hot.accept();

  module.hot.dispose(() => {
    dispose();
  });
}
