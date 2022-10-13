import {MyCounter} from "./MyCounter";

export function CounterList(counters) {
    return (
        <table className="counterList">
            <tbody>
            {counters.map((counter) => {
                const {id, initial, min, max} = counter
                return <tr className="listItem" key={id}>
                    <td>{MyCounter(initial, min, max)}</td>
                </tr>
            })}
            </tbody>
        </table>
    );
}
