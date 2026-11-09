/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Pocket Creatives`,
    siteUrl: `https://neal-pablo.netlify.app`,
    wordpressUrl: `https://dev-pocket-creatives-cms.pantheonsite.io`,
    graphqlEndpoint: `https://dev-pocket-creatives-cms.pantheonsite.io/graphql`,
  },
  plugins: [`gatsby-plugin-postcss`],
}
