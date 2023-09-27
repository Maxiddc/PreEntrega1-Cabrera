import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import { ItemListContainer , ItemDetailcontainer } from '../pages'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ItemListContainer/>
    },
    {
        path:'/item/:idProduct',
        element: <ItemDetailcontainer /> 
    },
    {
        path:'/category/:id',
        element: <ItemListContainer />
    }
])

const Navigation = () => {
    return ( 
        <RouterProvider router={routes}/>
    )
}

export default Navigation