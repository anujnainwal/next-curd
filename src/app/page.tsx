"use client";
import { Button, Typography } from "antd";
import CustomTable from "./components/tables/CustomTable";
import { useRouter } from "next/navigation";

const { Title } = Typography;
export default function Home() {
  const navigation = useRouter();
  return (
    <main className="">
      <Title level={2} className="text-center" underline={true}>
        Next Js CURD Operation
      </Title>
      <div className="text-end mr-4">
        <Button
          type="primary"
          shape="round"
          size="middle"
          onClick={() => navigation.push("/addUsers")}
        >
          Add New Users
        </Button>
      </div>
      <CustomTable />
    </main>
  );
}
