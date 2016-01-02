/**
 *    Updates the authors list
 */
'use strict';

module.exports = (updatedPlugins, cb) => {
  const fs = require("fs"),
        authorsPath    = "docs/authors.md",
        authorsMD      = fs.readFileSync(authorsPath, "utf8"),
        authorsList    = require("./utils/fetch-authors")(updatedPlugins),
        writeAuthors   = require("./utils/write-authors"),
        generateAuthorsTable = require("./utils/generate-authors-table"),
        start          = authorsMD.indexOf("<!-- START -->"),
        end            = authorsMD.indexOf("<!-- END -->");

    //    1. replace the old..
    let newAuthorsMD = authorsMD.replace(authorsMD.substr( start, end ), "");
    //    2. add the new
    newAuthorsMD += generateAuthorsTable(authorsList);

    //  write the new authors.md file
    writeAuthors(authorsPath, newAuthorsMD)
      .then(cb)
      .catch((e)=>{
        console.log("Error updating authors.md!",e);
        cb(e)
      });

};
