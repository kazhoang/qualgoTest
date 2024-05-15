import React, { memo } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import ImageVariant from '../ImageVariant';
import LinearGradient from 'react-native-linear-gradient';
import { useAppNavigation } from '@/navigators/Application';
import { RouteName } from '@/types/navigation';
import { useTheme } from '@/theme';
import { getMovieImageUrlPath, Movie } from 'qualgo-sdk';

interface BannerProps {
	movie: Movie;
}

const Banner = memo(({ movie }: BannerProps) => {
	const navigation = useAppNavigation();
	const { components } = useTheme();
	const handleOnClick = () => {
		navigation.navigate(RouteName.Details, {
			movieId: movie.id,
		});
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				handleOnClick();
			}}
		>
			<View>
				<ImageVariant
					imageUrl={getMovieImageUrlPath(movie.poster_path)}
					style={components.movieBanner}
				/>
				<LinearGradient
					colors={['#000', 'transparent']}
					start={{
						x: 0,
						y: 1,
					}}
					end={{
						x: 0,
						y: 0,
					}}
					style={components.linearStyle}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
});

export default Banner;
