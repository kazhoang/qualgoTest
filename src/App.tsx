import React from 'react';
import './translations';

import { ThemeProvider } from '@/theme';

import { StoreProvider } from 'easy-peasy';
import ApplicationNavigator from './navigators/Application';

import store, { storage } from './stores';

function App() {
	return (
		<StoreProvider store={store}>
			<ThemeProvider storage={storage}>
				<ApplicationNavigator />
			</ThemeProvider>
		</StoreProvider>
	);
}

export default App;
