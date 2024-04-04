const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
    // enable yaml files in _data
    eleventyConfig.addDataExtension(
        "yaml", contents => yaml.load(contents)
    );

    // make sure images and css get to pass through
    eleventyConfig.addPassthroughCopy("files/images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("files/pdfs");

    eleventyConfig.addFilter("abbreviateName", function (name) {
        var splits = name.trim().split(" ");
        result = "";
        for (i = 0; i < splits.length; i++) {
            if (i != splits.length - 1) {
                result += splits[i].charAt(0) + ". ";
            }
            else {
                result += splits[i];
            }
        }
        return result;
    });

    return {
        dir: {
            // This website is currently being served by Github Pages, which uses the `docs` folder by default.
            output: "docs"
        },
        markdownTemplateEngine: "njk"
    }
};
