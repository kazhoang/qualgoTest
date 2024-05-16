module.exports = {
	preset: 'react-native',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
	],
	coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
	testMatch: ['**/*.test.ts?(x)', '**/*.test.js?(x)'],
	fakeTimers: {
		enableGlobally: true,
	},
};
