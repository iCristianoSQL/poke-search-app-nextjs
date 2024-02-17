"use client";

import { Button } from "@/components/Button";
import SelectInput from "@/components/Inputs/Select";
import { PokeCard } from "@/components/PokeCard";
import { TextProvider, useText } from "@/contexts/SearchContext";
import { pageSchema } from "@/services/utils/schemas";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

const queryClient = new QueryClient();


export default function Home() {
  const [page, setPage] = useState(0);
  const { text, setText } = useText();
  const handlePage = {
    back: () => {
      if (page === 0) {
        return;
      }
      setPage(page - 60);
    },
    next: () => {
      if (page === 1260) {
        return;
      }
      setPage(page + 60);
    },
  };



  return (
    <QueryClientProvider client={queryClient}>
      <main className="h-full w-full flex overflow-hidden flex-col gap-4 items-center">
        <div className="flex gap-4 justify-center w-4/5">
          <Button label="< Voltar" handleClick={handlePage.back} />
          <Button label="Próximo >" handleClick={handlePage.next} />
        </div>
        <section className="overflow-auto w-4/5 gap-4 flex justify-center flex-wrap">
          <PokeCard pageController={page} />
        </section>
      </main>
    </QueryClientProvider>
  );
}
