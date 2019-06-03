const path = require('path');
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
    let mode = env && env.mode ? env.mode : "production";
    let isProduction = mode === "production";
    let isDevelopment = !isProduction;

    return {
        mode: mode,
        entry: {
            main: './src/main.js'
        },
        devtool: isDevelopment ? "inline-source-map" : "none",
        output: {
            filename: isDevelopment ? './js/main.js' : "./js/main.min.js",
            path: path.resolve(__dirname, 'input/assets')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                autoprefixer: {
                                    browsers: ["last 2 versions"]
                                },
                                cssnano: {
                                    preset: 'default',
                                },
                                plugins: () => {
                                    let plugins = [
                                        autoprefixer
                                    ];

                                    if (isProduction) {
                                        plugins.push(cssnano);
                                    }

                                    return plugins;
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require("sass")
                            }
                        }
                    ],
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: isDevelopment ? "css/[name].css" : "css/[name].min.css"
            })
        ],

    }
};