export type Movie = {
	adult?: boolean;
	backdrop_path?: string;
	genre_ids?: [];
	id: number | string;
	original_language?: string;
	original_title?: string;
	overview?: string;
	popularity?: number;
	poster_path: string;
	release_date?: string;
	title: string;
	video: boolean;
	vote_average?: number;
	vote_count?: number;
};

export enum MovieCategory {
	NowPlaying = 'now_playing',
	Upcoming = 'upcoming',
	Popular = 'popular',
}
