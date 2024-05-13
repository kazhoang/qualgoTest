import { Movie, MovieCategory } from '@/types/schemas/movie';
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

export const getMovieImageUrlPath = (poster_path: string): string => {
	return CONFIG.TMBDImageServicesBaseUrl + poster_path;
};
