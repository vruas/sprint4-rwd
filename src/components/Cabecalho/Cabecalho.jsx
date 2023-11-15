import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <>
      <header className="bg-transparent flex justify-between items-center h-28">
        <div className="flex items-center">
          <div>
            <a href="https://www.portoseguro.com.br/seguro-bike?utm_source=google&utm_medium=cpa&utm_campaign=vs_bike_seguro-bike_hq_gro_porto-week_google-ads_bike-portoweek-pmax_23ngq80511he_performance&utm_content=vs_bike_seguro-bike_hq_gro_porto-week_google-ads_bike-portoweek-pmax_23ngq80511he_performance_key_bike-portoweek-pmax_pmax_23ngq80511he&ref=search_r90511&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC_mNFu4I37kjzwOYbvY_nIGg67-cdkbMyf943x7B7xLAd556Cha1gBoCH8YQAvD_BwE">
              <Image
                src="/img/porto-seguro-logo.png"
                alt="Logo da Porto"
                width={200}
                height={70}
              />
            </a>
          </div>

          <Link href="/cadastro">
            <button className="btn-login-cabecalho">Cadastre-se</button>
          </Link>
        </div>

        <nav className="flex flex-row justify-around">
          <Link className="link-cabecalho" href="/vistoria">
            Vistoria
          </Link>
          <Link className="link-cabecalho" href="/bicicletas">
            Bicicletas
          </Link>
          <Link className="link-cabecalho" href="/informacoes">
            Mais Informações
          </Link>
        </nav>
      </header>
    </>
  );
}
