import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../templates/default-layout';

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date
        lastmod
        tags
        heroImage {
          childImageSharp {
            fluid(maxWidth: 1280) {
              src
            }
          }
        }
        heroImageOnline
        custom_css
        custom_js
      }
      body
    }
  }
`;

function PostImage(props) {
  const imageSrc = props.imageSrc;
  if (!imageSrc) {
    return null;
  }
  return <img src={imageSrc} alt="" />;
}

function PostLayout(props) {
  const mdxData = props.data.mdx;
  const frontmatter = mdxData.frontmatter;
  const heroImageSrc = frontmatter.heroImage
    ? frontmatter.heroImage.childImageSharp.fluid.src
    : frontmatter.heroImageOnline
    ? frontmatter.heroImageOnline
    : undefined;
  return (
    <DefaultLayout
      data={mdxData}
      image={<PostImage imageSrc={heroImageSrc} />}
    />
  );
}

export default PostLayout;
