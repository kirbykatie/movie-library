import React from 'react';
import ReactDOM from 'react-dom';
//added the below because of a weird babel issue: https://stackoverflow.com/questions/53558916/babel-7-referenceerror-regeneratorruntime-is-not-defined
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from './components/App/App';
import './sass/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));