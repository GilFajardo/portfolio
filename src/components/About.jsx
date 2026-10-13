import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'

const About = () => {
 useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#about',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })
 
 return (
	<div id="about">
	 <div className="mb-16">
		<div className="content">
		 <div className="md:col-span-8">
			<p className="badge"><a href="./docs/CV_JoseGilbertoFajardoZapata.pdf" download>Descargar CV</a></p>
			<h2>
			 Herramientas e infraestructura para
				construir Software de alto rendimiento
			</h2>
		 </div>
		 
		 <div className="sub-content">
			<p>
			 Domino un ecosistema tecnológico completo para transformar requerimientos en aplicaciones web robustas, escalables y visualmente atractivas. Desde el diseño de interfaces fluidas en el frontend hasta la arquitectura del backend, bases de datos e infraestructura, aplico estándares de ingeniería para asegurar código limpio, mantenible y eficiente en cada proyecto.
			</p>
			
			<div>
			 <p className="md:text-3xl text-xl font-bold">
				"An <span>idiot</span> admires complexity, a <span>genius</span> admires simplicity"
			 </p>
			 <p className="text-sm text-white-100">
				-Terry A. Davis
			 </p>
			</div>
		 </div>
		</div>
	 </div>
	 
	 <div className="top-grid">
		<div className="md:col-span-3">
		 <div  className="noisy" />
		 <img src={`${import.meta.env.BASE_URL}images/lenguage1.png`} alt="grid-img-1" />
		</div>
		
		<div className="md:col-span-6">
		 <div  className="noisy" />
		 <img src={`${import.meta.env.BASE_URL}images/lenguage2.jfif`} alt="grid-img-2" />
		</div>
		
		<div className="md:col-span-3">
		 <div  className="noisy" />
		 <img src={`${import.meta.env.BASE_URL}images/lenguage3.jfif`} alt="grid-img-5" />
		</div>
	 </div>
	 
	 <div className="bottom-grid">
		<div className="md:col-span-8">
		 <div  className="noisy" />
		 <img src={`${import.meta.env.BASE_URL}images/lenguage4.png`} alt="grid-img-3" />
		</div>
		
		<div className="md:col-span-4">
		 <div  className="noisy" />
		 <img src={`${import.meta.env.BASE_URL}images/lenguage5.png`} alt="grid-img-4" />
		</div>
	 </div>
	 
	</div>
 )
}
export default About