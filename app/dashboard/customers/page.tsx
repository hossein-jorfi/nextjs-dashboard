import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

const Page = async () => {
  const customers = await fetchFilteredCustomers("");

  return <CustomersTable customers={customers} />;
};

export default Page;
