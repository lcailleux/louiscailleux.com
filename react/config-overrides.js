const path = require('path');

module.exports = (config, env) => {
    /*config.module.rules.push(
        {
            test : /\.scss$/,
            use: {
                loader: 'sass-loader',
                options: {
                    includePaths: [
                        path.resolve('./node_modules'), // @import('jeet/scss/jeet/index')
                    ]
                }
            }
        }
    );
    config.resolve = {
        alias: {
            '_variables.sass': path.resolve(__dirname, 'src/scss/_variables.sass')
        }
    };*/
    return config
};