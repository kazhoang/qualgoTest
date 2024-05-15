import { qualgoClient } from '@/App';
import { Action, action, thunk, Thunk } from 'easy-peasy';
import { Movie, MovieCategory } from 'qualgo-sdk';

export interface MovieState {
	upcomingMovies: Movie[];
	nowPlayingMovies: Movie[];
	popularMovies: Movie[];
}

export interface MovieActions {
	setUpcomingMovies: Action<MovieModel, Movie[]>;
	setNowPlayingMovies: Action<MovieModel, Movie[]>;
	setPopularMovies: Action<MovieModel, Movie[]>;
}

export interface MovieThunks {
	fetchUpcomingMovies: Thunk<this>;
	fetchNowPlayingMovies: Thunk<this>;
	fetchPopularMovies: Thunk<this>;
}

export interface MovieModel extends MovieState, MovieActions, MovieThunks {}

export const movieModel: MovieModel = {
	upcomingMovies: [],
	nowPlayingMovies: [],
	popularMovies: [],
	setUpcomingMovies: action((state, payload) => {
		state.upcomingMovies = payload;
	}),
	setNowPlayingMovies: action((state, payload) => {
		state.nowPlayingMovies = payload;
	}),
	setPopularMovies: action((state, payload) => {
		state.popularMovies = payload;
	}),
	fetchUpcomingMovies: thunk(async actions => {
		try {
			const movies = await qualgoClient.getMovies(MovieCategory.Upcoming);
			actions.setUpcomingMovies(movies);
		} catch (error) {
			console.error('Failed to fetch upcoming movies:', error);
		}
	}),
	fetchNowPlayingMovies: thunk(async actions => {
		try {
			const movies = await qualgoClient.getMovies(MovieCategory.NowPlaying);
			actions.setNowPlayingMovies(movies);
		} catch (error) {
			console.error('Failed to fetch now playing movies:', error);
		}
	}),
	fetchPopularMovies: thunk(async actions => {
		try {
			const movies = await qualgoClient.getMovies(MovieCategory.Popular);
			actions.setPopularMovies(movies);
		} catch (error) {
			console.error('Failed to fetch now playing movies:', error);
		}
	}),
};
