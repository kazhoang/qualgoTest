import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React from 'react';

import { getMovieImageUrlPath } from '@/services/movies';
import { Movie } from '@/types/schemas/movie';
import { useTheme } from '@/theme';

interface MovieCardsProps {
	title: string;
	data: Movie[];
}

const MovieCards = ({ title, data }: MovieCardsProps) => {
	const { layout, gutters, fonts } = useTheme();

	const handleOnClick = movieData => {
		// navigation.navigate('VideoPlayer', { movieData });
	};

	const renderMovieCards = ({ item, index }) => {
		return (
			<TouchableOpacity onPress={() => handleOnClick(item)}>
				<Image
					style={styles.movieImg}
					source={{
						uri: getMovieImageUrlPath(item.poster_path),
					}}
				/>
			</TouchableOpacity>
		);
	};
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
				ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
			/>
		</View>
	);
};

export default MovieCards;

const styles = StyleSheet.create({
	container: {
		height: 120,
		marginTop: 10,
	},
	movieImg: {
		width: 120,
		aspectRatio: 0.6,
		borderRadius: 10,
	},
});
