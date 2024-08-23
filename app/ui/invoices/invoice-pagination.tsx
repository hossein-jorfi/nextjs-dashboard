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
import { useRouter } from "next/navigation";

export default function InvoicesPagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPages = generatePagination(currentPage, totalPages);

  const triggerSuspence = (url: string) => {
    router.push(url);
  };

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={currentPage <= 1 ? "opacity-50" : ""}
              onClick={() => {
                if (currentPage >= totalPages) {
                  triggerSuspence(
                    createPageURL(currentPage - 1, searchParams, pathname)
                  );
                }
              }}
            />
          </PaginationItem>

          {allPages.map((page) => {
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  key={page}
                  onClick={() => triggerSuspence(createPageURL(page, searchParams, pathname))}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              className={currentPage >= totalPages ? "opacity-50" : ""}
              onClick={() => {
                if (currentPage <= 1) {
                  triggerSuspence(
                    createPageURL(currentPage + 1, searchParams, pathname)
                  );
                }
              }}
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
