const express = require('express');
const cors = require('cors');
const figlet = require('figlet');
const app = express();
const port = 8000;

// ASCII code
// const black = "\x1b[30m";
const red = "\x1b[31m";
const green = "\x1b[32m";
// const yellow = "\x1b[33m";
const blue = "\x1b[34m";
// const magenta = "\x1b[35m";
// const cyan = "\x1b[36m";
// const white = "\x1b[37m";
const reset = "\x1b[0m"

app.use(cors());

app.use('/', express.static('public'));

app.listen(port, () => {
  const asciiArt = () => {
    console.log(
      figlet.textSync("GoBeyondJS", {
        font: "Small",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      }) + `${red}v1.0.0${reset}`
    )
  }
  asciiArt();
  console.log(`\n ${blue}${reset} http server started on port ${green}[::]:${port}${reset}`)
});

// Handling non matching request from the client 
app.use((req, res, next) => {
  res.redirect('/404')
})
