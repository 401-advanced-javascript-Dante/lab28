import React from 'react';


class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      api: '',
      option: 'get',
    };
    console.log('Holaa', this.props);
  }

    changeHandler = (e) => {
      let api = e.target.value;
      this.setState({ api });
    }

    optionHandler = (e) => {
      let option = e.target.value;
      this.setState({ option });
    }

    handleSubmit = async (e) => {
      e.preventDefault();
      
      if(this.state.option === 'get'){
        let response = await fetch(this.state.api);
        let data = await response.json();
        this.props.update(data, this.state.api);
      }

    //  adding here the other methods post / put / delete :)
    }



    render() {

      return (

        <>
          <p>
            Selected REST: {this.state.option} 
          </p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="address" onChange={this.changeHandler} placeholder="type api address"></input>
            <button type="Submit">Go</button>
          </form>
          <div>

            <button value="get" id="get" onClick={this.optionHandler}>Get</button>
            <button value="post" id="post" onClick={this.optionHandler}>Post</button>
            <button value="put" onClick={this.optionHandler}>Put</button>
            <button value="delete" onClick={this.optionHandler}>Delete</button>
          </div>
        </>

      );
    }
}


export default Form;