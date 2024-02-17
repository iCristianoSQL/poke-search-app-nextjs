import SelectInput from "@/components/Inputs/Select";

const options = [
  { value: 1, label: "Opção 1" },
  { value: 2, label: "Opção 2" },
  { value: 3, label: "Opção 3" },
];
export default function Home() {
  return (
    <main className="h-full w-full flex flex-col gap-4 items-center">
      <section className="bg-black w-4/5 flex justify-end	mt-8">
        <SelectInput label="Tipo" options={options} />
        <SelectInput label="Ordem" options={options} />
      </section>
    </main>
  );
}
