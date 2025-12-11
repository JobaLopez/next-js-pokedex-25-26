import { Pokemon } from "../../interfaces/pokemon";
import { calculatePokemonNumber } from "../../utils/pokemon-number";
import Card from "./card";

export default function PokemonGrid({ pokemonList, currentPage }: { pokemonList: Pokemon[]; currentPage: number }) {
    return (
        <div className="grid grid-cols-3 gap-4 justify-center items-center">
            {
                pokemonList.map((pokemon: Pokemon, index: number) => (
                    <Card pokemonIndex={calculatePokemonNumber(currentPage, index)} pokemonName={pokemon.name} key={index} />
                ))
            }
        </div>
    )
}