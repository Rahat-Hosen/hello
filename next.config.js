const theme = require("shiki/themes/dark-plus.json");
const { remarkCodeHike } = require("@code-hike/mdx");

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme, showCopyButton: true }]],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "tsx", "ts", "md", "mdx"],
  images: {
    domains: ["s3.us-west-2.amazonaws.com", "raw.githubusercontent.com"],
  },
});
