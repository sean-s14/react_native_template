import { useEffect } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { API_URL_DEV } from '@env';

import { useAuth, useAuthUpdate } from '~/src/contexts/exports';
import { PageContainer } from '~src/layout/exports';
import { useAxios } from '~src/hooks/useAxios';

const HomePage = () => {

    const api = useAxios();
    const auth = useAuth();
    const updateAuth = useAuthUpdate();
    
    const styles = stylesheet();

    // useEffect( () => {console.log("Process Env:", process.env)}, []);
    // useEffect( () => {console.log(".env:", API_URL_DEV)}, []);
    // useEffect( () => {console.log("Auth:", auth)}, [auth]);

    useEffect( () => {
        api.get('quiz/?title=arithmetic&difficulty=hard')
            .then( res => {})
            .catch( err => {});

        const data = JSON.stringify({
            username: "sean01",
            password: "S3an1234"
        })
        
        api.post("api/token/", data)
            .then( res => {
                res?.data && updateAuth({tokens: res.data});
            })
            .catch( err => {

            })
    }, [])

    return (
        <PageContainer>
            <Text>Home</Text>
            <Button onPress={ () => updateAuth('clear')} title={"Clear Auth"} />
        </PageContainer>
    )
}

const stylesheet = theme => StyleSheet.create({
    viewContainer: {
        flex: 1,
        width: '100%',
    },
});

export default HomePage;