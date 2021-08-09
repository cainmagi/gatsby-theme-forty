import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Icon, InlineIcon } from '@iconify/react';
import farFilePdf from '@iconify-icons/fa-regular/file-pdf';

import * as styles from './IFrames.module.scss';

function FrameYouTube(props) {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.video}
        type="text/html"
        src={`https://www.youtube.com/embed/${props.href}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function FrameBilibili(props) {
  const href = props.href;
  const get_id = href.startsWith('av')
    ? `aid=${href.substring(2)}`
    : `bvid=${href}`;
  const get_page = props.page ? `&page=${props.page}` : '';
  return (
    <div className={styles.container}>
      <iframe
        className={styles.video}
        type="text/html"
        src={`https://player.bilibili.com/player.html?${get_id}${get_page}&as_wide=1&high_quality=1&danmaku=1`}
        title="Bilibili video player"
        scrolling="no"
        border="0"
        frameBorder="no"
        framespacing="0"
        allowFullScreen
      />
    </div>
  );
}

function FramePDF(props) {
  const href = props.href;
  return (
    <div className={styles.container}>
      <object className={styles.docs} data={href} type="application/pdf">
        <div
          className={clsx([
            'admonition',
            'admonition-note',
            'alert',
            'alert--secondary',
            styles.h100,
          ])}
        >
          <div className="admonition-heading">
            <h5>
              <span className="admonition-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                  ></path>
                </svg>
              </span>
              Compatibility
            </h5>
          </div>
          <div className="admonition-content">
            <div className={styles.center}>
              <p>Ooops! Your browser does not support viewing pdfs.</p>
              <p>
                <a href={href} className="button" download target="_blank">
                  <InlineIcon icon={farFilePdf} /> Download PDF
                </a>
              </p>
            </div>
          </div>
        </div>
      </object>
    </div>
  );
}

function FramePage(props) {
  const href = props.href;
  return (
    <div className={styles.container}>
      <iframe className={styles.page} src={href} />
    </div>
  );
}

FrameYouTube.propTypes = {
  href: PropTypes.string.isRequired,
};

FrameYouTube.defaultProps = {
  href: undefined,
};

FrameBilibili.propTypes = {
  href: PropTypes.string.isRequired,
  page: PropTypes.string,
};

FrameBilibili.defaultProps = {
  href: undefined,
  page: undefined,
};

FramePDF.propTypes = {
  href: PropTypes.string.isRequired,
};

FramePDF.defaultProps = {
  href: undefined,
};

FramePage.propTypes = {
  href: PropTypes.string.isRequired,
};

FramePage.defaultProps = {
  href: undefined,
};

export { FrameYouTube, FrameBilibili, FramePDF, FramePage };
