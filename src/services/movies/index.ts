import {
	Genres,
	Movie,
	MovieCategory,
	MovieDetail,
	ProductionCompany,
} from '@/types/schemas/movie';
import { tmdbClient } from '../instance';
import { MovieError } from '@/types/errors';
import CONFIG from '../tmbd';

export const getMovies = async (category: MovieCategory): Promise<Movie[]> => {
	try {
		const response = await tmdbClient.get(`/movie/${category}`);
		const moviesData: Movie[] = response.data.results;

		return moviesData;
	} catch (error) {
		throw new Error(MovieError.CANT_FETCH_UPCOMING);
	}
};

export const fetchMovieDetail = async (
	movieId: number | string,
): Promise<MovieDetail> => {
	try {
		const response = await tmdbClient.get(`/movie/${movieId}`);
		const movieData: MovieDetail = response.data;
		return movieData;
	} catch (error) {
		throw new Error(MovieError.CANT_FETCH_MOVIE_DETAIL);
	}
};

export const getMovieImageUrlPath = (
	poster_path: string | undefined,
): string => {
	if (!poster_path) {
		throw new Error(MovieError.MOVIE_IMAGE_URL_EMPTY);
	}
	return CONFIG.TMBDImageServicesBaseUrl + poster_path;
};

export const getMovieThumbnailImageUrlPath = (
	poster_path: string | undefined,
): string => {
	if (!poster_path) {
		throw new Error(MovieError.MOVIE_IMAGE_URL_EMPTY);
	}
	return CONFIG.TMBDImageServicesThumbnailUrl + poster_path;
};

export const getGenreNames = (genres: Genres[] | undefined) => {
	if (!genres) {
		return '';
	}
	return genres.map(genre => genre.name).join(', ');
};

export const getDistributionNames = (
	companies: ProductionCompany[] | undefined,
) => {
	if (!companies) {
		return '';
	}
	return companies.map(company => company.name).join(', ');
};
