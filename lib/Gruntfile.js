module.exports = function(grunt) {

  grunt.initConfig({
     browserify: {
      js: {
          src: ['../javascripts/main.js'],
          dest: '../dist/app.js'
      },
    },
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
        predef: [ "document", "console", "$","firebase","FbAPI"],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      },
      files: ['./js/**/*.js']
    },
     sass: {
      dist: {
        files: {
          '../styles/main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']        
      },
      hbs: {
        files: ['./templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['sass','browserify', 'jshint', 'watch']);
};