export function Price(props) {
    let {oldPrise, newPrice, outOfStock} = props

    let price

    if (outOfStock) {
        price = <div className="outOfStock">Немає в наявності</div>
    } else {
        if (oldPrise) {
            price = <div>
                <div className="oldPrice">
                    <del>{oldPrise} ₴</del>
                </div>
                <div className="newPrice">{newPrice} ₴</div>
            </div>
        } else {
            price = <div className="commonPrice">{newPrice} ₴</div>
        }
    }

    return (
        <div>{price}</div>
    );
}
