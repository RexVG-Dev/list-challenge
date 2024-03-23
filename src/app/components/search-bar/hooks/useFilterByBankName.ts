import { BankType } from '@/types';
import { useEffect, useState } from 'react';

export const useFilterByBankName = (data: BankType[], searchTerm: string) => {
  const [filteredData, setFilteredData] = useState<BankType[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredData(data);
    } else {
      const filteredList = data.filter(bank =>
        bank.bankName.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
      setFilteredData(filteredList);
    }
  }, [data, searchTerm]);

  return filteredData;
}
