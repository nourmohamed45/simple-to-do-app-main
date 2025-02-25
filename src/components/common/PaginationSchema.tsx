// Pagination Imports
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationProps } from "@/types/todos";

const PaginationSchema = ({ page, setPage, totalPages }: PaginationProps) => {
  // Function to generate pagination items with ellipsis
  const getPaginationItems = () => {
    const items = [];
    const isMobile = window.innerWidth < 640; // Tailwind's 'sm' breakpoint
    // Adjust maxVisiblePages based on screen size (5 for desktop, 3 for mobile)
    const maxVisiblePages = isMobile ? 3 : 5;
    const sidePages = Math.floor(maxVisiblePages / 2); // 1 for mobile, 2 for desktop

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => setPage(i)}
              isActive={page === i}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // First page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            onClick={() => setPage(1)}
            isActive={page === 1}
            className="cursor-pointer"
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      // Ellipsis if far from start
      if (page > sidePages + 2) {
        items.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Pages around current page
      const startPage = Math.max(2, page - sidePages);
      const endPage = Math.min(totalPages - 1, page + sidePages);

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => setPage(i)}
              isActive={page === i}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      // Ellipsis if far from end
      if (page < totalPages - sidePages - 1) {
        items.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            onClick={() => setPage(totalPages)}
            isActive={page === totalPages}
            className="cursor-pointer"
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div>
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent className="flex flex-wrap justify-center gap-1 sm:gap-2">
            <PaginationItem>
              <PaginationPrevious
                onClick={() => page > 1 && setPage(page - 1)}
                className={`cursor-pointer ${
                  page === 1 ? "pointer-events-none opacity-50" : ""
                }`}
              />
            </PaginationItem>

            {getPaginationItems()}

            <PaginationItem>
              <PaginationNext
                onClick={() => page < totalPages && setPage(page + 1)}
                className={`cursor-pointer ${
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default PaginationSchema;
