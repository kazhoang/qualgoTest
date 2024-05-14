import { MovieDetail } from '@/types/schemas/movie';
import { useState, useEffect } from 'react';
import { fetchMovieDetail } from '.';
import { MovieError } from '@/types/errors';

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
