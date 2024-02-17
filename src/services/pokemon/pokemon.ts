import { useQuery } from "@tanstack/react-query";
import { api } from "./api";
import { extractPokemonId } from "../utils/constants";

const usePokemons = (nextPage: number) => {
  const { data } = useQuery<PokemonApiResponse>({
    queryKey: ["pokemons"],
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
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonId(
        pokemon.url
      )}.png`,
    })) ?? [];

  return {
    pokemons: resultsWithMoreInfos ?? [],
  };
};

export default usePokemons;
