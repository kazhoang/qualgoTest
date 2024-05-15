import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import {
	CustomTextInput,
	ImageVariant,
	MovieSearchedList,
} from '@/components/atoms';
import { moderateScale } from '@/types/theme/responsive';
import { MOVIE_NOT_FOUND_URL } from '@/constants';
import { useTranslation } from 'react-i18next';
import useSearchMovies from '@/services/movies/hooks';

const SearchScreen = () => {
	const { t } = useTranslation(['search']);
	const { layout, backgrounds, gutters, components, fonts } = useTheme();
	const [query, setQuery] = useState('');
	const { searchResults, loading, noResult } = useSearchMovies(query);

	return (
		<SafeScreen>
			<View
				style={[layout.flex_1, backgrounds.dark, gutters.paddingHorizontal_16]}
			>
				<View style={components.dragIndicator} />
				<CustomTextInput
					customStyle={[gutters.marginVertical_32]}
					placeholder={t('search:searchForMovies')}
					value={query}
					onChangeText={setQuery}
				/>
				<View style={layout.flex_1}>
					<MovieSearchedList movies={searchResults} isFetching={loading} />
					{!loading && noResult && (
						<View style={styles.noResult}>
							<ImageVariant
								style={styles.noResultImage}
								borderRadius={40}
								imageUrl={MOVIE_NOT_FOUND_URL}
							/>
							<Text style={[fonts.size_24, fonts.gray50, gutters.marginTop_24]}>
								{t('search:moviesNotFound')}
							</Text>
						</View>
					)}
				</View>
			</View>
		</SafeScreen>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	noResult: {
		position: 'absolute',
		width: '100%',
		height: '90%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	noResultImage: {
		width: moderateScale(240),
		height: moderateScale(240),
	},
});
