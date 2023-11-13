import React from 'react';

import Image from 'next/image';



export default function Rodape() {
  return (
    <footer className=' bg-zinc-800 flex justify-center items-center h-15 w-full h-15'>
        <div className='flex flex-col justify-center p-8 text-white font-bold'>
           <p>Nossas redes sociais</p>
           <div className='flex flex-wrap justify-between items-center pt-4'>
              <a href="https://web.facebook.com/porto/?locale=pt_BR&_rdc=1&_rdr">
                <Image
                src='/img/facebook-logo.png'
                alt='Facebook Logo'
                width={30}
                height={30}
              
                />
              </a>
              
              <a href="https://www.instagram.com/portoseguro/">
                <Image
                  src='/img/instagram-logo.png'             
                  alt='Instagram Logo'
                  width={30}
                  height={30}
                />
              </a>

              <a href="https://twitter.com/portoseguro?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <Image
                src='/img/twitter-logo.png'
                alt='Twitter Logo'
                width={30}
                height={30}
                />
              </a>
          </div>
         
           
        </div>
    </footer>
  )
}
