import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      routeType: 'No route type selected',
      url: 'No URL provided',
      method: 'GET'
      //define routeType and url as arrays if they need to hold multiple states, use this.setState.push ({ key: data}), to add states to the arrays
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let radioSelection = e.target.routeType.value;
    this.setState({ routeType: radioSelection });

    let urlInput = e.target.url.value;
    this.setState({ url: urlInput });

    // console.log({radioSelection}, {urlInput});
    // console.log('this.state.url ', this.state.url, 'this.state.routeType ', this.state.routeType);
    // console.log('this.state ', this.state);

    this.setState({ display: true });

    this.getResults(radioSelection, urlInput);
  }

  getResults = async (method='GET', url) => {
    const apiResponse = await fetch(url, { method: `${method}`, mode: 'cors' })
    .then(response => {
      if(response.status !==200)return;
// console.log('response.body @ getResults ', response.body);
      let headers = {};

      for (let pair of response.headers.entries()) {
        headers[pair[0]] = pair[1];
      }
     
      // console.log('headers ', headers);

      this.props.giveAppHeaders(headers);
      
      return response.json();
    });

    // console.log ('apiResponse.results ', apiResponse.results);

    this.props.provideResults(apiResponse.results);
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              <input id="getRadio" type="radio" name="routeType" value="GET" />
              GET
            </label>
            <label>
              <input id="postRadio" type="radio" name="routeType" value="POST" />
              POST
            </label>
            <label>
              <input id="putRadio" type="radio" name="routeType" value="PUT" />
              PUT
            </label>
            <label>
              <input id="deleteRadio" type="radio" name="routeType" value="DELETE" />
              DELETE
            </label>
            <section id="buttonSection"> 
              <label>
                URL: 
                <input id="urlInput" type='text' name="url" />
              </label>
              <button data-testId="submitButton" type="submit" >Make it so.</button>
            </section>
          </fieldset>
        </form>
        
        {!this.state.display ? '' : 
        <div>
          <section id="outputSection">{this.state.routeType}: {this.state.url}</section>
        </div>
        }

      </>
    );
  }
};

export default Form;