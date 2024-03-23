import { BankType } from '@/types';
import { create } from 'zustand';

type BankStateType = {
  banksList: BankType[];
  filerList: BankType[];
  searchTerm: string;
}

type ActionType = {
  updateBanksList: (bankList: BankStateType['banksList']) => void,
  updateFilterList: (filerList: BankStateType['filerList']) => void,
  updateSearchTerm: (searchTerm: BankStateType['searchTerm']) => void,
}

export const useBanksStore = create<BankStateType & ActionType>((set) => ({
  banksList:[],
  filerList:[],
  searchTerm: '',
  updateBanksList: (banksList) => set(() => ({banksList: banksList})),
  updateFilterList: (filerList) => set(() => ({filerList: filerList})),
  updateSearchTerm: (searchTerm) => set(() => ({searchTerm: searchTerm})),
}))