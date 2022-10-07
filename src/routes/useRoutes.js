import {
    HomePage,
    AboutPage
} from '~/src/pages/exports';


const useRoutes = () => {

    const routes = [
        {
            label: 'Home',
            component: HomePage,
            icon: '',
        },
        {
            label: 'About',
            component: AboutPage,
            icon: '',
        },
    ]

    return routes;
}

export default useRoutes;