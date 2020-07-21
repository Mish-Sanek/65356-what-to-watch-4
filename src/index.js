import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './api.js';
import {reducer, ActionCreator} from './reducer.js';
import App from './components/app/app.jsx';

const api = createAPI(() => {
  store.dispatch(ActionCreator.requireAuthorization());
});

const store = createStore(reducer, {
  films: [],
  currentFilter: `All genres`,
}, compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
));

store.dispatch(ActionCreator.getFilms());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);

