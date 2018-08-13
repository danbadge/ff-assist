import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { increment } from './reducers/index';
import { StoreState } from './types/index';
import Hello from './components/hello/index'

const store = createStore<StoreState>(increment, {
  increment: 1
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
