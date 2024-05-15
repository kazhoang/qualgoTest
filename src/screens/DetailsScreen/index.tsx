import {
	View,
	Text,
	ActivityIndicator,
	ScrollView,
	Image,
	TouchableOpacity,
	StyleSheet,
	ImageStyle,
} from 'react-native';
import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackScreenProps } from '@/navigators/Application';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@/theme';
import { useMovieDetail } from '@/services/movies/hooks';
import {
	getDistributionNames,
	getGenreNames,
	getMovieImageUrlPath,
} from '@/services/movies';
import Favorites from '@/theme/assets/images/favorites.png';
import { BackButton, ImageVariant } from '@/components/atoms';
import { RouteName } from '@/types/navigation';
import { useTranslation } from 'react-i18next';

const DetailsScreen = ({
	route: {
		params: { movieId },
	},
}: RootStackScreenProps<RouteName.Details>) => {
	const insets = useSafeAreaInsets();
	const { t } = useTranslation(['detail', 'common']);
	const { layout, fonts, backgrounds, components, gutters, borders } =
		useTheme();

	const { isLoading, movieData, error } = useMovieDetail(movieId);

	if (isLoading) {
		return (
			<View style={[layout.flex_1, layout.itemsCenter, layout.justifyCenter]}>
				<ActivityIndicator />
			</View>
		);
	}

	if (error) {
		return (
			<View style={[layout.flex_1, layout.itemsCenter, layout.justifyCenter]}>
				<Text style={[fonts.red500, fonts.size_40]}>{error}</Text>
			</View>
		);
	}

	return (
		<View style={[layout.flex_1, backgrounds.dark]}>
			<ScrollView style={layout.flex_1}>
				<View style={components.movieBanner}>
					<ImageVariant
						imageUrl={getMovieImageUrlPath(movieData?.poster_path)}
						style={StyleSheet.absoluteFill as ImageStyle}
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

					<View
						style={[StyleSheet.absoluteFill, layout.z10, gutters.padding_16]}
					>
						<View style={layout.flex_1} />
						<View style={[layout.row, layout.justifyCenter]}>
							<TouchableOpacity
								style={[
									layout.row,
									layout.itemsCenter,
									backgrounds.gray50,
									gutters.paddingHorizontal_16,
									gutters.marginRight_40,
									borders.rounded_36,
								]}
							>
								<Text style={[fonts.dark, fonts.bold]}>{t('common:play')}</Text>
							</TouchableOpacity>
							<TouchableOpacity style={components.buttonCircle}>
								<Image
									source={Favorites}
									style={[components.image24x28]}
									tintColor={'#fff'}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={[gutters.padding_16]}>
					<View
						style={[backgrounds.card, gutters.padding_16, borders.rounded_36]}
					>
						<Text
							style={[
								fonts.alignCenter,
								fonts.gray400,
								gutters.marginBottom_16,
							]}
						>
							{t('detail:genres', {
								value: getGenreNames(movieData?.genres) || t('common:noData'),
							})}
						</Text>
						<Text
							style={[
								fonts.gray50,
								fonts.size_16,
								fonts.alignCenter,
								fonts.lineHeight24,
								gutters.marginBottom_16,
							]}
						>
							{movieData?.overview || t('common:noData')}
						</Text>
						<Text style={[fonts.gray400, fonts.alignCenter]}>
							{t('detail:distribution', {
								value:
									getDistributionNames(movieData?.production_companies) ||
									t('common:noData'),
							})}
						</Text>
					</View>
				</View>
				<View style={{ height: insets.bottom + 16 }} />
			</ScrollView>
			<BackButton />
		</View>
	);
};

export default DetailsScreen;
