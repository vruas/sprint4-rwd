
import Image from 'next/image'

export default function Home() {
  return (
    <main>
		<section className='section-sobre'>
			<div className='section-itens'>

					<div>
						<h2>Sobre o projeto</h2>
						<p className='section-txt'>
						Nosso sistema de vistoria online para seguros de bicicleta é uma inovação que traz benefícios significativos para empresas e usuários. Reduz custos operacionais, permitindo preços mais acessíveis, amplia o acesso ao seguro para mais pessoas, oferece respostas rápidas de vistoria e a conveniência de poder realizar a vistoria pelo celular, eliminando a necessidade de deslocamento. Esta abordagem eficiente e ágil democratiza o acesso ao seguro, simplificando o processo de obtenção do serviço tanto para a empresa quanto para os usuários.
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
					<p className='mb-5 font-semibold text-cyan-500'>Gabriel Previ</p>
					<p className='mb-5 font-semibold text-cyan-500'>RM: 98774</p>
				</article>
				<article className='card-integrante'>
					<Image className='card-img'
					src='/img/lucas.jpeg'
					alt='Lucas Mendonça'
					width={128}
					height={128}
					/>
					<p className='mb-5 font-semibold text-cyan-500'>Lucas Mendonça</p>
					<p className='mb-5 font-semibold text-cyan-500'>RM: 99528</p>
				</article>
				<article className='card-integrante'>
					<Image className='card-img'
					src='/img/otavio.jpg'
					alt='Otávio Porto'
					width={128}
					height={128}
					/>
					<p className='mb-5 font-semibold text-cyan-500'>Otavio Porto</p>
					<p className='mb-5 font-semibold text-cyan-500'>RM: 550715</p>
				</article>
				<article className='card-integrante'>
					<Image className='card-img'
					src='/img/vitinho.jpg'
					alt='Vitor Ruas'
					width={128}
					height={128}
					/>
					<p className='mb-5 font-semibold text-cyan-500'>Vitor Ruas</p>
					<p className='mb-5 font-semibold text-cyan-500'>RM: 550871</p>
				</article>
			</div>
		</section>
    </main>
  )
}
