import { FlatList, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useStoreState } from '@/stores/hooks';
import { getMovieImageUrlPath } from '@/services/movies';
import { Movie } from '@/types/schemas/movie';
import { RouteName } from '@/types/navigation';
import { useAppNavigation } from '@/navigators/Application';
import { useTheme } from '@/theme';
import ImageVariant from '../ImageVariant';

const HomeBanner = () => {
	const { components } = useTheme();
	const { upcomingMovies } = useStoreState(store => store.movieModel);
	const navigation = useAppNavigation();

	const renderMovieBanner = ({ item }: { item: Movie }) => {
		return (
			<TouchableWithoutFeedback
				onPress={() => {
					navigation.navigate(RouteName.Details, {
						movieId: item.id,
					});
				}}
			>
				<View>
					<ImageVariant
						imageUrl={getMovieImageUrlPath(item.poster_path)}
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
