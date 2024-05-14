import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { ComponentTheme } from '@/types/theme/theme';
import { moderateScale, screenWidth } from '@/types/theme/responsive';

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
		button: {
			...layout.justifyCenter,
			...layout.itemsCenter,
			...backgrounds.primary,
			...fonts.gray400,
			...borders.rounded_36,
			height: moderateScale(48),
			width: '100%',
		},
		movieBanner: {
			width: screenWidth,
			aspectRatio: 500 / 750,
			justifyContent: 'flex-end',
			opacity: 0.9,
		},
		linearStyle: {
			height: '40%',
			...layout.absolute,
			...layout.bottom0,
			...layout.left0,
			...layout.right0,
			...layout.z10,
		},
		claimBtn: {
			height: moderateScale(48),
			width: '100%',
			justifyContent: 'center',
		},
		lottieClaim: {
			...layout.fullWidth,
			aspectRatio: 16 / 9,
		},
		lottieIcon: {
			width: moderateScale(160),
			height: moderateScale(160),
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
		circle250: {
			borderRadius: 140,
			height: 68,
			width: 68,
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
		separator: {
			...borders.w_1,
			...borders.gray200,
			width: '80%',
			borderStyle: 'dashed',
		},
	} as const satisfies Record<string, ImageStyle | TextStyle | ViewStyle>;
};
