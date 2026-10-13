const navLinks = [
 {
	id: "hero",
	title: "Presentación",
 },
 {
	id: "about",
	title: "Sobre Mí",
 },
 {
	id: "art",
	title: "Habilidades",
 },
 {
	id: "menu",
	title: "Proyectos",
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
	name: "Serpiente Game",
	image: "./images/c1.PNG",
	image2: "./images/c2.png",
	title: "Videjuego Retro Estilo Snake",
	description:
	 "Serpiente es un videojuego de consola para Windows inspirado en el juego clásico de la serpiente. Controla a Quetzalcóatl, consigue puntos y responde preguntas sobre deidades mexicas para conservar tus vidas.",
	proyecto: "https://github.com/GilFajardo/serpiente.git"
 },
 {
	id: 2,
	name: "Algoritmo Round Robin",
	image: "./images/apache.svg",
	video: "./videos/algoritmo.mp4",
	title: "Descubre como funcionan los procesos en Sistemas Operativos.",
	description:
	 "Simulador de planificación Round Robin (RR) con interfaz gráfica en Java Swing.",
	proyecto: "https://github.com/GilFajardo/algoritmorr.git"
 },
 {
	id: 3,
	name: "Inventario para Farmacia",
	image: "./images/farmacia1.PNG",
	image2: "./images/farmacia3.PNG",
	title: "Sistema de Gestion de Análisis de laboratorio",
	description:
	 "Aplicación de consola en C++ para administrar un catálogo de análisis y sus registros de detalle. La interfaz utiliza menús de teclado y guarda la información en archivos locales.",
	proyecto: "https://github.com/GilFajardo/farmacia.git"
 },
 {
	id: 4,
	name: "Eventos Deportivos",
	image: "./images/apache.svg",
	video: "./videos/deportivo.mp4",
	title: "Sistema de Reservaciones para Eventos Deportivos",
	description:
	 "Aplicacion de escritorio para gestionar la reservacion de boletos y asientos en eventos deportivos. El proyecto esta desarrollado en Java Swing, utiliza MySQL/MariaDB como base de datos y se administra como un proyecto Java SE de NetBeans con Ant.",
	proyecto: "https://github.com/GilFajardo/EventosDeportivos.git"
 },
  {
	id: 5,
	name: "ZTS Control",
	image: "./images/laravel.webp",
	image2: "./images/ztscontrol.PNG",
	title: "Sistema de Inventariado para Equipo",
	description:
	 "Aplicación web para administrar y consultar la infraestructura y los equipos de la Zona de Transmisión San Luis Potosí. Permite organizar la información por región y subestación, mantener catálogos y consultar la estructura mediante diagramas.",
	proyecto: ""
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