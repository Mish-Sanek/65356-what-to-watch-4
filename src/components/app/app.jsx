import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/movie/:id">
            <MoviePage/>
          </Route>
        </Switch>
      </BrowserRouter>);
  }
}

App.propTypes = {
  films: PropTypes.object,
};

export default App;
