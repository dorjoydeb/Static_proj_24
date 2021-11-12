const pluginTOC = require("eleventy-plugin-nesting-toc");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {

  /**
   * ------------------------------------------------------------------------
   * Template formats
   * ------------------------------------------------------------------------
   */

  eleventyConfig.setTemplateFormats("html,njk,md,sass,scss");

  /**
   * ------------------------------------------------------------------------
   * Filters
   * ------------------------------------------------------------------------
   */

  eleventyConfig.addFilter("split", function(string, separator) {
    return string.split(separator);
  });

  /**
   * ------------------------------------------------------------------------
   * Browser sync
   * ------------------------------------------------------------------------
   */

  eleventyConfig.setBrowserSyncConfig({
    snippetOptions: {
      rule: {
        match: /qqqqqqqqq/,
      }
    },
    watch: false,
    reloadDelay: 2000,
  });


  /**
   * ------------------------------------------------------------------------
   * Plugins
   * ------------------------------------------------------------------------
   */

  eleventyConfig.addPlugin(pluginTOC);

  eleventyConfig.setLibrary("md",
    markdownIt({
      html: true,
      linkify: true,
      typographer: true,
    }).use(markdownItAnchor, {})
  );

  /**
   * ------------------------------------------------------------------------
   * Return
   * ------------------------------------------------------------------------
   */

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "./11ty/",
      output: "../site/",
      layouts: "./_layouts/",
    },
  };
};
