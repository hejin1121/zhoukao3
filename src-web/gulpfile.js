const gulp = require("gulp");
const webserver = require("gulp-webserver");
gulp.task('server', () => {
    return gulp.src('./src')
        .pipe(webserver({
            port: 9090,
            open: true,
            proxies: [{
                source: '/api/getlist',
                target: 'http://localhost:3000/api/getlist'
            }, {
                source: '/api/getlistImg',
                target: 'http://localhost:3000/api/getlistImg'
            }]
        }))
})