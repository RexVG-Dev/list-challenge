import { BankType } from "@/types";

export const getBanksList = async () => {
  const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
  const data: BankType[] = await response.json();

  return data;
}