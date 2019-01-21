/* Brocfile.js */

var concat = require('broccoli-concat')
var mergeTrees = require('broccoli-merge-trees')
var cssnano = require('broccoli-cssnano')
var funnel = require('broccoli-funnel')
var uglifyJavaScript = require('broccoli-uglify-sourcemap')

var trees = []


var scripts = concat('public', {
    inputFiles: ['**/*.js'],
    outputFile: '/assets/scripts.min.js'
})
scripts = uglifyJavaScript(scripts)
trees.push(scripts)

var styles = concat('public', {
    inputFiles: ['**/*.css'],
    outputFile: '/assets/styles.min.css'
})
styles = cssnano(styles)
trees.push(styles)

var public = funnel('public', {
    destDir: '.',
    include: ['index.html', 'fonts/*', 'icons/*']
})
trees.push(public)


if (require('broccoli-env').getEnv() == 'development') {
    var fixtures = funnel('fixtures', {
        destDir: './mirror/',
        include: ['*.json']
    })
    trees.push(fixtures)
}


module.exports = mergeTrees(trees)

// vim: set sw=4 ts=4 si nocindent et: .. }}}
