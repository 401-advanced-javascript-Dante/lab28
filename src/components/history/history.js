import React from 'react';



class History extends React.Component {
  
  render(){
    return(
      <>
        <div>
          {Object.keys(this.props.data).map((val , idx) => {
            return <li key={idx}> {val} </li>;
          })}
        </div>
      </>
    );
  }
    
}


export default History ;