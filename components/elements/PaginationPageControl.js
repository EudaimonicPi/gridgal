'use client';
import React from 'react';
import styles from '@/styles/PaginationControls.module.css';
import useArrowNavigation from '@/hooks/useArrowNavigation';

export default function PaginationControls({ page, totalPages, setPage }) {
  useArrowNavigation({ page, totalPages, setPage });

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className={styles.pageInfo}>
        Page {page} of {totalPages}
      </span>
      <button
        className={styles.button}
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
