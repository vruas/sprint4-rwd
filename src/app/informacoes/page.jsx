import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

export default function MaisInfo() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-300 p-4 md:p-8">
      <div className="mt-8 mb-8 flex justify-start">
        <Link href="/">
          <AiFillHome className="w-8 h-8" />
        </Link>
      </div>
      <div>
        <div className=" border-4 border-black rounded-lg p-4 md:p-8 mb-4">
          <h1 className=" text-2xl md:text-3xl font-bold mb-4 text-cyan-900">
            Opções de Pacote
          </h1>
          <h3 className="text-lg md:text-base mb-4">
            Seja bem-vindo! Aqui estão as várias opções de pacotes de seguro
            disponíveis para você. Escolha a que melhor atende às suas
            necessidades.
          </h3>
          <h4 className=" text-xl md:text-2xl font-semibold mb-2 text-cyan-700">
            Pedal Essencial:
          </h4>
          <p className=" mb-4">
            O Plano de Serviço Pedal Essencial abrange uma variedade de
            assistências essenciais para os ciclistas. Isso inclui desde o
            reparo de câmaras de ar e correntes, até a substituição ou regulagem
            de componentes fundamentais como selim, canote, manetes de freios,
            cabos e freios dianteiros e traseiros. É um plano abrangente que
            visa garantir que sua bicicleta esteja sempre pronta para qualquer
            aventura, cobrindo desde pequenos reparos até ajustes vitais para um
            passeio seguro e tranquilo.
          </p>
          <h4 className=" text-xl md:text-2xl font-semibold mb-2 text-cyan-700">
            Pedal Leve:
          </h4>
          <p className=" mb-4">
            O Plano de Serviço Pedal Leve oferece uma gama de assistências
            cruciais para ciclistas, cobrindo desde reparos básicos até garantir
            o bem-estar do ciclista. Isso inclui reparos ou substituições de
            câmaras de ar e correntes, ajustes ou trocas do selim e do canote, a
            regulagem e troca de manetes de freios e cabos, além da regulagem
            dos freios dianteiro e traseiro. É um pacote abrangente que atende
            desde a manutenção rotineira até a assistência essencial em
            situações imprevistas.
          </p>
          <h4 className=" text-xl md:text-2xl font-semibold mb-2 text-cyan-700">
            Pedal Elite:
          </h4>
          <p className="mb-4">
            O plano de serviço Pedal Elite proporciona uma gama de assistências
            vitais, desde reparos primordiais até benefícios que garantem a
            comodidade e manutenção ideal do equipamento. Isso inclui reparos e
            substituição de câmaras de ar e correntes, ajustes e trocas de selim
            e canote, bem como a regulagem e substituição de manetes de freios e
            cabos. No caso de emergências, o plano oferece o transporte do
            segurado e da bicicleta, com limites de 50 km e 150 km, em situações
            de quebra ou acidente, respectivamente.
          </p>
        </div>

        <div className=" border-4 border-black  rounded-lg mb-4 p-4 md:p-8">
          <h2 className=" text-2xl md:text-3xl font-bold mb-4 text-cyan-900">
            Bicicletas cobertas
          </h2>
          <p className=" mb-4">
            O seguro oferece cobertura abrangente para uma ampla gama de
            bicicletas, incluindo modelos urbanos, mountain bikes, bikes speed e
            elétricas, dobráveis e BMX. Além disso, contempla os segmentos de
            downhill, trial, bicicletas fixas, reclinadas e até mesmo hand
            bikes. Seja qual for o seu estilo ou preferência, o seguro está
            preparado para proteger e atender às necessidades específicas de
            diferentes tipos de ciclistas e suas bicicletas, garantindo uma
            experiência segura e tranquila em suas pedaladas.
          </p>
        </div>

        <div className=" border-4 border-black rounded-lg p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-900">
            Danos Cobertos
          </h2>
          <div className="mb-4">
            <p>
              As condições gerais do seguro de bicicleta da Porto geralmente
              abrangem coberturas como proteção contra colisão, tombamento, e
              capotagem, além de roubo, danos por terceiros e danos por eventos
              climáticos. Essa apólice costuma oferecer assistência 24 horas
              para questões técnicas ou emergências. Contudo, é importante
              revisar detalhadamente as condições específicas, uma vez que essas
              coberturas podem variar em extensão e inclusão, dependendo do
              plano escolhido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
