import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { Movie } from '@/types/schemas/movie';
import { useTheme } from '@/theme';
import { useAppNavigation } from '@/navigators/Application';
import { RouteName } from '@/types/navigation';
import MovieCard from './MovieCard';
import { ResponsiveWidth } from '@/types/theme/responsive';

interface MovieCardsProps {
	title: string;
	data: Movie[];
}

const MovieCards = memo(({ title, data }: MovieCardsProps) => {
	const { layout, gutters, fonts } = useTheme();
	const navigation = useAppNavigation();

	const handleOnClick = (movieData: Movie) => {
		navigation.navigate(RouteName.Details, {
			movieId: movieData.id,
		});
	};

	const renderMovieCards = ({ item }: { item: Movie }) => {
		return <MovieCard movie={item} onPress={handleOnClick} />;
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
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={renderMovieCards}
				keyExtractor={item => String(item.id)}
				ItemSeparatorComponent={renderSeparator}
			/>
		</View>
	);
});

export default MovieCards;

const styles = StyleSheet.create({
	separatorStyle: {
		width: ResponsiveWidth(16),
	},
});
