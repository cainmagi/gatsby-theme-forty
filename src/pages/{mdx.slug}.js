import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import DefaultLayout from '../templates/default-layout'

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date(formatString: "MMMM D, YYYY")
        heroImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      body
    }
  }
`

function PostImage(props) {
  const image_src = props.childImageSharp.fluid.src
  if (!image_src) {
    return null
  }
  return <img src={image_src} alt="" />
}

function PostLayout(props) {
  const mdxData = props.data.mdx
  const heroImageData = mdxData.frontmatter.heroImage.childImageSharp
  return (
    <DefaultLayout
      data={props.data.mdx}
      image={<PostImage childImageSharp={heroImageData} />}
    />
  )
}

export default PostLayout
