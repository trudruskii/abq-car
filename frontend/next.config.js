// next.config.js
module.exports = {
	webpack(config, { dev }) {
		if (dev) {
			config.module.rules.push({
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
				exclude: /node_modules/,
			});
		}
		return config;
	},
};
