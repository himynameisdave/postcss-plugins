/**
 *    Updates the authors list
 */
'use strict';
const fs = require("fs"),
      authorsPath    = "docs/authors.md",
      authorsMD      = fs.readFileSync(authorsPath, "utf8"),
      authorsList    = require("./utils/fetch-authors")(require("../plugins.json")),
      writeAuthors   = require("./utils/write-authors"),
      generateAuthorsTable = require("./utils/generate-authors-table"),
      start          = authorsMD.indexOf("<!-- START -->"),
      end            = authorsMD.indexOf("<!-- END -->");

(() => {

    //    1. replace the old..
    let newAuthorsMD = authorsMD.replace(authorsMD.substr( start, end ), "");
    //    2. add the new
    newAuthorsMD += generateAuthorsTable(authorsList);

    //  write the new authors.md file
    writeAuthors(authorsPath, newAuthorsMD)
      .then(console.log)
      .catch((e)=>{
        console.log("Error updating authors.md!",e);
      });

})();
