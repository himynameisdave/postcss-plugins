/**
 *  Holds/exports the list of tags
 */
module.exports = {
  rawList: [
    {
      tag:         "analysis",
      description: "does something to analyze your code"
    },{
      tag:         "color",
      description: "does something with colors"
    },{
      tag:         "debug",
      description: "does something like linting/validating/debugging"
    },{
      tag:         "extensions",
      description: "does something that extends the language"
    },{
      tag:         "fallbacks",
      description: "does something about adding fallbacks for older browsers"
    },{
      tag:         "fonts",
      description: "does something involving fonts"
    },{
      tag:         "future",
      description: "does something to make CSS more future-ready"
    },{
      tag:         "fun",
      description: "does something fun"
    },{
      tag:         "grids",
      description: "does something involving grids"
    },{
      tag:         "images",
      description: "does something involving images"
    },{
      tag:         "media-queries",
      description: "does something with media queries"
    },{
      tag:         "optimizations",
      description: "does something to optimize your CSS code"
    },{
      tag:         "other",
      description: "does some other thing"
    },{
      tag:         "pack",
      description: "does a series of somethings, like rucksack"
    },{
      tag:         "sass",
      description: "does something sassy"
    },{
      tag:         "shortcuts",
      description: "does something to make life easier"
    },{
      tag:         "svg",
      description: "does something involving SVG"
    }
  ],
  getTags: function() {
    return this.rawList.map( (tag) => {
      return tag.tag;
    });
  },
  getDescriptions: function() {
    return this.rawList.map( (tag) => {
      return tag.description;
    });
  }
};
