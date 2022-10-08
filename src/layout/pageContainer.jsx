// import { useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { useTheme } from '~src/contexts/exports';


const PageContainer = (props) => {

    const theme = useTheme();
    const styles = stylesheet(theme);

    return (
        props.scroll 
            ?
                <ScrollView
                    {...props?.viewProps}
                    style={[styles.viewContainer, props.viewStyle]}
                >
                    { props.children }
                </ScrollView>
            : 
                <View
                    {...props?.viewProps}
                    style={[styles.viewContainer, props.viewStyle]}
                >
                    { props.children }
                </View>
        
    )
}

const stylesheet = theme => StyleSheet.create({
    viewContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
    },
});

export default PageContainer;