import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { ComponentTheme } from '@/types/theme/theme';
import { moderateScale, screenWidth } from '@/types/theme/responsive';
import { ASPECT_RATIO_BANNER, MOVIE_CARD_WIDTH } from '@/constants';

export default ({
	layout,
	backgrounds,
	fonts,
	gutters,
	borders,
	colors,
}: ComponentTheme) => {
	return {
		buttonCircle: {
			...layout.justifyCenter,
			...layout.itemsCenter,
			...backgrounds.grayTransparent,
			...fonts.gray400,
			...borders.rounded_36,
			height: moderateScale(56),
			width: moderateScale(56),
		},
		dragIndicator: {
			width: moderateScale(80),
			height: moderateScale(4),
			...borders.rounded_4,
			...backgrounds.gray50,
			alignSelf: 'center',
			...gutters.marginTop_16,
		},
		movieBanner: {
			width: screenWidth,
			aspectRatio: ASPECT_RATIO_BANNER,
			justifyContent: 'flex-end',
			opacity: 0.9,
		},
		movieImg: {
			width: MOVIE_CARD_WIDTH,
			aspectRatio: ASPECT_RATIO_BANNER,
		},
		linearStyle: {
			height: '40%',
			...layout.absolute,
			...layout.bottom0,
			...layout.left0,
			...layout.right0,
			...layout.z10,
		},
		textInput: {
			...layout.justifyCenter,
			...layout.itemsCenter,
			...backgrounds.purple100,
			...gutters.paddingHorizontal_12,
			...fonts.gray400,
			...borders.rounded_36,
			height: moderateScale(48),
			width: '100%',
		},
		image24: {
			height: moderateScale(24),
			width: moderateScale(24),
		},
		image24x28: {
			height: moderateScale(24),
			width: moderateScale(28),
		},
		image32: {
			height: moderateScale(32),
			width: moderateScale(32),
			tintColor: colors.gray50,
		},
		card: {
			...gutters.padding_16,
			...gutters.marginBottom_16,
			...borders.rounded_8,
			...backgrounds.card,
		},
	} as const satisfies Record<string, ImageStyle | TextStyle | ViewStyle>;
};
