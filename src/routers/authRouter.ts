import { RouteConfig } from "./modal";
import AuthLayout from "src/components/layout/authentication"
import login from 'src/views/login'
import RegisterPage from 'src/views/register'
import ForgotPage from 'src/views/forgotPassword'
const loginRouter: Array<RouteConfig> = [
    {
        path: '/login',
        element: AuthLayout,
        props: {
            type: "login",
        },
        children: [
            {
                path: '',
                Component: login
            }
        ]
    },
    {
        path: '/register',
        element: AuthLayout,
        props: {
            type: "register",
        },
        children: [
            {
                path: '',
                Component: RegisterPage
            }
        ]
    },
    {
        path: '/forgotpassword',
        element: AuthLayout,
        props: {
            type: "forgotpassword",
        },
        children: [
            {
                path: '',
                Component: ForgotPage
            }
        ]
    }
]

export default loginRouter