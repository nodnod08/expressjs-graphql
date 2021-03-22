const path = require("path");
const DEV_DIRECTORY = path.resolve(__dirname, "src/dist");
const PROD_DIRECTORY = path.resolve(__dirname, "src/public");

module.exports = {
	entry: { index: path.resolve(__dirname, "./src/index.js") },
	output: {
		filename: "[name].bundle.js",
		path: DEV_DIRECTORY,
	},
	watch: true,
	watchOptions: {
		ignored: ["node_modules/**"],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: "/node_modules",
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.css$/,
				exclude: "/node_modules",
				use: [{ loader: "css-loader" }],
			},
		],
	},
};
