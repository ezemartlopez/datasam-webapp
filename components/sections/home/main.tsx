import ResponsiveImage from "@/components/ui/responsive-image";

// Component: main.tsx
export default function MainHome() {
  return (
    <section className="w-full h-screen bg-red-300">
      <div className="w-full h-full absolute z-0">
        <ResponsiveImage/>
      </div>
      <div className="w-full h-full absolute z-10">
        <div className="w-full h-full flex flex-col gap-2 justify-end items-start p-[30px] md:p-[100px] xl:p-[150px] ">
          <h1 className="max-w-[900px] w-full font-rubik text-4xl md:text-5xl xl:text-7xl font-semibold text-white">Comunidad de Ciencia de Datos UNSAM</h1>
          <h3 className="font-rubik text-xl md:text-2xl xl:text-3xl font-medium text-white">Donde el conocimiento se comparte y la comunidad se fortalece 🚀</h3>
        </div>
      </div>
    </section>
  );
}