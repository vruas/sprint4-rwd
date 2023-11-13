
import Image from 'next/image'

export default function Home() {
  return (
    <main>
		<section className='section-sobre'>
			<div className='section-itens'>

					<div>
						<h2>Sobre o projeto</h2>
						<p className='section-txt'>
							Nosso projeto consiste em um sistema que possa fazer uma vistoria online, assim podendo expandir a quantidade de clientes que podem ter um seguro para sua bicicleta. Os beneficios que o nosso projeto tras tanto para a empresa quanto para o usuario são: Diminuição no custo da vistoria assim diminuindo o preço dos pacotes, aumentar a quantidade de pessoas que podem ter acesso á um seguro de bicicleta, diminuir o tempo para a resposta da vistoria e a vistoria pode ser feita atraves de um celular sem precisar ir para algum lugar ou necessitar de um funcionario.	
						</p>
					</div>
				</div>
		</section>
		<section className='section2'>
			<div className='w-full h-1/10 pt-3 pl-2'>
				<h2 className='uppercase text-black text-3xl mt-2 font-bold'>Integrantes do Grupo</h2>
			</div>

			<div className='section2-cards'>
				<article className='card-integrante'>
					<Image className='card-img'
					src='/img/previ.jpg'
					alt='Gabriel Previ'
					width={128}
					height={128}
					/>
					<p className='mb-5 font-semibold text-blue-500'>Gabriel Previ</p>
					<p className='mb-5 font-semibold text-blue-500'>RM: 98774</p>
				</article>
				<article className='card-integrante'>
					<Image className='card-img'
					src='/img/lucas.jpeg'
					alt='Lucas Mendonça'
					width={128}
					height={128}
					/>
					<p className='mb-5 font-semibold text-blue-500'>Lucas Mendonça</p>
					<p className='mb-5 font-semibold text-blue-500'>RM: 99528</p>
				</article>
				<article className='card-integrante'>
					<Image className='card-img'
					src='/img/otavio.jpg'
					alt='Otávio Porto'
					width={128}
					height={128}
					/>
					<p className='mb-5 font-semibold text-blue-500'>Otavio Porto</p>
					<p className='mb-5 font-semibold text-blue-500'>RM: 550715</p>
				</article>
				<article className='card-integrante'>
					<Image className='card-img'
					src='/img/vitinho.jpg'
					alt='Vitor Ruas'
					width={128}
					height={128}
					/>
					<p className='mb-5 font-semibold text-blue-500'>Vitor Ruas</p>
					<p className='mb-5 font-semibold text-blue-500'>RM: 550871</p>
				</article>
			</div>
		</section>
    </main>
  )
}
