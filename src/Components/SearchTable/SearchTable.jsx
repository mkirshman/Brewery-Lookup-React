import React from 'react';
import { useTable } from 'react-table';

function SearchTable({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'Brewery Type',
        accessor: 'brewery_type',
      },
      {
        Header: 'Address 1',
        accessor: 'address_1',
      },
      {
        Header: 'Address 2',
        accessor: 'address_2',
      },
      {
        Header: 'Address 3',
        accessor: 'address_3',
      },
      {
        Header: 'State/Province',
        accessor: 'state_province',
      },
      {
        Header: 'Postal Code',
        accessor: 'postal_code',
      },
      {
        Header: 'Website URL',
        accessor: 'website_url',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table-container">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>
                    {typeof cell.value === 'object' ? (
                      // If the cell value is an object, render its properties individually
                      Object.values(cell.value).join(', ')
                    ) : (
                      // Otherwise, render the cell value directly
                      cell.render('Cell')
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchTable;
