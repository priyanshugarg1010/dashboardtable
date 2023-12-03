import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData() {
  const url =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  const res = await fetch(url);
  const jsonData = await res.json();

  const dataWithId = jsonData.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  return dataWithId;
}

export default async function DemoPage() {
  let data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
