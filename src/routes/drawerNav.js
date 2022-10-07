// import { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import useRoutes from './useRoutes';

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {

    const routes = useRoutes();

    // useEffect( () => console.log("Routes:", routes), [routes]);

    return (
        <Drawer.Navigator 
            // useLegacyImplementation={false}
        >
            { routes && routes.map( ({label, component, icon}, index) => 
                <Drawer.Screen key={index} name={label} component={component} />
            ) }
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;