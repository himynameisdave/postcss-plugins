/**
 *    Bumps the version
 */
(function(){

    var fs         = require("fs"),
        pkg        = require("../package.json"),
        plugins    = require("../plugins.json"),
        newPlugin  = plugins[plugins.length-1];
        changelog  = fs.readFileSync("../CHANGELOG.md", "utf8"),
        now        = require("moment")().format("MMM Do/YYYY"),
        versions   = pkg.version.split("."),
        patch      = parseInt(versions[2])+1;

  //  write package.json
    var newVersion = versions[0]+"."+versions[1]+"."+patch;
    pkg.version = newVersion;

    //  write the plugins.json
    fs.writeFile( "../package.json", JSON.stringify( pkg, null, 2 ), function(err){
      if(err) throw err;
      console.log("package.json has been version bumped!");
    });

  //  write changelog
    var newChangelogInput = "### v"+newVersion+"\n";
        newChangelogInput += "> *("+now+")*\n"
        newChangelogInput += "- Adds [`"+newPlugin.name+"`]("+newPlugin.url+")\n\n";

    fs.writeFile( "../CHANGELOG.md", newChangelogInput+changelog, function(err){
      if(err) throw err;
      console.log("CHANGELOG.md has been updated with the new version info!");
    });

})();
