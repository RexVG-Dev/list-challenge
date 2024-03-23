import { useEffect, useState } from 'react';

import { BankType } from '@/types';

export const useSortByBankName = (initialData: BankType[]) => {
  const [sortedData, setSortedData] = useState<BankType[]>([]);

  useEffect(() => {
    const sortedList = [...initialData].sort((a, b) => {
      if (a.bankName < b.bankName) {
        return -1;
      }
      if (a.bankName > b.bankName) {
        return 1;
      }
      return 0;
    });
    setSortedData(sortedList);
  }, [initialData]);

  return sortedData;
}