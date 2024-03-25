import { BankType } from "@/types";
import { useEffect, useState } from "react";

type useDebounceType = {
  value: string;
  data: BankType[];
}

export const useDebounceFilter = ({value, data}: useDebounceType) => {
  const [searchTerm, setSearchTerm] = useState<string>(value);
  const [filteredData, setFilteredData] = useState<BankType[]>([]);

  useEffect(() => {

    const handler = setTimeout(() => {
      if(value.trim() === '') {
        setFilteredData(data);
      } else {
        const filteredList = data.filter(
          bank => bank.bankName.toLowerCase().includes(value.trim().toLowerCase())
        );
        console.log('filteredList: ', filteredList);
        setFilteredData(filteredList);
      }
      setSearchTerm(value);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [value, data]);

  return {searchTerm, filteredData};
};
