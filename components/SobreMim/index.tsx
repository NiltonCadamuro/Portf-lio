import Image from "next/image";
import Button from "../BasicComponents/Button";
import Title from "../BasicComponents/Text/Title";
import Text from "../BasicComponents/Text";
import SpecialText from "../BasicComponents/Text/SpecialText";
import Technologies from "../BasicComponents/Technologies";

const SobreMim = () => {
  return (
    <section id="sobre" className="w-full lg:py-10 lg:px-4 min-h-screen">
      <div className="bg-surfacePrimary flex flex-col lg:flex-row justify-between w-full max-w-[1360px] mx-auto lg:rounded-2xl lg:p-[72px] pb-12 lg:pb-[72px] relative z-20">
        <div className="mb-10 lg:mb-0">
          <Image
            className=""
            src="/Coding-bro.svg"
            alt="Desenho de um personagem programando"
            width={488}
            height={396}
            priority
            loading="eager"
          />
        </div>
        <div className="max-w-[592px] px-6">
          <Technologies />
          <SpecialText className="mt-9 mb-3">Sobre mim</SpecialText>
          <Title className="mb-4">Meu nome é Nilton Junior Cadamuro e sou um entusiasta por tecnologia, bem vindo ao meu site!</Title>
          <Text>Tenho 23 anos, e durante minha jornada, tive a oportunidade de trabalhar com as principais tecnologias do mercado, o que me permitiu desenvolver habilidades sólidas e uma compreensão abrangente das necessidades desse setor dinâmico.</Text>
          <div className="w-fit mt-8">
            <Button
              link="TODO"
              type="primary"
              text="Meu Currículo"
              iconLeft
              icon={{
                path: "/icons/ReadCvLogo.svg",
                alt: "Icone de um papel com um simbolo de leitura",
                width: 24,
                height: 24,
                priority: true
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;