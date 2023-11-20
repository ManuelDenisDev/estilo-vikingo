import Link from 'next/link';
import Image from 'next/image';

import { cinzelDecorative } from '../fonts';

import {
	IoCartOutline,
	IoChevronDownOutline,
	IoMenuOutline,
	IoPersonOutline,
	IoSearchOutline,
} from 'react-icons/io5';

import paisaje01 from '../../../public/images/carl-cerstrand-oBPSdIOYHNg-unsplash.jpg';
import paisaje02 from '../../../public/images/atle-mo-X9QnU-h3X_8-unsplash.jpg';
import paisaje03 from '../../../public/images/meera-parat-dzOBfk1f5iE-unsplash.jpg';
import paisaje04 from '../../../public/images/valdemaras-d-khbjgGAerPU-unsplash.jpg';
import paisaje05 from '../../../public/images/sebastien-goldberg-vgGjc_jHyfU-unsplash.jpg';

export default function Home() {
	return (
		<>
			<div className="absolute top-0 w-full z-20">
				<div className="bg-white">
					{/* Header */}
					<header className="bg-principal-100 text-fondo-100 fixed w-full">
						<nav className="container m-auto px-4 py-2 lg:px-0 lg:py-5">
							<div className="flex justify-between">
								<div className="w-2/5 lg:hidden flex items-center justify-start">
									<IoMenuOutline size={20} />
								</div>
								<h1
									className={`${cinzelDecorative.className} flex justify-center items-center  lg:justify-start text-center lg:text-left text-xl lg:text-3xl 2xl:text-3xl `}>
									Estilo Vikingo
								</h1>
								<nav className="hidden lg:flex justify-center self-stretch">
									<ul className="h-full flex space-x-8">
										<li className="relative flex cursor-pointer ">
											<Link
												href="/"
												className="flex items-center border-t-4 border-transparent hover:border-fondo-100 transition-colors ease-in-out duration-300">
												<span className="flex items-center gap-1 uppercase -mt-1 text-sm font-medium">
													Historia
													<IoChevronDownOutline size={16} />
												</span>
											</Link>
										</li>
										<li className="relative flex cursor-pointer">
											<Link
												href="/"
												className="flex items-center border-t-4 border-transparent hover:border-fondo-100 transition-colors ease-in-out duration-300">
												<span className="flex items-center gap-1 uppercase -mt-1 text-sm font-medium">
													Cultura
													<IoChevronDownOutline size={16} />
												</span>
											</Link>
										</li>
										<li className="relative flex cursor-pointer">
											<Link
												href="/"
												className="flex items-center border-t-4 border-transparent hover:border-fondo-100 transition-colors ease-in-out duration-300">
												<span className="flex items-center gap-1 uppercase -mt-1 text-sm font-medium">
													Mitologia
													<IoChevronDownOutline size={16} />
												</span>
											</Link>
										</li>
										<li className="relative flex cursor-pointer">
											<Link
												href="/"
												className="flex items-center border-t-4 border-transparent hover:border-fondo-100 transition-colors ease-in-out duration-300">
												<span className="uppercase -mt-1 text-sm font-medium">
													Blog
												</span>
											</Link>
										</li>
										<li className="relative flex cursor-pointer">
											<Link
												href="/"
												className="flex items-center border-t-4 border-transparent hover:border-fondo-100">
												<span className="uppercase -mt-1 text-sm font-medium">
													Tienda
												</span>
											</Link>
										</li>
									</ul>
								</nav>
								<div className="w-2/5 lg:w-auto flex items-center justify-end">
									<ul className="flex items-center justify-end space-x-4">
										<div className="hidden lg:block">
											<select
												name="idioma"
												id="idioma"
												className="bg-principal-100">
												<option value="es">es</option>
												<option value="en">en</option>
												<option value="de">de</option>
												<option value="fr">fr</option>
											</select>
										</div>
										<li>
											<IoSearchOutline size={20} />
										</li>
										<li>
											<IoPersonOutline size={20} />
										</li>
										<li>
											<IoCartOutline size={20} />
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</header>
				</div>
			</div>
			<div className="mt-16">
				{/* Barra de animacion */}
				<div className="bg-white">
					<div className="relative flex items-center mt-1 py-1 justify-center overflow-x-hidden shadow">
						<div className="animate-marquee whitespace-nowrap space-x-8">
							<span className="text-xs">
								“Mejor es luchar y caer, que vivir sin esperanza”.
							</span>
							<span className="text-xs">
								“Los hombres generosos y valientes viven mejor y rara vez sufren;
								pero el cobarde lo teme todo.”
							</span>
							<span className="text-xs">
								“Antes de entrar en un lugar, fíjate por dónde se puede salir.”
							</span>
							<span className="text-xs">
								“Tu espalda es vulnerable, a menos que tengas a un verdadero
								hermano”.
							</span>
						</div>
						<div className="absolute top-1 animate-marquee2 whitespace-nowrap space-x-8">
							<span className="text-xs ml-8">
								“Mejor es luchar y caer, que vivir sin esperanza”.
							</span>
							<span className="text-xs">
								“Los hombres generosos y valientes viven mejor y rara vez sufren;
								pero el cobarde lo teme todo.”
							</span>
							<span className="text-xs">
								“Antes de entrar en un lugar, fíjate por dónde se puede salir.”
							</span>
							<span className="text-xs">
								“Tu espalda es vulnerable, a menos que tengas a un verdadero
								hermano”.
							</span>
						</div>
					</div>
				</div>
				<main className="flex flex-col lg:space-y-16">
					{/* Hero Section */}
					<section className="relative">
						<picture>
							<Image
								className="w-full object-cover aspect-square lg:aspect-video"
								alt="Paisaje Vikingo"
								src={paisaje02}
							/>
							<div className="absolute w-full h-full top-0 bg-black/10"></div>

							<h2
								className={`${cinzelDecorative.className} absolute top-20 left-0 right-0 text-3xl lg:text-5xl lg:leading-normal font-bold text-center `}>
								Descubre la Historia Vikinga
							</h2>
						</picture>
					</section>
					<section className="my-16">
						<div className="container max-w-screen-lg mx-auto py-4">
							<div className="flex flex-col items-center text-center">
								<p
									className={`${cinzelDecorative.className} break-words text-xl font-bold`}>
									Explora la fascinante cultura y mitología de los vikingos.
								</p>
							</div>
						</div>
					</section>
					{/* Tres Cards Section */}
					<section className="">
						<div className="container mx-auto grid gap-0 lg:gap-8 grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3">
							<Link href="/" className="group">
								<figure className="relative h-96 w-full overflow-hidden">
									<Image
										className="h-full w-full object-cover object-center group-hover:h-[120%] group-hover:w-[120%] transition-all duration-300 ease-in-out"
										src={paisaje01}
										alt="nature image"
									/>
									<figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between  border border-white bg-white/75 p-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
										<div>
											<h3
												className={`${cinzelDecorative.className} font-bold`}>
												Historia Vikinga
											</h3>
											<p className="mt-2 font-normal">
												Sumérgete en la fascinante historia de los vikingos,
												desde sus inicios hasta su legado duradero.
											</p>
										</div>
									</figcaption>
								</figure>
							</Link>
							<Link href="/" className="group">
								<figure className="relative h-96 w-full overflow-hidden ">
									<Image
										className="h-full w-full object-cover object-center group-hover:h-[120%] group-hover:w-[120%] transition-all duration-300 ease-in-out"
										src={paisaje03}
										alt="nature image"
									/>
									<figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between  border border-white bg-white/75 p-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
										<div>
											<h3
												className={`${cinzelDecorative.className} font-bold`}>
												Cultura Vikinga
											</h3>
											<p className="mt-2 font-normal">
												Explora los aspectos únicos de la cultura vikinga,
												desde su arte hasta su estilo de vida.
											</p>
										</div>
									</figcaption>
								</figure>
							</Link>
							<Link href="/" className="group">
								<figure className="relative h-96 w-full overflow-hidden ">
									<Image
										className="h-full w-full object-cover object-center group-hover:h-[120%] group-hover:w-[120%] transition-all duration-300 ease-in-out"
										src={paisaje04}
										alt="nature image"
									/>
									<figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between  border border-white bg-white/75 p-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
										<div>
											<h3
												className={`${cinzelDecorative.className} font-bold`}>
												Mitología Vikinga
											</h3>
											<p className="mt-2 font-normal">
												Descubre los mitos y leyendas que forman la rica
												mitología vikinga, llena de dioses y héroes.
											</p>
										</div>
									</figcaption>
								</figure>
							</Link>
						</div>
					</section>
					{/* ir a la tienda  */}
					<section className="bg-gradient-to-br  from-principal-100 to-principal-200 text-fondo-200">
						<div className="my-16 p-8 text-center space-y-8 ">
							<h2 className={`${cinzelDecorative.className} text-3xl font-bold`}>
								Explora la Tienda Vikinga
							</h2>
							<p className="text-xl">
								Encuentra productos únicos que capturan la esencia de los vikingos.
							</p>
							<div className="">
								<Link
									href="/tienda"
									className="bg-principal-100 text-fondo-200 px-8 py-4 border hover:bg-principal-200 font-semibold uppercase tracking-wide">
									Explorar la Tienda
								</Link>
							</div>
						</div>
					</section>
					{/* ir al blog */}
					<section className="relative h-[500px]">
						<picture>
							<Image
								className="w-full h-[500px] object-cover aspect-square lg:aspect-video"
								alt="Paisaje Vikingo"
								src={paisaje05}
							/>
							<div className="absolute w-full h-full top-0 bg-black/30"></div>
							<div>
								<h2
									className={`${cinzelDecorative.className} text-fondo-100 absolute top-20 left-0 right-0 text-3xl xl:text-5xl lg:leading-normal font-bold text-center `}>
									¡Únete a Nuestra Comunidad Vikinga!
								</h2>
								<p className="text-principal-100 p-4 bg-fondo-100 absolute font-semibold top-48 left-0 right-0 text-center">
									Recibe las últimas actualizaciones, historias fascinantes y
									ofertas exclusivas directamente en tu bandeja de entrada.
								</p>
								<div className="absolute top-80 left-0 right-0">
									<form
										action="#"
										method="post"
										className="flex items-center justify-center">
										<input
											type="email"
											name="email"
											placeholder="Tu correo electrónico"
											className="bg-white text-principal-100 px-4 py-2  focus:outline-none"
										/>
										<button
											type="submit"
											className="bg-principal-100 border text-white px-8 py-2  hover:bg-principal-200 uppercase font-bold tracking-wider">
											Suscribirse
										</button>
									</form>
								</div>
							</div>
						</picture>
					</section>
					<footer className="bg-principal-100 text-white p-4 text-center">
						<p className='text-sm font-semibold'>&copy; 2023 Estilo Vikingo. Todos los derechos reservados.</p>
					</footer>
				</main>
			</div>
		</>
	);
}
