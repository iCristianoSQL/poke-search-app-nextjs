"use client";
import SelectInput from "@/components/Inputs/Select";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const options = [
  { value: 1, label: "Opção 1" },
  { value: 2, label: "Opção 2" },
  { value: 3, label: "Opção 3" },
];
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="h-full w-full flex flex-col gap-4 items-center">
        <section className="bg-black gap-4 w-4/5 flex justify-end	mt-8">
          <SelectInput label="Tipo" options={options} />
          <SelectInput label="Ordem" options={options} />
        </section>
      </main>
    </QueryClientProvider>
  );
}
