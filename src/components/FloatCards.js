import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './FloatCards.module.scss';

import { ReactComponent as IconWikipedia } from '../assets/images/icon-wikipedia.svg';
import { ReactComponent as IconEMS } from '../assets/images/icon-ems.svg';
import { ReactComponent as IconBritannica } from '../assets/images/icon-britannica.svg';

function FloatCard(props) {
  const link_to = props.href;

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <a href={link_to} className={styles.image} target="_blank">
          {props.image}
        </a>
      </div>
      <div className={styles.text}>
        <p>
          Check here to see{' '}
          <a href={link_to} target="_blank">
            <b>{props.name}</b>
          </a>{' '}
          in {props.typeName}.
        </p>
      </div>
    </div>
  );
}

function CardWikipedia(props) {
  const href = props.href ? props.href : props.name.replaceAll(' ', '_');
  const link_to = `https://en.wikipedia.org/wiki/${href}`;
  return (
    <FloatCard
      href={link_to}
      name={props.name}
      image={<IconWikipedia />}
      typeName="Wikipedia"
    />
  );
}

function CardEMSMath(props) {
  const href = props.href ? props.href : props.name.replaceAll(' ', '_');
  const link_to = `https://encyclopediaofmath.org/wiki/${href}`;
  return (
    <FloatCard
      href={link_to}
      name={props.name}
      image={<IconEMS />}
      typeName="Encyclopedia of Mathematics"
    />
  );
}

function CardBritannica(props) {
  const href = props.href
    ? props.href
    : props.name.toLowerCase().replaceAll(' ', '-');
  const link_to = `https://www.britannica.com/${href}`;
  return (
    <FloatCard
      href={link_to}
      name={props.name}
      image={<IconBritannica />}
      typeName="Encyclopædia Britannica"
    />
  );
}

FloatCard.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  typeName: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
};

FloatCard.defaultProps = {
  href: undefined,
  name: undefined,
  typeName: undefined,
  image: <div />,
};

CardWikipedia.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string.isRequired,
};

CardWikipedia.defaultProps = {
  href: undefined,
  name: undefined,
};

CardEMSMath.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string.isRequired,
};

CardEMSMath.defaultProps = {
  href: undefined,
  name: undefined,
};

CardBritannica.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string.isRequired,
};

CardBritannica.defaultProps = {
  href: undefined,
  name: undefined,
};

export { FloatCard, CardWikipedia, CardEMSMath, CardBritannica };
