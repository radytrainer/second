
const axios = require('axios');
const chalk = require('chalk');

const url = "https://random-words-api.vercel.app/word";
axios
.get(url)
.then( response => console.log(chalk.bgGreen(response.data[0].word)));
