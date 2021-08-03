import * as React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

import BannerCategory from '../../components/BannerCategory';
import Layout from '../../components/layout';

import pic08 from '../../assets/images/pic08.jpg';

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          heroImage {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        id
        slug
      }
    }
  }
`;

function PageList(props) {
  return (
    <Layout isAlt={true}>
      <Helmet>
        <title>Aliquam - Forty by HTML5 UP</title>
        <meta name="description" content="Aliquam Page" />
      </Helmet>

      <BannerCategory title="Aliquam">
        <p>
          Lorem ipsum dolor sit amet nullam consequat sed veroeros. tempus
          adipiscing nulla.
        </p>
      </BannerCategory>

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Sed amet aliquam</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
              urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Nullam et orci eu lorem consequat tincidunt vivamus et
              sagittis magna sed nunc rhoncus condimentum sem. In efficitur
              ligula tate urna.
            </p>
          </div>
        </section>
        <section id="two" className="spotlights">
          {props.data.allMdx.nodes.map((node) => {
            const description =
              node.frontmatter.description !== undefined
                ? node.frontmatter.description
                : '';
            const image_src =
              node.frontmatter.heroImage.childImageSharp.fluid.src;
            return (
              <section key={node.id}>
                <Link to={`/${node.slug}`} className="image">
                  <img src={image_src} className="cropped" alt="" />
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>{node.frontmatter.title}</h3>
                    </header>
                    <p>{description}</p>
                    <ul className="actions">
                      <li>
                        <Link to={`/${node.slug}`} className="button">
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </div>
    </Layout>
  );
}

export default PageList;
