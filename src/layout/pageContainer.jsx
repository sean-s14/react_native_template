// import { useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

const PageContainer = (props) => {

    const styles = stylesheet();

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
    },
});

export default PageContainer;