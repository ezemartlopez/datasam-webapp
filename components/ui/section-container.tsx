import { ReactNode } from "react";

// Component: section-container.tsx
export default function SectionContainer({children, borders = false}: {children: ReactNode, borders?: boolean}) {
  return (
    <section className="w-full flex justify-center">
      <div className="relative max-w-[1440px] p-[30px] md:p-[80px] xl:p-[150px] w-full h-full flex flex-col gap-14">
        {borders && (<div className="absolute bottom-0 right-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500/50"></div>)}
        {borders && (<div className="absolute top-0 left-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500/50"></div>)}
        {children}
      </div>
    </section>
  );
}