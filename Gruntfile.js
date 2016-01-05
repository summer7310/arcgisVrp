module.exports = function(grunt){
	grunt.initConfig({
		uglify: {//停用
			build: {
				src: ['js/src/main.js'],
				dest: 'js/main.min.js'
			}
	    },
	    watch: {
	    	client: {
	    		files: ['style/*.css', '*.html', 'js/*.js', 'js/controllers/lee/*', 'js/services/lee/*' , 'js/learnangular/*.js'],
	    		options: {
	    			livereload: true
	    		}
	    	},
	    	less: {
	    		files: ['style/src/main.less'],
	    		tasks: ['less:dev']
	    	}
	    },
	    less: {
	    	dev: {
	    		options: {
	    			compress: true
	    		},
	    		files: {
	    			'style/main.css' : 'style/src/main.less'
	    		}
	    	}
	    }
    }) 
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['uglify', 'less']);
	grunt.registerTask('live', ['watch']);
}