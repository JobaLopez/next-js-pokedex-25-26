import { useRef, useState } from "react";
import { PokemonDetail } from "../interfaces/pokemon";

export const usePokemonViewer = (sprites: PokemonDetail['sprites']) => {
    const [isShiny, setIsShiny] = useState(false);
    const [isFront, setIsFront] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    const toggleOrientation = () => {
        setIsFront(prev => !prev);
    };

    const toggleShiny = () => {
        setIsShiny(prev => !prev);
    };

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }

    let currentImage: string | undefined = sprites.front_default;

    if (isShiny) {
        currentImage = isFront ? sprites.front_shiny : sprites.back_shiny;
    } else {
        currentImage = isFront ? sprites.front_default : sprites.back_default;
    }

    currentImage = currentImage || sprites.front_default;

    return {
        isShiny,
        isFront,
        currentImage,
        audioRef,
        toggleOrientation,
        toggleShiny,
        playAudio
    }
};