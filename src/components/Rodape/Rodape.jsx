import React from 'react';
import Link from 'next/link';


export default function Rodape() {
  return (
    <footer className='flex justify-between bg-zinc-800'>
        
        <div className='flex flex-col p-8 text-white font-bold'> 
            <span className='mb-6'>Links úteis</span>
            <Link href='/login'>Entrar</Link>
            <Link href='/sobre'>Sobre Nós</Link>
            <Link href='/vistoria'>Vistoria</Link>
            <Link href='/minha-garagem'>Minha Garagem</Link>
            <Link href='/informacoes'>Mais Informações</Link>
        </div>
        <div className='flex flex-col p-8 text-white font-bold'>
           <span className="mb-6">Nossas Redes Sociais</span>
           <Link className='' href='#'>Instagram</Link>
           <Link className='' href='#'>Linkedin</Link>
           <Link className='' href='#'>Twitter</Link>
        </div>
    </footer>
  )
}
