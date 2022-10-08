import { useEffect } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { API_URL_DEV } from '@env';

import { useAuth, useAuthUpdate, useTheme, useThemeUpdate } from '~/src/contexts/exports';
import { PageContainer } from '~src/layout/exports';
import { useAxios, useAuthData } from '~src/hooks/exports';


const HomePage = () => {

    const api = useAxios();
    const auth = useAuth();
    const updateAuth = useAuthUpdate();
    const { isLoggedIn, profile } = useAuthData();
    
    const updateTheme = useThemeUpdate();
    const theme = useTheme();
    const styles = stylesheet(theme);

    // useEffect( () => {console.log("Process Env:", process.env)}, []);
    // useEffect( () => {console.log(".env:", API_URL_DEV)}, []);
    // useEffect( () => {console.log("Auth:", auth)}, [auth]);

    const login = () => {
        const data = JSON.stringify({
            username: "sean01",
            password: "S3an1234"
        })

        api.post("api/token/", data)
            .then( res => {
                res?.data && updateAuth({tokens: res.data});
            })
            .catch( err => {})
    }

    useEffect( () => {
        // api.get('quiz/?title=arithmetic&difficulty=hard')
        //     .then( res => {})
        //     .catch( err => {});
        console.log("Theme:", theme);
        console.log("Theme:", theme?.palette?.text?.primary);
    }, [theme])

    if (!theme) return null;

    return (
        <PageContainer>
            <Text style={styles.text}>React Native Template</Text>
            <Text style={{fontSize: '1rem'}}>Username: { profile?.username || '' }</Text>
            <Text>Email: { profile?.email || '' }</Text>

            <Button onPress={ () => updateTheme(theme?.mode === 'light' ? 'dark' : 'light') } title={"Switch Theme"} />
            <Button onPress={ login } title={"Login"} />
            <Button onPress={ () => updateAuth('clear') } title={"Logout"} />
        </PageContainer>
    )
}

const stylesheet = theme => StyleSheet.create({
    viewContainer: {
        flex: 1,
        width: '100%',
    },
    header: {
        // ...theme?.PH?.PH2
    },
    text: {
        ...theme?.typography?.h4,
        color: theme?.palette?.text?.primary
    }
});

export default HomePage;