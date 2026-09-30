import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PropTypes from "prop-types";
import styles from "../../css/pagination.module.css";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const getPages = () => {
    const pages = [];

    let start = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );

    let end = Math.min(
      totalPages,
      start + maxVisiblePages - 1
    );

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(
        1,
        end - maxVisiblePages + 1
      );
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={styles.arrowButton}
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        aria-label="Halaman sebelumnya"
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`${styles.pageButton} ${
            page === currentPage
              ? styles.active
              : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className={styles.arrowButton}
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        aria-label="Halaman berikutnya"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  maxVisiblePages: PropTypes.number,
};

export default Pagination;