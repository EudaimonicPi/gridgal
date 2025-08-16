// hooks/useModalState.js
'use client';
import { useState } from 'react';

export function useModalState() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return {
    showCreateModal,
    setShowCreateModal,
    showConfirmModal,
    setShowConfirmModal,
  };
}
