"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { State, updateInvoice } from "@/app/lib/actions";
import { CustomerField, InvoiceForm } from "@/app/lib/definitions";
import {
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ChevronRightIcon, Loader2 } from "lucide-react";

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(
    updateInvoiceWithId,
    initialState
  );

  return (
    <form action={formAction}>
      <div className="rounded-lg border p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>

          <Select name="customerId" defaultValue={invoice.customer_id}>
            <SelectTrigger className="w-full pl-10 relative text-muted-foreground checked:text-red-500">
              <UserCircleIcon className="w-[18px] h-[18px] absolute left-3" />
              <SelectValue placeholder="Customer" />
            </SelectTrigger>
            <SelectContent className="">
              {customers.map((customer) => (
                <SelectItem key={customer.id} value={customer.id}>
                  {customer.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {state.errors?.customerId &&
            state.errors.customerId.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <Input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                defaultValue={invoice.amount}
                className="block w-full border py-2 pl-10 text-sm text-muted-foreground"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground peer-focus:text-primary " />
            </div>
          </div>
          {state.errors?.amount &&
            state.errors?.amount.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        {/* Invoice Status */}
        {/* defaultChecked={invoice.status === "pending"} */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md px-[14px] border py-3">
            <RadioGroup
              defaultValue={invoice.status}
              className="flex gap-5"
              name="status"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="pending" value="pending" />
                <Label htmlFor="pending">Pending</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="paid" value="paid" />
                <Label htmlFor="paid">Paid</Label>
              </div>
            </RadioGroup>
          </div>
          {state.errors?.status &&
            state.errors?.status.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link href="/dashboard/invoices">
          <Button variant="secondary">Cancel</Button>
        </Link>
        <Button type="submit" variant="default" disabled={isPending}>
          {isPending ? (
            <div className="relative">
              <span className="opacity-0">Edit Invoice</span>
              <Loader2 className="h-6 w-6 animate-spin absolute left-0 right-0 ml-auto mr-auto top-0" />
            </div>
          ) : (
            "Edit Invoice"
          )}
        </Button>
      </div>
    </form>
  );
}
