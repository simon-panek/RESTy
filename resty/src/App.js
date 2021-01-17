import React from 'react';

// import './app.scss';
import Header from './header.js';
import Form from './form.js';
import Footer from './footer.js';
import Results from './results.js';
import History from './history.js';
import Help from './help.js';
import './app.scss';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: [],
      searches: [],
      searchAgain: []
    }
  }

  collectHeaders = (headers) => {
    this.setState({ headers });
  }

  updateResults = (apiResults) => {
    console.log('^^^^^^Inside Update Results ', apiResults);
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
    console.log('@storeURLMETHOD this.state.searches ', this.state.searches);
    
  }

  runPreviousSearch = (previousSearch) => {
    // console.log('INSIDE APP runPreviousSearch ', previousSearch.url); 
    //now have access to the METHOD and URL from the selected search history, need to pass it to form's method to rerun

    this.setState({searchAgain: [previousSearch.method, previousSearch.url]});
  }

  render() {
    // console.log('+++++++++++++++runPrevious this.state ', this.state.searchAgain);
    return (
      <BrowserRouter>
    
        <Header />
        <Switch>
          <Route exact path="/">
            <Form 
              provideResults={this.updateResults}
              giveAppHeaders={this.collectHeaders}
              giveAppMethodUrl={this.storeUrlMethod}
              searchAgain={this.state.searchAgain}
            />
            <Results 
            headers={this.state.headers}
            results={this.state.results}
            count={this.state.count}
            />
          </Route>
          <Route exact path="/history">
            <History 
            searches = {this.state.searches}
            giveAppPreviousSearch = {this.runPreviousSearch}
            />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;