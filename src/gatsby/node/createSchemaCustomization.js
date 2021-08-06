/*
  1. Used for fixing the hero image resolve problem.
     Enable GraphQL searches
       query () {
         mdx {
           frontmatter {
             ...
             heroImage
           }
         }
       }
*/

module.exports = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }
    type MdxFrontmatter {
      heroImage: File @fileByRelativePath
      heroImageOnline: String
    }
  `);
};
