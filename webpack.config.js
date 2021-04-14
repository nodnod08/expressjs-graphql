const path = require("path")
const DEV_DIRECTORY = path.resolve(__dirname, "src/dist")
const PROD_DIRECTORY = path.resolve(__dirname, "src/public")
const miniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: {
        index: [path.resolve(__dirname, "./src/js/index.js"), path.resolve(__dirname, "./src/assets/index.scss")],
        menu: path.resolve(__dirname, "./src/js/menu.js"),
        dashboard: path.resolve(__dirname, "./src/js/dashboard.js")
    },
    output: {
        filename: "[name].bundle.js",
        path: DEV_DIRECTORY
    },
    watch: true,
    watchOptions: {
        ignored: ["node_modules/**"]
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: "/node_modules",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[path][name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
}
