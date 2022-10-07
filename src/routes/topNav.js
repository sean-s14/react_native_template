// import { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'react-native';

import useRoutes from './useRoutes';

const Tab = createMaterialTopTabNavigator();


const TopNavigation = () => {

    const routes = useRoutes();

    // useEffect( () => console.log("Routes:", routes), [routes]);

    return (
        <Tab.Navigator style={{ marginTop: StatusBar.currentHeight }}>
            { routes && routes.map( ({label, component, icon}, index) => 
                <Tab.Screen key={index} name={label} component={component} />
            ) }
        </Tab.Navigator>
    );
}

export default TopNavigation;