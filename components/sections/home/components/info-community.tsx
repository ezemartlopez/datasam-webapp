import Image from "next/image";
import { CommunityData } from "@/lib/home/home-page-data";
import Title from "@/components/ui/title";
import ButtonComponent from "@/components/ui/button-component";

// InfoCommunity.tsx

function ImageInfoCommunity({image}: {image: string}){
  return (
    <div className="w-full relative">
      <Image src={image} alt="photo" layout="fill" objectFit="cover" className="object-cover brightness-90 rounded-xl bg-gray-300"
      />
    </div>
  );
}
function DescriptionInfoCommunity({info}: {info: CommunityData}){
  return (
    <div className="w-full flex flex-col gap-4">
      <ul className="w-full h-full flex flex-col gap-8 ">
        {info.description.map((descriptionRow, index) => (
          <p key={index} className="font-rubik text-base sm:text-lg xl:text-xl font-light ">{descriptionRow}</p>
        ))}
      </ul>
      {info.link && (
        <div className="w-full justify-start">
          <ButtonComponent text={info.link.text} href={info.link.href}/>
        </div>
      )}
    </div>
  )
}
function InfoCommunity({info, reverse}: {info: CommunityData, reverse: boolean}) {
  return (
    <article className="w-full h-auto flex flex-col gap-8">
      <Title title="¿Qué es la comunidad DATA SAM?" />
      <div className="max-w-[1440px] w-full min-h-[350px] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-[50px] xl:gap-[100px]">
        {reverse? (
          <>
            <ImageInfoCommunity image={info.image}/>
            <DescriptionInfoCommunity info={info}/>
          </>
        ): (
          <>
            <DescriptionInfoCommunity info={info}/>
            <ImageInfoCommunity image={info.image}/>
          </>
        )}
      </div>
    </article>
  );
}
export default InfoCommunity;