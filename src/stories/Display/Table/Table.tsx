// /* eslint-disable import/no-extraneous-dependencies */
// import { useMemo } from 'react';
// import { useTable } from 'react-table';

// const Table = () => {
// 	const data = useMemo(
// 		() => [
// 			{
// 				col1: 'Hello',
// 				col2: 'World',
// 			},
// 			{
// 				col1: 'react-table',
// 				col2: 'rocks',
// 			},
// 			{
// 				col1: 'whatever',
// 				col2: 'you want',
// 			},
// 		],
// 		[]
// 	);

// 	const columns = useMemo(
// 		() => [
// 			{
// 				Header: 'Column 1',
// 				accessor: 'col1', // accessor is the "key" in the data
// 			},
// 			{
// 				Header: 'Column 2',
// 				accessor: 'col2',
// 			},
// 		],
// 		[]
// 	);

// 	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
// 		useTable({ columns, data });
// 	return (
// 		<table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
// 			<thead>
// 				{headerGroups.map((headerGroup) => (
// 					<tr {...headerGroup.getHeaderGroupProps()}>
// 						{headerGroup.headers.map((column) => (
// 							<th
// 								{...column.getHeaderProps()}
// 								style={{
// 									borderBottom: 'solid 3px red',
// 									background: 'aliceblue',
// 									color: 'black',
// 									fontWeight: 'bold',
// 								}}
// 							>
// 								{column.render('Header')}
// 							</th>
// 						))}
// 					</tr>
// 				))}
// 			</thead>
// 			<tbody {...getTableBodyProps()}>
// 				{rows.map((row) => {
// 					prepareRow(row);
// 					return (
// 						<tr {...row.getRowProps()}>
// 							{row.cells.map((cell) => {
// 								return (
// 									<td
// 										{...cell.getCellProps()}
// 										style={{
// 											padding: '10px',
// 											border: 'solid 1px gray',
// 											background: 'papayawhip',
// 										}}
// 									>
// 										{cell.render('Cell')}
// 									</td>
// 								);
// 							})}
// 						</tr>
// 					);
// 				})}
// 			</tbody>
// 		</table>
// 	)
// };

// export default Table;

import { useTable, Column } from 'react-table';

interface TableProps {
	columns: Column[];
	data: MyData[];
}

interface MyData {
	col1: string;
	col2: string;
}

const Table = ({ columns, data }: TableProps) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	return (
		<table
			{...getTableProps()}
			className="border-collapse border border-gray-500"
		>
			<thead>
				{headerGroups.map((headerGroup, headerGroupIndex) => (
					<tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
						{headerGroup.headers.map((column, index) => (
							<th
								{...column.getHeaderProps()}
								key={index}
								className="border border-gray-500 bg-gray-200 px-4 py-2 font-bold text-left"
							>
								{column.render('Header')}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, rowIndex) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()} key={rowIndex}>
							{row.cells.map((cell, cellIndex) => {
								return (
									<td
										{...cell.getCellProps()}
										key={cellIndex}
										className="border border-gray-500 px-4 py-2 bg-white text-center"
									>
										{cell.render('Cell')}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
