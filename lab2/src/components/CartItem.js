import {useState} from "react";
import Button from '@mui/material/Button';

export function CartItem(props, changeTotalQuantity, changeTotalPrice) {
    const {name, price, min=0, max} = props
    const [count, setCount] = useState(min)

    const increment = () => {
        if (max >= count + 1 || (!max && max!==0)) {
            setCount(count + 1)
            changeTotalQuantity(1)
            changeTotalPrice(price)
        }
    }

    const decrement = () => {
        if (min <= count - 1) {
            setCount(count - 1)
            changeTotalQuantity(-1)
            changeTotalPrice(-price)
        }
    }

    return (
        <>
            <td><span>{name}</span></td>
            <td><span>{price}</span></td>
            <td>
                <Button variant="outlined" color="primary" onClick={increment} disabled={(max || max===0) && max <= count}>+</Button>
                {count}
                <Button variant="outlined" color="primary" onClick={decrement} disabled={min >= count}>-</Button>
            </td>
            <td>{price*count}</td>
        </>
    );
}
