/* Brocfile.js */

const concat = require('broccoli-concat')
const MergeTrees = require('broccoli-merge-trees')
const Funnel = require('broccoli-funnel')
const UglifyJavaScript = require('broccoli-uglify-sourcemap')
const BroccoliCleanCss = require('broccoli-clean-css');


const trees = []


const scripts = new UglifyJavaScript(concat('public', {
    inputFiles: ['**/*.js'],
    outputFile: '/assets/scripts.min.js'
}))
trees.push(scripts)

const styles = new BroccoliCleanCss(concat('public', {
    inputFiles: ['**/*.css'],
    outputFile: '/assets/styles.min.css'
}))
trees.push(styles)

const public = new Funnel('public', {
    destDir: '.',
    include: ['index.html', 'fonts/*', 'icons/*']
})
trees.push(public)


if (require('broccoli-env').getEnv() == 'development') {
    const fixtures = new Funnel('fixtures', {
        destDir: './mirror/',
        include: ['*.json']
    })
    trees.push(fixtures)
}


module.exports = new MergeTrees(trees)

// vim: set sw=4 ts=4 si nocindent et: .. }}}
