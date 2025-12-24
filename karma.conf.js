module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/**/*.js',
            'test/**/*.spec.js'
        ],
        browsers: ['Chrome'],
        singleRun: true,
        reporters: ['progress'],
        preprocessors: {
            'src/**/*.js': ['coverage']
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};