//  UPDATE AUTHORS
//
//  Meant initially as a one-off script to take care of
//  adding the author property to each plugin
//  (because fuck doing that myself)


(function(){

  var fs      = require("fs"),
      plugins = require("../plugins.json");


  var newPlugins = plugins.map(function(plug){
    var withAuth = plug;
        withAuth.author = plug.url.split("/")[3];
    //  the third element is going to be the user
    return withAuth;
  });

  fs.writeFile( "plugins.json", JSON.stringify( newPlugins, null, 2 ), function(err){
    if(err) throw err;
    console.log("Plugins list has sucessfully been updated!");
  });

})();
