import * as React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

// Utilities
import kebabCase from 'lodash/kebabCase';

// Components
import { MasonryGrid, MasonryBox } from '../utils/Masonry';

import BannerCategory from '../components/BannerCategory';
import Layout from '../components/layout';

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;

function PageTags(props) {
  const tagGroup = props.data.allMdx.group;
  return (
    <Layout isAlt={true}>
      <Helmet>
        <title>Tags - Forty by HTML5 UP</title>
        <meta name="description" content="Tags Page" />
      </Helmet>

      <BannerCategory title="Tags">
        <p>All tags listed as below.</p>
      </BannerCategory>

      <div id="main">
        <section id="one">
          <MasonryGrid>
            {tagGroup.map((tagItem) => (
              <MasonryBox
                title={tagItem.tag}
                href={`/tags/${kebabCase(tagItem.tag)}`}
              >
                <p>Number: {`${tagItem.totalCount}`}</p>
              </MasonryBox>
            ))}
            <MasonryBox title={'Get back'} isBack={true}>
              <p>Get back to the higher stage contents.</p>
            </MasonryBox>
          </MasonryGrid>
        </section>
      </div>
    </Layout>
  );
}

export default PageTags;
