import React from 'react';
import './history.scss';
import ReactJson from 'react-json-view';



class History extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchAgain : {}
    }
  }
  
  reRunHandler = (e) => {
    let searchIdx = e.target.name;
    console.log('INSIDE reRunHandler searchIdx ', searchIdx);
    let chosenSearch = this.props.searches[searchIdx];
    console.log({chosenSearch});
    this.setState({ searchAgain: chosenSearch });
    this.props.giveAppPreviousSearch(chosenSearch);

    

  }

  render(){
    
    return(
      <div id="historyDiv">
        <h3>Search History - Click button to search again</h3>
        <ul>
        {this.props.searches.map((search, idx) => {
          return ( 
          <button type="submit" name={idx} key={idx} onClick={this.reRunHandler}>{search.method} {search.url}</button> 
          )
            // make ths a link or a button so that it will send the method and url back to App.js and then send the new request
        })}
        </ul>
      </div>
    );
  }
};

export default History;