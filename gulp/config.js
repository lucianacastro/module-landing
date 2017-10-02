'use strict'
// We use this to read flags in the command line
const argv = require('yargs').argv
// Add your conditions here 💅
const production = argv.prod || argv.production

module.exports = {
  directories: {
    src: {
      base: 'src',
      markup: 'src',
      
      fonts: 'src/assets/fonts',
      icons: 'src/assets/icons',
      images: 'src/assets/images',
      scripts: 'src/assets/js',
      styles: 'src/assets/styles'
    },
    dist: {
      base: 'dist',
      markup: 'dist',
      fonts: 'dist/assets/fonts',
      icons: 'dist/assets/icons',
      images: 'dist/assets/images',
      scripts: 'dist/assets/js',
      styles: 'dist/assets/css',
    }
  },
  project: {
    cssMainFile: 'src/assets/styles/main.scss',
    scriptFiles: [
      'src/assets/js/*.js'
    ],
    fontFiles: [
      'src/assets/fonts/**/*',
      
    ]
  },
  vendor: {
    scssDirectories: [
      'src/assets/styles/**/*.scss',
      'src/assets/vendor/**/*.scss',
    ],
    scriptFiles: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/svg4everybody/dist/svg4everybody.min.js',
      'src/assets/js/vendor/*.js',
    ]
  },
  onError: function (error) {
    console.log(error.toString())
    this.emit('end')
  },
  production: !!production,
  // Stuff for PurifyCss
  purify: ['./dist/**/*.js', './dist/**/*.html'],
}
