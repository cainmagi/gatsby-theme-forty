import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import * as styles from './Masonry.module.scss';

function MasonryGrid(props) {
  return (
    <>
      {props.title && (
        <section className={styles.title}>
          <header className="major">
            <h2>{props.title}</h2>
          </header>
        </section>
      )}
      <section>
        <div className={styles.grid}>
          <div className="row">{props.children}</div>
        </div>
      </section>
    </>
  );
}

function LinkPlacholder(props) {
  return <a href={props.to}>{props.children}</a>;
}

function MasonryBox(props) {
  const is_image = props.imgurl !== null && props.imgurl !== undefined;
  const href = props.isBack ? '..' : props.href;
  const LAuto = href ? Link : LinkPlacholder;
  return (
    <div className={styles.limitation}>
      <div
        className={clsx([styles.masonry, props.isBack ? styles.back : null])}
      >
        {is_image && (
          <div
            className={styles.heroim}
            style={{ backgroundImage: `url("${props.imgurl}")` }}
          />
        )}
        <div className={styles.text}>
          <h4>
            <LAuto to={href}>{props.title}</LAuto>
          </h4>
          <div>{props.children}</div>
        </div>
        <LAuto to={href}>
          <div className={styles.link}>
            {props.isBack ? 'Get back' : 'Learn more'}
          </div>
        </LAuto>
      </div>
    </div>
  );
}

MasonryGrid.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

MasonryGrid.defaultProps = {
  title: undefined,
  children: [],
};

MasonryBox.propTypes = {
  isBack: PropTypes.bool,
  title: PropTypes.string,
  href: PropTypes.string,
  imgurl: PropTypes.string,
  children: PropTypes.any,
};

MasonryBox.defaultProps = {
  title: 'Title',
  isBack: false,
  href: undefined,
  imgurl: undefined,
  children: <p>placeholder for descrptions.</p>,
};

export { MasonryGrid, MasonryBox };
