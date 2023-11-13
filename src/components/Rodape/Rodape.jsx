import React from 'react';

import Image from 'next/image';



export default function Rodape() {
  return (
    <footer className=' bg-zinc-800 flex justify-center items-center h-15 w-full h-15'>
        <div className='flex flex-col justify-center p-8 text-white font-bold'>
           <p>Nossas redes sociais</p>
           <div className='flex flex-wrap justify-between items-center pt-4'>
              <a href="#">
                <Image
                src='/img/facebook-logo.png'
                alt='Facebook Logo'
                width={30}
                height={30}
              
                />
              </a>
              
              <a href="#">
                <Image
                  src='/img/instagram-logo.png'             
                  alt='Instagram Logo'
                  width={30}
                  height={30}
                />
              </a>

              <a href="#">
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
