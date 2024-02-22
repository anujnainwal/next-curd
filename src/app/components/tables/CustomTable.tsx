import React, { useRef, useState } from "react";
import type { GetRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table } from "antd";
type InputRef = GetRef<typeof Input>;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];
const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "30%",
    // ...getColumnSearchProps('name'),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: "20%",
    // ...getColumnSearchProps('age'),
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    // ...getColumnSearchProps('address'),
    // sorter: (a, b) => a.address.length - b.address.length,
    // sortDirections: ["descend", "ascend"],
  },
];
const CustomTable: React.FC = () => {
  return (
    <div className="m-2">
      Users CustomTable
      <Table columns={columns}></Table>
    </div>
  );
};

export default CustomTable;
