import React from 'react';
import {Main} from '../main/main.jsx';

export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {poster, name, genre, releaseDate} = props;
  return <Main poster={poster} name={name} genre={genre} releaseDate={releaseDate} />;
};
