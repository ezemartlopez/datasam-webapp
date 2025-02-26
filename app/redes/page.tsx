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
          <ul className="w-full grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-10">
            <li className="order-2 lg:order-1">
              <Paragraph text="Conéctate con nosotros a través de nuestras redes sociales y mantente al tanto de lo más reciente en el mundo de la Ciencia de Datos. 📰🎓 Aquí podrás conocer historias inspiradoras de éxito, participar en debates interesantes con expertos y miembros de la comunidad, así como acceder a eventos tanto presenciales como virtuales. Además, te ofrecemos contenido exclusivo sobre las últimas novedades en la carrera. ¡No te pierdas ninguna actualización y explora todo lo que tenemos para ti en el emocionante universo de la Ciencia de Datos!"/>
            </li>
            <li className="order-1 lg:order-2">
              <div className="w-full h-[310px] relative">
                <Image src={"/images/redes-sociales.png"} layout="fill" alt="networks_image" objectFit="fill" className="w-full h-full rounded-2xl bg-gray-400"/>
              </div>
            </li>
          </ul>
        </article>
        <article className="w-full flex flex-col gap-5">
          <Title title="Conoce nuestras redes sociales"/>
          <Paragraph text="Aquí encontrarás los enlaces para seguirnos y estar al tanto de todas nuestras actividades, eventos y noticias. ¡Únete a la conversación y explora lo que tenemos para ofrecer!"/>
          <ul className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
              {social_networks.map((linkGroup, index) => (
                <CommunicationChannel key={index} linkPage={linkGroup}/>
              ))}
            </ul>
        </article>
        <article className="w-full pb-10 flex flex-col gap-5">
          <Title title="¿Por qué seguirnos? 🌟"/>
          <Paragraph text="Estar conectado con nuestras redes sociales es la mejor manera de acceder a contenido exclusivo, interactuar con la comunidad y mantenerte informado sobre las últimas noticias del mundo de la ciencia de datos y la tecnología. ¡No te pierdas nada!"/>
        </article>
      </SectionContainer>
    </div>
  );
}