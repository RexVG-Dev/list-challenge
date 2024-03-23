import Image from 'next/image';
import styles from './search-bar.module.scss';
import { useBanksStore } from '@/store';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce, useFilterByBankName } from './hooks';


export const SerachBar = () => {
  // TODO refactor the engine search with the debounce and remove the action button
  const [valueInput, setValueInput] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debounceValue = useDebounce(valueInput, 300);
  const {banksList, updateFilterList, updateSearchTerm} = useBanksStore((state) => state);
  

  const filteredData = useFilterByBankName(banksList, searchTerm);

  const handleSearcher = () => {
    updateFilterList(filteredData);
  }

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setValueInput(target.value);
  };

  useEffect(() => {
    setSearchTerm(debounceValue);
    updateSearchTerm(debounceValue);
  }, [debounceValue]);

  return (
    <div className={styles['search-bar']}>  
      <label 
        htmlFor="default-search"
        className={styles['search-bar__label']}
      >
        Search
      </label>
      <div className={styles['search-bar__actions']}>
          <div className={styles['search-bar__icon']}>
              <Image src="/icons/search-grey-icon.svg" alt="search trash" width={20} height={20} />
          </div>
          <input 
            type="search"
            id="default-search" 
            className={styles['search-bar__input']}
            placeholder="Searh by name bank"
            value={valueInput} 
            onChange={handleChange}
            required
          />
          <button
            onClick={handleSearcher}
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Search</button>
      </div>
    </div>
  )
}
