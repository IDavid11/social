const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./index.html"}),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.png|svg|jpg|gif$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                        },
                    }
                ],
                
            },
        ],
    },
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: [".ts", ".tsx", ".js"], 
        plugins: [
            new TsconfigPathsPlugin({/* options: see below */}),
        ]      
    }
}