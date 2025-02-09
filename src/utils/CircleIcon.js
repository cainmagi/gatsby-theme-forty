import React from 'react';
import PropTypes from 'prop-types';
import { Icon, InlineIcon } from '@iconify/react';

import * as styles from './CircleIcon.module.scss';

function CircleIcon(props) {
  let href;
  let is_link;
  if (props.href !== undefined) {
    is_link = true;
    href = props.href;
  } else {
    is_link = false;
    href = '#';
  }
  const ariaLabel = props.ariaLabel !== undefined ? props.ariaLabel : '#';

  if (is_link) {
    return (
      <a href={href} aria-label={ariaLabel} className={styles.icon}>
        <Icon icon={props.icon} />
      </a>
    );
  } else {
    return (
      <span className={styles.icon}>
        <Icon icon={props.icon} />
      </span>
    );
  }
}

CircleIcon.propTypes = {
  ariaLabel: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.any.isRequired,
};

CircleIcon.defaultProps = {
  ariaLabel: undefined,
  href: undefined,
};

export default CircleIcon;
