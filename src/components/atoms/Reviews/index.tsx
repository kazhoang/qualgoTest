import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { useTheme } from '@/theme';
import { ResponsiveWidth } from '@/types/theme/responsive';
import { Review } from 'qualgo-sdk';
import ReviewCard from './ReviewCard';

interface ReviewListProps {
	data: Review[];
	isLoading: boolean;
}

const Reviews = memo(({ data, isLoading }: ReviewListProps) => {
	const { layout, gutters, colors } = useTheme();

	const renderReviews = ({ item }: { item: Review }) => {
		return <ReviewCard review={item} />;
	};

	const renderSeparator = useCallback(
		() => <View style={styles.separatorStyle} />,
		[],
	);

	return (
		<View style={[gutters.marginVertical_16, gutters.marginHorizontal_16]}>
			{isLoading ? (
				<View style={[layout.flex_1, layout.itemsCenter, layout.justifyCenter]}>
					<ActivityIndicator size={'large'} color={colors.gray50} />
				</View>
			) : (
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					decelerationRate={0.5}
					data={data}
					renderItem={renderReviews}
					keyExtractor={item => String(item.id)}
					ItemSeparatorComponent={renderSeparator}
				/>
			)}
		</View>
	);
});

export default Reviews;

const styles = StyleSheet.create({
	separatorStyle: {
		width: ResponsiveWidth(16),
	},
});
