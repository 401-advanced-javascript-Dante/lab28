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
      loading: false,
      current :'',
    };
  }


  handleUpdate= (data, api) => { 
    let newResponse = this.state.response;
    console.log('api',api);
    console.log('response',newResponse);

    newResponse[api] = data ;
    this.setState({response: newResponse});
    this.setState({current: api});
    // console.log('i Hope!', this.state.response);
    // console.log('keys', Object.keys(this.state.response));
  }

  handleLoading = () => {
    let loading = ! this.state.loading; 
    this.setState({loading});
  }

  handleReset =() =>{
    let api = '';
    this.setState({current: api});
  }

  hereWeGoAgain= (api) => {
    let newDo = api ;
    // let data = null ;
    // this.handleUpdate(data ,api);
    console.log('new:', newDo);
    this.setState({current : newDo});
  }
    

  render(){
    console.log('*****', this.state.response, this.state.current);
    return(
      
      <React.Fragment>
        <div className="container">

          <Header reset = {this.handleReset}/>
          
          <Route exact path="/lab28" > 
            
            { this.state.loading && <h2>  === loading === </h2> }
            <Form update={this.handleUpdate} loadingState={this.handleLoading} />


            <Results results={this.state.response[this.state.current]} />
          </Route>

          <Route exact path="/history">
            <History data = {this.state.response} reDo = {this.hereWeGoAgain}/>
          </Route>
          
          <Footer />
        </div>

      </React.Fragment>
    );
  }
}



export default App ;
