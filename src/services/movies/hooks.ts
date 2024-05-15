import { Movie, MovieDetail } from '@/types/schemas/movie';
import { useState, useEffect } from 'react';
import { fetchMovieDetail, searchMovies } from '.';
import { MovieError } from '@/types/errors';
import { useDebounce } from '@/utils/helpers';

/**
 * Custom React hook for querying movie details.
 *
 * @param {number|string} query - The search query from input.
 * @returns {object} The movie details, loading status, and error information.
 */
export const useMovieDetail = (movieId: number | string) => {
	const [isLoading, setIsLoading] = useState(true);
	const [movieData, setMovieData] = useState<MovieDetail | null>(null);
	const [error, setError] = useState<MovieError | null>(null);

	useEffect(() => {
		console.log('call', movieId);

		const getMovieDetail = async () => {
			try {
				const data = await fetchMovieDetail(movieId);
				setMovieData(data);
				setError(null);
			} catch (_) {
				setError(MovieError.CANT_FETCH_MOVIE_DETAIL);
			} finally {
				setIsLoading(false);
			}
		};

		getMovieDetail();
	}, [movieId]);

	return { isLoading, movieData, error };
};

/**
 * Custom React hook for searching movies based on a user's query.
 *
 * @param {string} query - The search query from input.
 * @returns {object} The search results, loading status, and no result indicator.
 */
const useSearchMovies = (query: string) => {
	const [searchResults, setSearchResults] = useState<Movie[]>([]);
	const [loading, setLoading] = useState(false);
	const [noResult, setNoResult] = useState(false);
	const debouncedQuery = useDebounce(query, 500);

	useEffect(() => {
		if (!debouncedQuery) {
			setSearchResults([]);
			setNoResult(false);
			return;
		}

		setLoading(true);

		searchMovies(debouncedQuery)
			.then(newResults => {
				setNoResult(newResults.length === 0);
				setSearchResults(newResults);
			})
			.catch(error => {
				console.error('Failed to fetch movies:', error);
			})
			.finally(() => setLoading(false));
	}, [debouncedQuery]);

	return { searchResults, loading, noResult };
};

export default useSearchMovies;
