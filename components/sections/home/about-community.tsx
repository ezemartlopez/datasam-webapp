import { comunidadData, faqs } from "@/lib/home/home-page-data";
import InfoCommunity from "./components/info-community";
import SectionContainer from "@/components/ui/section-container";
import Title from "@/components/ui/title";
import MenuDropdown from "@/components/ui/menu-dropdown";
import Image from "next/image";
import ButtonComponent from "@/components/ui/button-component";
import { GraduationCap } from "lucide-react";

// Component: about-community.tsx
export default function AboutCommunity() {
  return (
    <SectionContainer borders={true}>
      <article className="w-full pt-14 flex flex-col gap-[70px]">
        {comunidadData.map((infoData, index) => (
          <InfoCommunity key={index} info={infoData} reverse={index%2===0}/>
        ))}
      </article>
      <article className="w-full h-[500px] sm:h-[400px] relative z-0">
        <Image 
          src="/images/CarreraImagen.png"
          alt="Descripción de la imagen"
          layout="fill"
          className="object-cover rounded-lg z-0 absolute" // Cambio a object-cover para asegurar que la imagen no cubra todo el contenido
        />
        <div className="w-full h-full absolute z-20 py-6 px-8 rounded-lg cursor-pointer bg-black/50 hover:bg-black/65 transition-colors duration-500 flex flex-col justify-center items-center gap-3 group">
          <div className="w-full ">
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3">
              <GraduationCap className="size-[70px] lg:size-[40px] text-white"/>
                <span className="text-wrap text-center font-rubik text-white font-medium text-2xl sm:text-3xl">Descubre tu futuro en Ciencia de Datos</span>
            </div>
          </div>
          <div className="w-full px-0 md:px-6">
            <p className="font-rubik text-base sm:text-xl font-light text-center text-white">La licenciatura en Ciencia de Datos te forma para liderar en el análisis de datos, utilizando técnicas avanzadas de machine learning y big data para resolver problemas reales.</p>
          </div>
          <div className="w-full mt-2">
            <div className="w-full flex justify-center items-center">
              <ButtonComponent text="Más información sobre la carrera" href="/carrera"/>
            </div>
          </div>
        </div>
      </article>
      
      <article className="w-full pb-14 flex flex-col gap-8">
        <Title title="Preguntas Frecuentes"/>
        <div className="w-full h-auto flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <MenuDropdown key={index} title={faq.title} description={faq.description}/>
          ))}
        </div>
      </article>
    </SectionContainer>
  );
}