const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    }
}

//C:/Users/Sam/Desktop/JS/boilerplate/public/scripts/bundle.js