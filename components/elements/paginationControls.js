// components/PaginationControls.js
'use client';
import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    gap: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '6px 12px',
    borderRadius: '4px',
    border: '1px solid #007FFF', // subtle blue
    backgroundColor: '#F0F8FF', // very light blue background
    color: '#007FFF',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
  },
  buttonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  pageInfo: {
    fontWeight: 'bold',
    color: '#006400', // subtle green
  },
};

export default function PaginationControls({ page, totalPages, setPage }) {
  return (
    <div style={styles.container}>
      <button
        style={{ ...styles.button, ...(page === 1 ? styles.buttonDisabled : {}) }}
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </button>
      <span style={styles.pageInfo}>
        Page {page} of {totalPages}
      </span>
      <button
        style={{ ...styles.button, ...(page === totalPages ? styles.buttonDisabled : {}) }}
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
