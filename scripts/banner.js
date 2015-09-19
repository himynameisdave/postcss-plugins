/**
 *    TO BE USED AS A BANNER WHEN ADDING A NEW PLUGIN
 */

var chalk  = require("chalk");
var banner = chalk.red("    _____________    \n"+
             "   /     / \\     \\   \n"+
             "  /     /   \\     \\  \n"+
             " /     / ___ \\     \\ \n"+
             " |    /|/   \\|\\    | \n"+
             " \\   / |     | \\   / \n"+
             "  \\ /__|\\___/|__\\ /  \n"+
             "   \\_____________/   \n\n"+
             "  /|\\ \n   |\n   |  Crappy PostCSS Logo\n\n");
    banner += chalk.blue("Let's add your shiny new PostCSS plugin!\nJust answer some a few quick questions:")

module.exports = banner;
