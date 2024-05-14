import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { getMovieImageUrlPath } from '@/services/movies';
import { Movie } from '@/types/schemas/movie';
import ImageVariant from '../ImageVariant';

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
			/>
		</TouchableOpacity>
	);
});

export default MovieCard;

const styles = StyleSheet.create({
	movieImg: {
		width: 120,
		aspectRatio: 0.6,
		borderRadius: 10,
	},
});
