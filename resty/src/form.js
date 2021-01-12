import React from 'react';

class Form extends React.Component {
  render(){
    return(
      <form>
        <fieldset>
          <label>
            <input type="radio" name="routeType" value="get"/>
            GET
          </label>
          <label>
            <input type="radio" name="routeType" value="POST"/>
            POST
          </label>
          <label>
            <input type="radio" name="routeType" value="PUT"/>
            PUT
          </label>
          <label>
            <input type="radio" name="routeType" value="DELETE"/>
            DELETE
          </label>
          <label>
            URL: 
            <input type='text' name="url" />
          </label>
          <button type="submit">Make it so.</button>
        </fieldset>
      </form>
    );
  }
};

export default Form;