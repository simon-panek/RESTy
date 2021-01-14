import React from 'react';

// import './app.scss';
import Header from './header.js';
import Form from './form.js';
import Footer from './footer.js';
import Results from './results.js';
import History from './history.js';
import './app.scss';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: [],
      searches: []
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

  storeUrlMethod = (method, url) => {
    let newSearch = { method, url }; //create a new object from the method and url { method: method, url: url }
    let duplicateCheck = 0;
    this.state.searches.forEach(search => {
      if(search[0] === method && search[1] === url){
        duplicateCheck = 1;
        console.log('duplicateCheck in forEach ', duplicateCheck);
      }
    })
    console.log('duplicateCheck after forEach ', duplicateCheck);

    if(duplicateCheck !== 1) {
      // this.setState({ searches: this.state.searches.concat([method, url])})
      // this.setState( prevState => ({ 
      //   searches: [...prevState.searches, [method, url]]
      this.setState({ searches: [...this.state.searches, newSearch]}) //takes all existing search content and adds on newSearch
      // })
    }
    
  }

  render() {
    return (
      <>
        <Header />
        <Form 
          provideResults={this.updateResults}
          giveAppHeaders={this.collectHeaders}
          giveAppMethodUrl={this.storeUrlMethod}
        />
        <Results 
        headers={this.state.headers}
        results={this.state.results}
        count={this.state.count}
        />
        <History
        searches = {this.state.searches}
        />
        <Footer />
      </>
    )
  }
}

export default App;