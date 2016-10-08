import {div} from '@cycle/dom';
import xs from 'xstream';

export default function App ({DOM, Animation}) {
  return {
    DOM: xs.of(div('bello world'))
  };
}
