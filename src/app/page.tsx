"use client"
import { useEffect } from "react";
import Link from "next/link";

import { useBanksStore } from "@/store";
import Button from "./components/button/button";
import { BUTTON_ACTION, BUTTON_SIZE } from "./components/button";
import { getBanksList } from "@/api/banks";

export default function Home() {

  const {banksList, updateBanksList} = useBanksStore((state) => state);

  useEffect(() => {
    if(banksList.length === 0) {
      const fetchData = async () => {
        try {
          const data = await getBanksList();
          updateBanksList(data);
        } catch (error) {
          console.error('Error fetching banks list:', error);
        }
      };
      fetchData();
    }
    
  }, [])
  
  

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl text-purple-600 font-bold">Obten +</h1>
      <h2 className="text-stale-700"> Challenge</h2>
      <Link href="/list-accounts">
        <Button size={BUTTON_SIZE.LARGE} action={BUTTON_ACTION.NAV} handleClick={() => {}} >
          Go to the banks list
        </Button>
      </Link>
    </main>
  );
}
