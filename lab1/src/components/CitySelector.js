import {CityOption} from "./CityOption";
import Form from 'react-bootstrap/Form';

export function CitySelector(props) {
    return (
        <div>
            <Form.Select aria-label="City Selector">
                <option disabled defaultValue>---Select---</option>
                {props.map((city) => {
                    return CityOption(city)
                })}
            </Form.Select>
        </div>
    )
}
