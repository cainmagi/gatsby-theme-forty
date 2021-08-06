import * as React from 'react';
import clsx from 'clsx';
import Helmet from 'react-helmet';
import { Link, navigate, graphql } from 'gatsby';

// Utilities
import ReactPaginate from 'react-paginate';

import BannerCategory from '../components/BannerCategory';
import Layout from '../components/layout';

export const query = graphql`
  query ($category: String, $skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        frontmatter {
          title
          description
          heroImage {
            childImageSharp {
              fluid(maxWidth: 540) {
                src
              }
            }
          }
          heroImageOnline
        }
        id
        slug
      }
    }
  }
`;

function PageList(props) {
  const pageContext = props.pageContext;
  const category = pageContext.category;
  const cateSlug = pageContext.cateSlug;
  const nodeGroup = props.data.allMdx.nodes;

  function handlePageClick(data) {
    if (data.selected > 0) {
      navigate(`${cateSlug}/${data.selected + 1}`);
    } else {
      navigate(cateSlug);
    }
  }

  return (
    <Layout isAlt={true}>
      <Helmet>
        <title>{`${category} - Forty by HTML5 UP`}</title>
        <meta name="description" content={`${category} Page`} />
      </Helmet>

      <BannerCategory title={category}>
        <p>
          Lorem ipsum dolor sit amet nullam consequat sed veroeros. tempus
          adipiscing nulla.
        </p>
      </BannerCategory>

      <div id="main">
        <section id="one" className="spotlights">
          {nodeGroup.map((node) => {
            const frontmatter = node.frontmatter;
            const description =
              frontmatter.description !== undefined
                ? node.frontmatter.description
                : '';
            const image_src = frontmatter.heroImage
              ? frontmatter.heroImage.childImageSharp.fluid.src
              : frontmatter.heroImageOnline
              ? frontmatter.heroImageOnline
              : undefined;
            return (
              <section key={node.id}>
                {image_src && (
                  <Link
                    to={`/${node.slug}`}
                    className="image img-data"
                    style={{ backgroundImage: `url(${image_src})` }}
                  />
                )}
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>{frontmatter.title}</h3>
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
        <div className={clsx(['inner', 'paginator-wrapper'])}>
          <ReactPaginate
            forcePage={parseInt(pageContext.pageNumber)}
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageContext.numberOfPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            pageLinkClassName={'page c-pointer'}
            activeLinkClassName={'active'}
            disabledClassName={'disabled'}
            previousLinkClassName={'button small'}
            nextLinkClassName={'button small'}
            breakLinkClassName={'page c-pointer'}
          />
        </div>
      </div>
    </Layout>
  );
}

export default PageList;
