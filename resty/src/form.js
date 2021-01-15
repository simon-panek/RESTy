import React from 'react';
import './form.scss';



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      routeType: 'No route type selected',
      url: 'No URL provided',
      method: '',
      // searchAgainDuplicateCheck: ''
      functionSwitch: true
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

  // componentDidUpdate (props) {
  //  // console.log('========this.props.searchAgain ', this.props.searchAgain);
  //   if( this.searchAgainDuplicateCheck !== this.props.searchAgain ) {
  //     this.runAgain();
  //   }

    
  // }

  // resetFunctionSwitch() {
  //   this.setState({ functionSwitch: true})
  // }

  componentDidUpdate = (props) => {
  
    if (this.state.functionSwitch === true){
      console.log('$$$$$$ ', this.props.searchAgain[0]);

      if(this.props.searchAgain[0]){
        console.log('INSIDE FORM componentDidUpdate: ', this.props.searchAgain);
        let method = this.props.searchAgain[0];
        let url = this.props.searchAgain[1];
        this.getResults(method, url);
        this.setState({ functionSwitch: false});
        // this.setState({ searchAgainDuplicateCheck: this.props.searchAgain});
      }
    } else {
      return;
    }

  }

  getResults = async (method='GET', url) => {
    console.log('????????????????method ', method, 'url', url);
  
    // console.log('^^^^^^^^this.functionSwitch^^^^^^', this.state.functionSwitch);

    switch(method) {
      case 'GET':
        const apiResponse = await fetch(url, { method: `${method}`, mode: 'cors' })
          .then(response => {
          if(response.status !==200)return;
          let headers = {};
          for (let pair of response.headers.entries()) {
            headers[pair[0]] = pair[1];
          }

          this.props.giveAppHeaders(headers);
          let results = response.json();
          return results;
        });

        this.props.provideResults(apiResponse.results);

        if(apiResponse.results){
          this.props.giveAppMethodUrl(method, url);
        }

        break;

      case 'POST':
        fetch(url, {
        "method": `${method}`,
        "body": {
            "title": "title test",
            "content": "content test",
            "userId": 1,
            "categoryId": 4,
            // "imageUrl": "https://i.picsum.photos/id/866/700/400.jpg"
        },
        // "headers": {
        //     "Content-type": "application/json; charset=UTF-8"
        // }
        })
        .then(response => response.json())
        .then(json => console.log(json))

        break;

      case 'PUT':
        console.log('In Switch PUT')
        //put fake api PUT here
        break;

     case 'DELETE':
        console.log('In Switch DELETE')
        //put fake api DELETE here
    }

  }
 
  render(){
    //console.log('========searchAgainDuplicateCheck ', this.state.searchAgainDuplicateCheck);
    // if (flip === 1) {
      // console.log('FIRSTTIMETHROUGH', this.props.searchAgain);
      // if(this.props.searchAgain.method !== 'GET'){
      //   this.getResults(this.props.searchAgain.method, this.props.searchAgain.url);
      //   console.log('*******this.props.searchAgain @ form Render ******* ', this.props.searchAgain);
      //   // flip = 0;
      // }
    // }
      
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