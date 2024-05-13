module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src/'],
				extensions: ['.js', '.json', '.tsx'],
				alias: {
					'@': './src',
				},
			},
		],
		'react-native-reanimated/plugin',
	],
};
