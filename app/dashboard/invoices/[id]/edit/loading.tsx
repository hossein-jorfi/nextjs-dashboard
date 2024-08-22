import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { InvoiceFormSkeleton } from "@/app/ui/skeletons";

const Loading = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${params?.id}/edit`,
            active: true,
          },
        ]}
      />
      <InvoiceFormSkeleton />
    </div>
  );
};

export default Loading;
