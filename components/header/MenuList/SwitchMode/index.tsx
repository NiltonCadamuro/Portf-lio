import { ModeContext } from "@/hooks/modeContext";
import { ModeContextProps } from "@/types/mode";
import Image from "next/image";
import { useContext } from "react";

const SwitchMode = () => {
  const { mode, setMode } = useContext(ModeContext) as ModeContextProps;

  const handleClick = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={handleClick} className="lg:hover:bg-surfacePrimary bg-surfaceSecondary lg:bg-transparent cursor-pointer p-3 rounded-md transition outline-none">
      {mode === 'dark' ? (
        <Image
          className=""
          src="/icons/moon.svg"
          alt="Ícone de lua representando o modo escuro"
          width={24}
          height={24}
          priority
          loading="eager"
        />
      ) : (
        <Image
          className=""
          src="/icons/sun.svg"
          alt="Ícone de sol representando o modo claro"
          width={24}
          height={24}
          priority
          loading="eager"
        />
      )}
    </button>
  );
};

export default SwitchMode;