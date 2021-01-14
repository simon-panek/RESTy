import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view';

class Results extends React.Component {
  render(){
    console.log('this.props results page ', this.props);
    return(
      <div id="resultsDiv">
        <section id="headersSection">
          <h3>Response Headers</h3>
          <ReactJson src={this.props.headers} />
        </section>
        <section id="responseBodySection">
          <h3>Response Body</h3>
          <ReactJson src={this.props.results} />
          <p>Count: <span data-testid="count">{this.props.count}</span></p>
        </section>
      </div>
    );
  }
};

export default Results;