import React from 'react';
import { View, DimensionValue } from 'react-native';
import Logo from '@/theme/assets/images/logo.png';

import { isImageSourcePropType } from '@/types/guards/image';
import { moderateScale } from '@/types/theme/responsive';
import SvgComponent from './Serdao';

type Props = {
	height?: DimensionValue;
	width?: DimensionValue;
};

function Brand({ height, width }: Props) {
	if (!isImageSourcePropType(Logo)) {
		throw new Error('Image source is not valid');
	}

	const brandHeight: number = moderateScale(height as number);
	const brandWidth: number = moderateScale(width as number);

	return (
		<View style={{ height: brandHeight, width: brandWidth }}>
			<SvgComponent />
		</View>
	);
}

Brand.defaultProps = {
	height: 120,
	width: 240,
	mode: 'contain',
};

export default Brand;
