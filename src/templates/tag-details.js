import * as React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

// Components
import { MasonryGrid, MasonryBox } from '../utils/Masonry';

import BannerCategory from '../components/BannerCategory';
import Layout from '../components/layout';

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            heroImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  src
                }
              }
            }
            heroImageOnline
          }
          slug
        }
      }
    }
  }
`;

function PageTag(props) {
  const pageContext = props.pageContext;
  const nodeGroup = props.data.allMdx.edges;
  const totalCount = props.data.allMdx.totalCount;
  const tag = pageContext.tag;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout isAlt={true}>
      <Helmet>
        <title>{`${tag}`} - Forty by HTML5 UP</title>
        <meta name="description" content={`Tag Page: ${tag}`} />
      </Helmet>

      <BannerCategory title="Tags">
        <p>All tags listed as below.</p>
      </BannerCategory>

      <div id="main">
        <section id="one">
          <MasonryGrid title={tagHeader}>
            {nodeGroup.map((post) => {
              const frontmatter = post.node.frontmatter;
              const slug = post.node.slug;
              const image_src = frontmatter.heroImage
                ? frontmatter.heroImage.childImageSharp.fluid.src
                : frontmatter.heroImageOnline
                ? frontmatter.heroImageOnline
                : undefined;
              return (
                <MasonryBox
                  key={slug}
                  title={frontmatter.title}
                  href={`/${slug}`}
                  imgurl={image_src}
                >
                  <p>{frontmatter.description}</p>
                </MasonryBox>
              );
            })}
            <MasonryBox title={'Get back'} isBack={true}>
              <p>Get back to the higher stage contents.</p>
            </MasonryBox>
          </MasonryGrid>
        </section>
      </div>
    </Layout>
  );
}

export default PageTag;
