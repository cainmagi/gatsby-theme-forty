import React from 'react';
import clsx from 'clsx';
import { graphql } from 'gatsby';

import { Link } from 'gatsby';

import { MDXProvider } from '@mdx-js/react';

import RefinedLink from '../components/RefinedLink';
import Box from '../components/Box';
import { Tabs, TabItem } from '../components/Tabs';
import {
  FloatCard,
  CardWikipedia,
  CardEMSMath,
  CardBritannica,
} from '../components/FloatCards';
import {
  FrameYouTube,
  FrameBilibili,
  FramePDF,
  FramePage,
} from '../components/IFrames';
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
      rawBody
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

const shortcodes = {
  Link: Link,
  a: RefinedLink,
  Tabs: Tabs,
  TabItem: TabItem,
  box: Box,
  FloatCard: FloatCard,
  CardWikipedia: CardWikipedia,
  CardEMSMath: CardEMSMath,
  CardBritannica: CardBritannica,
  FrameYouTube: FrameYouTube,
  FrameBilibili: FrameBilibili,
  FramePDF: FramePDF,
  FramePage: FramePage,
};

function PostLayout(props) {
  const mdxData = props.data.mdx;
  const frontmatter = mdxData.frontmatter;
  const heroImageSrc = frontmatter.heroImage
    ? frontmatter.heroImage.childImageSharp.fluid.src
    : frontmatter.heroImageOnline
    ? frontmatter.heroImageOnline
    : undefined;
  return (
    <MDXProvider components={shortcodes}>
      <DefaultLayout
        data={mdxData}
        image={<PostImage imageSrc={heroImageSrc} />}
      />
    </MDXProvider>
  );
}

export default PostLayout;
