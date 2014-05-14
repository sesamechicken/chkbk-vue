module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
  grunt.registerTask('cssmin', [ 'cssmin' ]);

  grunt.initConfig({
   
    watch: {
      js: {
        files: ['js/*.js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['css/*.css'],
        options: {
          livereload: true,
        }
      },
      html: {
      	files: ['index.html'],
      	options: {
      		livereload: true,
      	}
      }
    },
    cssmin: {
    	minify: {
    		files: {
      			'css/app.min.css': ['css/*.css']
    		}
    	}
	}
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
};