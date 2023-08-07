import React from "react";
import { IResourceComponentsProps, pickNotDeprecated, useNavigation } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";

const makedata = [
  {
    id: 6,
    name: "pern",
    surname: "onmany",
    age: 23,
    village: "doykoi",
    sex: "male"
    
  },
  {
    id: 6,
    name: "xaymone",
    surname: "onmany",
    age: 21,
    village: "thongkarng",
    sex: "male"
    
  },
  {
    id: 6,
    name: "sandy",
    surname: "louangkhamzao",
    age: 21,
    village: "donnokkhoum",
    sex:"male",
  },
  {
    name: "soutsada",
    surname: "",
    age: 21,
    village: "doykoi",
    sex: "famale",
    id: 5,
  },
  {
    id: 1,
    name: "anny",
    surname: "",
    age: 23,
    village: "doykoi",
    sex: "famle",
  },
];
export const ReportList: React.FC<IResourceComponentsProps> = () => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "kkk",
        accessorKey: "kkk",
        header: "Id",
      },
      {
        id: "id",
        accessorKey: "id",
        header: "Id",
      },
      {
        id: "id",
        accessorKey: "id",
        header: "Id",
      },
      {
        id: "username",
        accessorKey: "name",
        header: "Username",    
      },

      {
        id: "actions",
        accessorKey: "id",
        header: "Actions",

        cell: function render({ getValue }) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "4px",
              }}
            >
              <button
                onClick={() => {
                  show("user", getValue() as string);
                }}
              >
                show
              </button>
              <button
                onClick={() => {
                  edit("user", getValue() as string);
                }}
              >
                Edit
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const { edit, show, create } = useNavigation();
  const {
    getHeaderGroups,
    getRowModel,
    setOptions,
    refineCore: {
      tableQueryResult: { data: tableData },
    },
    getState,
    setPageIndex,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable({
    data: makedata,
    columns,
  });

  setOptions((prev) => ({
    ...prev,
    meta: {
      ...prev.meta,
    },
  }));

  return (
    
    <div className="  p-5 shadow-2xl shadow-cyan-300 bg-emerald-400 hover:bg-purple-300">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "space-between",
          
        }}
      >
        
        <h1 className="text-cyan-100">ລາຍງານລົດທີ່ລ່ວງລະເມີດ</h1>
        <button onClick={() => create("user")}></button>
      </div>
      
      <div>
        <table>
          <thead>
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: "12px" }}>
        <button
          onClick={() => setPageIndex(0)}
          disabled={!getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!getCanNextPage()}>
          {">"}
        </button>
        <button
          onClick={() => setPageIndex(getPageCount() - 1)}
          disabled={!getCanNextPage()}
        >
          {">>"}
        </button>
        <span>
          Page
          <strong>
            {getState().pagination.pageIndex + 1} of {getPageCount()}
          </strong>
        </span>
        <span>
          | Go to page:
          <input
            type="number"
            defaultValue={getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              setPageIndex(page);
            }}
          />
        </span>{" "}
        <select
          value={getState().pagination.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
