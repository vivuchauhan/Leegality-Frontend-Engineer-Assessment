const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

 const getPageNumbers = () => {
  const pages = [];

  if (totalPages <= 7) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
  }

  // First page
  pages.push(1);

  // Near beginning
  if (currentPage <= 4) {
    pages.push(2, 3, 4, 5);
    pages.push("...");
    pages.push(totalPages);
    return pages;
  }

  // Near end
  if (currentPage >= totalPages - 3) {
    pages.push("...");

    for (
      let i = totalPages - 4;
      i <= totalPages;
      i++
    ) {
      pages.push(i);
    }

    return pages;
  }

  // Middle
  pages.push("...");
  pages.push(currentPage - 1);
  pages.push(currentPage);
  pages.push(currentPage + 1);
  pages.push("...");
  pages.push(totalPages);

  return pages;
};

  return (
    <div className="mt-12 flex flex-col items-center gap-5">
      <p className="text-sm text-gray-500">
        Page <span className="font-semibold">{currentPage}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </p>

      <div className="flex items-center rounded-xl border bg-white p-2 shadow-md">

        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Prev
        </button>

        <div className="mx-2 flex items-center gap-2">
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={`dots-${index}`} className="px-2 text-gray-400">
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                onClick={() => onPageChange(page)}
                className={`h-10 w-10 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  currentPage === page
                    ? "scale-105 bg-black text-white shadow-lg"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next →
        </button>

      </div>
    </div>
  );
};

export default Pagination;