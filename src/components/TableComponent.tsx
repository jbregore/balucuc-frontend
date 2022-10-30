import React from "react";

interface TableColumnProps {
  label: string;
  column?: string;
  render?: any;
  width?: string;
  center?: boolean;
}

interface TableProps {
  data: Array<any>;
  columns: Array<any>;
  // pagination?: any;
  // onPaginate?: () => void;
}

const TableComponent = (props: TableProps) => {
  const { columns, data } = props;

  const GetColumnCell = (item: any, col: TableColumnProps) => {
    if (col.column) {
      return item[col.column];
    }
    return col?.render(item);
  };

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg bg-white p-3">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
          <tr className="border-b-[1px] border-slate-200">
            {columns.map(
              (column: TableColumnProps, index: number, array: any) => {
                return (
                  <th
                    key={index}
                    className={`py-3 px-2 leading-[24px] font-bold text-[14px]`}
                    style={{
                      color: "#525F7F",
                      textAlign:
                        array.length - 1 === index || column.center
                          ? "center"
                          : "left",
                    }}
                    // f (array.length - 1 === index) {
                  >
                    {column.label}
                  </th>
                );
              }
            )}
          </tr>
        </thead>
        <tbody>
          {/* <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17
            </th>
            <td className="py-4 px-6">Sliver</td>
            <td className="py-4 px-6">Laptop</td>
            <td className="py-4 px-6">$2999</td>
            <td className="py-4 px-6">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr> */}
          {data &&
            data?.map((item: any, index: number) => {
              return (
                <tr
                  key={index}
                  className="border-b dark:bg-gray-900 dark:border-gray-700"
                  style={{
                    backgroundColor:
                      index % 2 == 0 ? "#fff" : "rgb(243 244 246 / 0.5)",
                  }}
                >
                  {columns.map(
                    (column: TableColumnProps, index: number, array: any) => {
                      return (
                        <td
                          className="text-[#525F7F] py-3 px-2 leading-[24px] text-md"
                          key={index}
                          style={{
                            width: column.width,
                            textAlign:
                              array.length - 1 === index ? "center" : "left",
                          }}
                        >
                          {GetColumnCell(item, column)}
                        </td>
                      );
                    }
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
