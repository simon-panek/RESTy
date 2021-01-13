import React from 'react';

// import './app.scss';
import Header from './header.js';
import Form from './form.js';
import Footer from './footer.js';
import Results from './results.js';
import './app.scss';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      results: []
    }
  }

  updateResults = (apiResults) => {
    let newCount = apiResults.length;
    console.log('length of results ', newCount);
    this.setState({ apiResults });
    this.setState({ count: newCount });
  }

  render() {
    return (
      <>
        <Header />
        <Form 
          provideResults={this.updateResults}
        />
        <Results />
        <Footer />
      </>
    )
  }
}

export default App;