import { createStore, persist } from 'easy-peasy';
import { model } from './models';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

const mmkvStorageAdapter = {
	getItem: async (key: string) => {
		const value = storage.getString(key);
		return value ? JSON.parse(value) : null;
	},
	setItem: async (key: string, value: any) => {
		storage.set(key, JSON.stringify(value));
	},
	removeItem: async (key: string) => {
		storage.delete(key);
	},
};

const store = createStore(
	persist(model, {
		storage: mmkvStorageAdapter,
	}),
);

export default store;
