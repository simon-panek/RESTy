import React from 'react';
import './history.scss';
import ReactJson from 'react-json-view';


class History extends React.Component {

  render(){
    
    return(
      <div id="historyDiv">
        <ul>
        {this.props.searches.map(search => {
          return ( 
          <li>{search.method} {search.url}</li> 
          )
            // make ths a link or a button so that it will send the method and url back to App.js and then send the new request
        })}
        </ul>
      </div>
    );
  }
};

export default History;