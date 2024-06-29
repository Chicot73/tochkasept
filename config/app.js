const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
    isProd: isProd,

    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd
    },

    pug: {
        pretty: isDev //перестает ужимать итоговый HTML
    },

    webpack: {
        mode: isProd ? "production" : "development"
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        formats: ["ttf", "woff"]
    }
}