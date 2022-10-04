import { StyleSheet, Text } from 'react-native';

import { PageContainer } from '~src/layout/exports';

const HomePage = () => {
    
    const styles = stylesheet();

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