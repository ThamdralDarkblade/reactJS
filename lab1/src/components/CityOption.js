export function CityOption(props) {
    let { id, name } = props;
    return (
        <option key={id} value={id}>{name}</option>
    )
}
