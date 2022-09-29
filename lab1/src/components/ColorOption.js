export function ColorOption(color) {
    return (
        <option key={color} value={color}>{color.toLowerCase()}</option>
    )
}
