import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import ImageVariant from '../ImageVariant';
import { moderateScale } from '@/types/theme/responsive';
import { RouteName } from '@/types/navigation';
import { useAppNavigation } from '@/navigators/Application';
import { useTheme } from '@/theme';
import { getMovieImageUrlPath, Movie, MoviePosterSizes } from 'qualgo-sdk';

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
