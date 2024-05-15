import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { getMovieImageUrlPath } from '@/services/movies';
import { Movie, MoviePosterSizes } from '@/types/schemas/movie';
import ImageVariant from '../ImageVariant';
import { moderateScale } from '@/types/theme/responsive';
import { RouteName } from '@/types/navigation';
import { useAppNavigation } from '@/navigators/Application';
import { useTheme } from '@/theme';

interface MovieCardProps {
	movie: Movie;
}

const MovieCard = memo(({ movie }: MovieCardProps) => {
	const { components } = useTheme();
	const navigation = useAppNavigation();

	const handleOnClick = () => {
		navigation.navigate(RouteName.Details, {
			movieId: movie.id,
		});
	};

	return (
		<TouchableOpacity
			onPress={() => {
				handleOnClick();
			}}
		>
			<ImageVariant
				style={components.movieImg}
				imageUrl={getMovieImageUrlPath(
					movie.poster_path,
					MoviePosterSizes.SIZE_W342,
				)}
				borderRadius={moderateScale(10)}
			/>
		</TouchableOpacity>
	);
});

export default MovieCard;
