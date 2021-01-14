import React from 'react';
import './history.scss';
import ReactJson from 'react-json-view';


class History extends React.Component {

  render(){
    
    return(
      <div id="historyDiv">
        {this.props.searches.map(search => {
          return ( 
          <p>{search.method} {search.url}</p> 
          )
            // make ths a link or a button so that it will send the method and url back to App.js and then send the new request
        })}
      </div>
    );
  }
};

export default History;