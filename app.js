const validator = require('validator');
const chalk = require('chalk')

// versi yang terbaru
// const chalk = import('chalk').then(chalk => {
//     // Gunakan chalk di dalam sini
//     console.log(chalk.default.blue('Hello world!'));
// }).catch(err => {
//     console.error(err);
// });

// console.log(chalk)



// // console.log(validator.isEmail("azmi@gmail.com"))
// // console.log(validator.isMobilePhone("0881024690339", "id-ID"))
// // console.log(validator.isNumeric("0881024690339"))


console.log(chalk.italic.bgBlue.black("hello world"))


const pesan = chalk`{bgBlue Lorem}, {bgRed ipsum} hello`
console.log(pesan)