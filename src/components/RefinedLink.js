import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

function RefinedLink(props) {
  const { to, href, children, ...otherProps } = props;
  const get_link = to ? to : href;
  if (get_link.startsWith('/') || get_link.startsWith('.')) {
    return (
      <Link to={get_link} {...otherProps}>
        {children}
      </Link>
    );
  } else {
    return (
      <a href={get_link} {...otherProps} target="_blank">
        {children}
      </a>
    );
  }
}

RefinedLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

RefinedLink.defaultProps = {
  children: [],
  to: undefined,
  href: undefined,
};

export default RefinedLink;
