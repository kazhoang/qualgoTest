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

import Favorites from '@/theme/assets/images/favorites.png';
import { BackButton, ImageVariant } from '@/components/atoms';
import { RouteName } from '@/types/navigation';
import { useTranslation } from 'react-i18next';
import {
	getDistributionNames,
	getGenreNames,
	getMovieImageUrlPath,
	useMovieDetail,
} from 'qualgo-sdk';

const DetailsScreen = ({
	route: {
		params: { movieId },
	},
}: RootStackScreenProps<RouteName.Details>) => {
	const insets = useSafeAreaInsets();
	const { t } = useTranslation(['detail', 'common']);
	const { layout, fonts, backgrounds, components, gutters, borders, colors } =
		useTheme();

	const { isLoading, movieDetail, error } = useMovieDetail(movieId);

	if (isLoading) {
		return (
			<View style={[layout.flex_1, layout.itemsCenter, layout.justifyCenter]}>
				<ActivityIndicator size={'large'} color={colors.gray50} />
			</View>
		);
	}

	if (error) {
		return (
			<View
				style={[
					layout.flex_1,
					layout.itemsCenter,
					layout.justifyCenter,
					backgrounds.dark,
				]}
			>
				<BackButton />
				<Text style={[fonts.red500, fonts.size_40, fonts.alignCenter]}>
					{error.message}
				</Text>
			</View>
		);
	}

	return (
		<View style={[layout.flex_1, backgrounds.dark]}>
			<ScrollView style={layout.flex_1}>
				<View style={components.movieBanner}>
					<ImageVariant
						imageUrl={getMovieImageUrlPath(movieDetail?.poster_path)}
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
						{/* FOR UI ONLY */}
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
								value: getGenreNames(movieDetail?.genres) || t('common:noData'),
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
							{movieDetail?.overview || t('common:noData')}
						</Text>
						<Text style={[fonts.gray400, fonts.alignCenter]}>
							{t('detail:distribution', {
								value:
									getDistributionNames(movieDetail?.production_companies) ||
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
