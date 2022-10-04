import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


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
                    <StatusBar style="auto" />
                </ScrollView>
            : 
                <View
                    {...props?.viewProps}
                    style={[styles.viewContainer, props.viewStyle]}
                >
                    { props.children }
                    <StatusBar style="auto" />
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