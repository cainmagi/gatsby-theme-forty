import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';

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

export default ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
);
