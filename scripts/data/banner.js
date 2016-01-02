/**
 *     SEXY BANNERS BE SEXY
 */
"use strict";

let chalk  = require("chalk"),
    banner = chalk.red("    _____________    \n"+
           "   /     / \\     \\   \n"+
           "  /     /   \\     \\  \n"+
           " /     / ___ \\     \\ \n"+
           " |    /|/   \\|\\    | \n"+
           " \\   / |     | \\   / \n"+
           "  \\ /__|\\___/|__\\ /  \n"+
           "   \\_____________/   \n"+
           "    P O S T C S S     \n"+
           "    P L U G I N S     \n\n");
    banner += chalk.blue("Answer a few quick questions about your plugin(s) to add it to the list:")

module.exports = banner;
