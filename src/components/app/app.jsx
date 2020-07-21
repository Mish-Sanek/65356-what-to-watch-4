import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.updateId = this.updateId.bind(this);
    this.state = {
      cardId: null,
    };
  }

  updateId(value) {
    this.setState({cardId: value});
  }

  render() {
    const {linkClickHandler} = this.props;
    const {cardId} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              cardId={cardId}
              linkClickHandler={linkClickHandler}
              updateId={this.updateId}
            />
          </Route>
          <Route exact path="/movie-page">
            <MoviePage />
          </Route>
        </Switch>
      </BrowserRouter>);
  }
}

App.propTypes = {
  films: PropTypes.array,
  linkClickHandler: PropTypes.func,
  cardId: PropTypes.number,
  store: PropTypes.object,
};

export default App;
