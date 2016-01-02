/**
 *    Responsible for genrerating the authors table
 */
"use strict";

module.exports = ( authList ) => {
  let authTable = "<!-- START -->\n**Author**  |   **Plugin(s)**\n---|---\n";

  authList.forEach( ( auth ) => {
    authTable += "["+auth.name+"](https://github.com/"+auth.name+")";
    if( auth.plugins.length === 1 ){
      authTable += "  |  [`"+auth.plugins[0].name+"`]("+auth.plugins[0].url+")\n"
    }else{
      auth.plugins.forEach((plug) => {
        authTable += "   |   [`"+plug.name+"`]("+plug.url+")\n";
      });
    }
  });
  authTable += "<!-- END -->";
  return authTable;
};
