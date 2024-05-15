import { StyleSheet, Text, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { useTheme } from '@/theme';
import MovieCard from './MovieCard';
import { ResponsiveWidth } from '@/types/theme/responsive';
import { FlashList } from '@shopify/flash-list';
import { MOVIE_CARD_WIDTH } from '@/constants';
import { Movie } from 'qualgo-sdk';

interface MovieCardsProps {
	title: string;
	data: Movie[];
}

const MovieCategory = memo(({ title, data }: MovieCardsProps) => {
	const { layout, gutters, fonts } = useTheme();

	const renderMovieCards = ({ item }: { item: Movie }) => {
		return <MovieCard movie={item} />;
	};

	const renderSeparator = useCallback(
		() => <View style={styles.separatorStyle} />,
		[],
	);

	return (
		<View style={[gutters.marginVertical_16, gutters.marginHorizontal_16]}>
			<View style={[layout.justifyBetween]}>
				<Text
					style={[
						fonts.bold,
						fonts.gray800,
						fonts.size_24,
						gutters.marginBottom_16,
					]}
				>
					{title}
				</Text>
			</View>
			<FlashList
				estimatedItemSize={MOVIE_CARD_WIDTH}
				horizontal
				showsHorizontalScrollIndicator={false}
				decelerationRate={0.5}
				data={data}
				renderItem={renderMovieCards}
				keyExtractor={item => String(item.id)}
				ItemSeparatorComponent={renderSeparator}
			/>
		</View>
	);
});

export default MovieCategory;

const styles = StyleSheet.create({
	separatorStyle: {
		width: ResponsiveWidth(16),
	},
});
