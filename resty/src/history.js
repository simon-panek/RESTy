import React from 'react';
import './history.scss';
import ReactJson from 'react-json-view';
import App from './App';

class Results extends React.Component {

  render(){
    console.log('this.props history page ', this.props);
    return(
      <div id="historyDiv">
        {this.props.searches.map(search => {
          return (
            <p>{search.method} {search.url}</p> 
            // make this a link or a button so that it will send the method and url back to App.js and then send the new request
          )
        })}
      </div>
    );
  }
};

export default History;