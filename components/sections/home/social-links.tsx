import ButtonComponent from "@/components/ui/button-component";
import Image from "next/image";

// Component: SocialLinks.tsx
export default function SocialLinks() {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] group">
      <Image
        src="/images/comunidad-lcd-laboratorio.png" // Correct path (without `/public`)
        alt="community_image"
        layout="fill" // Makes the image fill the available space
        objectFit="cover" // Ensures the image covers the container without distortion
        className="brightness-50 group-hover:brightness-75 transition-brightness duration-500 object-center absolute z-0" // Ensures the image isn't distorted
      />
      <div className="absolute z-10 w-full h-full">
        <div className="w-full h-full p-[30px] flex flex-col justify-center items-center gap-[20px]">
          <h2 className="w-auto font-rubik text-3xl sm:text-5xl font-base text-white">Nuestras Redes Sociales</h2>
          <h3 className="font-rubik text-lg sm:text-2xl font-normal text-white text-center">
            Síguenos para obtener más información sobre la carrera, la comunidad y las últimas novedades de DATA SAM.
          </h3>
          <ButtonComponent text="Siguenos en nuestras redes sociales" href="/redes"/>
        </div>
      </div>
    </section>
  );
}
