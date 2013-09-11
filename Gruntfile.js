module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['assets/scss/*.scss'],
      tasks: ['compass']
    },
    compass: {
      dist: {
        options: {
          cssDir: 'assets/css',
          sassDir: 'assets/scss',
          outputStyle: 'compressed',
          noLineComments: true
        }
      }
    }
  });

  // Load Grunt contrib. plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Set default Grunt task equal to 'compass compile'
  grunt.registerTask('default', ['compass']);

};
