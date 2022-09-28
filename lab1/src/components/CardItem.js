import {Price} from "./Price";
import {Card} from "react-bootstrap";

export function CardItem(props) {
    let {img, title, price} = props;

    return (
        <Card className="text-start">
            <Card.Img variant="top" src={img} alt={title} style={{height: '200px'}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {Price(price)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
