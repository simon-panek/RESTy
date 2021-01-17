import React from 'react';
import './header.scss';

class Help extends React.Component {
  render(){
    return(
      <>
          <h2>Help</h2>
          <p>GET: Enter the desired URL, append the record ID as a parameter if a single record is desired.</p>
          <p>POST: Enter the desired URL and the body of the request to be posted to a new record. The format of the body may be specified by the API being used.</p>
          <p>PUT: Enter the desired URL with the record ID appended as a parameter. Enter the body content to be updated. The format of the body will need to match that of the record attempting to be updated.</p>
          <p>DELETE: Enter the desired URL with the record ID appended as a parameter.</p>
          <p>Test API routes and request body information can be found at <a href="http://fakeapi.jsonparseronline.com/" /></p>
      </>
    );
  }
};

export default Help;