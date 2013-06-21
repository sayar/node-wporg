'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'lib/{,*/}*.js'
            ]
        },
        vows : {
            all : {
                src : 'test/{,*/}*.js',
                options : {
                    reporter : 'spec'
                }
            }
        },
        jsdoc : {
            dist : {
                src: ['lib/*.js'],
                options: {
                    destination: 'docs'
                }
            }
        }
    });

    grunt.registerTask('build', [
        'jshint',
        'vows',
        'jsdoc'
    ]);

    grunt.registerTask('default', ['build']);
};
