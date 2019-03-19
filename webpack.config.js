const path = require("path");
const webpack = require("webpack");

module.exports = {
    "mode": "development",
    "entry": ["babel-polyfill", "./components/index.jsx"],
    "output": {
        "path": __dirname + '/public',
        "filename": "bundle.js"
    },
    "devtool": "source-map",
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    }
};