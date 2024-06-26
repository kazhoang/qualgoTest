import React, { memo } from 'react';
import SearchItem from './SearchItem';
import { FlashList } from '@shopify/flash-list';
import { ASPECT_RATIO_BANNER, MOVIE_CARD_WIDTH } from '@/constants';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '@/theme';
import { Movie } from 'qualgo-sdk';

interface MovieSearchedListProps {
	movies: Movie[];
	isFetching?: boolean;
}

const MovieSearchedList = memo(
	({ movies, isFetching }: MovieSearchedListProps) => {
		const { layout, colors, gutters } = useTheme();
		const renderItem = ({ item }: { item: Movie }) => (
			<SearchItem movie={item} />
		);

		if (isFetching) {
			return (
				<View
					style={[
						layout.flex_1,
						layout.itemsCenter,
						layout.justifyCenter,
						gutters.marginBottom_80,
					]}
				>
					<ActivityIndicator size="large" color={colors.gray50} />
				</View>
			);
		}

		return (
			<FlashList
				keyboardShouldPersistTaps="handled"
				estimatedItemSize={MOVIE_CARD_WIDTH / ASPECT_RATIO_BANNER}
				data={movies}
				renderItem={renderItem}
				keyExtractor={item => item.id.toString()}
				nestedScrollEnabled
			/>
		);
	},
);

export default MovieSearchedList;
