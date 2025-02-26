import clsx from "clsx";

// Component: Paragraph.tsx
export default function Paragraph({ text, bold }: { text: string; bold?: boolean }) {
  return (
    <p className={clsx("font-rubik text-lg sm:text-xl font-light text-wrap text-left antialiased text-gray-800", { "font-normal": bold })}>
      {text}
    </p>
  );
}