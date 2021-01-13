import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view';

class Results extends React.Component {
  render(){
    console.log('this.props results page ', this.props);
    return(
      <>
        <section id="headersSection">
          <h3>Response Headers</h3>
          <ReactJson src={this.props.headers} />
        </section>
        <section id="responseBodySection">
          <h3>Response Body</h3>
          <ReactJson src={this.props.results} />
          <p>Count: {this.props.count}</p>
        </section>
      </>
    );
  }
};

export default Results;