# Gatsby-Theme Forty (Plus)

Gatsby.js theme based on the Forty site template, designed by HTML5 UP.

## Preview

Unavailable now.

<!--- https://gatsby-theme-forty.netlify.com -->

## Installation

Install this theme (assuming Gatsby is installed) by running from your CLI:

```shell
gatsby new gatsby-theme-forty-plus https://github.com/cainmagi/gatsby-theme-forty
cd gatsby-theme-forty
gatsby develop
```

## Updates

Compared to the original work,

* The Gatsby used by this package has been bumped from 2 to 3.
* The sass version has been bumped to sass 2.
* Drop some deprecated sass usages.
* Drop `javascript:;` deprecated by `React`.

Additional features:

### `2.0.0` features

* Add automatic category, and tags resolution.
* Support pagination for each category.
* Support hero image frontmatter for each `mdx` file.
* Support timestamp-based `date` / `lastmod` keywords for each `mdx` file.
* Support `semantic-ui`-based tag styles and colors.
* Support external css / javascript files for each `mdx` file.
* Adjust the hero image style.
* Refactor the header of each `mdx` file.
* Replace the [font-awesome 4](https://fontawesome.com/v4.7/) fonts with [Iconify](https://iconify.design/), and support more icons.
* Add a [`gatsby-plugin-smoothscroll`](https://www.gatsbyjs.com/plugins/gatsby-plugin-smoothscroll/) for supporting better smooth components.
* Add `label` and `scrollbar` styles from [`semantic-ui`](https://semantic-ui.com/).
* Refactor the blog pages by [`gatsby-plugin-mdx`](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx).
* Refactor the code highlight by [`gatsby-remark-prismjs`](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs).
* Refactor the image by [`gatsby-plugin-image`](https://www.gatsbyjs.com/plugins/gatsby-plugin-image), [`gatsby-remark-images`](https://www.gatsbyjs.com/plugins/gatsby-remark-images), and [`gatsby-remark-images-medium-zoom`](https://www.gatsbyjs.com/plugins/gatsby-remark-images-medium-zoom).
* Refactor the navigation bar, and add scrolling events for it.
* Add the [`gatsby-remark-smartypants`](https://www.gatsbyjs.com/plugins/gatsby-remark-smartypants) plugin.
* Move the implementation of `gatsby-node.js` to `src/gatsby/node`.
* Adjust the styles of the banner, header and tag pages.
* Prettify all codes.

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```jsx
<div className="grid-wrapper">
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
</div>
```
