import IconTech from "./IconTech";

const Technologies = () => {
  return (
    <div className="flex gap-6">
      <IconTech icon={{ path: "/technologies/JS.svg", alt: "Icone do JavaScript", width: 24, height: 24 }} name="JavaScript" />
      <IconTech icon={{ path: "/technologies/React.svg", alt: "Icone do React", width: 24, height: 24 }} name="React e React Native" />
      <IconTech icon={{ path: "/technologies/Next.svg", alt: "Icone do Next.js", width: 24, height: 24 }} name="Next.js" />
      <IconTech icon={{ path: "/technologies/TS.svg", alt: "Icone do TypeScript", width: 24, height: 24 }} name="TypeScript" />
      <IconTech icon={{ path: "/technologies/Node.svg", alt: "Icone do Node.js", width: 24, height: 24 }} name="Node.js" />
      <IconTech icon={{ path: "/technologies/Qwik.svg", alt: "Icone do Qwik", width: 24, height: 24 }} name="Qwik" />
      <IconTech icon={{ path: "/technologies/Tailwind.svg", alt: "Icone do Tailwind", width: 24, height: 24 }} name="Tailwind" />
      <IconTech icon={{ path: "/technologies/Jest.svg", alt: "Icone do Jest", width: 24, height: 24 }} name="Jest" />
    </div>
  );
};

export default Technologies;