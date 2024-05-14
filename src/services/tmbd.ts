type ConfigTypes = {
	TMBDBaseUrl: string;
	TMBDImageServicesBaseUrl: string;
	TMBDImageServicesThumbnailUrl: string;
	TMDBApiKey: string;
};

const CONFIG: ConfigTypes = {
	TMBDBaseUrl: 'https://api.themoviedb.org/3',
	TMBDImageServicesBaseUrl: 'https://image.tmdb.org/t/p/original/',
	TMBDImageServicesThumbnailUrl: 'https://image.tmdb.org/t/p/w120/',
	TMDBApiKey: '6abbffe6a33b23baa63f68b8e45e2dc5',
};

export default CONFIG;
