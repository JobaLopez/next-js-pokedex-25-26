import Image from "next/image";

export default function DetailImage({image, name, toggleOrientation}: {image: string; name: string; toggleOrientation: () => void}) {
    return (
        <div className="relative flex items-center justify-center mb-5" style={{ height: "200px" }}>
            <button onClick={toggleOrientation} className="relative w-3xs rounded-xl h-full cursor-pointer hover:bg-gray-900">
                <Image priority sizes="50vw" src={image} alt={name} fill style={{ objectFit: "contain" }} />
            </button>
        </div>
    )
}