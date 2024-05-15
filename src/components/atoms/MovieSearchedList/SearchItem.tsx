import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getMovieImageUrlPath } from '@/services/movies';
import { Movie } from '@/types/schemas/movie';
import { useAppNavigation } from '@/navigators/Application';
import { RouteName } from '@/types/navigation';
import { useTheme } from '@/theme';
import ImageVariant from '../ImageVariant';
import { useTranslation } from 'react-i18next';

interface SearchItemProps {
	movie: Movie;
}

const SearchItem = memo(({ movie }: SearchItemProps) => {
	const navigation = useAppNavigation();
	const { t } = useTranslation(['search', 'common']);
	const { fonts, backgrounds, layout, borders, components, gutters } =
		useTheme();
	const handleOnClick = () => {
		navigation.navigate(RouteName.Details, {
			movieId: movie.id,
		});
	};

	return (
		<TouchableOpacity
			style={[
				layout.row,
				layout.overflowHidden,
				backgrounds.grayTransparent,
				borders.rounded_8,
				gutters.marginVertical_16,
			]}
			onPress={handleOnClick}
		>
			<ImageVariant
				imageUrl={getMovieImageUrlPath(movie.poster_path)}
				style={components.movieImg}
				borderRadius={8}
				resizeMode="fill"
			/>
			<View style={[layout.flex_1, layout.spaceAround, gutters.marginLeft_16]}>
				<View>
					<Text
						style={[
							fonts.size_16,
							fonts.bold,
							gutters.marginBottom_8,
							fonts.pink500,
						]}
						numberOfLines={1}
					>
						{movie.title}
					</Text>
					<Text style={[fonts.size_12, fonts.gray200]}>
						{t('search:rateFiled', {
							star: movie.vote_average,
							voteCount: movie.vote_count,
						})}
					</Text>
				</View>
				<Text style={(fonts.size_14, fonts.gray50)}>
					★ {movie.vote_average} | View ({movie.vote_count})
				</Text>
				<Text style={[fonts.size_14, fonts.gray50]} numberOfLines={3}>
					{movie.overview || 'No overview available'}
				</Text>
			</View>
		</TouchableOpacity>
	);
});

export default SearchItem;
