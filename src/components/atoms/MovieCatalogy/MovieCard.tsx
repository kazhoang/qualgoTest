import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { getMovieImageUrlPath } from '@/services/movies';
import { Movie } from '@/types/schemas/movie';
import ImageVariant from '../ImageVariant';
import { ASPECT_RATIO_BANNER, MOVIE_CARD_WIDTH } from '@/constants';
import { moderateScale } from '@/types/theme/responsive';

interface MovieCardProps {
	movie: Movie;
	onPress: (movie: Movie) => void;
}

const MovieCard = memo(({ movie, onPress }: MovieCardProps) => {
	const handlePress = () => {
		onPress(movie);
	};

	return (
		<TouchableOpacity onPress={handlePress}>
			<ImageVariant
				style={styles.movieImg}
				imageUrl={getMovieImageUrlPath(movie.poster_path)}
				borderRadius={moderateScale(10)}
			/>
		</TouchableOpacity>
	);
});

export default MovieCard;

const styles = StyleSheet.create({
	movieImg: {
		width: MOVIE_CARD_WIDTH,
		aspectRatio: ASPECT_RATIO_BANNER,
	},
});
