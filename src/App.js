import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todo';
import Header from './Common/Header';
import About from './pages/about';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    /* if (this.state.loading) return <Loader />; */
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Todos />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  };
}

export default App;
