'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('5252df70-eda4-4e4f-ae3a-77179fe409a0');
  }, []);

  return null;
};
