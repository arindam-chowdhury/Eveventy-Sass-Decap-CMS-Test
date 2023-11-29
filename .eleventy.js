const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPassthroughCopy("./src/assets");

    eleventyConfig.addPlugin(eleventySass);

    return{
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    }; 
};