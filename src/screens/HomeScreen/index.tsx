import React, { useEffect } from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { useStoreActions, useStoreState } from '@/stores/hooks';
import MovieCards from '@/components/atoms/MovieCatalogy';
import HomeBanner from '@/components/atoms/HomeBanner';
import SearchImage from '@/theme/assets/images/search.png';
import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';

const HomeScreen = () => {
	const { layout, components, backgrounds } = useTheme();

	const { nowPlayingMovies, popularMovies } = useStoreState(
		store => store.movieModel,
	);
	const { fetchUpcomingMovies, fetchNowPlayingMovies, fetchPopularMovies } =
		useStoreActions(store => store.movieModel);

	useEffect(() => {
		fetchUpcomingMovies();
		fetchNowPlayingMovies();
		fetchPopularMovies();
	}, [fetchNowPlayingMovies, fetchPopularMovies, fetchUpcomingMovies]);

	const onPress = () => {};

	return (
		<SafeScreen isTopEdge={false}>
			<ScrollView bounces={false} style={backgrounds.dark}>
				<HomeBanner />
				<MovieCards title="Now Playing" data={nowPlayingMovies} />
				<MovieCards title="Popular Movies" data={popularMovies} />
			</ScrollView>
			<TouchableOpacity
				onPress={onPress}
				style={[
					components.buttonCircle,
					layout.absolute,
					layout.top68,
					layout.right16,
				]}
			>
				<Image source={SearchImage} style={[components.image32]} />
			</TouchableOpacity>
		</SafeScreen>
	);
};

export default HomeScreen;
