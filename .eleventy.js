const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addPlugin(eleventySass);

    return{
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    }; 
};