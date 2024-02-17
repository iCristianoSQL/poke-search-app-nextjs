export const baseURL = "https://pokeapi.co/api/v2/pokemon" as const;

export const extractPokemonId = (url: string): number => {
  const parts = url.split("/");
  return parseInt(parts[parts.length - 2]);
};

export default { baseURL };
