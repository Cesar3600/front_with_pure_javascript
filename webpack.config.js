const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, './src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
		clean: true,
		assetModuleFilename: '[name][ext]'
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist')
		},
		port: 3333,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(jpg|jpeg|png|svg|gif)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack App from Cesar Contreras',
			filename: './index.html',
			template: './public/index.html',
			inject: true
		}),
		new CopyWebpackPlugin([
			{
				from: './src/styles/styles.css',
				to: ''
			}
		])
	]
}
