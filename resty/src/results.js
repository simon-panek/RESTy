import React from 'react';
import './results.scss';

class Results extends React.Component {
  render(){
    return(
      <>
        <section id="headersSection">
          <h3>Response Headers</h3>
          <p>Response Headers Content</p>
        </section>
        <section id="responseBodySection">
          <h3>Response Body</h3>
          <p>Response Body Content</p>
        </section>
      </>
    );
  }
};

export default Results;