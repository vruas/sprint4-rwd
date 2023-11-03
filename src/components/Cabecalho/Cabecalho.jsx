import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Cabecalho() {
  return (
    <>
       <header>
    <div class="flex items-center">
        <div>
            <Image
                src="/img/porto-seguro-logo.png"
                alt="Logo da Porto"
                width={200}
                height={70}
            />
        </div>

        <a href="/login">
            <button class="btn-login">Entrar</button>
        </a>
    </div>

    <nav>
        <Link class="link-cabecalho" href="/sobre">Sobre Nós</Link>
        <Link class="link-cabecalho" href="/vistoria">Vistoria</Link>
        <Link class="link-cabecalho" href="/minha-garagem">Minha Garagem</Link>
        <Link class="link-cabecalho" href="/informacoes">Mais Informações</Link>
    </nav>
</header>

    </>
  );
}
