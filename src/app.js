/* eslint-disable no-unused-vars */
// dependencies 
import React from 'react';
import {Switch , Route} from 'react-router-dom';

// components 
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import History from './components/history/history.js';
//style
import './app.scss';




class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      response : {} ,
    };
  }

  handleUpdate= (data, api) => { 
    let newResponse = this.state.response;
    newResponse[api] = data ;
    this.setState({response: newResponse});
    console.log('i Hope!', this.state.response);
    console.log('keys', Object.keys(this.state.response));

  }

    

  render(){
    return(
      
      <React.Fragment>

        <div className="container">

          <Header />
          
          <Route exact path="/" >
            <Form update={this.handleUpdate}/>

            <Results results={this.state.response} />
          </Route>

          <Route exact path="/history">
            <History data = {this.state.response} />
          </Route>
          
          <Footer />
        </div>

      </React.Fragment>
    );
  }
}



export default App ;
