const sass = require("sass");

var { css } = sass.renderSync({
  file: "./style/style.scss",

  output: "./style.css",
});

console.log(css.toString());
