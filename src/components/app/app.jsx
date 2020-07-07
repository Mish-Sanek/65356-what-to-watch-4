import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
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
    const {films, linkClickHandler, store} = this.props;
    const {cardId} = this.state;

    return <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              films={films}
              cardId={cardId}
              linkClickHandler={linkClickHandler}
              updateId={this.updateId}
            />
          </Route>
          <Route exact path="/movie-page">
            <MoviePage film={films[this.state.cardId]} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>;
  }
}

App.propTypes = {
  films: PropTypes.array,
  linkClickHandler: PropTypes.func,
  cardId: PropTypes.number,
  store: PropTypes.object,
};

export default App;
