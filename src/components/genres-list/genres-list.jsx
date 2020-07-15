import React from 'react';
import PropTypes from "prop-types";
import {categories} from '../../mocks/consts.js';
import {connect} from "react-redux";
import {ActionCreator} from '../../reducer.js';

class GenresListPresenter extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {changeFilter, currentFilter} = this.props;
    const categoriesList = categories.map((category) => {
      return (
        <li key={category.type} className={`catalog__genres-item ${category.name === currentFilter ? `catalog__genres-item--active` : ``}`}>
          <a onClick={(e) => {
            e.preventDefault();
            changeFilter(category.name);
          }}href="#" className="catalog__genres-link">{category.type}</a>
        </li>
      );
    });


    return (
      <ul className="catalog__genres-list">
        {categoriesList}
      </ul>
    );
  }
}

GenresListPresenter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    genres: state.genres,
    currentFilter: state.currentFilter
  });
};


const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (genre) => dispatch(ActionCreator.changeFilter(genre))
  };
};

const GenresList = connect(mapStateToProps, mapDispatchToProps)(GenresListPresenter);

export default GenresList;
