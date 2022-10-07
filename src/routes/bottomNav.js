// import { useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import useRoutes from './useRoutes';

const Tab = createMaterialBottomTabNavigator();


const BottomNavigation = () => {

    const routes = useRoutes();

	return (
		<Tab.Navigator>
			{ routes && routes.map( ({label, component, icon}, index) => 
				<Tab.Screen key={index} name={label} component={component} />
			) }
		</Tab.Navigator>
	);
}

export default BottomNavigation;