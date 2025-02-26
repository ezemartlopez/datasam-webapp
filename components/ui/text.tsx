// Component: Text.tsx
export default function Text({text}: {text: string}) {
  return (
    <p className="font-rubik text-base xl:text-lg font-light text-wrap text-center text-gray-800 antialiased">{text}</p>
  );
}