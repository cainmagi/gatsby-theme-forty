import React, { useState, useEffect, useReducer } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as styles from './Header.module.scss';

const HeaderInitialState = { scrollPos: -Infinity, isShown: true };

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      const new_scroll_pos = document.body.getBoundingClientRect().top;
      return {
        isShown: new_scroll_pos > state.scrollPos,
        scrollPos: new_scroll_pos,
      };
    case 'init':
      return {
        isShown: true,
        scrollPos: -Infinity,
      };
    default:
      throw new Error();
  }
}

function Header(props) {
  const [state, dispatch] = useReducer(reducer, HeaderInitialState);
  const [isCreated, setIsCreated] = useState(false);

  useEffect(() => {
    function handleScroll() {
      dispatch({ type: 'update' });
    }
    // Equivalent to componentDidMount
    window.addEventListener('scroll', handleScroll);

    // Equivalent to componentWillUnmount
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCreated]);

  // Used for skipping componentDidUpdate
  useEffect(() => {
    dispatch({ type: 'init' });
    setIsCreated(true);

    return () => {
      setIsCreated(false);
    };
  }, []);

  return (
    <header
      id="header"
      className={clsx([
        props.isAlt ? 'alt' : null,
        props.isAuto ? (state.isShown ? styles.active : styles.hidden) : null,
      ])}
    >
      <Link to="/" className="logo">
        <strong>Forty</strong> <span>by HTML5 UP</span>
      </Link>
      <nav>
        <a className="menu-link" onClick={props.onToggleMenu}>
          Menu
        </a>
      </nav>
    </header>
  );
}

Header.propTypes = {
  isAlt: PropTypes.bool,
  isAuto: PropTypes.bool,
  onToggleMenu: PropTypes.func,
};

Header.defaultProps = {
  isAlt: false,
  isAuto: true,
  onToggleMenu: [],
};

export default Header;
