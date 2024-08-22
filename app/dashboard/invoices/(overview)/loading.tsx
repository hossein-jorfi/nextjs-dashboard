import { CreateInvoice } from "@/app/ui/invoices/buttons";
import InvoicesPagination from "@/app/ui/invoices/invoice-pagination";
import Search from "@/app/ui/search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Pagination } from "@/components/ui/pagination";

const Laoding = () => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
        <InvoicesTableSkeleton />
      <div className="mt-5 flex w-full justify-center">
        <InvoicesPagination totalPages={0} />
      </div>
    </div>
  );
};

export default Laoding;
