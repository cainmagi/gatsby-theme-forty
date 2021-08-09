import React from 'react';
import PropTypes from 'prop-types';

function Box(props) {
  const { className, children, ...otherProps } = props;
  return (
    <div className={clsx(['box', className])} {...otherProps}>
      {children}
    </div>
  );
}

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Box.defaultProps = {
  children: [],
  className: undefined,
};

export default Box;
