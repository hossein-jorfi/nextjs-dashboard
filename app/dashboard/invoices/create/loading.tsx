import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { InvoiceFormSkeleton } from "@/app/ui/skeletons";

const Loading = () => {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <InvoiceFormSkeleton />
    </div>
  );
};

export default Loading;
