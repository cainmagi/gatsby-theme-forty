import React from 'react';
import clsx from 'clsx';
import Helmet from 'react-helmet';

import Moment from 'react-moment';
import 'moment-timezone';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

Moment.globalLocale = 'en';
Moment.globalFormat = 'MMM DD, YYYY';
Moment.globalTimezone = 'America/Los_Angeles';
Moment.globalLocal = true;
Moment.globalElement = 'span';

function TableMetaData(props) {
  function hashStringToTagCode(string) {
    var hash = 0,
      i,
      chr;
    if (string.length === 0) return hash;
    for (i = 0; i < string.length; i++) {
      chr = string.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  }

  const tagStyles = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
  ];

  return (
    <table className="sub-title">
      <tbody>
        <tr>
          <th>Date:</th>
          <td>{props.date && <Moment>{props.date}</Moment>}</td>
        </tr>
        {props.lastmod && (
          <tr>
            <th>Last updated:</th>
            <td>
              <Moment>{props.lastmod}</Moment>
            </td>
          </tr>
        )}
        <tr>
          <th>Tags:</th>
          <td>
            {props.tags && (
              <section className="dream-tags">
                {props.tags.map((tag, ind) => {
                  return (
                    <Link
                      key={ind}
                      className={clsx([
                        'ui',
                        'label',
                        tagStyles[((hashStringToTagCode(tag) % 13) + 13) % 13],
                      ])}
                      to={`/tags/${tag}`}
                      title={tag}
                    >
                      {tag}
                    </Link>
                  );
                })}
              </section>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function DefaultLayout(props) {
  const frontmatter = props.data.frontmatter;
  const description =
    frontmatter.description !== null ? frontmatter.description : '';

  const extraScripts = frontmatter.custom_js ? (
    <>
      {frontmatter.custom_js.map((jsItem, ind) => {
        return <script key={ind} type="text/javascript" src={jsItem} />;
      })}
    </>
  ) : undefined;

  return (
    <Layout extra={extraScripts}>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={description} />
        {frontmatter.custom_css &&
          frontmatter.custom_css.map((cssItem, ind) => {
            return (
              <link key={ind} rel="stylesheet" type="text/css" href={cssItem} />
            );
          })}
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{frontmatter.title}</h1>
            </header>
            <TableMetaData
              date={frontmatter.date}
              lastmod={frontmatter.lastmod}
              tags={frontmatter.tags}
            />
            {props.image !== null && (
              <span className="image main">{props.image}</span>
            )}
            <hr />
            <MDXRenderer>{props.data.body}</MDXRenderer>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default DefaultLayout;
