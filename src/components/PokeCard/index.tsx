import { useText } from "@/contexts/SearchContext";
import { usePokemons } from "@/services/pokemon/pokemon";
import { strings } from "@/services/utils/methods";
import Image from "next/image";
import { IPokeCard } from "./types";
import { Button } from "../Button";
import SelectInput from "../Inputs/Select";
import { useForm } from "react-hook-form";
import { pageSchema } from "@/services/utils/schemas";
import { z } from "zod";

type TFilterOptions = z.infer<typeof pageSchema>;

export const PokeCard = ({ pageController }: IPokeCard): JSX.Element => {
  const { register, watch } = useForm<TFilterOptions>();

  const { pokemons } = usePokemons(pageController);
  const { text, setText } = useText();
  const azValue = watch("aZSelect");

  const filteredAndSortedPokemons = pokemons
    ?.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(text.toLowerCase())
    )
    ?.sort((a, b) => {
      return Number(azValue) === 1
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    })

  const clearFilters = () => {
    setText("");
  };

  return (
    <>
      <nav className="gap-4 w-4/5 flex justify-end	mt-8">
        <Button handleClick={clearFilters} label="Limpar filtros" />
        <SelectInput
          label="A-Z"
          register={register("aZSelect")}
          options={[
            { value: 1, label: "A-Z" },
            { value: 2, label: "Z-A" },
          ]}
        />
      </nav>
      {filteredAndSortedPokemons?.map((pokemon) => (
        <div
          key={pokemon.id}
          className="w-56 items-center flex flex-col rounded-lg border border-white border-solid"
        >
          <p>{pokemon.id}</p>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <p className="font-semibold">{strings.capitalize(pokemon.name)}</p>
        </div>
      ))}
    </>
  );
};
