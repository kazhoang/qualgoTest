import { DarkTheme } from '@react-navigation/native';

import type { ThemeConfiguration } from '@/types/theme/config';

const colorsLight = {
	red500: '#C13333',
	grayTransparent: '#4D4D4D80',
	gray800: '#303030',
	gray400: '#4D4D4D',
	gray200: '#A1A1A1',
	gray100: '#DFDFDF',
	gray50: '#EFEFEF',
	purple100: '#E1E1EF',
	purple50: '#1B1A23',
	pink500: '#C35386',
	card: '#4D4D4D',
	dark: '#162F46',
} as const;

const colorsDark = {
	red500: '#C13333',
	grayTransparent: '#4D4D4D80',
	gray800: '#E0E0E0',
	gray400: '#969696',
	gray200: '#BABABA',
	gray100: '#000000',
	gray50: '#EFEFEF',
	purple100: '#252732',
	purple50: '#1B1A23',
	pink500: '#C35386',
	card: '#303030',
	dark: '#000000',
} as const;

const sizes = [4, 8, 10, 12, 14, 16, 20, 24, 32, 40, 80] as const;

export const config = {
	colors: colorsLight,
	fonts: {
		sizes,
		colors: colorsLight,
	},
	gutters: sizes,
	backgrounds: colorsLight,
	borders: {
		widths: [1, 2],
		radius: [4, 8, 16, 20, 36],
		colors: colorsLight,
	},
	navigationColors: {
		...DarkTheme.colors,
		background: colorsLight.gray50,
		card: colorsLight.gray50,
	},
	variants: {
		dark: {
			colors: colorsDark,
			fonts: {
				colors: colorsDark,
			},
			backgrounds: colorsDark,
			navigationColors: {
				...DarkTheme.colors,
				background: colorsDark.purple50,
				card: colorsDark.purple50,
			},
		},
	},
} as const satisfies ThemeConfiguration;
