import Beneficios from "@/components/Beneficios";
import Footer from "@/components/Footer";
import Loading from "@/components/BasicComponents/Loading";
import MainBanner from "@/components/FirstContent";
import SobreMim from "@/components/SobreMim";
import Tratamentos from "@/components/Tratamentos";
import Header from "@/components/header";
import Image from "next/image";
import { Suspense } from "react";
import FirstContent from "@/components/FirstContent";

export default function Home() {

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="flex min-h-screen flex-col items-center justify-between bg-surfaceBackground">
          <div className="w-full bg-blur bg-no-repeat bg-cover overflow-hidden">
            <FirstContent />
            <SobreMim />
          </div>
          {/* <div className="my-16">
            <Image
              className=""
              src="/scroll-animation.gif"
              alt="Animacao de scroll indicando que a pagina deve ser rolada para baixo"
              width={25}
              height={83}
              priority
            />
          </div>

          
          <Beneficios />
          <Tratamentos /> */}
        </main>
      </Suspense>


      {/* <Footer /> */}
    </>
  );
}
