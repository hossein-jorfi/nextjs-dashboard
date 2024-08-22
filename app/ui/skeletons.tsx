import { Skeleton } from "@/components/ui/skeleton";

// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl border-2 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        {/* <div className="h-5 w-5 rounded-md bg-gray-200" /> */}
        <Skeleton className="h-6 w-6 rounded-md" />
        <Skeleton className="ml-2 h-6 w-16 rounded-md" />
      </div>
      <Skeleton className="flex items-center justify-center truncate rounded-xl bg-primary-foreground px-4 py-8">
        <Skeleton className="h-7 w-20 rounded-md " />
      </Skeleton>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <Skeleton className="mb-4 h-8 w-36 rounded-md" />
      <div className="rounded-xl border-2 p-4">
        <Skeleton className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="ml-2 h-4 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton({ isLast }: { isLast?: boolean }) {
  return (
    <div
      className={`flex flex-row items-center justify-between py-4 ${
        !isLast && "border-b"
      }`}
    >
      <div className="flex items-center">
        <Skeleton className="mr-2 h-8 w-8 rounded-full bg-primary/10" />
        <div className="min-w-0">
          <Skeleton className="h-5 w-40 rounded-md bg-primary/10" />
          <Skeleton className="mt-2 h-4 w-12 rounded-md bg-primary/10" />
        </div>
      </div>
      <Skeleton className="mt-2 h-4 w-12 rounded-md bg-primary/10" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <Skeleton className="mb-4 h-8 w-36 rounded-md" />
      <div className="flex grow flex-col justify-between rounded-xl border-2 p-4">
        <div className="bg-primary-foreground rounded-lg px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton isLast />
        </div>
        <div className="flex items-center pb-2 pt-6">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="ml-2 h-4 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full bg-primary/10"></Skeleton>
          <Skeleton className="h-6 w-24 rounded-lg bg-primary/10"></Skeleton>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-32 rounded-lg bg-primary/10"></Skeleton>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-16 rounded-lg bg-primary/10"></Skeleton>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-16 rounded-lg bg-primary/10"></Skeleton>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-16 rounded-lg bg-primary/10"></Skeleton>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <Skeleton className="h-[36px] w-[36px] rounded-lg bg-primary/10"></Skeleton>
          <Skeleton className="h-[36px] w-[36px] rounded-lg bg-primary/10"></Skeleton>
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md border-2 p-4">
      <div className="flex items-center justify-between border-b pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full"></div>
          <div className="h-6 w-16 rounded"></div>
        </div>
        <div className="h-6 w-16 rounded "></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded "></div>
          <div className="mt-2 h-6 w-24 rounded "></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded "></div>
          <div className="h-10 w-10 rounded "></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg border-2 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-primary-foreground">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
