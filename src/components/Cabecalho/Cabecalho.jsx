import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <>
      <header className="bg-transparent flex justify-between items-center h-28">
        <div className="flex items-center">
          <div>
            <Link href="/">
              <Image
                src="/img/porto-seguro-logo.png"
                alt="Logo da Porto"
                width={200}
                height={70}
              />
            </Link>
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
