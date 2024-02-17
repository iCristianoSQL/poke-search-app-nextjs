import { useQuery } from "@tanstack/react-query";
import { api } from "./api";
import { extractPokemonId } from "../utils/constants";
import { Pokedex, PokemonApiResponse } from "./types";

export const usePokemons = (nextPage: number) => {
  const { data } = useQuery<PokemonApiResponse>({
    queryKey: ["pokemons", nextPage],
    queryFn: async () => {
      try {
        const response = await api.get<PokemonApiResponse>(
          `?offset=${nextPage}&limit=60`
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });

  const resultsWithMoreInfos =
    data?.results.map((pokemon) => ({
      ...pokemon,
      id: extractPokemonId(pokemon.url),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonId(
        pokemon.url
      )}.png`,
    })) ?? [];

  return {
    pokemons: resultsWithMoreInfos ?? [],
  };
};

export const usePokemonById = (id: number) => {
  const { data, isLoading, error } = useQuery<Pokedex>({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      try {
        const response = await api.get<Pokedex>(`/${id}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    enabled: !!id,
  });

  return {
    pokemon: data,
  };
};