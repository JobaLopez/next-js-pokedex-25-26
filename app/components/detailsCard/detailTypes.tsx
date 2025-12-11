import { TYPE_COLORS, TYPE_TRANSLATIONS } from "../../constants/types";
import { PokemonType } from "../../interfaces/pokemon";

export default function DetailTypes({ types }: { types: PokemonType[] }) {
    return (
        <div className="py-4 flex gap-6 m-auto w-fit">
            {types.map((typeInfo, index) => (
                <span className="px-4 py-2 rounded-full" style={{ 'background': TYPE_COLORS[typeInfo.type.name] }} key={index}>{TYPE_TRANSLATIONS[typeInfo.type.name]}</span>
            ))}
        </div>
    )
}