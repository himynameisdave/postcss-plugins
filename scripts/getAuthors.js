

  //  exports

var GetAuthors = function(){

  var fs        = require("fs"),
      plugins   = require("../plugins.json"),
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
      //  will be passed to the Array.sort method
      sortAuthors = function( a, b ){
        if( a.authorOf() < b.authorOf() ){
          return 1;
        }
        if( a.authorOf() > b.authorOf() ){
          return -1;
        }
        return 0;
      };

      plugins.forEach( function( plug ){
        if( isAuthInList( plug.author ) ){
          addNewPlugToAuth( plug.author, plug );
        }else{
          addNewAuthToList( plug.author, plug );
        }
      });

  return authors.sort( sortAuthors );

};

module.exports = GetAuthors;
