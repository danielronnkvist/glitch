module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ['react', 'es2015'] }}
        ]
    },
    plugins: [],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
