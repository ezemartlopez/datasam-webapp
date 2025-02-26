import { ReactNode } from "react";
import clsx from "clsx";

// Component: section-container.tsx
export default function SectionContainer({children, borders = false, startElement = false}: {children: ReactNode, borders?: boolean, startElement?:boolean}) {
  return (
    <section className="w-full flex justify-center">
      <div className={clsx("relative max-w-[1440px] w-full h-full flex flex-col gap-14", {"p-[30px] md:p-[80px] xl:p-[150px]":!startElement, "px-[30px] md:px-[80px] xl:px-[150px]": startElement})}>
        {borders && (<div className="absolute bottom-0 right-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500"></div>)}
        {borders && (<div className="absolute top-0 left-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500"></div>)}
        {children}
      </div>
    </section>
  );
}