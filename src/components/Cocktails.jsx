import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { cockTailLists, mockTailLists } from '../../constants/index.js'

const Cocktails = () => {
 useGSAP(() => {
	const parallaxTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#cocktails',
		start: 'top 30%',
		end: 'bottom 80%',
		scrub: true,
	 }
	})
	
	parallaxTimeline
	 .from('#c-left-leaf', {
		x: -100, y: 100
	})
	 .from('#c-right-leaf', {
		x: 100, y: 100
	})
 })
 
 return (
	<section id="cocktails" className="noisy">
      <img
        src={`${import.meta.env.BASE_URL}images/logo1.png`}
        alt="l-leaf"
        id="c-left-leaf"
      />
	 <img
        src={`${import.meta.env.BASE_URL}images/palm.png`}
        alt="r-leaf"
        id="c-right-leaf"
      />
	 
	 <div className="list">
		<div className="popular bg-black/60 rounded-lg p-6">
		 <h2>Educación:</h2>
		 <ul>
			{cockTailLists[0] && (
            <li key="name">
            <div className="md:me-28">
                <h3>{cockTailLists[0].name}</h3>
                <p>{cockTailLists[0].country} | {cockTailLists[0].detail}</p>
            </div>
            </li>
            )}
            <h2>Enfoque Profesional:</h2>
            {cockTailLists[1] && (
            <li key="name">
            <div className="md:me-28">
                <h3>{cockTailLists[1].name}</h3>
                <p>{cockTailLists[1].detail}</p>
            </div>
            </li>
            )}
            {cockTailLists[2] && (
            <li key="name">
            <div className="md:me-28">
                <h3>{cockTailLists[2].name}</h3>
                <p>{cockTailLists[2].detail}</p>
            </div>
            </li>
            )}
		 </ul>
		</div>
		
		<div className="loved bg-black/60 rounded-lg p-6">
		 <h2>Certificaciones:</h2>
		 
		 <ul>
			{mockTailLists[0] && (
            <li key="name">
            <div className="md:me-28">
                <h3>{mockTailLists[0].name}</h3>
                <p>{mockTailLists[0].country}</p>
                <a href="https://www.credly.com/badges/90d817bf-93a0-4130-bd72-9a10e1b7c687/public_url" target="_blank"><p>{mockTailLists[0].detail}</p></a>
            </div>
            </li>
            )}
            {mockTailLists[1] && (
            <li key="name">
            <div className="md:me-28">
                <h3>{mockTailLists[1].name}</h3>
                <p>{mockTailLists[1].country}</p>
                <a href="https://www.credly.com/badges/3395f43c-3dde-49d4-b665-bfbe096e4fec/public_url" target="_blank"><p>{mockTailLists[0].detail}</p></a>
            </div>
            </li>
            )}
            {mockTailLists[2] && (
            <li key="name">
            <div className="md:me-28">
                <h3>{mockTailLists[2].name}</h3>
                <p>{mockTailLists[2].country}</p>
                <a href="https://www.credly.com/badges/7175cd98-91a0-494b-95cf-eba528d6268d/public_url" target="_blank"><p>{mockTailLists[0].detail}</p></a>
            </div>
            </li>
            )}
		 </ul>
		</div>
	 </div>
	</section>
 )
}

export default Cocktails