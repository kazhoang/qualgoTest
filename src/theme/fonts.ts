import { TextStyle } from 'react-native';
import type { FontColors, FontSizes } from '@/types/theme/fonts';
import type { UnionConfiguration } from '@/types/theme/config';
import { config } from '@/theme/_config';
import { ResponsiveFont } from '@/types/theme/responsive';

export const generateFontColors = (configuration: UnionConfiguration) => {
	return Object.entries(configuration.fonts.colors ?? {}).reduce(
		(acc, [key, value]) => {
			return Object.assign(acc, {
				[`${key}`]: {
					color: value,
				},
			});
		},
		{} as FontColors,
	);
};

export const generateFontSizes = () => {
	return config.fonts.sizes.reduce((acc, size) => {
		return Object.assign(acc, {
			[`size_${size}`]: {
				fontSize: ResponsiveFont(size),
			},
		});
	}, {} as FontSizes);
};

export const staticFontStyles = {
	bold: {
		fontWeight: 'bold',
	},
	uppercase: {
		textTransform: 'uppercase',
	},
	capitalize: {
		textTransform: 'capitalize',
	},
	alignCenter: {
		textAlign: 'center',
	},
	justify: {
		textAlign: 'justify',
	},
	lineHeight24: {
		lineHeight: ResponsiveFont(24),
	},
} as const satisfies Record<string, TextStyle>;
