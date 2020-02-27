/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import './app.scss';




class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      response : {} ,
    };
  }

  handleUpdate= (data) => { 
    let response = data ;
    this.setState({response});
  }

    

  render(){
    return(
      
      <React.Fragment>

        <div className="container">

          <Header />
          <Form update={this.handleUpdate}/>
          <Results results={this.state.response} />
          <Footer />
        </div>

      </React.Fragment>
    );
  }
}



export default App ;
