import React from 'react';

class Results extends React.Component {

  makeItPretty = (data) => {
    let result = JSON.stringify(data ,null , '\t');
    return result ;
  }
  

  render() {
    return(
      <>
        <section>{this.makeItPretty(this.props.results)} </section>
      </>
    );
  }


}


export default Results ;