import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.jsx'
// import Todolist from './TodoList';
//与PWA的缓存机制有关
// import * as serviceWorker from './serviceWorker';

ReactDOM.render( < TodoList / > , document.getElementById('root')); { /* serviceWorker.unregister(); */ }