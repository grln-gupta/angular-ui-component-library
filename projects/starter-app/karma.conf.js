module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'tests/**/*.spec.js'
        ],
        preprocessors: {
            'src/**/*.js': ['coverage']
        },
        reporters: ['progress', 'coverage'],
        browsers: ['Chrome'],
        singleRun: true,
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};