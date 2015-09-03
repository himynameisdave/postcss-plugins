//  UPDATE AUTHORS
//
//  Meant initially as a one-off script to take care of
//  adding the author property to each plugin
//  (because fuck doing that myself)


(function(){

  var fs      = require("fs"),
      authors = fs.readFileSync("docs/authors.md", "utf8"),
      plugins = require("../plugins.json"),
      start   = authors.indexOf("<!-- START -->"),
      end     = authors.indexOf("<!-- END -->");

  //  fn to generate a MD list of authors
  var generateAuthorsTable = function( plugs ){
    var authTable = "<!-- START -->\n**Plugin**  |   **Author**\n---|---\n";
    plugs.forEach(function(plug){
      authTable += "[`"+plug.name+"`]("+plug.url+")  |  ["+plug.author+"](https://github.com/"+plug.author+")\n";
    });
    authTable += "<!-- END -->\n";
    return authTable;
  };


  var newPlugins = plugins.map(function(plug){
    var withAuth = plug;
        withAuth.author = plug.url.split("/")[3];
    //  the third element is going to be the user
    return withAuth;
  });

  //  write the plugins .json
  fs.writeFile( "plugins.json", JSON.stringify( newPlugins, null, 2 ), function(err){
    if(err) throw err;
    console.log("Plugins list has sucessfully been updated!");
  });

  //  create the new markdown file
  //    1. clear the old
  authors = authors.replace(authors.substr( start, end ), "");
  //    2. add the new
  authors += generateAuthorsTable(newPlugins);

  //  write the new markdown file
  fs.writeFile( "docs/authors.md", authors, function(err){
    if(err) throw err;
    console.log("Authors list has sucessfully been updated!");
  });


})();
