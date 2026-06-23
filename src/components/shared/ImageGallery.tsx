import { useState } from "react";
import { X } from "lucide-react";

interface Props {
    images?: string[];
}

export default function ImageGallery({ images }: Props) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {images.map((img, index) => (
                    <div 
                        key={index} 
                        className="overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/50 group cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                    >
                        <img
                            src={img}
                            alt={`Screenshot ${index + 1}`}
                            className="w-full h-24 sm:h-32 object-cover transform group-hover:scale-110 group-hover:brightness-110 transition-all duration-500 ease-out"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)}
                >

                    <button 
                        className="absolute top-6 right-6 md:top-10 md:right-10 text-slate-400 hover:text-fucsia transition-colors p-2 bg-slate-900/50 rounded-full"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Cerrar imagen"
                    >
                        <X className="w-6 h-6 md:w-8 md:h-8" />
                    </button>


                    <img
                        src={selectedImage}
                        alt="Vista ampliada"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_30px_rgba(255,0,255,0.15)] border border-slate-800 transform transition-transform duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}
        </>
    );
}