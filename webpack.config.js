const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'generated.html',
            template: "./src/template.html"
        })
    ],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:["style-loader", "css-loader", "sass-loader"]
            },{
                test: /\.(png|svg|jpg|jpeg)$/,
                type: 'asset/resource',
                generator:{
                    filename: "images/[name][ext][query]",
                }
            }
        ]
    },
    devServer:{
        static:{
            directory: path.join(__dirname, "./dist")
        },
        open: true,
        port: 3000,
        hot: true,
        compress: true
    }
}