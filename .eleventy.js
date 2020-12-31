const yaml = require("js-yaml");
// const embedEverything = require("eleventy-plugin-embed-everything");
// const sass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
    // enable yaml files in _data
    eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

    // enable easy embedding of external links
    // eleventyConfig.addPlugin(embedEverything);

    // automatic sass file compilation
    // eleventyConfig.addPlugin(sass, {});

    // make sure images and css get to pass through
    eleventyConfig.addPassthroughCopy("files/images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("files/pdfs");
};