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

          <a href="/cliente/login">
            <button class="btn-login-cabecalho">Entrar</button>
          </a>
        </div>

        <nav className="flex flex-row justify-around">
          <Link class="link-cabecalho" href="/vistoria">
            Vistoria
          </Link>
          <Link class="link-cabecalho" href="/api/garagem">
            Minha Garagem
          </Link>
          <Link class="link-cabecalho" href="/informacoes">
            Mais Informações
          </Link>
        </nav>
      </header>
    </>
  );
}
