"use client";
import { generatePagination } from "@/app/lib/utils";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

export default function InvoicesPagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(currentPage - 1, searchParams, pathname)}
              className={currentPage <= 1 ? "opacity-50" : ""}
            />
          </PaginationItem>

          {allPages.map((page) => {
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  key={page}
                  href={createPageURL(page, searchParams, pathname)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              href={createPageURL(currentPage + 1, searchParams, pathname)}
              className={currentPage >= totalPages ? "opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

const createPageURL = (
  pageNumber: number | string,
  searchParams: ReadonlyURLSearchParams,
  pathname: string
) => {
  const params = new URLSearchParams(searchParams);
  params.set("page", pageNumber.toString());
  return `${pathname}?${params.toString()}`;
};
