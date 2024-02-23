import { Kalam } from "next/font/google";

const kalam = Kalam({ subsets: ["latin"], weight: '400' });

const Logo = () => {
  return (
    <h1 className={`${kalam.className} text-textPrimary text-xl text-center w-fit leading-normal`}>
      Nilton<strong>Cadamuro</strong>
    </h1>
  );
};

export default Logo;