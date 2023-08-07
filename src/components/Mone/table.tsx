import React from "react";
import { IResourceComponentsProps, useNavigation } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import Menubar from "./Menubar";
const MakeData = [
  {
    car: "ຮູບພາບ",
    paiy: "ກຈ 9999",
    brand: "TOYOTA",
    color: "ສີແດງ",
    typepaiy: "ປ້າຍເຫຼືອງ",
    province: "ແຂວງວຽງຈັນ",
    time: "2023/06/30 10:31 AM",
    id: "1",
  },
  {
    car: "ຮູບພາບ",
    paiy: "ກກ 1111",
    brand: "HYUNDAI",
    color: "ສີສົ້ມ",
    typepaiy: "ປ້າຍຟ້າ",
    province: "ແຂວງຈຳປາສັກ",
    time: "2023/06/30 10:31 AM",
    id: "2",
  },
  {
    car: "ຮູບພາບ",
    paiy: "ກກ 2222",
    brand: "FORD",
    color: "ສີດຳ",
    typepaiy: "ປ້າຍເຫຼືອງ",
    province: "ກຳແພງນະຄອນ",
    time: "2023/06/30 10:31 AM",
    id: "3",
  },
  {
    car: "ຮູບພາບ",
    paiy: "ກບ 3333",
    brand: "KIA",
    color: "ສີຂາວ",
    typepaiy: "ປ້າຍແດງ",
    province: "ສະຫວັນນະເຂດ",
    time: "2023/06/30 10:31 AM",
    id: "4",
  },
];

export const Table: React.FC<any> = () => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "0",
        accessorKey: "id",
        header: "ລຳດັບ",
      },
      {
        id: "1",
        accessorKey: "paiy",
        header: "ປ້າຍລົດ",
      },
      {
        id: "2",
        accessorKey: "brand",
        header: "ຍີ່ຫໍ້ລົດ",
      },
      {
        id: "3",
        accessorKey: "color",
        header: "ສີລົດ",
      },
      {
        id: "4",
        accessorKey: "typepaiy",
        header: "ປະເພດສີປ້າຍ",
      },
      {
        id: "5",
        accessorKey: "province",
        header: "ແຂວງ",
      },
      {
        id: "6",
        accessorKey: "time",
        header: "ເວລາລ່ວງລະເມີດ",
      },
      {
        id: "action",
        accessorKey: "action",
        header: "acctionnn",

        cell: function render({ getValue }) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              <button
                onClick={() => {
                  show("user", getValue() as string);
                }}
              >
                <a href="#">
                  Show
                </a>
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
  } = useTable({
    data: MakeData,
    columns,
  });

  setOptions((prev) => ({
    ...prev,
    meta: {
      ...prev.meta,
    },
  }));

  return (
    <div>
      <div className="text-white">
        <Menubar />
      </div>
      <div className="overflow-x-auto bg-slate-900 my-5 px-6 pb-12">
        <table className="min-w-max w-full table-auto my-5">
          <thead className="bg-slate-800 border-b table-auto text-white">
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left"
                  >
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
              <tr
                key={row.id}
                className="bg-slate-600 border-b transition duration-300 ease-in-out hover:bg-slate-700 text-white"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="text-sm font-light px-6 py-4 whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      <div className="flex items-center justify-centers border-gray-200 text-white px-4 py-3 sm:px-2">
        
        <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between ">
         
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-current="page"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2  ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
