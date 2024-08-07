const { src, dest } = require("gulp");  //const gulp = require("gulp");

//Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Плагины
const plumber = require("gulp-plumber");  //перехватчик ошибок
const notify = require("gulp-notify");
const pugs = require("gulp-pug"); //Шаблонизатор Pug
//const webpHtml = require("gulp-webp-html");

//обработка PUG
const pug = () => {
    return src(path.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "PUG",
                message: error.message
            }))
        }))
        .pipe(pugs(app.pug))
        //.pipe(webpHtml())
        .pipe(dest(path.pug.dest));
}

module.exports = pug;
