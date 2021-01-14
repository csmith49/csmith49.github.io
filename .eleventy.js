const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
    // enable yaml files in _data
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    // make sure images and css get to pass through
    eleventyConfig.addPassthroughCopy("files/images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("files/pdfs");
};
