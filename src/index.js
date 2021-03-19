import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import MainReducer from './Reducers/MainReducer';
import Table from "./Containers/Table";
import CreateTodo from "./Containers/CreateToDo";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById("root")

  <Provider store={store}>
    <CreateTodo />
    <Table />
  </Provider>,
  document.getElementById("root")
);