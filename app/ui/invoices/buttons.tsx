import { deleteInvoice } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreateInvoice() {
  return (
    <Link href="/dashboard/invoices/create">
      <Button variant="secondary">
        <span className="hidden md:block">Create Invoice</span>{" "}
        <PlusIcon className="h-5 md:ml-4" />
      </Button>
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/invoices/${id}/edit`}>
      <Button variant="outline" size="icon" className="bg-transparent">
        <PencilIcon className="w-5" />
      </Button>
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <span className="sr-only">Delete</span>
      <Button size='icon' variant='destructive' className="bg-primary-foreground border">
        <TrashIcon className="w-5" />
      </Button>
    </form>
  );
}
