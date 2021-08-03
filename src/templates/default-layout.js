import React from 'react';
import Helmet from 'react-helmet';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

function DefaultLayout(props) {
  const frontmatter = props.data.frontmatter;
  const description =
    frontmatter.description !== null ? frontmatter.description : '';

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{frontmatter.title}</h1>
            </header>
            {props.image !== null && (
              <span className="image main">{props.image}</span>
            )}
            <MDXRenderer>{props.data.body}</MDXRenderer>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default DefaultLayout;
