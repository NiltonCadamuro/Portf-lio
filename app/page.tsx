import Footer from "@/components/Footer";
import Loading from "@/components/BasicComponents/Loading";
import MainBanner from "@/components/FirstContent";
import SobreMim from "@/components/SobreMim";
import Header from "@/components/header";
import Image from "next/image";
import { Suspense } from "react";
import FirstContent from "@/components/FirstContent";
import Transition from "@/components/Transition";

export default function Home() {

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="bg-surfaceBackground">
          <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-t from-black to-surfaceBackground shadow-inside-bottom ">
            <div className="w-full bg-blur bg-no-repeat bg-cover overflow-hidden">
              <FirstContent />
              <SobreMim />
              <div className="relative h-[400px]">
                <div className="hidden lg:block w-full max-w-[20px] aspect-square bg-[#C7FAD6] radius-2-animation absolute left-2 !blur-[20px] glow z-10 top-0"></div>
                <div className="hidden lg:block w-full max-w-[30px] aspect-square bg-[#C7FAD6] radius-3-animation absolute left-20 !blur-[20px] glow z-10 top-16"></div>
              </div>




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
          </div>
          <Transition />
          <div className="h-screen"></div>
        </main>
      </Suspense>


      {/* <Footer /> */}
    </>
  );
}
