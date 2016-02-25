module.exports = function (grunt) {
	var JS_CRM_BUILD_LIST = [
		'lib/jquery/jquery-2.1.3.min.js',
		'lib/dhtmlx.js',
		'js/src/class/objectCRM.js'
	];

	var CSS_CRM_BUILD_LIST = [
		'css/reset.css',
		'css/dhtmlx.css'
	];

	grunt.initConfig({
		cssmin: {
			dist_css_crm: {
				src: CSS_CRM_BUILD_LIST,
				dest: 'codebase/css/crm.css'
			}
		},
		concat: {
			dist_js_crm: {
				src: JS_CRM_BUILD_LIST,
				dest: 'codebase/js/crm.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['cssmin', 'concat']);
};