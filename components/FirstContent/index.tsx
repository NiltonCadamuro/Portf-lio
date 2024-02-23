import Image from "next/image";
import CircleAnimation from "../BasicComponents/CircleAnimation";
import Button from "../BasicComponents/Button";
import Text from "../BasicComponents/Text";
import Title from "../BasicComponents/Text/Title";
import AnimatedText from "../BasicComponents/Text/AnimatedText";
import SocialMedias from "../BasicComponents/SocialMedias";

const FirstContent = () => {
  return (
    <section id="inicio" className="w-full px-6">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center max-w-[1220px] mx-auto w-full lg:mt-24 mt-12">
        <div className="relative max-w-[500px] w-full aspect-square flex-1 mb-6 lg:mb-0">
          <Image
            className="absolute top-0 left-0 z-10"
            src="/first-image.svg"
            alt="Imagem representando programação"
            width={500}
            height={500}
            priority
            loading="eager"
          />
          <CircleAnimation />
        </div>
        <div className="max-w-[592px]">
          <AnimatedText className="lg:mb-8 mb-6">Olá, me chamo Nilton</AnimatedText>
          <Title className="mb-4">Sou desenvolvedor front-end</Title>
          <Text className="lg:mb-8 mb-6">Programador entusiasta por tecnologia com mais de 2 anos de experiência no mercado de Ti focado principalmente em e-commerce, trabalhando com as principais tecnologias do mercado, sempre focando em não abrir mão de um código limpo e boas práticas.</Text>
          <div className="flex gap-4">
            <Button
              link="TODO"
              type="gray"
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
            <Button
              link="TODO"
              type="primary"
              text="Contato"
              icon={{
                path: "/icons/ArrowRight.svg",
                alt: "Icone de seta para direita",
                width: 24,
                height: 24,
                priority: true
              }}
            />
          </div>
          <div className="mt-4">
            <SocialMedias />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstContent;