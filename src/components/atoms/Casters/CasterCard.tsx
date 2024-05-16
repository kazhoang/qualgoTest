import React, { memo } from 'react';
import ImageVariant from '../ImageVariant';
import { moderateScale } from '@/types/theme/responsive';
import { useTheme } from '@/theme';
import { Caster, getProfileCasterUrlPath, ProfileSizes } from 'qualgo-sdk';
import { CASTER_WIDTH } from '@/constants';
import { Platform, View } from 'react-native';

interface CasterCardProps {
	caster: Caster;
}

const CasterCard = memo(({ caster }: CasterCardProps) => {
	const { components } = useTheme();

	return (
		<View>
			<ImageVariant
				style={components.casterImg}
				imageUrl={getProfileCasterUrlPath(
					caster?.profile_path,
					ProfileSizes.SIZE_W185,
				)}
				borderRadius={moderateScale(
					CASTER_WIDTH / (Platform.OS === 'ios' ? 2 : 0.5),
				)}
				resizeMode="cover"
			/>
		</View>
	);
});

export default CasterCard;
