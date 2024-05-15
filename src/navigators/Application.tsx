import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from '@/theme';
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RouteName } from '@/types/navigation';
import HomeScreen from '@/screens/HomeScreen';
import DetailsScreen from '@/screens/DetailsScreen';
import SearchScreen from '@/screens/SearchScreen';

export type RootStackParamList = {
	Home: undefined;
	Details: {
		movieId: number | string;
	};
	Search: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

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
					cardOverlayEnabled: true,
					cardStyle: { backgroundColor: 'transparent' },
				}}
			>
				<Stack.Screen name={RouteName.Home} component={HomeScreen} />
				<Stack.Screen
					name={RouteName.Details}
					component={DetailsScreen}
					options={{
						presentation: 'transparentModal',
						cardStyleInterpolator: ({ current: { progress } }) => ({
							cardStyle: {
								opacity: progress,
							},
						}),
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
