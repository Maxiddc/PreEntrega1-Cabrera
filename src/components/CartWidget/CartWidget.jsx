import  {BsFillCartFill}  from "react-icons/bs";
import { Badge } from '@mui/material'


const CartWidget = () => {
    return (
        <Badge color='primary' badgeContent={10} >
            <BsFillCartFill/>
            </Badge>
    )
}

export default CartWidget