var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var path = require('path')
var cwd = process.cwd();
var glob = require('glob');
// add hot-reload related code to entry chunks
// Object.keys(baseWebpackConfig.entry).forEach(function(name) {
// 	baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })
var webpackConfig = merge(baseWebpackConfig, {
	module: {
		rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
	},
	// cheap-module-eval-source-map is faster for development
	devtool: '#cheap-module-eval-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': config.dev.env
		}),
		// https://github.com/glenjamin/webpack-hot-middleware#installation--usage
		// new webpack.HotModuleReplacementPlugin(),
		// new webpack.NoEmitOnErrorsPlugin(),
		// https://github.com/ampedandwired/html-webpack-plugin
		// new HtmlWebpackPlugin({
		// 	filename: 'index.html',
		// 	template: 'index.html',
		// 	inject: true
		// }),
		// new FriendlyErrorsPlugin()
	]
})


// 获取指定路径下的入口文件
// function getEntries(globPath) {
// 	var files = glob.sync(globPath),
// 		entries = {};
// 	files.forEach(function(filepath) {
// 		// 取倒数第二层(view下面的文件夹)做包名
// 		var split = filepath.split('/');
// 		var name = split[split.length - 2];
// 		entries[name] = filepath;
// 	});
// 	return entries;
// }
// var entries = getEntries(path.resolve(cwd, 'src/entry/**/index.html'));

// Object.keys(entries).forEach(function(name) {
// 	// 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
// 	// webpackConfig.entry[name] = entries[name];
// 	// 每个页面生成一个html
// 	var plugin = new HtmlWebpackPlugin({
// 		// 生成出来的html文件名
// 		filename: name + '.html',
// 		// 每个html的模版，这里多个页面使用同一个模版
// 		template: process.cwd() + '/src/entry/' + name + '/index.html',
// 		// minify: {
// 		// 	removeComments: false,
// 		// 	collapseWhitespace: false,
// 		// 	removeAttributeQuotes: false
// 		// },
// 		// 自动将引用插入html
// 		inject: true,
// 		// favicon : false,
// 		// 每个html引用的js模块，也可以在这里加上vendor等公用模块
// 		chunks: [name]
// 	});
// 	webpackConfig.plugins.push(plugin);
// })



module.exports = webpackConfig;
