"use client"

import { useBanksStore } from '@/store';
import { SearchBar } from '@/app/components/search-bar';

import { useSortByBankName } from './hooks';

import { EmptyList, ItemList} from './molecules';

import styles from './list-accounts.module.scss';
import { useEffect, useState } from 'react';
import { BankType } from '@/types';

const ListAccounts = () => {
  const {searchTerm, banksList, filerList, updateBanksList} = useBanksStore((state) => state);
  const sortedList = useSortByBankName(banksList);
  const [listToMap, setListToMap] = useState<BankType[]>([]);

  useEffect(() => {
    setListToMap(searchTerm ? filerList : sortedList);
  }, [filerList, searchTerm, sortedList]);

  const deleteBank = (bankName: string) => {
    const newList = banksList.filter(bank => bank.bankName != bankName);

    updateBanksList(newList);
  }
  
  
  return (
    <section className={styles['list-accounts']}>
      <SearchBar />
      {listToMap.map(bank => (
        <ItemList
          key={bank.bankName}
          bank={bank}
          handleClick={() => deleteBank(bank.bankName)}
        />
      ))}
      {listToMap.length === 0
        ? (
          <EmptyList filter={searchTerm}/>
        )
        : null
      }
    </section>
  )
}

export default ListAccounts;
