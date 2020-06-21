import React from 'react';
import PropTypes from "prop-types";
import {Main} from '../main/main.jsx';

export const App = (props) => {
  const {films, linkClickHandler} = props;
  return <Main
    films={films}
    linkClickHandler={linkClickHandler}
  />;
};

App.propTypes = {
  films: PropTypes.array,
  linkClickHandler: PropTypes.func,
};
