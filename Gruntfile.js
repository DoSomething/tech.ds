module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', ['compass']);

};
