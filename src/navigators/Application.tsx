import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from '@/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteName } from '@/types/navigation';
import HomeScreen from '@/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer theme={navigationTheme}>
			<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name={RouteName.HomeScreen} component={HomeScreen} />
				{/* <Stack.Screen
					name={RouteName.TransactionScreen}
					component={TransactionScreen}
				/>
				<Stack.Screen
					name={RouteName.CreateBeneficiaryScreen}
					component={CreateBeneficiaryScreen}
				/> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
