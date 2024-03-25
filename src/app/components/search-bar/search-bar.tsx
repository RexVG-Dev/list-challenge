import { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';

import { useBanksStore } from '@/store';

import styles from './search-bar.module.scss';
import { useDebounceFilter } from './hooks';


export const SerachBar = () => {
  const [valueInput, setValueInput] = useState<string>('');
  const {banksList, updateFilterList, updateSearchTerm} = useBanksStore((state) => state);
  const { searchTerm, filteredData} = useDebounceFilter({value: valueInput, data: banksList});
  
  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setValueInput(target.value);
  };

  useEffect(() => {
    updateSearchTerm(searchTerm);
    updateFilterList(filteredData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, filteredData]);

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
      </div>
    </div>
  )
}
