//  UPDATE AUTHORS
//
//  Meant initially as a one-off script to take care of
//  adding the author property to each plugin
//  (because fuck doing that myself)


(function(){

  var fs        = require("fs"),
      authorsMD = fs.readFileSync("docs/authors.md", "utf8"),
      plugins   = require("../plugins.json"),
      start     = authorsMD.indexOf("<!-- START -->"),
      end       = authorsMD.indexOf("<!-- END -->"),
      authors   = [],
      isAuthInList = function( name ){
        if( authors.length > 0 ){
          //  make a quick list of just authors names
          var authNames = authors.map(function(auth){
            return auth.name;
          });
          return authNames.indexOf( name ) > -1 ? true : false;
        }else{
          return false;
        }
      },
      //  accepts the author and the first plugin we find that they made
      addNewAuthToList = function( auth, plugin ){
        authors.push({
          name: auth,
          plugins: [ plugin ],
          authorOf: function(){
            return this.plugins.length;
          }
        });
      },
      addNewPlugToAuth = function( auth, plugin ) {
        authors.forEach( function( author ){
          if( author.name === auth )
            author.plugins.push(plugin);
        });
      },
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
        return authTable;
      };

      //  move this to elsewhere?
      plugins.forEach( function( plug ){
        if( isAuthInList( plug.author ) ){
          addNewPlugToAuth( plug.author, plug );
        }else{
          addNewAuthToList( plug.author, plug );
        }
      });



//  CLEANUP PLUGINS:
      var newPlugins = plugins.map(function(plug){
        var withAuth = plug;
            withAuth.author = plug.url.split("/")[3];
        //  the third element is going to be the user
        return withAuth;
      });

      //  write the plugins.json
      fs.writeFile( "plugins.json", JSON.stringify( newPlugins, null, 2 ), function(err){
        if(err) throw err;
        console.log("Plugins list has sucessfully been updated!");
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
