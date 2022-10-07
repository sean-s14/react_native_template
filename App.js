import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {
	useFonts,
	Nunito_300Light,
	Nunito_400Regular,
	Nunito_600SemiBold,
	Nunito_700Bold,
	Nunito_800ExtraBold,
	Nunito_900Black,
} from '@expo-google-fonts/nunito'

import { 
	BottomNavigation, 
	TopNavigation, 
	DrawerNavigation 
} from '~src/routes/exports';
import { AuthProvider, ThemeProvider } from '~src/contexts/exports';


const App = () => {

	const [fontsLoaded] = useFonts({
		Nunito_300Light,
		Nunito_400Regular,
		Nunito_600SemiBold,
		Nunito_700Bold,
		Nunito_800ExtraBold,
		Nunito_900Black,
	});

	const clearAll = async () => {
		try {
			await AsyncStorage.clear()
		} catch (e) {
			// clear error
			console.log(e);
		}
	}
	// useEffect( () => {clearAll();}, []);
	
	useEffect( () => { console.log("Fonts Loaded:", fontsLoaded); }, [fontsLoaded]);

	// if ( !fontsLoaded ) return null;
	
	return (
		<ThemeProvider>
			<AuthProvider>
				{/* <SafeAreaProvider> */}
					<StatusBar />
					<NavigationContainer>
						{/* <BottomNavigation /> */}
						{/* <TopNavigation /> */}
						<DrawerNavigation />
					</NavigationContainer>
				{/* </SafeAreaProvider> */}
			</AuthProvider>
		</ThemeProvider>
	);
}

export default App;