import React, { useEffect } from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { useStoreActions, useStoreState } from '@/stores/hooks';
import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import { useAppNavigation } from '@/navigators/Application';
import { RouteName } from '@/types/navigation';
import SearchImage from '@/theme/assets/images/search.png';
import { HomeBanner, MovieCategory } from '@/components/atoms';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
	const { t } = useTranslation(['home']);

	const { layout, components, backgrounds } = useTheme();
	const navigation = useAppNavigation();

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

	const onPress = () => {
		navigation.navigate(RouteName.Search);
	};

	return (
		<SafeScreen isTopEdge={false}>
			<ScrollView style={backgrounds.dark} showsVerticalScrollIndicator={false}>
				<HomeBanner />
				<MovieCategory title={t('home:nowPlaying')} data={nowPlayingMovies} />
				<MovieCategory title={t('home:popularMovies')} data={popularMovies} />
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
