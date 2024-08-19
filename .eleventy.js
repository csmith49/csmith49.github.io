const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
    // enable yaml files in _data
    eleventyConfig.addDataExtension(
        "yaml", contents => yaml.load(contents)
    );

    // make sure images and css get to pass through
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("files/images");
    eleventyConfig.addPassthroughCopy("files/pdfs");

    eleventyConfig.addPassthroughCopy("projects/**/*.png");
    eleventyConfig.addPassthroughCopy("projects/**/*.jpg");
    eleventyConfig.addPassthroughCopy("projects/**/*.json");

    eleventyConfig.addShortcode("vega", function(path, id) {
        return `<div class="vega-lite"><div id="${id}"></div></div><script>var src = fetch("${path}").then(response => response.json()).then(json => vegaEmbed("#${id}", json));</script>`
    });

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
