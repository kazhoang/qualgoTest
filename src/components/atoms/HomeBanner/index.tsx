import { FlatList, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useStoreState } from '@/stores/hooks';
import { getMovieImageUrlPath } from '@/services/movies';
import { screenHeight, screenWidth } from '@/types/theme/responsive';
import { Movie } from '@/types/schemas/movie';

const HomeBanner = () => {
	const { upcomingMovies } = useStoreState(store => store.movieModel);

	const renderMovieBanner = ({ item }: { item: Movie }) => {
		return (
			<ImageBackground
				style={[styles.movieBanner]}
				resizeMode="cover"
				source={{
					uri: getMovieImageUrlPath(item.poster_path),
				}}
			>
				<LinearGradient
					colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,7)']}
					style={styles.linearContainer}
				/>
			</ImageBackground>
		);
	};

	return (
		<FlatList
			pagingEnabled
			showsHorizontalScrollIndicator={false}
			horizontal
			data={upcomingMovies}
			renderItem={renderMovieBanner}
		/>
	);
};

export default HomeBanner;

const styles = StyleSheet.create({
	movieBanner: {
		width: screenWidth,
		height: screenHeight / 1.5,
		justifyContent: 'flex-end',
		opacity: 0.9,
	},
	linearContainer: {
		flex: 0.2,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
});
