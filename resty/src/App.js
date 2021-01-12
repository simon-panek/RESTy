// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';

// import './app.scss';
import Header from './header.js';
import Form from './form.js';
import Footer from './footer.js';

// const Header = () => {
//   return(
//     <header>
//       <h1>RESTy</h1>
//     </header>
//   );
// };

// const Footer = () => {
//   return(
//     <footer>
//       &copy; 2021 SP
//     </footer>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: 'nothing to see here'
    }
  }
  
  // handleWords = e => {
  //   let newWords = e.target.value;
  //   this.setState({ words: newWords });
  // }
  
  // handleClick = e => {
  //   e.preventDefault();
  //   let newWords = this.state.words;
  //   this.setState({ words: newWords });
  // }
  
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