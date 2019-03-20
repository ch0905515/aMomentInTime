// A colored moment
var moment = require('moment');
const chalk = require('chalk');


var now = moment().hour();
var day = moment().day();
console.log(chalk.underline(chalk.cyan(moment().format("dddd"))));

if(now >= 12 && now < 17){
    console.log(chalk.underline(chalk.yellow("Good afternoon")));
}
else if(now >= 0 && now < 12){
    console.log(chalk.underline(chalk.green("Good morning")));
}
else if(now >= 17 && now < 00){
    console.log(chalk.underline(chalk.magenta("Good evening")));
}