import { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { API_URL_DEV } from '@env';

import { PageContainer } from '~src/layout/exports';
import { useAxios } from '~src/hooks/useAxios';

const HomePage = () => {

    const api = useAxios();
    
    const styles = stylesheet();

    useEffect( () => {console.log("Process Env:", process.env)}, []);
    useEffect( () => {console.log(".env:", API_URL_DEV)}, []);

    useEffect( () => {
        api.get('quiz/?title=arithmetic&difficulty=hard')
            .then( res => {})
            .catch( err => {});
    }, [])

    return (
        <PageContainer>
            <Text>Home</Text>
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