const config = require('../../../gatsby-config');
const path = require('path');
const _ = require('lodash');
const { paginate } = require(`gatsby-awesome-pagination`);

module.exports = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const basePath = config.siteMetadata.basePath || '/';

  const tagsListTemplate = path.resolve('src/templates/tags-list.js');
  const tagTemplate = path.resolve('src/templates/tag-details.js');
  const postListTemplate = path.resolve('src/templates/category-details.js');

  const result = await graphql(`
    {
      postsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___category) {
          category: fieldValue
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  // Make tag index page
  createPage({
    path: `/tags/`,
    component: tagsListTemplate,
  });
  // Create tag detail pages
  tags.forEach((tagItem) => {
    createPage({
      path: `/tags/${_.kebabCase(tagItem.tag)}`,
      component: tagTemplate,
      context: {
        tag: tagItem.tag,
      },
    });
  });

  // Make post index pages
  const categories = result.data.postsGroup.group;
  // Create a page containing all "posts" and paginate.

  categories.forEach((categoryItem) => {
    const cateSlug = `/${_.kebabCase(categoryItem.category)}`;
    return paginate({
      createPage,
      component: postListTemplate,
      items: categoryItem.edges,
      itemsPerPage: config.siteMetadata.postsPerPage || 6,
      pathPrefix: cateSlug,
      context: {
        cateSlug: cateSlug,
        category: categoryItem.category,
      },
    });
  });
};
