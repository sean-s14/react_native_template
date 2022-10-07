import { 
    useState,
    createContext,
    useContext,
    useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { lightTheme, darkTheme } from '~/src/themes/exports';

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

const useTheme = () => useContext(ThemeContext);
const useThemeUpdate = () => useContext(ThemeUpdateContext);


function ThemeProvider({children}) {

    const [theme, setTheme] = useState('');

    const getTheme = async () => {
        let themeObject;
        try {
            const newTheme = await AsyncStorage.getItem('theme');
            if (newTheme !== null) { 
                themeObject = getThemeObject(newTheme);
            } else {
                themeObject = getThemeObject('light');
            }
        } catch(e) {
            console.log(e);
            return lightTheme;
        }
        return themeObject;
    }

    const getThemeObject = (newTheme) => {
        let themeObject;
        switch (newTheme) {
            case 'light':
                themeObject = lightTheme;
                break;
            case 'dark':
                themeObject = darkTheme;
                break;
            default:
                themeObject = lightTheme;       
        }
        return themeObject;
    }

    const storeTheme = async (newTheme) => {
        try {
            await AsyncStorage.setItem('theme', newTheme);
            let themeObject = getThemeObject(newTheme);
            setTheme(themeObject);
        } catch (e) {
            console.log(e);
        }
    }

    const updateTheme = (newTheme) => {
        storeTheme(newTheme);
        getTheme().then(res => setTheme(res));
    }

    useEffect( () => {
        getTheme().then(res => {
            // console.log(res)
            setTheme(res);
        })
    }, []);

    // useEffect( () => {
    //     console.log(theme);
    // }, [theme]);

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={updateTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export { useTheme, useThemeUpdate, ThemeProvider };