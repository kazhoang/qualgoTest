import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { useTheme } from '@/theme';
import CasterCard from './CasterCard';
import { ResponsiveWidth } from '@/types/theme/responsive';
import { FlashList } from '@shopify/flash-list';
import { CASTER_WIDTH } from '@/constants';
import { Caster } from 'qualgo-sdk';

interface CasterListProps {
	data: Caster[];
	isLoading: boolean;
}

const Casters = memo(({ data, isLoading }: CasterListProps) => {
	const { layout, gutters, fonts, colors } = useTheme();

	const renderCasters = ({ item }: { item: Caster }) => {
		return <CasterCard caster={item} />;
	};

	const renderSeparator = useCallback(
		() => <View style={styles.separatorStyle} />,
		[],
	);

	const dataDisplay = data.filter(e => e.profile_path);

	return (
		<View style={[gutters.marginVertical_16, gutters.marginHorizontal_16]}>
			<Text
				style={[
					fonts.bold,
					fonts.gray800,
					fonts.size_24,
					gutters.marginBottom_16,
				]}
			>
				Actors
			</Text>
			{isLoading ? (
				<View style={[layout.flex_1, layout.itemsCenter, layout.justifyCenter]}>
					<ActivityIndicator size={'large'} color={colors.gray50} />
				</View>
			) : (
				<FlashList
					estimatedItemSize={CASTER_WIDTH}
					horizontal
					showsHorizontalScrollIndicator={false}
					decelerationRate={0.5}
					data={dataDisplay}
					renderItem={renderCasters}
					keyExtractor={item => String(item.id)}
					ItemSeparatorComponent={renderSeparator}
				/>
			)}
		</View>
	);
});

export default Casters;

const styles = StyleSheet.create({
	separatorStyle: {
		width: ResponsiveWidth(16),
	},
});
