import Image from 'next/image';

import Button from '@/app/components/button/button';
import { BUTTON_ACTION, BUTTON_SIZE } from '@/app/components/button';

import styles from './item-list.module.scss';
import { BankType } from '@/types';

type ItemListType = {
  bank: BankType;
  handleClick: (bankName: string) => void;
}


export const ItemList = ({
  bank,
  handleClick
}: ItemListType) => {
  return (
    <div
      key={bank.bankName}
      className={styles['item-list']}
    >
      <Image 
        src={bank.url}
        alt={`image-bank-${bank.bankName}`} 
        width={150} 
        height={80}
        className={styles['item-list__image']}
      />
      <div className={styles['item-list__content']}>
        <div>
          <span className={styles['item-list__title']}>{bank.bankName}</span>
          <p className={styles['item-list__subtitle']}>{bank.description}</p>
        </div>
        <div className={styles['item-list__actions']}>
          <Button 
            size={BUTTON_SIZE.SMALL} 
            action={BUTTON_ACTION.DELETE}
            handleClick={() => handleClick(bank.bankName)}
          >
            <Image src="/icons/trash-icon.svg" alt="icon trash" width={20} height={20}/>
          </Button>
        </div>
      </div>
    </div>
  )
}