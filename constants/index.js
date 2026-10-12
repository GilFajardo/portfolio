const navLinks = [
 {
	id: "cocktails",
	title: "Presentación",
 },
 {
	id: "about",
	title: "Sobre Mí",
 },
 {
	id: "work",
	title: "Proyectos",
 },
 {
	id: "contact",
	title: "Contacto",
 },
];

const cockTailLists = [
 {
	name: "Universidad Politécnica de San Luis Potosí",
	country: "Ing. Tecnologias de la Información",
	detail: "2022 - Presente"
 },
 {
	name: "Full Stack & Arquitectura Web",
	detail: "Enfoque en estructurar arquitecturas robustas y crear interfaces modernas.",
 },
 {
	name: "Integración de Software, Sistemas y Hardware",
	detail: "Mi fuerte es conectar lógica compleja de backend con soluciones funcionales en tiempo real.",
 },
];

const mockTailLists = [
 {
	name: "IT Specialist Java",
	country: "Certiport",
	detail: "View Badge",
 },
 {
	name: "Microsoft Office Specialist: Associate",
	country: "Microsoft",
	detail: "View Badge",
 },
 {
	name: "IT Essentials",
	country: "Cisco",
	detail: "View Badge",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Interfaces frontend dinámicas y fluidas",
 "Control de versiones y despliegue (Git / Linux)",
 "Código Limpio y buenas prácticas",
 "Optimización de rendimiento web",
];

const goodLists = [
 "Arquitectura backend robusta (Laravel / PHP)",
 "Consultas y bases de datos optimizadas",
 "Desarrollo de APIs seguras",
 "Lógica de negocio escalable ",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "./images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "./images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "./images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "./images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },
];

export {
 navLinks,
 cockTailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};