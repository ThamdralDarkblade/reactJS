import {CardItem} from "./CardItem";
import {CardGroup} from "react-bootstrap";
import {Button} from "react-bootstrap";

export function CardList(props) {
    return (
        <div>
            <CardGroup>
                {props.map((item) => {return CardItem(item)})}
            </CardGroup>
            <div className="mt-2 float-end">
                <Button variant="outline-dark">Показати ще</Button>
            </div>
        </div>
    );
}
