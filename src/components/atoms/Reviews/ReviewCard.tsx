import React, { memo } from 'react';
import { useTheme } from '@/theme';
import { Review } from 'qualgo-sdk';
import { Text, View } from 'react-native';

interface ReviewCardProps {
	review: Review;
}

const ReviewCard = memo(({ review }: ReviewCardProps) => {
	const { fonts, gutters, borders, backgrounds, components } = useTheme();

	return (
		<View
			style={[
				backgrounds.card,
				gutters.padding_16,
				borders.rounded_36,
				components.reviewCard,
			]}
		>
			<Text style={[fonts.alignCenter, fonts.gray400]} numberOfLines={3}>
				{review.content}
			</Text>
		</View>
	);
});

export default ReviewCard;
