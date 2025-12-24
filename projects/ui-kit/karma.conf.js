module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'path/to/your/test/files/**/*.spec.js'
        ],
        preprocessors: {
            'path/to/your/test/files/**/*.spec.js': ['webpack']
        },
        reporters: ['progress'],
        browsers: ['Chrome'],
        singleRun: true,
        webpack: {
            // Your webpack configuration
        }
    });
};