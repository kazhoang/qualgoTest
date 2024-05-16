import React from 'react';
import { useStoreState } from '@/stores/hooks';
import { FlashList } from '@shopify/flash-list';
import { BANNER_WIDTH } from '@/constants';
import Banner from './Banner';
import { Movie } from 'qualgo-sdk';

const HomeBanner = () => {
	const { newReleaseMovies } = useStoreState(store => store.movieModel);

	const renderMovieBanner = ({ item }: { item: Movie }) => {
		return <Banner movie={item} />;
	};

	return (
		<FlashList
			estimatedItemSize={BANNER_WIDTH}
			pagingEnabled
			showsHorizontalScrollIndicator={false}
			horizontal
			data={newReleaseMovies}
			renderItem={renderMovieBanner}
		/>
	);
};

export default HomeBanner;
