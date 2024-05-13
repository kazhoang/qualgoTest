import axios from 'axios';
import CONFIG from './tmbd';

const tmdbClient = axios.create({
	baseURL: CONFIG.TMBDBaseUrl,
	params: {
		api_key: CONFIG.TMDBApiKey,
		language: 'en',
	},
});

export { tmdbClient };
