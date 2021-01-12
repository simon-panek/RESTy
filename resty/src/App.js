import React from 'react';

// import './app.scss';
import Header from './header.js';
import Form from './form.js';
import Footer from './footer.js';
import './app.scss';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    )
  }
}

export default App;