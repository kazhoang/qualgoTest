import React from 'react';
import { useStoreState } from '@/stores/hooks';
import { Movie } from '@/types/schemas/movie';
import { FlashList } from '@shopify/flash-list';
import { BANNER_WIDTH } from '@/constants';
import Banner from './Banner';

const HomeBanner = () => {
	const { upcomingMovies } = useStoreState(store => store.movieModel);

	const renderMovieBanner = ({ item }: { item: Movie }) => {
		return <Banner movie={item} />;
	};

	return (
		<FlashList
			estimatedItemSize={BANNER_WIDTH}
			pagingEnabled
			showsHorizontalScrollIndicator={false}
			horizontal
			data={upcomingMovies}
			renderItem={renderMovieBanner}
		/>
	);
};

export default HomeBanner;
