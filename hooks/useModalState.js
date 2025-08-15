// hooks/useModalState.js
'use client';
import { useState } from 'react';

export function useModalState(defaultCountry = 'US') {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [countryCode, setCountryCode] = useState(defaultCountry);

  return {
    showCreateModal,
    setShowCreateModal,
    showConfirmModal,
    setShowConfirmModal,
    countryCode,
    setCountryCode,
  };
}
