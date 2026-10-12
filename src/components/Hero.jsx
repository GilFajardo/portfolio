import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
 const videoRef = useRef();
 
 const isMobile = useMediaQuery({ maxWidth: 767 });
 
 useGSAP(() => {
	const heroSplit = new SplitText(".title", {
	 type: "chars, words",
	});
	
	const paragraphSplit = new SplitText(".subtitle", {
	 type: "lines",
	});
	
	// Apply text-gradient class once before animating
	heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
	
	gsap.from(heroSplit.chars, {
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	});
	
	gsap.from(paragraphSplit.lines, {
	 opacity: 0,
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	 delay: 1,
	});
	
	gsap
	.timeline({
	 scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true,
	 },
	})
	.to(".right-leaf", { y: 200 }, 0)
	.to(".left-leaf", { y: -200 }, 0)
	.to(".arrow", { y: 100 }, 0);
	
	const startValue = isMobile ? "top 50%" : "center 52%";
	const endValue = isMobile ? "120% top" : "bottom top";
	
	let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};
 }, []);
 
 return (
	<>
	 <section id="hero" className="noisy">
		<h1 className="title">PORTAFOLIO</h1>
		
		<img
          src={`${import.meta.env.BASE_URL}images/cesar1.png`}
          alt="left-leaf"
          className="left-leaf"
        />
		<img
          src={`${import.meta.env.BASE_URL}images/sol1.png`}
          alt="right-leaf"
          className="right-leaf"
        />
		
		<div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content bg-black/45 rounded-lg p-4">
			<div className="space-y-3 md:space-y-5">
			 <p>Ingeniero en Tecnologías de la Información</p>
			 <p className="subtitle">
				José Gilberto<br /> Fajardo Zapata
			 </p>
			</div>
			
			<div className="view-cocktails md:-translate-x-8 lg:-translate-x-18">
			 <p className="subtitle">
				Apasionado por crear aplicaciones web robustas, software de escritorio
                y sistemas de monitoreo. Me enfoco en optimizar procesos y construir soluciones 
                que <b>realmente funcionen.</b>
			 </p>
			 <a href="#cocktails">Ver proyectos</a>
			</div>
		 </div>
		</div>
	 </section>
	 
	 <div className="video absolute inset-0">
		<video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}videos/tokyo.mp4`}
            muted
            playsInline
            preload="auto"
        />
	 </div>
	</>
 );
};

export default Hero;