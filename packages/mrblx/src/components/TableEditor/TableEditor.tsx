import React from 'react';
import TableRow from './TableRow';

function countColumns(data: string[][]) {
    let count = 0;
    for (const row of data) {
        count = Math.max(count, row.length);
    }
    return count;
}

const TableEditor = (props: {
    id: string,
    columns?: string[],
    data: string[][],
    setData: (data: string[][]) => void,
}) => {
    const columnCount = countColumns(props.data);

    function onAdd(index: number) {
        const newData = [...props.data];
        newData.splice(index + 1, 0, new Array(columnCount).fill(''));
        props.setData(newData);
    }

    function onDelete(index: number) {
        const newData = [...props.data];
        newData.splice(index, 1);
        props.setData(newData);
    }

    function onEdit(index: number, row: string[]) {
        const newData = [...props.data];
        newData[index] = row;
        props.setData(newData);
    }

    function onDrop(toIndex: number, transferData: string) {
        const data = JSON.parse(transferData) as {
            index: number,
            data: string[],
        }

        const newData = [...props.data];
        newData.splice(data.index, 1);
        newData.splice(toIndex, 0, data.data);

        props.setData(newData);
    }

    return (
        <table id={props.id} className={'mrblx--table-editor'} style={{width: '100%'}}>
            <tbody>
            {props.data.map((tr, index) => (
                <TableRow
                    id={`${props.id}-${index}`}
                    key={index}
                    index={index}
                    data={tr}
                    onAdd={() => onAdd(index)}
                    onDelete={() => onDelete(index)}
                    onEdit={row => onEdit(index, row)}
                    onDrop={data => onDrop(index, data)}
                />
            ))}
            </tbody>
        </table>
    );
};

export default TableEditor;
