import { CreateInvoice } from "@/app/ui/invoices/buttons";
import InvoicesPagination from "@/app/ui/invoices/invoice-pagination";
import Search from "@/app/ui/search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

const Laoding = () => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense>
          <Search placeholder="Search invoices..." />
        </Suspense>
        <CreateInvoice />
      </div>
      <InvoicesTableSkeleton />
      <div className="mt-5 flex w-full justify-center">
        <Suspense>
          <InvoicesPagination totalPages={0} />
        </Suspense>
      </div>
    </div>
  );
};

export default Laoding;
