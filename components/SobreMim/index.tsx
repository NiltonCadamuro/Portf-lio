import Image from "next/image";
import Button from "../BasicComponents/Button";
import Container from "../BasicComponents/Container";
import Title from "../BasicComponents/Text/Title";
import Text from "../BasicComponents/Text";
import SpecialText from "../BasicComponents/Text/SpecialText";
import Technologies from "../BasicComponents/Technologies";

const SobreMim = () => {
  return (
    <section id="sobre" className="w-full">
      <div className="bg-surfacePrimary">
        <div>
          <Image
            className=""
            src="/first-image.svg"
            alt="Imagem representando programação"
            width={488}
            height={396}
            priority
            loading="eager"
          />
        </div>
        <div>
          <Technologies />
          <SpecialText>Sobre mim</SpecialText>
          <Title>Meu nome é Nilton Junior Cadamuro e sou um entusiasta por tecnologia, bem vindo ao meu site!</Title>
          <Text>Tenho 23 anos, e durante minha jornada, tive a oportunidade de trabalhar com as principais tecnologias do mercado, o que me permitiu desenvolver habilidades sólidas e uma compreensão abrangente das necessidades desse setor dinâmico.</Text>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;