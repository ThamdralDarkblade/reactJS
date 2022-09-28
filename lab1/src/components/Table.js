export function Table() {
    const tableData = [
        {
            header: "First name",
            data: "Nazarii"
        },
        {
            header: "Last Name",
            data: "Leut"
        },
        {
            header: "Occupation",
            data: "Student"
        }
    ];
    const tableItems = tableData.map((item) => <tr>
            <th>{item.header}</th>
            <td>{item.data}</td>
        </tr>
    );
    return (
        <table>
            <tbody>
            {tableItems}
            </tbody>
        </table>
    );
}
