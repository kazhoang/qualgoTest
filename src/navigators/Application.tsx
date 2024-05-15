import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { useTheme } from '@/theme';

import { RouteName } from '@/types/navigation';
import { DetailsScreen, HomeScreen, SearchScreen } from '@/screens';
import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
	Home: undefined;
	Details: {
		movieId: number | string;
	};
	Search: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, T>;

export const useAppNavigation = () => {
	return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer theme={navigationTheme}>
			<Stack.Navigator
				key={variant}
				initialRouteName={RouteName.Home}
				screenOptions={{
					gestureEnabled: false,
					headerShown: false,
				}}
			>
				<Stack.Screen name={RouteName.Home} component={HomeScreen} />
				<Stack.Screen
					name={RouteName.Details}
					component={DetailsScreen}
					options={{
						animation: 'fade',
						presentation: 'transparentModal',
					}}
				/>
				<Stack.Screen
					name={RouteName.Search}
					component={SearchScreen}
					options={{
						presentation: 'modal',
						gestureEnabled: true,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
