"use client";

import { useCallback, useState } from "react";

export const useModal = (initial = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initial);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return { isOpen, setIsOpen, open, close, toggle } as const;
};
