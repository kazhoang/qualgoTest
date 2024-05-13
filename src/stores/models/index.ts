import { MovieModel, movieModel } from './movies.model';

export interface Model {
	movieModel: MovieModel;
}

export const model: Model = {
	movieModel,
};
