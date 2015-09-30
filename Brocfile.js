/* Brocfile.js */

var concat = require('broccoli-concat')
var mergeTrees = require('broccoli-merge-trees')
var cssnano = require('broccoli-cssnano')
var funnel = require('broccoli-funnel')

var trees = []

var scripts = concat('public', {
    inputFiles: ['**/*.js'],
    outputFile: '/assets/scripts.min.js'
})

var styles = concat('public', {
    inputFiles: ['**/*.css'],
    outputFile: '/assets/styles.min.css'
})

styles = cssnano(styles)

var public = funnel('public', {
    destDir: '.',
    include: ['index.html', 'fonts/*', 'icons/*']
})

trees.push(scripts)
trees.push(styles)
trees.push(public)

if (require('broccoli-env').getEnv() == 'development') {
    var fixtures = funnel('fixtures', {
        destDir: '.',
        include: ['*.json']
    })
    trees.push(fixtures)
}

module.exports = mergeTrees(trees)

// vim: set sw=4 ts=4 si nocindent et: .. }}}

