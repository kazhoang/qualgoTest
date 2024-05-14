import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { useTheme } from '@/theme';
import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RouteName } from '@/types/navigation';
import HomeScreen from '@/screens/HomeScreen';
import DetailsScreen from '@/screens/DetailsScreen';

export type RootStackParamList = {
	Home: undefined;
	Details: {
		movieId: number | string;
	};
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
			<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name={RouteName.Home} component={HomeScreen} />
				<Stack.Screen name={RouteName.Details} component={DetailsScreen} />
				{/* <Stack.Screen
					name={RouteName.CreateBeneficiaryScreen}
					component={CreateBeneficiaryScreen}
				/> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
