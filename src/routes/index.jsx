import { createBrowserRouter } from "react-router-dom";
import Home from '~/pages/home';
import Explore from '~/pages/explore';
import Notifications from '~/pages/notifications';
import Messages from '~/pages/messages';
import Lists from '~/pages/lists';
import Premium from '~/pages/premium';
import Profile from '~/pages/profile';
import More from '~/pages/more';
import NotFound from "~/pages/notfound";
import MainLayout from "~/layout/main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '*',
                element: <NotFound />
            },
            {
                path: '/explore',
                element: <Explore />
            },
            {
                path: '/notifications',
                element: <Notifications />
            },
            {
                path: '/messages',
                element: <Messages />
            },
            {
                path: '/lists',
                element: <Lists />
            },
            {
                path: '/premium',
                element: <Premium />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/more',
                element: <More />
            },

        ]
    }
])

export default routes