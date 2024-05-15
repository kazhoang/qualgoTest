import {
	Genres,
	Movie,
	MovieCategory,
	MovieDetail,
	MoviePosterSizes,
	ProductionCompany,
} from '@/types/schemas/movie';
import { tmdbClient } from '../instance';
import { MovieError } from '@/types/errors';
import CONFIG from '../tmbd';

/**
 * Fetches a list of movies based on the specified category.
 *
 * @param {MovieCategory} category - The category of movies to fetch (e.g., 'upcoming', 'popular').
 * @returns {Promise<Movie[]>} A promise that resolves to an array of movies.
 * @throws {Error} Throws an error if the API call fails.
 */
export const getMovies = async (category: MovieCategory): Promise<Movie[]> => {
	try {
		const response = await tmdbClient.get(`/movie/${category}`);
		const moviesData: Movie[] = response.data.results;

		return moviesData;
	} catch (error) {
		throw new Error(MovieError.CANT_FETCH_UPCOMING);
	}
};

/**
 * Fetches detailed information about a specific movie by its ID.
 *
 * @param {number|string} movieId - The identifier for the movie, either a number or a string.
 * @returns {Promise<MovieDetail>} A promise that resolves to the detailed information of the movie.
 * @throws {Error} Throws an error if the movie details cannot be fetched from the API.
 */
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

/**
 * Searches for movies based on a user-provided query string.
 *
 * This function sends a request to the TMDb API's search endpoint to retrieve movies that match the given query. It is designed to return an empty array if the query is just whitespace to prevent unnecessary API calls.
 *
 * @param {string} query - The search text to query for movies.
 * @returns {Promise<Movie[]>} A promise that resolves to an array of movies matching the search query.
 * @throws {Error} Throws an error if the search operation fails.
 */
export const searchMovies = async (query: string): Promise<Movie[]> => {
	if (!query.trim()) {
		return [];
	}

	try {
		const response = await tmdbClient.get('/search/movie', {
			params: { query },
		});
		const movies: Movie[] = response.data.results;
		return movies;
	} catch (error) {
		console.error('Failed to search movies:', error);
		throw new Error(MovieError.CANT_FETCH_SEARCH_RESULTS);
	}
};

/**
 * Constructs a full URL path for a movie's poster image.
 *
 * This utility function takes the path of a movie poster and a size parameter, and returns the complete URL to access the poster image. If no path is provided, it returns an empty string.
 *
 * @param {string} poster_path - The path segment of the poster image from TMDb.
 * @param {MoviePosterSizes} size - The size of the movie poster image. Defaults to 'original' size.
 * @returns {string} The full URL to the movie poster image or an empty string if the path is undefined.
 */
export const getMovieImageUrlPath = (
	poster_path: string | undefined,
	size = MoviePosterSizes.SIZE_ORIGINAL,
): string => {
	if (!poster_path) {
		return '';
	}
	return CONFIG.TMBDImageServicesBaseUrl + size + poster_path;
};

/**
 * Converts a list of genre objects to a comma-separated string of genre names.
 *
 * This function is useful for displaying genre names from a list of genre objects typically retrieved from a movie details API response. If no genres are provided, it returns an empty string.
 *
 * @param {Genres[] | undefined} genres - An array of genre objects, each containing a 'name' property.
 * @returns {string} A string containing the names of all genres concatenated and separated by commas, or an empty string if no genres are provided.
 */
export const getGenreNames = (genres: Genres[] | undefined) => {
	if (!genres) {
		return '';
	}
	return genres.map(genre => genre.name).join(', ');
};

/**
 * Converts a list of production company objects to a comma-separated string of company names.
 *
 * This function processes an array of production company details, useful for displaying a list of companies involved in the production of a movie. It returns an empty string if no companies are provided.
 *
 * @param {ProductionCompany[] | undefined} companies - An array of production company objects, each containing a 'name' property.
 * @returns {string} A string listing the names of all production companies, separated by commas, or an empty string if no companies are provided.
 */
export const getDistributionNames = (
	companies: ProductionCompany[] | undefined,
) => {
	if (!companies) {
		return '';
	}
	return companies.map(company => company.name).join(', ');
};
