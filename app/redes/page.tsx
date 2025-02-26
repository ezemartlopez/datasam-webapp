import CommunicationChannel from "@/components/sections/networks/components/communication-channel";
import Paragraph from "@/components/ui/paragraph";
import SectionContainer from "@/components/ui/section-container";
import Title from "@/components/ui/title";
import { social_networks } from "@/lib/networks/networkw-page-data";
import Image from "next/image";

// Component: page.tsx
export default function page() {
  return (
    <div className="w-full h-full py-14 mt-16">
      <SectionContainer startElement={true}>
        <article className="w-full flex flex-col gap-5">
          <Title title="Redes Sociales 🌐"/>
          <Paragraph text="Síguenos en nuestras redes sociales y mantente al día con lo último en Ciencia de Datos. 📰🎓 Descubre historias de éxito, eventos presenciales y virtuales, participa en debates con la comunidad y mantente informado sobre las novedades de la carrera. ¡Explora y conéctate con todo lo que sucede en el mundo de la Ciencia de Datos!"/>
        </article>
        <article className="w-full flex flex-col gap-5">
          <Title title="Conoce nuestras redes sociales"/>
          <div className="w-full h-[400px] relative">
            <Image src={"/images/redes-sociales.png"} layout="fill" alt="networks_image" objectFit="fill" className="w-full h-full rounded-2xl bg-gray-400"/>
          </div>
          <Paragraph text="Aquí encontrarás los enlaces para seguirnos y estar al tanto de todas nuestras actividades, eventos y noticias. ¡Únete a la conversación y explora lo que tenemos para ofrecer!"/>
          <ul className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
              {social_networks.map((linkGroup, index) => (
                <CommunicationChannel key={index} linkPage={linkGroup}/>
              ))}
            </ul>
        </article>
        <article className="w-full flex flex-col gap-5">
          <Title title="¿Por qué seguirnos? 🌟"/>
          <Paragraph text="Estar conectado con nuestras redes sociales es la mejor manera de acceder a contenido exclusivo, interactuar con la comunidad y mantenerte informado sobre las últimas noticias del mundo de la ciencia de datos y la tecnología. ¡No te pierdas nada!"/>
        </article>
      </SectionContainer>
    </div>
  );
}