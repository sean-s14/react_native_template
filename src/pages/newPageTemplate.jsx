import { StyleSheet, Text } from 'react-native';

import { PageContainer } from '~src/layout/exports';

const NewPageTemplate = () => {
    
    const styles = stylesheet();

    return (
        <PageContainer>
            <Text>New Page Template</Text>
        </PageContainer>
    )
}

const stylesheet = theme => StyleSheet.create({
    viewContainer: {
        flex: 1,
        width: '100%',
    },
});

export default NewPageTemplate;