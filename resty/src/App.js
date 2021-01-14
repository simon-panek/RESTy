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
      results: [],
      headers: {},
    }
  }

  collectHeaders = (headers) => {
    this.setState({ headers });
  }

  updateResults = (apiResults) => {
    let newCount = apiResults.length;
    // let apiHeaders;
    let apiBody = apiResults;
    console.log('length of results ', newCount);
    // this.setState({ headers: apiHeaders })
    this.setState({ results: apiBody });
    this.setState({ count: newCount });
  }

  collectHeaders = (apiHeaders) => {
    this.setState({headers: apiHeaders});
  }

  render() {
    return (
      <>
        <Header />
        <Form 
          provideResults={this.updateResults}
          giveAppHeaders={this.collectHeaders}
        />
        <Results 
        headers={this.state.headers}
        results={this.state.results}
        count={this.state.count}
        />
        <Footer />
      </>
    )
  }
}

export default App;