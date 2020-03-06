/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './app';
import './index.css';

class Main extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}


// ====> method to ===> destination //
ReactDOM.render(<Main />, document.getElementById('root'));

