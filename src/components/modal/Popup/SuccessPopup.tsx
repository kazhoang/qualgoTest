import React from 'react';
import { CustomButton } from '@/components/atoms';
import { useTheme } from '@/theme';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

type Props = {
	title?: string;
	onPress: () => void;
};

function SuccessPopup({ title, onPress }: Props) {
	const { components, fonts, layout, gutters, backgrounds } = useTheme();
	const { t } = useTranslation(['common']);

	return (
		<View style={[layout.itemsCenter, gutters.marginHorizontal_24]}>
			<Text
				style={[
					fonts.size_16,
					fonts.purple500,
					fonts.bold,
					fonts.alignCenter,
					gutters.marginBottom_40,
				]}
			>
				{title}
			</Text>
			<CustomButton
				type="regular"
				onPress={onPress}
				text={t('common:gotIt')}
				textStyle={fonts.gray50}
				customStyle={backgrounds.greenModalButton}
			/>
		</View>
	);
}

export default SuccessPopup;
