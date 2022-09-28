import {useState} from "react";
import {ColorOption} from "./ColorOption";
import Form from 'react-bootstrap/Form';

export function ColorSelector(props) {
    let {colors, text, backgroundColor} = props;
    const [currentColor, setColor] = useState(backgroundColor)

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    const style = {
        backgroundColor: currentColor,
        marginTop: '16px'
    }

    return (<div>
            <h3 style={style}>I'm text on {currentColor} background, so "{text}"</h3>
            <Form.Select aria-label="City Selector" onChange={changeColor}>
                {colors.map((color) => {
                    return ColorOption(color)
                })}
            </Form.Select>
        </div>)
}
