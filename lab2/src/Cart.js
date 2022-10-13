import {CartItem} from "./CartItem";
import {useState} from "react";

export function Cart(items) {

    let startQuantity = 0
    let startPrice = 0

    items.forEach(function (item) {
        if (item.min) {
            startQuantity = startQuantity + item.min
            startPrice = startPrice + item.min * item.price
        }
    })

    const [quantity, setTotalQuantity] = useState(startQuantity)
    const [price, setTotalPrice] = useState(startPrice)

    const changeTotalQuantity = (quantity) => {
        setTotalQuantity((totalQuantity) => totalQuantity + quantity)
    }

    const changeTotalPrice = (price) => {
        setTotalPrice((totalPrice) => totalPrice + price)
    }

    return (
        <>
            <h2>Cart</h2>
            <table className="cart">
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                {items.map((item, i) => {
                    return (
                        <tr key={i}>
                            {CartItem(item, changeTotalQuantity, changeTotalPrice)}
                        </tr>
                    )
                })}
                <tr>
                    <th colSpan={2}>Totals</th>
                    <th>{quantity}</th>
                    <th>{price}</th>
                </tr>
                </tbody>
            </table>
        </>
    );
}
