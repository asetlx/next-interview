import { PaginationResult } from "@/hooks/usePagination";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

export default function ProductPagination({
  hasPrev, prevPage, totalPages, currentPage, changePage, hasNext, nextPage
}: PaginationResult) {
  return (
    <Pagination className="mt-auto p-5">
      <PaginationContent>
        {hasPrev && (
          <PaginationItem>
            <PaginationPrevious onClick={prevPage} />
          </PaginationItem>
        )}
        {totalPages > 1 && (
          <>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => changePage(i)}
                  isActive={currentPage === i}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </>
        )}
        {hasNext && (
          <PaginationItem>
            <PaginationNext onClick={nextPage} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}