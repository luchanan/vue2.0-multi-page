var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var utils = require('./utils')
var config = require('../config')
var baseWebpackConfig = require('./webpack.base.conf')
var env = config.build.env;


var webpackConfig = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
    },

    devtool: config.build.productionSourceMap ? '#source-map' : false,

    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },

    vue: {
        loaders: utils.cssLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },

    plugins: [
        // http://vuejs.github.io/vue-loader/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 有时候build出来的<script>依赖关系会乱，先注释
        new webpack.optimize.OccurenceOrderPlugin(),

        // extract css into its own file
        new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),


        // split vendor js and UI framework into its own file
        // 提取公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',// 为公共模块起一个名称
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                // 提取全局依赖的库（主要是base.js中引入的vue, jquery等插件生成放到vuedor.js那里）
                var jsReg = /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0;


                // 公共UI库提提取
                // todo 这边可进行更精确的匹配
                // 提取的样式文件 vendor.[contenthash].css
                // var bootstrapUIReg = /bootstrap\.scss$/.test(module.resource);


                return (
                    // module.resource && (jsReg || bootstrapUIReg)
                    module.resource && jsReg
                )
            }
        }),

        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
})

/*if (config.build.productionGzip) {
 var CompressionWebpackPlugin = require('compression-webpack-plugin')

 webpackConfig.plugins.push(
 new CompressionWebpackPlugin({
 asset: '[path].gz[query]',
 algorithm: 'gzip',
 test: new RegExp(
 '\\.(' +
 config.build.productionGzipExtensions.join('|') +
 ')$'
 ),
 threshold: 10240,
 minRatio: 0.8
 })
 )
 }*/

module.exports = webpackConfig
