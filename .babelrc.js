module.exports = {
    plugins: [
        "@babel/plugin-transform-runtime",
        [
            "babel-plugin-root-import",
            {
                rootPathPrefix: "@/",
                root: __dirname + "/src"
            }
        ]
    ]
}
