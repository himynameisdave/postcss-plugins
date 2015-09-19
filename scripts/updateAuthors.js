/**
 * Updates the authors in plugins.json && docs/authors
 */
(function(){

  var fs        = require("fs"),
      authorsMD = fs.readFileSync("docs/authors.md", "utf8"),
      plugins   = require("../plugins.json"),
      start     = authorsMD.indexOf("<!-- START -->"),
      end       = authorsMD.indexOf("<!-- END -->"),
      authors   = require("./getAuthors")(),

      generateAuthorsTable = function( authList ){
        var authTable = "<!-- START -->\n**Author**  |   **Plugin(s)**\n---|---\n";

        authList.forEach( function( auth ){
          authTable += "["+auth.name+"](https://github.com/"+auth.name+")";
          if( auth.plugins.length === 1 ){
            authTable += "  |  [`"+auth.plugins[0].name+"`]("+auth.plugins[0].url+")\n"
          }else{
            auth.plugins.forEach(function(plug){
              authTable += "   |   [`"+plug.name+"`]("+plug.url+")\n";
            });
          }
        });
        authTable += "<!-- END -->";
        return authTable;
      };

//  CLEANUP PLUGINS:
//  THIS SHOULD BE ITS OWN THING
      var newPlugins = plugins.map(function(plug){
        var withAuth = plug;
            withAuth.author = plug.url.split("/")[3];
        //  the third element is going to be the user
        return withAuth;
      });

      //  write the plugins.json
      fs.writeFile( "plugins.json", JSON.stringify( newPlugins, null, 2 ), function(err){
        if(err) throw err;
        console.log("Authors updated in plugins.json");
      });

//  CLEANUP
      //    1. clear the old
      authorsMD = authorsMD.replace(authorsMD.substr( start, end ), "");
      //    2. add the new
      authorsMD += generateAuthorsTable(authors);

      //  write the new markdown file
      fs.writeFile( "docs/authors.md", authorsMD, function(err){
        if(err) throw err;
        console.log("Authors list has sucessfully been updated!");
      });

})();
