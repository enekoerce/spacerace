///////////////////////////////////////////////////////////////////
////
////	INFO
////	====
////
////	1. ARRAYS
////
////	- programas
////
////
////	- misiones
////
////
////	- plataformas
////
////
////	- hitos
////
////
////	- eventos
////
////
////	- modificadores
////
////
////	- arrayCartelMensajes
////
////
////	- misionesProgramadas
////
////
////---------------------------------------------------------------
////
////	2. FUNCIONES
////
////	- lanzarJuego
////
////
////	-	montarProgramas
////
////
////	-	montarMisiones
////
////
////	-	montarPlataformas
////
////
////	- updateMisionesProgramadas
////
////
////	- updateHitos
////
////
////	-	abrirVentanaMenu
////
////
////	- cerrarVentanaMenu
////
////
////	- pausar
////
////
////	- abrirVentanaModal
////
////
////	- cerrarVentanaModal
////
////
////	- sumarFondos
////
////
////	- encargarMateriales
////
////
////	- sumarEquipo
////
////
////	- eventoPrograma
////
////
////	- eventoMision
////
////
////	- elegirComponentesMision
////
////
////	- mostrarDatosComponentes
////
////
////	- eventoPlataforma
////
////
////	- desarrollarPrograma
////
////
////	- mejorarPrograma
////
////
////	- fabricarComponente
////
////
////	- asignarEquipoPrograma
////
////
////	- desarrollarMision
////
////
////	- mejorarMision
////
////
////	- programarMision
////
////
////	- asignarEquipoMision
////
////
////	- ensamblarMision
////
////
////	-	programarLanzamiento
////
////
////	-	cancelarMision
////
////
////	-	lanzamiento
////
////
////	- interval
////
////
///////////////////////////////////////////////////////////////////

﻿//VARIABLES PARTIDA

//Variables configuración

var timer = "";
var velocidad = 500;
var modoDesarrollo = true;
var indestructible = true;

//Variables interfaz

var juegoPausado = 1; //1: loop parado | 0: loop ejecutándose
var menuAbierto = 0;
var cartelMensajes = "";

//Variables juego

var fondos = 40;
var materiales = 40;
var equipos = 2;
var prestigio = 50;

if(modoDesarrollo) {
	var fondos = 400;
	var materiales = 400;
	var equipos = 20;
	var prestigio = 500;
}

//---------------------------------------

//ARRAY PROGRAMAS
var programas = [
	// 0-> Vanguard/Juno
	// 1-> Redstone/Atlas
	// 2-> Atlas II
	// 3-> Saturn V
	// 4-> Explorer
	// 5-> Ranger
	// 6-> Mariner
	// 7-> Mercury
	// 8-> Gemini
	// 9-> Apollo
	{
		id: 0,
		nombre: "programa0",
		nombreJuego: "Vanguard/Juno",
		tipo: 1, // 1-> Cohete; 2-> Satélite; 3-> Cápsula.
		nivel: 1, // 1-> Atlas/Mercury; 2-> X/Gemini; 3-> Saturn/Apolo.
		peso: 0, // 0 si es cohete.
		capacidad: 400, // 0 si no es cohete.
		desarrollado: 0, // Todos empiezan a cero hasta que se investigan.
		desbloqueado: true, // True-> Aparece desde el principio; False-> Requiere de que otro programa se desarrolle antes.
		costeDesarrollo: 10,
		tiempoDesarrollo: 10,
		requisitoPrograma: "-", // ID del programa que se tiene que desarrollar previamente.
		seguridad: 20,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		costeFondosFabricacion: 5,
		costeMaterialesFabricacion: 5,
		tiempoFabricacion: 10,
		equiposNecesarios: 1, // Mínimo de equipos necesarios. - ¿PARA SU DESARROLLO? ¿PARA SU FUNCIONAMIENTO? - PENDIENTE.
		equiposTrabajo: 1, // Equipos asignados.
		unidades: 1,
		experiencia: 0,
		experienciaFases: [
			{nombre: "encendido", nombreJuego: "Encendido", experiencia: 0},
			{nombre: "despegue", nombreJuego: "Despegue", experiencia: 0},
			{nombre: "espacio", nombreJuego: "Espacio", experiencia: 0},
			{nombre: "orbita", nombreJuego: "Órbita", experiencia: 0},
			{nombre: "despliegueCarga", nombreJuego: "Despliegue carga",	experiencia: 0}
		],
	},
	{
		id: 1,
		nombre: "programa1",
		nombreJuego: "Redstone/Atlas",
		tipo: 1,
		nivel: 1,
		peso: 0,
		capacidad: 600,
		desarrollado: 0,
		desbloqueado: false,
		costeDesarrollo: 10,
		tiempoDesarrollo: 10,
		requisitoPrograma: 0,
		seguridad: 20,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		costeFondosFabricacion: 5,
		costeMaterialesFabricacion: 5,
		tiempoFabricacion: 10,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		unidades: 1,
		experiencia: 0,
		experienciaFases: [
			{nombre: "encendido", nombreJuego: "Encendido", experiencia: 0},
			{nombre: "despegue", nombreJuego: "Despegue", experiencia: 0},
			{nombre: "espacio", nombreJuego: "Espacio", experiencia: 0},
			{nombre: "orbita", nombreJuego: "Órbita", experiencia: 0},
			{nombre: "despliegueCarga", nombreJuego: "Despliegue carga",	experiencia: 0}
		],
	},
	{
		id: 2,
		nombre: "programa2",
		nombreJuego: "Explorer",
		tipo: 2,
		nivel: 1,
		peso: 300,
		capacidad: 0,
		duracionMaxima: 1,
		desarrollado: 0,
		desbloqueado: true,
		costeDesarrollo: 10,
		tiempoDesarrollo: 10,
		requisitoPrograma: "-",
		seguridad: 20,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		costeFondosFabricacion: 5,
		costeMaterialesFabricacion: 5,
		tiempoFabricacion: 10,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		unidades: 1,
		experiencia: 0,
		experienciaFases: [
			{nombre: "encendidoCarga", nombreJuego: "Encendido carga", experiencia: 0},
			{nombre: "actividadesOrbita", nombreJuego: "Actividades órbita",	experiencia: 0}
		],
	},
	{
		id: 3,
		nombre: "programa3",
		nombreJuego: "Mercury",
		tipo: 3,
		nivel: 1,
		peso: 500,
		capacidad: 0,
		duracionMaxima: 3,
		desarrollado: 0,
		desbloqueado: false,
		costeDesarrollo: 10,
		tiempoDesarrollo: 10,
		requisitoPrograma: "2",
		seguridad: 20,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		costeFondosFabricacion: 5,
		costeMaterialesFabricacion: 5,
		tiempoFabricacion: 10,
		equiposNecesarios: 2,
		equiposTrabajo: 1,
		unidades: 1,
		experiencia: 0,
		experienciaFases: [
			{nombre: "encendidoCarga", nombreJuego: "Encendido carga", experiencia: 0},
			{nombre: "actividadesOrbita", nombreJuego: "Actividades órbita",	experiencia: 0},
			{nombre: "reentrada", nombreJuego: "Reentrada", experiencia: 0},
			{nombre: "aterrizaje", nombreJuego: "Aterrizaje", experiencia: 0}
		],
	},
	{
		id: 4,
		nombre: "programa4",
		nombreJuego: "Gemini",
		tipo: 3,
		nivel: 2,
		peso: 1000,
		capacidad: 0,
		duracionMaxima: 5,
		desarrollado: 0,
		desbloqueado: false,
		costeDesarrollo: 10,
		tiempoDesarrollo: 10,
		requisitoPrograma: 3,
		seguridad: 20,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		costeFondosFabricacion: 5,
		costeMaterialesFabricacion: 5,
		tiempoFabricacion: 10,
		equiposNecesarios: 3,
		equiposTrabajo: 1,
		unidades: 1,
		experiencia: 0,
		experienciaFases: [
			{nombre: "encendidoCarga", nombreJuego: "Encendido carga", experiencia: 0},
			{nombre: "actividadesOrbita", nombreJuego: "Actividades órbita",	experiencia: 0},
			{nombre: "reentrada", nombreJuego: "Reentrada", experiencia: 0},
			{nombre: "aterrizaje", nombreJuego: "Aterrizaje", experiencia: 0}
		],
	}
];

//Modificar programas en modo desarrollo.
if(modoDesarrollo){
	for(let i = 0; i < programas.length; i++){
		//programas[i].desarrollado = 1;
		//programas[i].desbloqueado = true;
		programas[i].unidades = 50;
		//programas[i].experiencia = 20;
	}
}

//---------------------------------------

//ARRAY MISIONES
var misiones = [
	{
		nombre: "mision0",
		nombreJuego: "Cohete espacial",
		nivel: 1, // Nivel mínimo de los componentes necesarios para esta misión.
		tipoCarga: 0, // ¿? - PENDIENTE.
		tripulacion: 0, // 0-> No lleva; 1/2/3-> Número mínimo de astronautas necesario para la misión.
		duracionMinima: 1,
		duracionMaxima: 3,
		experiencia: 0,
		desarrollado: 0, //Si no se desarrollar no se puede hacer nada.
		desbloqueado: true, //Si al comienzo del juego aparece en la lista de misiones.
		costeDesarrollo: 10,
		tiempoDesarrollo: 5,
		requisitoMision: "-", //ID de la misión que hay que desarrollar previamente para desbloquear ésta y mostrarla en la lista de misiones.
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		prestigioCancelar: 3,
		prestigioFallo: -1,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		tiempoCuentaAtras: 10,
		fases: [
			{nombre: "encendido", nombreJuego: "Encendido", componente: 1, dia: 1}, // Componente: 0-> No se ejecuta esta fase; 1-> Cohete; 2-> Carga.
			{nombre: "despegue", nombreJuego: "Despegue", componente: 1, dia: 1},
			{nombre: "espacio", nombreJuego: "Espacio", componente: 1, dia: 1}
		],
		vecesProgramada: 0
	},
	{
		nombre: "mision1",
		nombreJuego: "Satélite orbital",
		nivel: 1,
		tipoCarga: 2,
		tripulacion: 0,
		duracionMinima: 1,
		duracionMaxima: 1,
		experiencia: 0,
		desarrollado: 0,
		desbloqueado: false,
		costeDesarrollo: 10,
		tiempoDesarrollo: 5,
		requisitoMision: 0,
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		prestigioCancelar: 3,
		prestigioFallo: -2,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		tiempoCuentaAtras: 10,
		fases: [
			{nombre: "encendido", nombreJuego: "Encendido", componente: 1, dia: 1},
			{nombre: "despegue", nombreJuego: "Despegue", componente: 1, dia: 1},
			{nombre: "espacio", nombreJuego: "Espacio", componente: 1, dia: 1},
			{nombre: "orbita", nombreJuego: "Órbita", componente: 1, dia: 1},
			{nombre: "despliegueCarga", nombreJuego: "Despliegue carga",	componente: 1, dia: 1},
			{nombre: "encendidoCarga", nombreJuego: "Encendido carga", componente: 2, dia: 1}
		],
		vecesProgramada: 0
	},
	{
		nombre: "mision2",
		nombreJuego: "Vuelo suborbital NT",
		nivel: 1,
		tipoCarga: 3,
		tripulacion: 0,
		duracionMinima: 1,
		duracionMaxima: 1,
		experiencia: 0,
		desarrollado: 0,
		desbloqueado: false,
		costeDesarrollo: 10,
		tiempoDesarrollo: 5,
		requisitoMision: 1,
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		prestigioCancelar: 3,
		prestigioFallo: -3,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		tiempoCuentaAtras: 10,
		fases: [
			{nombre: "encendido", nombreJuego: "Encendido", componente: 1, dia: 1},
			{nombre: "despegue", nombreJuego: "Despegue", componente: 1, dia: 1},
			{nombre: "espacio", nombreJuego: "Espacio", componente: 1, dia: 1},
			{nombre: "despliegueCarga", nombreJuego: "Despliegue carga",	componente: 1, dia: 1},
			{nombre: "reentrada", nombreJuego: "Reentrada", componente: 2, dia: 1},
			{nombre: "aterrizaje", nombreJuego: "Aterrizaje", componente: 2, dia: 1}
		],
		vecesProgramada: 0
	},
	{
		nombre: "mision3",
		nombreJuego: "Vuelo suborbital T",
		nivel: 1,
		tipoCarga: 3,
		tripulacion: 1,
		duracionMinima: 1,
		duracionMaxima: 1,
		experiencia: 0,
		desarrollado: 0,
		desbloqueado: false,
		costeDesarrollo: 10,
		tiempoDesarrollo: 5,
		requisitoMision: 2,
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		prestigioCancelar: 3,
		prestigioFallo: -4,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		tiempoCuentaAtras: 10,
		fases: [
			{nombre: "encendido", nombreJuego: "Encendido", componente: 1, dia: 1},
			{nombre: "despegue", nombreJuego: "Despegue", componente: 1, dia: 1},
			{nombre: "espacio", nombreJuego: "Espacio", componente: 1, dia: 1},
			{nombre: "despliegueCarga", nombreJuego: "Despliegue carga",	componente: 1, dia: 1},
			{nombre: "reentrada", nombreJuego: "Reentrada", componente: 2, dia: 1},
			{nombre: "aterrizaje", nombreJuego: "Aterrizaje", componente: 2, dia: 1}
		],
		vecesProgramada: 0
	},
	{
		nombre: "mision4",
		nombreJuego: "Vuelo orbital NT",
		nivel: 1,
		tipoCarga: 3,
		tripulacion: 0,
		duracionMinima: 1,
		duracionMaxima: 15,
		experiencia: 0,
		desarrollado: 0,
		desbloqueado: false,
		costeDesarrollo: 10,
		tiempoDesarrollo: 5,
		requisitoMision: 1,
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		prestigioCancelar: 3,
		prestigioFallo: -10,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		tiempoCuentaAtras: 10,
		fases: [
			{nombre: "encendido", nombreJuego: "Encendido", componente: 1, dia: 1},
			{nombre: "despegue", nombreJuego: "Despegue", componente: 1, dia: 1},
			{nombre: "espacio", nombreJuego: "Espacio", componente: 1, dia: 1},
			{nombre: "orbita", nombreJuego: "Órbita", componente: 1, dia: 1},
			{nombre: "despliegueCarga", nombreJuego: "Despliegue carga",	componente: 1, dia: 1},
			{nombre: "encendidoCarga", nombreJuego: "Encendido carga", componente: 2, dia: 1},
			{nombre: "actividadesOrbita", nombreJuego: "Actividades órbita",	componente: 2, dia: 1},
			{nombre: "actividadesOrbita", nombreJuego: "Actividades órbita",	componente: 2, dia: 2},
			{nombre: "reentrada", nombreJuego: "Reentrada", componente: 2, dia: 2},
			{nombre: "aterrizaje", nombreJuego: "Aterrizaje", componente: 2, dia: 2}
		],
		vecesProgramada: 0
	},
	{
		nombre: "mision5",
		nombreJuego: "Vuelo orbital T",
		nivel: 1,
		tipoCarga: 3,
		tripulacion: 1,
		duracionMinima: 1,
		duracionMaxima: 15,
		experiencia: 0,
		desarrollado: 0,
		desbloqueado: false,
		costeDesarrollo: 10,
		tiempoDesarrollo: 5,
		requisitoMision: 4,
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		prestigioCancelar: 3,
		prestigioFallo: -10,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		tiempoCuentaAtras: 10,
		fases: [
			{nombre: "encendido", nombreJuego: "Encendido", componente: 1, dia: 1},
			{nombre: "despegue", nombreJuego: "Despegue", componente: 1, dia: 1},
			{nombre: "espacio", nombreJuego: "Espacio", componente: 1, dia: 1},
			{nombre: "orbita", nombreJuego: "Órbita", componente: 1, dia: 1},
			{nombre: "despliegueCarga", nombreJuego: "Despliegue carga",	componente: 1, dia: 1},
			{nombre: "encendidoCarga", nombreJuego: "Encendido carga", componente: 2, dia: 1},
			{nombre: "actividadesOrbita", nombreJuego: "Actividades órbita",	componente: 2, dia: 1},
			{nombre: "actividadesOrbita", nombreJuego: "Actividades órbita",	componente: 2, dia: 2},
			{nombre: "reentrada", nombreJuego: "Reentrada", componente: 2, dia: 2},
			{nombre: "aterrizaje", nombreJuego: "Aterrizaje", componente: 2, dia: 2}
		],
		vecesProgramada: 0
	}
];

//Modificar misiones en modo desarrollo.
if(modoDesarrollo){
	for(let i = 0; i < misiones.length; i++){
		//misiones[i].desarrollado = 1;
		//misiones[i].desbloqueado = true;
		//misiones[i].experiencia = 20;
	}
}

//---------------------------------------

//ARRAY PLATAFORMAS
var plataformas = [
	{
		nombreJuego: "Plataforma 0",
		mision: -1, //Tipo de misión, índice en el array de misiones.
		misionProgramada: -1, //Índice en el array de misiones programadas.
		libre: true,
		estado: 0 //En el estado debería reflejarse si ha sido usada y tiene que prepararse antes de la siguiente misión, o si ha sido dañada, por ejemplo.
	},
	{
		nombreJuego: "Plataforma 1",
		mision: -1,
		misionProgramada: -1,
		libre: true,
		estado: 0
	},
	{
		nombreJuego: "Plataforma 2",
		mision: -1,
		misionProgramada: -1,
		libre: true,
		estado: 0
	},
	{
		nombreJuego: "Plataforma 3",
		mision: -1,
		misionProgramada: -1,
		libre: true,
		estado: 0
	},
	{
		nombreJuego: "Plataforma 4",
		mision: -1,
		misionProgramada: -1,
		libre: true,
		estado: 0
	}
];

//---------------------------------------

//ARRAY ASTRONAUTAS
var astronautas = [
	{
		nombreJuego: "Shepard",
		estado: 1 // 0-> Fuera de servicio; 1-> Disponible; 2-> Asignado a misión.
	},
	{
		nombreJuego: "Glenn",
		estado: 1 // 0-> Fuera de servicio; 1-> Disponible; 2-> Asignado a misión.
	},
	{
		nombreJuego: "Slayton",
		estado: 1 // 0-> Fuera de servicio; 1-> Disponible; 2-> Asignado a misión.
	},
	{
		nombreJuego: "Cooper",
		estado: 1 // 0-> Fuera de servicio; 1-> Disponible; 2-> Asignado a misión.
	},
	{
		nombreJuego: "Shirra",
		estado: 1 // 0-> Fuera de servicio; 1-> Disponible; 2-> Asignado a misión.
	},
	{
		nombreJuego: "Carpenter",
		estado: 1 // 0-> Fuera de servicio; 1-> Disponible; 2-> Asignado a misión.
	},
	{
		nombreJuego: "Grissom",
		estado: 1 // 0-> Fuera de servicio; 1-> Disponible; 2-> Asignado a misión.
	}
];

//---------------------------------------

//ARRAY HITOS
var hitos = [
	{
		misionId: 0,
		nombre: "Cohete espacial",
		primero: "-",
		segundo: "-",
		fechaPrimero: "",
		fechaSegundo: "",
		prestigioPrimero: 20,
		prestigioSegundo: 10,
		prestigioNormal: 1
	},
	{
		misionId: 1,
		nombre: "Satélite orbital",
		primero: "-",
		segundo: "-",
		fechaPrimero: "",
		fechaSegundo: "",
		prestigioPrimero: 20,
		prestigioSegundo: 10,
		prestigioNormal: 1
	},
	{
		misionId: 2,
		nombre: "Vuelo suborbital NT",
		primero: "-",
		segundo: "-",
		fechaPrimero: "",
		fechaSegundo: "",
		prestigioPrimero: 20,
		prestigioSegundo: 10,
		prestigioNormal: 1
	},
	{
		misionId: 3,
		nombre: "Vuelo suborbital T",
		primero: "-",
		segundo: "-",
		fechaPrimero: "",
		fechaSegundo: "",
		prestigioPrimero: 20,
		prestigioSegundo: 10,
		prestigioNormal: 1
	},
	{
		misionId: 4,
		nombre: "Vuelo orbital NT",
		primero: "-",
		segundo: "-",
		fechaPrimero: "",
		fechaSegundo: "",
		prestigioPrimero: 20,
		prestigioSegundo: 10,
		prestigioNormal: 1
	},
	{
		misionId: 5,
		nombre: "Vuelo orbital T",
		primero: "-",
		segundo: "-",
		fechaPrimero: "",
		fechaSegundo: "",
		prestigioPrimero: 30,
		prestigioSegundo: 20,
		prestigioNormal: 4
	}
];

//---------------------------------------

//ARRAY EVENTOS
var eventos = [
	{
		nombre: "comienza partida",
		tiempoRestante: 1,
		estado: 1
	},
	{
		nombre: "SPUTNIK",
		tiempoRestante: 2,
		estado: 1,
		ventanaModal: 0,
		texto: "El Sputnik 1 (en ruso: Спутник-1, que significa satélite) lanzado el 4 de octubre de 1957 por la Unión Soviética fue el primer satélite artificial de la historia. <br /><br />El Sputnik 1 fue el primero de varios satélites lanzados por la Unión Soviética en su programa Sputnik, la mayoría de ellos con éxito. Le siguió el Sputnik 2, como el segundo satélite en órbita y también el primero en llevar a un animal a bordo, una perra llamada Laika. El primer fracaso lo sufrió el Sputnik 3."
	}
];

//---------------------------------------

//ARRAY MODIFICADORES
var modificadores = [
  {ejecutar: function() {
		alert("0");
  }},

  {ejecutar: function() {
		alert("1");
  }},

  {ejecutar: function() {
		alert("2");
  }}
];

//ARRAYS VACÍOS PARA RELLENAR DURANTE LA PARTIDA
var arrayCartelMensajes = [];
var misionesProgramadas = [];

//---------------------------------------

//ARRAY MESES Y DÍAS
var fecha = [
	{mes: "enero", dias: 31},
	{mes: "febrero", dias: 28},
	{mes: "marzo", dias: 31},
	{mes: "abril", dias: 30},
	{mes: "mayo", dias: 31},
	{mes: "junio", dias: 30},
	{mes: "julio", dias: 31},
	{mes: "agosto", dias: 31},
	{mes: "septiembre", dias: 30},
	{mes: "octubre", dias: 31},
	{mes: "noviembre", dias: 30},
	{mes: "diciembre", dias: 31}
];

//FECHA
var anioActual = 1957;
var mesActual = "octubre";
var numeroMesArray = 9;
var diaActual = 1;
	//var contadorPrueba = 0; CREO QUE SE PUEDE BORRAR

//---------------------------------------

//FIN VARIABLES PARTIDA

//-----------------------------------------------------------

//LANZAR JUEGO

document.getElementById('botonLanzarJuego').addEventListener('click', lanzarJuego());

function lanzarJuego(){

	if(modoDesarrollo){
		document.getElementById('areaDesarrollo').style.display  = "block";

		//Botones modo desarrollo.

		botonFondosModoDesarrollo.addEventListener("click", function(){
			sumarFondos(10);
		});

		botonMaterialesModoDesarrollo.addEventListener("click", function(){
			encargarMateriales(10);
		});

		botonEquiposModoDesarrollo.addEventListener("click", function(){
			sumarEquipo(2);
		});

		botonMisionModoDesarrollo.addEventListener("click", function(){

			/*
			let misionId = 0;
			let plataformaId = 4;
			let cohete = 0;
			let carga = 2;

			plataformas[plataformaId].libre = false;
			plataformas[plataformaId].mision = misionId; //HAY QUE CAMBIAR ESTO: CREAR UN ARRAY CON MISIONES PROGRAMADAS, CADA VEZ QUE SE LANZA UNA MISIÓN SE AÑADE A ESE ARRAY, CON UNA REFERENCIA A LA PLATAFORMA QUE USA, Y OTRA AL ARRAY GENERAL DE MISIONES, PARA COGER DE AHÍ SUS CARACTERÍSTICAS (CUANDO SE CARGUEN LOS COMPONENTES TAMBIÉN HAY QUE MODIFICAR LA MISIÓN AÑADIÉNDOSELOS).

			let misionProgramada = misionesProgramadas.length;
			plataformas[plataformaId].misionProgramada = misionProgramada; //Hace falta guardar en el array de plataformas la misión programada, porque para acceder a la ventana de ensamblaje hay que ir desde la plataforma, y si no no se puede obtener el índice de la misión programada para recuperar su información.
			misiones[misionId].vecesProgramada += 1;

			//Añadir misión al array de misiones programadas. Las características que son comunes a todas las misiones de este tipo no se copian, se leen directamente del array de misiones. En el array de misiones programadas sólo se guardan características que cambian de una misión a otra, como plataforma o componentes seleccionados posteriormente.
			let nuevaMision = {
				nombre: "Misión " + misiones[misionId].nombreJuego + " " + misiones[misionId].vecesProgramada,
				misionId: misionId,
				plataforma: plataformaId,
				fechaPrograma: diaActual + " " + mesActual + " " + anioActual,
				cohete: cohete,
				carga: carga,
				tripulacion: -1, //Tiene que haber un array de tripulaciones en el que se crean equipos de astronautas, aunque sólo sea uno. En esta variable se guarda el equipo seleccionado para esta misión.
				activa: 1
			};

			misionesProgramadas.push(nuevaMision);
			updateMisionesProgramadas();

			document.getElementById("plataforma" + plataformaId).style.backgroundColor = "#f4e786";
			document.getElementById("plataforma" + plataformaId).getElementsByTagName("h4")[0].innerHTML = nuevaMision.nombre;
			document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].style.color = "black";
			document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].innerHTML = "Plataforma reservada";

			//Habilitar botones plataforma.
			document.getElementById("botonEnsamblarComponentes" + plataformaId).disabled = false;
			document.getElementById("botonCancelarMision" + plataformaId).disabled = false;




			/*
			document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].innerHTML = "Componentes ensamblados";
			document.getElementById("botonEnsamblarComponentes" + plataformaId).innerHTML = '<i class="material-icons">settings</i>';
			document.getElementById("plataforma" + plataformaId).style.backgroundColor = "#a1f486";
			document.getElementById("botonProgramarLanzamiento" + plataformaId).disabled = false;
			document.getElementById("botonCancelarMision" + plataformaId).disabled = false;
			*/

		});


		//document.getElementById("materiales").addEventListener("click", function(){
		//	encargarMateriales(20);
		//});

		//document.getElementById("fondos").addEventListener("click", function(){
		//	sumarFondos(20);
		//});

		//document.getElementById("equipos").addEventListener("click", function(){
		//	sumarEquipo(2);
		//});

		//Fin botones modo desarrollo.

	}

	//Montar programas.
	montarProgramas();

	//Montar misiones.
	montarMisiones();

	//Montar plataformas.
	montarPlataformas();

	//Montar astronautas.
	updateAstronautas();

	//Montar misiones programadas.
	updateMisionesProgramadas();

	//Montar hitos.
	updateHitos();

	//Mostrar/ocultar elementos.
	document.getElementById('botonLanzarJuego').style.display  = "none";
	document.getElementById('ventanaJuego').style.display  = "block";
	document.getElementById('botonAbrirVentanaMenu').style.visibility  = "visible";

	//Deshabilitar botones.

		//Mejorar programas.
		var arrayBotonesMejorarProgramas = document.getElementsByClassName('botonesMejorarProgramas');
		for(i = 0; i < arrayBotonesMejorarProgramas.length; i++){
			arrayBotonesMejorarProgramas[i].disabled = true;
		}

		//Fabricar componentes.
		var arrayBotonesFabricarComponentes = document.getElementsByClassName('botonesFabricarComponentes');
		for(i = 0; i < arrayBotonesFabricarComponentes.length; i++){
			arrayBotonesFabricarComponentes[i].disabled = true;
		}

		//Asignar equipos programas.
		var arrayBotonesEquiposProgramas = document.getElementsByClassName('botonesEquiposProgramas');
		for(i = 0; i < arrayBotonesEquiposProgramas.length; i++){
			arrayBotonesEquiposProgramas[i].disabled = true;
		}

		//Mejorar misiones.
		var arrayBotonesMejorarMisiones = document.getElementsByClassName('botonesMejorarMisiones');
		for(i = 0; i < arrayBotonesMejorarMisiones.length; i++){
			arrayBotonesMejorarMisiones[i].disabled = true;
		}

		//Programar misiones.
		var arrayBotonesProgramarMisiones = document.getElementsByClassName('botonesProgramarMisiones');
		for(i = 0; i < arrayBotonesProgramarMisiones.length; i++){
			arrayBotonesProgramarMisiones[i].disabled = true;
		}

		//Asignar equipos misiones.
		var arrayBotonesEquiposMisiones = document.getElementsByClassName('botonesEquiposMisiones');
		for(i = 0; i < arrayBotonesEquiposMisiones.length; i++){
			arrayBotonesEquiposMisiones[i].disabled = true;
		}

		//Ensamblar componentes.
		var arrayBotonesEnsamblarComponentes = document.getElementsByClassName('botonesEnsamblarComponentes');
		for(i = 0; i < arrayBotonesEnsamblarComponentes.length; i++){
			arrayBotonesEnsamblarComponentes[i].disabled = true;
		}

		//Programar lanzamientos.
		var arrayBotonesProgramarLanzamientos = document.getElementsByClassName('botonesProgramarLanzamientos');
		for(i = 0; i < arrayBotonesProgramarLanzamientos.length; i++){
			arrayBotonesProgramarLanzamientos[i].disabled = true;
		}

		//Parámetros misiones.
		var arrayBotonesParametrosMisiones = document.getElementsByClassName('botonesParametrosMisiones');
		for(i = 0; i < arrayBotonesParametrosMisiones.length; i++){
			arrayBotonesParametrosMisiones[i].disabled = true;
		}

		//Cancelar misiones.
		var arrayBotonesCancelarMisiones = document.getElementsByClassName('botonesCancelarMisiones');
		for(i = 0; i < arrayBotonesCancelarMisiones.length; i++){
			arrayBotonesCancelarMisiones[i].disabled = true;
		}

	//Fin deshabilitar botones.

	//Datos partida.
	document.getElementById('fondos').innerHTML = fondos;
	document.getElementById('materiales').innerHTML = materiales;
	document.getElementById('equipos').innerHTML = equipos;
	document.getElementById('prestigio').innerHTML = prestigio;

	//INICIAR EL LOOP DEL JUEGO.
	juegoPausado = 0;
	pausar(false);

}

function montarProgramas(){

	var montarHTMLProgramas = "";
	var longitudArrayProgramas = programas.length;
	var mostrarPrograma = "";

	montarHTMLProgramas += '<tr style="font-style: italic;">';

	montarHTMLProgramas += '<td>Seg.</td>';
	montarHTMLProgramas += '<td>Peso<br />/ Cap.</td>';
	montarHTMLProgramas += '<td>Desarrollo<br />/ Mejora</td>';
	montarHTMLProgramas += '<td>Desbloquea</td>';
	montarHTMLProgramas += '<td>Fab.</td>';
	montarHTMLProgramas += '<td>Unid.</td>';
	montarHTMLProgramas += '<td>Equi.</td>';
	montarHTMLProgramas += '<td>Exp.</td>';

	montarHTMLProgramas += '<td>';
	montarHTMLProgramas += 'Botones';
	montarHTMLProgramas += '</td>';

	montarHTMLProgramas += '</tr>';

	for(var i=0; i<longitudArrayProgramas; i++){

		montarHTMLProgramas += '<tr id="programa' + i + '">';
		//montarHTMLProgramas += '<div id="programa' + i + '">';
		//montarHTMLProgramas += '<tr>';

		montarHTMLProgramas += '<td colspan="9">';
		montarHTMLProgramas += '<h4>' + programas[i].nombreJuego + '</h4>';
		montarHTMLProgramas += '<h5>';
		montarHTMLProgramas += 'Sin desarrollar';
		montarHTMLProgramas += '</h5>';
		montarHTMLProgramas += '</td>';

		montarHTMLProgramas += '</tr>';
		montarHTMLProgramas += '<tr>';


		montarHTMLProgramas += '<td><span id="seguridadPrograma' + i + '">0</span>%</td>';
		montarHTMLProgramas += '<td>' + programas[i].peso + '<br />';
		montarHTMLProgramas += programas[i].capacidad + '</td>';

		//Si no está desarrollada se muestra el coste de desarrollo.
		if(programas[i].desarrollado == 0){
			montarHTMLProgramas += '<td><span id="costeDesarrolloPrograma' + i + '">' + programas[i].costeDesarrollo + '</span> M<br />';
			montarHTMLProgramas += '<span id="tiempoDesarrolloPrograma' + i + '">' + programas[i].tiempoDesarrollo + '</span> días</td>';
		}
		//Si está desarrollada se muestra el coste de mejora.
		else {
			montarHTMLProgramas += '<td><span id="costeMejoraPrograma' + i + '">' + programas[i].costeMejora + '</span> M<br />';
			montarHTMLProgramas += '<span id="tiempoMejoraPrograma' + i + '">' + programas[i].tiempoMejora + '</span> días</td>';
		}

		montarHTMLProgramas += '<td>';

		var textoDesbloquea = false;

		for(var j = 0; j < programas.length; j++){
			if(programas[j].requisitoPrograma == i){
				if(!textoDesbloquea) {
					montarHTMLProgramas += programas[j].nombreJuego;
					textoDesbloquea = true;
				}
				else {
					montarHTMLProgramas += ', ' + programas[j].nombreJuego;
				}
			}
		}

		if (textoDesbloquea == false){
			montarHTMLProgramas += '-';
		}
		montarHTMLProgramas += '</td>';

		montarHTMLProgramas += '<td><span id="costeFabricacionComponente' + i + '">' + programas[i].costeFondosFabricacion + '</span> M<br />';
		montarHTMLProgramas += '<span id="materialesFabricacionComponente' + i + '">' + programas[i].costeMaterialesFabricacion + '</span> mat.<br />';
		montarHTMLProgramas += '<span id="tiempoFabricacionComponente' + i + '">' + programas[i].tiempoFabricacion + '</span> días</td>';
		montarHTMLProgramas += '<td><span id="unidadesPrograma' + i + '">' + programas[i].unidades + '</span></td>';
		montarHTMLProgramas += '<td><span id="equiposPrograma' + i + '">' + programas[i].equiposTrabajo + '</span> / <span id="equiposNecesarios' + i + '">' + programas[i].equiposNecesarios + '</span></td>';
		montarHTMLProgramas += '<td><span id="experienciaPrograma' + i + '">' + programas[i].experiencia + '</span></td>';

		montarHTMLProgramas += '</td>';

		//montarHTMLProgramas += '</div>';



		montarHTMLProgramas += '<td>';

		montarHTMLProgramas += '<div class="botonesProgramas">';
		montarHTMLProgramas += '<button id="botonDesarrollarPrograma' + i + '" class="botonesDesarrollarProgramas" title="Desarrollar programa (fondos: ' + programas[i].costeDesarrollo + '; tiempo: ' + programas[i].tiempoDesarrollo + ')">';
		montarHTMLProgramas += '<i class="material-icons">lightbulb_outline</i>';
		montarHTMLProgramas += '</button>';
		montarHTMLProgramas += '</div>';

		montarHTMLProgramas += '<div class="botonesProgramas">';
		montarHTMLProgramas += '<button id="botonMejorarPrograma' + i + '" class="botonesMejorarProgramas" title="Mejorar programa (fondos: ' + programas[i].costeMejora + '; tiempo: ' + programas[i].costeMejora + ')">';
		montarHTMLProgramas += '<i class="material-icons">security</i>';
		montarHTMLProgramas += '</button>';
		montarHTMLProgramas += '</div>';

		montarHTMLProgramas += '<div class="botonesProgramas">';
		montarHTMLProgramas += '<button id="botonFabricarComponente' + i + '" class="botonesFabricarComponentes" title="Fabricar componente (coste: ' + programas[i].costeFondosFabricacion + '; materiales: ' + programas[i].costeMaterialesFabricacion + '; tiempo: ' + programas[i].tiempoFabricacion + ')">';
		montarHTMLProgramas += '<i class="material-icons">build</i>';
		montarHTMLProgramas += '</button>';
		montarHTMLProgramas += '</div>';

		montarHTMLProgramas += '<div class="botonesProgramas">';
		montarHTMLProgramas += '<button id="botonEquipoPrograma' + i + '" class="botonesEquiposProgramas" title="Ampliar equipo (actual: ' + programas[i].equiposTrabajo + '; necesarios: ' + programas[i].equiposNecesarios + ')">';
		montarHTMLProgramas += '<i class="material-icons">group_add</i>';
		montarHTMLProgramas += '</button>';
		montarHTMLProgramas += '</div>';

		montarHTMLProgramas += '</td>';

		/*




		*/

		montarHTMLProgramas += '</tr>';
		//montarHTMLProgramas += '</div>';

	}

	document.getElementById("programas").getElementsByTagName("table")[0].innerHTML = montarHTMLProgramas;

	//Asignar imágenes y ocultar programas bloqueados (se repite el bucle porque tiene que hacerse una vez creados los nodos HTML en el bucle anterior).
	for(var i=0; i<longitudArrayProgramas; i++){
			//document.getElementById("programa" + i).style.backgroundImage = "url('imagenes/" + programas[i].nombreJuego + ".jpg')";
			//document.getElementById("programa" + i).style.backgroundSize = "cover";

			mostrarPrograma = (programas[i].desbloqueado) ? "table-row" : "none";
			document.getElementById("programa" + i).style.display = mostrarPrograma;
			document.getElementById("programa" + i).nextSibling.style.display = mostrarPrograma;

	}

}

function montarMisiones(){

	var montarHTMLMisiones = ""
	var longitudArrayMisiones = misiones.length;
	var mostrarMision = "";

	montarHTMLMisiones += '<tr style="font-style: italic;">';
	montarHTMLMisiones += '<td>';
	montarHTMLMisiones += 'Nombre';
	montarHTMLMisiones += '</td>';

	montarHTMLMisiones += '<td>Seg.</td>';
	montarHTMLMisiones += '<td>Desarrollo<br />/ Mejora</td>';
	montarHTMLMisiones += '<td>Desbloquea</td>';
	montarHTMLMisiones += '<td>Equi.</td>';
	montarHTMLMisiones += '<td>Exp.</td>';

	montarHTMLMisiones += '<td>';
	montarHTMLMisiones += 'Acciones';
	montarHTMLMisiones += '</td>';

	montarHTMLMisiones += '</tr>';

	for(let i=0; i<longitudArrayMisiones; i++){

		montarHTMLMisiones += '<tr id="mision' + i + '">';
		montarHTMLMisiones += '<td>';
		montarHTMLMisiones += '<h4>' + misiones[i].nombreJuego + '</h4>';
		montarHTMLMisiones += '<h5>Sin desarrollar</h5>';
		montarHTMLMisiones += '</td>';
		montarHTMLMisiones += '<td><span id="seguridadMision' + i + '">0</span>%</td>';

		//Si no está desarrollada se muestra el coste de desarrollo.
		if(misiones[i].desarrollado == 0){
			montarHTMLMisiones += '<td><span id="costeDesarrolloMision' + i + '">' + misiones[i].costeDesarrollo + '</span> M<br />';
			montarHTMLMisiones += '<span id="tiempoDesarrolloMision' + i + '">' + misiones[i].tiempoDesarrollo + '</span> días</td>';
		}
		//Si está desarrollada se muestra el coste de mejora.
		else {
			montarHTMLMisiones += '<td><span id="costeMejoraMision' + i + '">' + misiones[i].costeMejora + '</span> M<br />';
			montarHTMLMisiones += '<span id="tiempoMejoraMision' + i + '">' + misiones[i].tiempoMejora + '</span> días</td>';
		}

		montarHTMLMisiones += '<td>';

		var textoDesbloquea = false;

		for(var j = 0; j < misiones.length; j++){
			if(misiones[j].requisitoMision == i){
				if(!textoDesbloquea) {
					montarHTMLMisiones += misiones[j].nombreJuego;
					textoDesbloquea = true;
				}
				else {
					montarHTMLMisiones += '<br />' + misiones[j].nombreJuego;
				}
			}
		}

		if (textoDesbloquea == false){
			montarHTMLMisiones += '-';
		}
		montarHTMLMisiones += '</td>';

		montarHTMLMisiones += '<td><span id="equiposMision' + i + '">' + misiones[i].equiposTrabajo + '</span>/<span id="equiposNecesarios' + i + '">' + misiones[i].equiposNecesarios + '</span></td>';
		montarHTMLMisiones += '<td><span id="experienciaMision' + i + '">' + misiones[i].experiencia + '</span></td>';

		montarHTMLMisiones += '</td>';

		montarHTMLMisiones += '<td>';


		montarHTMLMisiones += '<div class="botonesMisiones">';
		montarHTMLMisiones += '<button id="botonDesarrollarMision' + i + '" class="botonesDesarrollarMisiones" title="Desarrollar misión (fondos: ' + misiones[i].costeDesarrollo + '; tiempo: ' + misiones[i].tiempoDesarrollo + ')">';
		montarHTMLMisiones += '<i class="material-icons">lightbulb_outline</i>';
		montarHTMLMisiones += '</button>';
		montarHTMLMisiones += '</div>';

		montarHTMLMisiones += '<div class="botonesMisiones">';
		montarHTMLMisiones += '<button id="botonMejorarMision' + i + '" class="botonesMejorarMisiones" title="Mejorar misión (fondos: ' + misiones[i].costeMejora + '; tiempo: ' + misiones[i].costeMejora + ')">';
		montarHTMLMisiones += '<i class="material-icons">security</i>';
		montarHTMLMisiones += '</button>';
		montarHTMLMisiones += '</div>';

		montarHTMLMisiones += '<div class="botonesMisiones">';
		montarHTMLMisiones += '<button id="botonProgramarMision' + i + '" class="botonesProgramarMisiones" title="Programar misión">';
		montarHTMLMisiones += '<i class="material-icons">schedule</i>';
		montarHTMLMisiones += '</button>';
		montarHTMLMisiones += '</div>';

		montarHTMLMisiones += '<div class="botonesMisiones">';
		montarHTMLMisiones += '<button id="botonEquipoMision' + i + '" class="botonesEquiposMisiones" title="Ampliar equipo (actual: ' + misiones[i].equiposTrabajo + '; necesarios: ' + misiones[i].equiposNecesarios + ')">';
		montarHTMLMisiones += '<i class="material-icons">group_add</i>';
		montarHTMLMisiones += '</button>';
		montarHTMLMisiones += '</div>';


		montarHTMLMisiones += '</td>';
		montarHTMLMisiones += '</tr>';

	}

	document.getElementById("misiones").getElementsByTagName("table")[0].innerHTML = montarHTMLMisiones;

	//Asignar imágenes y ocultar misiones bloqueados (una vez creados los nodos HTML).
	for(var i=0; i<longitudArrayMisiones; i++){
			//document.getElementById("mision" + i).style.backgroundImage = "url('imagenes/" + misiones[i].nombreJuego + ".jpg')";
			//document.getElementById("mision" + i).style.backgroundSize = "cover";

			mostrarMision = (misiones[i].desbloqueado) ? "table-row" : "none";
			//document.getElementById("mision" + i).style.display = mostrarMision;

	}






}

function montarPlataformas(){

	var montarHTMLPlataformas = "<h3>Plataformas</h3>";
	var longitudArrayPlataformas = plataformas.length;

	for(var i=0; i<longitudArrayPlataformas; i++) {

		montarHTMLPlataformas += '<div id="plataforma' + i + '">';

		montarHTMLPlataformas += '<div id="tituloPlataforma' + i + '" class="titulosPlataformas">';
		montarHTMLPlataformas += '<h4>' + plataformas[i].nombreJuego + " ";
		//montarHTMLPlataformas += '<button id="botonCambiarNombreMision' + i + '" class="botonesCambiarNombresMisiones" title="Cambiar nombre misión">';
		//montarHTMLPlataformas += '<i class="material-icons">settings</i>';
		//montarHTMLPlataformas += '</button>';
		montarHTMLPlataformas += '</h4>';
		montarHTMLPlataformas += '<h5>No hay misión asignada</h5>';
		montarHTMLPlataformas += '</div>';

		montarHTMLPlataformas += '<div class="botonesPlataformas">';

		montarHTMLPlataformas += '<div>';
		montarHTMLPlataformas += '<button id="botonParametrosMision' + i + '" class="botonesParametrosMisiones" title="Parámetros misión">';
		montarHTMLPlataformas += '<i class="material-icons">assignment</i>';
		montarHTMLPlataformas += '</button>';
		montarHTMLPlataformas += '</div>';

		montarHTMLPlataformas += '<div>';
		montarHTMLPlataformas += '<button id="botonEnsamblarComponentes' + i + '" class="botonesEnsamblarComponentes" title="Ensamblar componentes">';
		montarHTMLPlataformas += '<i class="material-icons">settings</i>';
		montarHTMLPlataformas += '</button>';
		montarHTMLPlataformas += '</div>';

		montarHTMLPlataformas += '<div>';
		montarHTMLPlataformas += '<button id="botonProgramarLanzamiento' + i + '" class="botonesProgramarLanzamientos" title="Programar lanzamiento">';
		montarHTMLPlataformas += '<i class="material-icons">flight_takeoff</i>';
		montarHTMLPlataformas += '</button>';
		montarHTMLPlataformas += '</div>';

		montarHTMLPlataformas += '<div>';
		montarHTMLPlataformas += '<button id="botonCancelarMision' + i + '" class="botonesCancelarMisiones" title="Cancelar misión">';
		montarHTMLPlataformas += '<i class="material-icons">cancel</i>';
		montarHTMLPlataformas += '</button>';
		montarHTMLPlataformas += '</div>';

		montarHTMLPlataformas += '</div>';

		montarHTMLPlataformas += '<div class="datosPlataformas">';
		montarHTMLPlataformas += '</div>';

		montarHTMLPlataformas += '</div>';

	}

	document.getElementById("plataformas").innerHTML = montarHTMLPlataformas;

}

function updateMisionesProgramadas(){

		var montarHTMLMisionesProgramadas = "<h3>Misiones programadas</h3>";
		var longitudArrayMisionesProgramadas = misionesProgramadas.length;

		for(var i=0; i<longitudArrayMisionesProgramadas; i++) {

			if(misionesProgramadas[i].activa == 1) {

				montarHTMLMisionesProgramadas += '<div id="misionProgramada' + i + '">';

				montarHTMLMisionesProgramadas += '<div class="titulosMisionesProgramadas">';
				montarHTMLMisionesProgramadas += '<h4>' + misionesProgramadas[i].fechaPrograma + " - "+ misionesProgramadas[i].nombre + '</h4>';
				montarHTMLMisionesProgramadas += '</div>';

				montarHTMLMisionesProgramadas += '</div>';

			}

		}

		document.getElementById("misionesProgramadas").innerHTML = montarHTMLMisionesProgramadas;

}

function updateHitos(){

		var montarHTMLHitos = "<h3>Hitos</h3>";
		var longitudArrayHitos = hitos.length;

		montarHTMLHitos += '<table>';
		montarHTMLHitos += '<tr><td>Hito</td><td>Primero</td><td>Fecha</td><td>Segundo</td><td>Fecha</td></tr>';

		for(var i=0; i<longitudArrayHitos; i++) {

			montarHTMLHitos += '<div id="hito' + i + '">';

			montarHTMLHitos += '<tr>';
			montarHTMLHitos += '<td>' + hitos[i].nombre + '</td><td>'  + hitos[i].primero + '</td><td>' + hitos[i].fechaPrimero + '</td><td>' + hitos[i].segundo + '</td><td>' + hitos[i].fechaSegundo + '</td>';
			montarHTMLHitos += '</tr>';

			montarHTMLHitos += '</div>';

		}

		montarHTMLHitos += '</table>';

		document.getElementById("hitos").innerHTML = montarHTMLHitos;

}

function updateAstronautas(){

		var montarHTMLAstronautas = "<h3>Astronautas</h3>";
		var longitudArrayAstronautas = astronautas.length;

		montarHTMLAstronautas += '<table>';
		montarHTMLAstronautas += '<tr><td>Nombre</td><td>Estado</td></tr>';

		for(var i=0; i<longitudArrayAstronautas; i++) {

			switch (astronautas[i].estado){
				case 0:
					textoEstadoAstronauta = "Fuera de servicio";
					break;
				case 1:
					textoEstadoAstronauta = "Disponible";
					break;
				case 2:
					textoEstadoAstronauta = "Asignado a misión";
					break;
				default:
					textoEstadoAstronauta = "No disponible";
					break;
			}

			montarHTMLAstronautas += '<div id="astronauta' + i + '">';

			montarHTMLAstronautas += '<tr>';
			montarHTMLAstronautas += '<td>' + astronautas[i].nombreJuego + '</td><td>'  + textoEstadoAstronauta + '</td>';
			montarHTMLAstronautas += '</tr>';

			montarHTMLAstronautas += '</div>';

		}

		montarHTMLAstronautas += '</table>';

		document.getElementById("astronautas").innerHTML = montarHTMLAstronautas;

}

//FIN LANZAR JUEGO

//-----------------------------------------------------------

//BOTONES

//Botones y funciones menú y pausa.

botonAbrirVentanaMenu.addEventListener('click', abrirVentanaMenu);
botonCerrarVentanaMenu.addEventListener("click", cerrarVentanaMenu);
botonPausar.addEventListener("click", function(){

	if (juegoPausado == 0) {
		juegoPausado = 1;
		document.getElementById('botonPausar').innerHTML = "<i class='material-icons'>play_arrow</i>";
		document.getElementById('botonPausar').style.color = "red";
		pausar(true);
	}
	else {
		juegoPausado = 0;
		document.getElementById('botonPausar').innerHTML = "<i class='material-icons'>pause</i>";
		document.getElementById('botonPausar').style.color = "black";
		pausar(false);
	}

})

function abrirVentanaMenu(){

	document.getElementById("ventanaMenu").style.display = "block";
	document.getElementById("ventanaJuego").style.display = "none";

	pausar(true);

}

function cerrarVentanaMenu(){

	document.getElementById("ventanaMenu").style.display = "none";
	document.getElementById("ventanaJuego").style.display = "block";

	if(juegoPausado == 0){
		pausar(false);
	}
	else{
		pausar(true);
	}

}

function pausar(parametro){

	if (parametro) {
		clearInterval(timer);
	}
	else {
		timer = setInterval(interval, velocidad);
	}
}

//Fin botones y funciones menú y pausa.

//Botón cerrar ventana modal.

botonCerrarVentanaModal.addEventListener("click", cerrarVentanaModal);
/*botonCerrarVentanaModal.addEventListener("keyup", function(event) {					//PENDIENTE
	event.preventDefault();
	//if (event.which === 13) {
		cerrarVentanaModal();
	//}
})*/

function abrirVentanaModal(contenido){

	document.getElementById("botonAbrirVentanaMenu").style.display = "none";
	document.getElementById("ventanaJuego").style.display = "none";
	document.getElementById("ventanaEnsamblaje").style.display = "none";
	document.getElementById("ventanaModal").style.display = "block";
	document.getElementById("textoVentanaModal").innerHTML = contenido;

	document.getElementById("botonCerrarVentanaModal").style.display = "block";

	pausar(true);

}

function cerrarVentanaModal(){

	document.getElementById('botonCerrarVentanaModal').style.display = "none";
	document.getElementById('ventanaModal').style.display = "none";
	document.getElementById("textoVentanaModal").innerHTML = "";
	document.getElementById('ventanaJuego').style.display = "block";
	document.getElementById("botonAbrirVentanaMenu").style.display = "block";

	//Ocultar desde aquí todas las ventanas que salen dentro de la ventana modal, para no dejar nunca alguna visible por error. - COMPROBAR QUE SIEMPRE QUE SE ABRA LA VENTANA MODAL ESTÁ VISIBLE EL CONTENIDO CORRESPONDIENTE. - PENDIENTE.
	document.getElementById("ventanaEnsamblaje").style.display = "none";
	document.getElementById("ventanaLanzamiento").style.display = "none";
	document.getElementById("ventanaParametros").style.display = "none";

	pausar(false);

}

//Fin botón cerrar ventana modal.

//FIN BOTONES

//-----------------------------------------------------------

//BOTONES EVENTOS

//Eventos programas.

var arrayBotonesDesarrollarProgramas = document.getElementsByClassName('botonesDesarrollarProgramas');

for(i = 0; i < arrayBotonesDesarrollarProgramas.length; i++){
	arrayBotonesDesarrollarProgramas[i].addEventListener('click', function(event) {
		eventoPrograma(event.currentTarget, "desarrollar");
	})
}

var arrayBotonesMejorarProgramas = document.getElementsByClassName('botonesMejorarProgramas');

for(i = 0; i < arrayBotonesMejorarProgramas.length; i++){
	arrayBotonesMejorarProgramas[i].addEventListener('click', function(event) {
		eventoPrograma(event.currentTarget, "mejorar");
	})
}

var arrayBotonesFabricarComponentes = document.getElementsByClassName('botonesFabricarComponentes');

for(i = 0; i < arrayBotonesFabricarComponentes.length; i++){
	arrayBotonesFabricarComponentes[i].addEventListener('click', function(event) {
		eventoPrograma(event.currentTarget, "fabricar");
	})
}

var arrayBotonesEquiposProgramas = document.getElementsByClassName('botonesEquiposProgramas');

for(i = 0; i < arrayBotonesEquiposProgramas.length; i++){
	arrayBotonesEquiposProgramas[i].addEventListener('click', function(event) {
		eventoPrograma(event.currentTarget, "asignarEquipoPrograma");
	})
}

//Fin eventos programas.

//Eventos misiones.

var arrayBotonesDesarrollarMisiones = document.getElementsByClassName('botonesDesarrollarMisiones');

for(i = 0; i < arrayBotonesDesarrollarMisiones.length; i++){
	arrayBotonesDesarrollarMisiones[i].addEventListener('click', function(event) {
		eventoMision(event.currentTarget, "desarrollar");
	})
}

var arrayBotonesMejorarMisiones = document.getElementsByClassName('botonesMejorarMisiones');

for(i = 0; i < arrayBotonesMejorarMisiones.length; i++){
	arrayBotonesMejorarMisiones[i].addEventListener('click', function(event) {
		eventoMision(event.currentTarget, "mejorar");
	})
}

var arrayBotonesProgramarMisiones = document.getElementsByClassName('botonesProgramarMisiones');

for(i = 0; i < arrayBotonesProgramarMisiones.length; i++){
	arrayBotonesProgramarMisiones[i].addEventListener('click', function(event) {
		eventoMision(event.currentTarget, "programarMision");
	})
}

var arrayBotonesEquiposMisiones = document.getElementsByClassName('botonesEquiposMisiones');

for(i = 0; i < arrayBotonesEquiposMisiones.length; i++){
	arrayBotonesEquiposMisiones[i].addEventListener('click', function(event) {
		eventoMision(event.currentTarget, "asignarEquipoMision");
	})
}

//Fin eventos misiones.

//Eventos plataformas.

var arrayBotonesCambiarNombresMisiones = document.getElementsByClassName('titulosPlataformas');

for(i = 0; i < arrayBotonesCambiarNombresMisiones.length; i++){
	arrayBotonesCambiarNombresMisiones[i].addEventListener('click', function(event) {
		eventoPlataforma(event.currentTarget, "cambiarNombreMision");
	})
}

var arrayBotonesParametrosMisiones = document.getElementsByClassName('botonesParametrosMisiones');

for(i = 0; i < arrayBotonesParametrosMisiones.length; i++){
	arrayBotonesParametrosMisiones[i].onclick = function(event) { //IMPORTANTE: onclick en vez de un event listener (lanzaba varias veces el mismo evento).
		elegirParametrosMision(event.currentTarget);
	}
}

var arrayBotonesEnsamblarComponentes = document.getElementsByClassName('botonesEnsamblarComponentes');

for(i = 0; i < arrayBotonesEnsamblarComponentes.length; i++){
	arrayBotonesEnsamblarComponentes[i].onclick = function(event) { //IMPORTANTE: onclick en vez de un event listener (lanzaba varias veces el mismo evento).
		elegirComponentesMision(event.currentTarget);
	}
}

var arrayBotonesProgramarLanzamientos = document.getElementsByClassName('botonesProgramarLanzamientos');

for(i = 0; i < arrayBotonesProgramarLanzamientos.length; i++){
	arrayBotonesProgramarLanzamientos[i].addEventListener('click', function(event) {
		eventoPlataforma(event.currentTarget, "programarLanzamiento");
	})
}

var arrayBotonesCancelarMisiones = document.getElementsByClassName('botonesCancelarMisiones');

for(i = 0; i < arrayBotonesCancelarMisiones.length; i++){
	arrayBotonesCancelarMisiones[i].addEventListener('click', function(event) {
		eventoPlataforma(event.currentTarget, "cancelarMision");
	})
}

//Fin eventos plataformas.

//FIN BOTONES EVENTOS

//-----------------------------------------------------------

//FUNCIONES EVENTOS

//Eventos fondos.

function sumarFondos(cantidad) {

	fondos = fondos + cantidad;
	document.getElementById('fondos').innerHTML = fondos;

}

//Fin eventos fondos.

//Eventos materiales.

function encargarMateriales(cantidad) {

	materiales = materiales + cantidad;
	document.getElementById('materiales').innerHTML = materiales;

	if(!modoDesarrollo){
		document.getElementById('botonMateriales').disabled = false;
		document.getElementById('botonMateriales').innerHTML = "Encargar materiales";
	}

}

//Fin eventos materiales.

//Eventos equipos.

function sumarEquipo(cantidad) {

	equipos = equipos + cantidad;
	document.getElementById('equipos').innerHTML = equipos;

}

//Fin eventos equipos.

//Funciones programas y misiones.

function eventoPrograma(element, tipo){

	var programaId, tiempoRestante, tiempoDesarrollo, funcionObjetivo, eventoProgramaPosible = false;

	switch (tipo){
		case "desarrollar":

			//Id del programa.
			programaId = element.id.substr(24,1);

			//Sólo si hay fondos suficientes y un equipo disponible se añade el evento.
			if (!(fondos - programas[programaId].costeDesarrollo >= 0)){

				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Fondos insuficientes";

			}
			else if (!((equipos + programas[programaId].equiposTrabajo)- programas[programaId].equiposNecesarios >= 0)){

				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "No hay equipos disponibles";

			}
			else {
				fondos = fondos - programas[programaId].costeDesarrollo;
				document.getElementById('fondos').innerHTML = fondos;

				var restaEquipos = programas[programaId].equiposTrabajo - programas[programaId].equiposNecesarios;

				if (!(restaEquipos >= 0)){

					equipos = equipos - Math.abs(restaEquipos);
					document.getElementById('equipos').innerHTML = equipos;
				}

				tiempoDesarrollo = programas[programaId].tiempoDesarrollo;
				funcionObjetivo = "desarrollarPrograma";

				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].style.color = "black";
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Desarrollando programa";

				eventoProgramaPosible = true;

			}

			break;

		case "mejorar":

			//Id del programa.
			programaId = element.id.substr(20,1);

			//Sólo si hay fondos suficientes y no se ha llegado a la seguridad máxima se añade el evento.

			if (!(fondos - programas[programaId].costeMejora >= 0)){
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Fondos insuficientes";
			}
			else if (!(programas[programaId].seguridad < programas[programaId].seguridadMaxima)) {
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Máxima seguridad";
			}
			else {

				fondos = fondos - programas[programaId].costeMejora;
				document.getElementById('fondos').innerHTML = fondos;

				tiempoDesarrollo = programas[programaId].tiempoMejora;
				funcionObjetivo = "mejorarPrograma";

				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].style.color = "black";
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Mejorando programa";
				document.getElementById("botonFabricarComponente" + programaId).disabled = true;
				document.getElementById("botonEquipoPrograma" + programaId).disabled = true;

				eventoProgramaPosible = true;

			}

			break;

		case "fabricar":

			//Id del programa.
			programaId = element.id.substr(23,1);

			//Sólo si hay fondos y materiales suficientes se añade el evento.

			if (!(fondos - programas[programaId].costeFondosFabricacion >= 0)){
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Fondos insuficientes";
			}
			else if (!(materiales - programas[programaId].costeMaterialesFabricacion >= 0)) {
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Materiales insuficientes";
			}
			else {

				fondos = fondos - programas[programaId].costeFondosFabricacion;
				materiales = materiales - programas[programaId].costeMaterialesFabricacion;
				document.getElementById('fondos').innerHTML = fondos;
				document.getElementById('materiales').innerHTML = materiales;

				tiempoDesarrollo = programas[programaId].tiempoFabricacion;
				funcionObjetivo = "fabricarComponente";

				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].style.color = "black";
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Fabricando componente";
				document.getElementById("botonMejorarPrograma" + programaId).disabled = true;
				document.getElementById("botonEquipoPrograma" + programaId).disabled = true;

				eventoProgramaPosible = true;

			}

			break;

			case "asignarEquipoPrograma":

			//Id del programa.
			programaId = element.id.substr(19,1);

			//Sólo si hay un equipo disponible se añade el evento.

			if (!(equipos > 0)){
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "No hay equipos disponibles";
			}
			else {

				equipos = equipos - 1;
				document.getElementById('equipos').innerHTML = equipos;

				tiempoDesarrollo = 10;
				funcionObjetivo = "asignarEquipoPrograma";

				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].style.color = "black";
				document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Asignando equipo";
				document.getElementById("botonMejorarPrograma" + programaId).disabled = true;
				document.getElementById("botonFabricarComponente" + programaId).disabled = true;

				eventoProgramaPosible = true;

			}

			break;

		default:
			break;
	}

	if (eventoProgramaPosible){

		//Añadir evento
		var eventoPrograma = {
			nombre: "programa " + programas[programaId].nombreJuego,
			tiempoRestante: tiempoDesarrollo,
			tiempoDesarrollo: tiempoDesarrollo,
			funcion: funcionObjetivo,
			id: programaId,
			estado: 1
		};

		eventos.push(eventoPrograma);
		element.disabled = true;

	}
}

function eventoMision(element, tipo){

	var misionId, plataformaId = -1, tiempoRestante, tiempoDesarrollo, funcionObjetivo, eventoMisionPosible = false;

	switch (tipo){
		case "desarrollar":

			misionId = element.id.substr(22,1);

			//Sólo si hay fondos suficientes y un equipo disponible se añade el evento.
			if (!(fondos - misiones[misionId].costeDesarrollo >= 0)){

				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Fondos insuficientes";

			}
			else if (!((equipos + misiones[misionId].equiposTrabajo)- misiones[misionId].equiposNecesarios >= 0)){

				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "No hay equipos disponibles";

			}
			else {
				fondos = fondos - misiones[misionId].costeDesarrollo;
				document.getElementById('fondos').innerHTML = fondos;

				var restaEquipos = misiones[misionId].equiposTrabajo - misiones[misionId].equiposNecesarios;

				if (!(restaEquipos >= 0)){

					equipos = equipos - Math.abs(restaEquipos);
					document.getElementById('equipos').innerHTML = equipos;
				}

				tiempoDesarrollo = misiones[misionId].tiempoDesarrollo;
				funcionObjetivo = "desarrollarMision";

				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].style.color = "black";
				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Desarrollando misión";

				eventoMisionPosible = true;

			}

			break;

		case "mejorar":

			misionId = element.id.substr(18,1);

			//Sólo si hay fondos suficientes y no se ha llegado a la seguridad máxima se añade el evento.
			if (!(fondos - misiones[misionId].costeMejora >= 0)){
				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Fondos insuficientes";
			}
			else if (!(misiones[misionId].seguridad < misiones[misionId].seguridadMaxima)) {
				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Máxima seguridad";
			}
			else {

				fondos = fondos - misiones[misionId].costeMejora;
				document.getElementById('fondos').innerHTML = fondos;

				tiempoDesarrollo = misiones[misionId].tiempoMejora;
				funcionObjetivo = "mejorarMision";

				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].style.color = "black";
				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Mejorando misión";
				document.getElementById("botonProgramarMision" + misionId).disabled = true;
				document.getElementById("botonEquipoMision" + misionId).disabled = true;

				eventoMisionPosible = true;

			}

			break;

		case "programarMision":

			misionId = element.id.substr(20,1);

			var plataformaAsignada = false;

			//Sólo si hay una plataforma libre se puede continuar.
			for (var i=0; i<plataformas.length; i++){

				//Si no se ha encontrado aún una plataforma libre se busca una.
				if (!(plataformaAsignada)){

					//Si se encuentra una plataforma libre.
					if (plataformas[i].libre == true){

						plataformas[i].libre = false;
						plataformaAsignada = true;
						plataformas[i].mision = misionId; //HAY QUE CAMBIAR ESTO: CREAR UN ARRAY CON MISIONES PROGRAMADAS, CADA VEZ QUE SE LANZA UNA MISIÓN SE AÑADE A ESE ARRAY, CON UNA REFERENCIA A LA PLATAFORMA QUE USA, Y OTRA AL ARRAY GENERAL DE MISIONES, PARA COGER DE AHÍ SUS CARACTERÍSTICAS (CUANDO SE CARGUEN LOS COMPONENTES TAMBIÉN HAY QUE MODIFICAR LA MISIÓN AÑADIÉNDOSELOS).

						let misionProgramada = misionesProgramadas.length;
						plataformas[i].misionProgramada = misionProgramada; //Hace falta guardar en el array de plataformas la misión programada, porque para acceder a la ventana de ensamblaje hay que ir desde la plataforma, y si no no se puede obtener el índice de la misión programada para recuperar su información.
						misiones[misionId].vecesProgramada += 1;

						//Añadir misión al array de misiones programadas. Las características que son comunes a todas las misiones de este tipo no se copian, se leen directamente del array de misiones. En el array de misiones programadas sólo se guardan características que cambian de una misión a otra, como plataforma o componentes seleccionados posteriormente.
						let nuevaMision = {
							nombre: "Misión " + misiones[misionId].nombreJuego + " " + misiones[misionId].vecesProgramada,
							misionId: misionId,
							plataforma: plataformaId,
							fechaPrograma: diaActual + " " + mesActual + " " + anioActual,
							cohete: -1,
							carga: -1,
							tripulacion: -1, //Tiene que haber un array de tripulaciones en el que se crean equipos de astronautas, aunque sólo sea uno. En esta variable se guarda el equipo seleccionado para esta misión.
							duracion: misiones[misionId].duracionMinima,
							activa: 1,
							ejecucion: 0,
							fases: misiones[misionId].fases
						};

						misionesProgramadas.push(nuevaMision);
						updateMisionesProgramadas();

						plataformaId = i;

						document.getElementById("plataforma" + i).getElementsByTagName("h4")[0].innerHTML = nuevaMision.nombre;
						document.getElementById("plataforma" + i).getElementsByTagName("h5")[0].style.color = "black";
						document.getElementById("plataforma" + i).getElementsByTagName("h5")[0].innerHTML = "Plataforma reservada";

						tiempoDesarrollo = 10;
						funcionObjetivo = "programarMision";

						document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].style.color = "black";
						document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Programando misión";
						document.getElementById("botonMejorarMision" + misionId).disabled = true;
						document.getElementById("botonEquipoMision" + misionId).disabled = true;

						eventoMisionPosible = true;

					}

					else {

						document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].style.color = "red";
						document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Sin plataforma libre";

					}
				}
			}

			break;

		case "asignarEquipoMision":

			misionId = element.id.substr(17,1);

			//Sólo si hay un equipo disponible se añade el evento.
			if (!(equipos > 0)){
				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].style.color = "red";
				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "No hay equipos disponibles";
			}
			else {

				equipos = equipos - 1;
				document.getElementById('equipos').innerHTML = equipos;

				tiempoDesarrollo = 10;
				funcionObjetivo = "asignarEquipoMision";

				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].style.color = "black";
				document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Asignando equipo";
				document.getElementById("botonMejorarMision" + misionId).disabled = true;
				document.getElementById("botonProgramarMision" + misionId).disabled = true;

				eventoMisionPosible = true;

			}

			break;

		default:
			break;
	}

	if (eventoMisionPosible){

		//Añadir evento
		var eventoMision = {
			nombre: "misión " + misiones[misionId].nombreJuego,
			tiempoRestante: tiempoDesarrollo,
			tiempoDesarrollo: tiempoDesarrollo,
			funcion: funcionObjetivo,
			id: misionId,
			plataforma: plataformaId,
			estado: 1
		};

		eventos.push(eventoMision);
		element.disabled = true;

	}
}

function elegirParametrosMision(element){ //Se recibe el ID de la plataforma.

	plataformaId = element.id.substr(21,1);
	misionId = plataformas[plataformaId].mision;
	misionProgramada = plataformas[plataformaId].misionProgramada;

	//Preparar información para mostrar en la ventana.
	var textoVentanaModal = "<h4>Parámetros misión</h4>";
	textoVentanaModal += "<h5>Misión " + misionesProgramadas[misionProgramada].nombre + " | Plataforma: " + plataformas[plataformaId].nombreJuego + "</h5>";
	textoVentanaModal += "<p>Iniciada el " + misionesProgramadas[misionProgramada].fechaPrograma + "</p>";
	textoVentanaModal += "<hr />";
	textoVentanaModal += "<p>Duración: " + misionesProgramadas[misionProgramada].duracion + " días.</p>";

	//Abrir ventana modal parando el timer.
	abrirVentanaModal(textoVentanaModal);

	//Mostrar/ocultar elementos.
	document.getElementById("ventanaParametros").style.display = "block";

	//Contenidos ventana parámetros.

	//Datos misión.

	//var tipoCarga = misiones[misionId].tipoCarga;
	//var tripulacion = misiones[misionId].tripulacion;

	//Construir el select de duración de la misión.

		document.getElementById('selectDuracion').innerHTML = "";

	for (let i=misiones[misionId].duracionMinima; i <= misiones[misionId].duracionMaxima; i++){
		if (i == misionesProgramadas[misionProgramada].duracion) {
			document.getElementById('selectDuracion').insertAdjacentHTML('beforeend', "<option value='" + i + "' selected>" + i + "</option>")
		}
		else {
			document.getElementById('selectDuracion').insertAdjacentHTML('beforeend', "<option value='" + i + "'>" + i + "</option>")
		}
	}

	//Fin contenidos ventana ensamblaje.

	//Añadir evento para el botón de confirmar parámetros.
	document.getElementById("botonConfirmarParametros").onclick = function(){ //IMPORTANTE: onclick en vez de un event listener (lanzaba varias veces el mismo evento).

		var selectDuracion = document.getElementById("selectDuracion");
		var duracionSeleccionada = selectDuracion.options[selectDuracion.selectedIndex].value;

		misionesProgramadas[misionProgramada].duracion = duracionSeleccionada;

		document.getElementById("ventanaParametros").style.display = "none";
		document.getElementById("botonEnsamblarComponentes" + plataformaId).disabled = false;

		cerrarVentanaModal();

	};
}

function elegirComponentesMision(element){ //Se recibe el ID de la plataforma.

	plataformaId = element.id.substr(25,1);
	misionId = plataformas[plataformaId].mision;
	misionProgramada = plataformas[plataformaId].misionProgramada;

	//console.log(misionProgramada);

	//Preparar información para mostrar en la ventana.
	var textoVentanaModal = "<h4>Confirmar componentes misión</h4>";
	textoVentanaModal += "<h5>Misión " + misionesProgramadas[misionProgramada].nombre + " | Plataforma: " + plataformas[plataformaId].nombreJuego + "</h5>";
	textoVentanaModal += "<p>Iniciada el " + misionesProgramadas[misionProgramada].fechaPrograma + "</p>";

	//Abrir ventana modal parando el timer.
	abrirVentanaModal(textoVentanaModal);

	//Cada vez que cambia un componente se lanza una función que valida.
	//Si la combinación es validada, se activa el botón que confirma la combinación y lanza el evento de ensamblaje.

	//Mostrar/ocultar elementos.
	document.getElementById("ventanaEnsamblaje").style.display = "block";
	document.getElementById("ventanaLanzamiento").style.display = "none"; //Esto no debería hacer falta porque en principio esta ventana viene oculta por estilos, pero hay algún fallo pendiente que hace que la ventana de lanzamiento se muestre a la vez que la pantalla de ensamblaje. - PENDIENTE.

	//Contenidos ventana ensamblaje.

	//Limpiar valores previos.
	document.getElementById('selectCohete').innerHTML = "<option value='-'>-</option>";
	document.getElementById('selectCarga').innerHTML = "<option value='-'>-</option>";
	document.getElementById('selectTripulacion').innerHTML = "<option value='-'>-</option>";
	document.getElementById("botonConfirmarEnsamblaje").disabled = true;

	//Datos misión.
	var tipoCarga = misiones[misionId].tipoCarga;
	var tripulacion = misiones[misionId].tripulacion;

	//Añadir opciones a los select.

	//Buscar cohete: componente de tipo 1 con capacidad mayor que el peso de la carga
	for (var i=0; i < programas.length; i++){
		if ((programas[i].tipo == 1) & (programas[i].desarrollado == 1) & (programas[i].unidades > 0)) {
			document.getElementById('selectCohete').insertAdjacentHTML('beforeend', "<option value='" + i + "'>" + programas[i].nombreJuego + "</option>")
		}
	}

	document.getElementById('selectCohete').addEventListener('change', function(event){
		mostrarDatosComponentes(misionId);
	});

	if(tipoCarga == 0) {

	} //If si tipoCarga = 0.

	else {

		//Buscar carga: componente de tipo X que cumpla con los requisitos que pueda haber.
		for (var j=0; j < programas.length; j++){
			if ((programas[j].tipo == tipoCarga) & (programas[j].desarrollado == 1) & (programas[j].unidades > 0) & (programas[j].duracionMaxima >=  misionesProgramadas[misionProgramada].duracion)) {
				document.getElementById('selectCarga').insertAdjacentHTML('beforeend', "<option value='" + j + "'>" + programas[j].nombreJuego + "</option>")
			}
		}

		document.getElementById('selectCarga').addEventListener('change', function(event){
			mostrarDatosComponentes(misionId);
		});

	} //Else si tipoCarga = 0.

	if(tripulacion == 0) {

	} //If si tipoCarga = 0.

	else {

		//Buscar tripulación: de momento sólo seleccionar del array de astronautas, más adelante del array de equipos de astronautas. - PENDIENTE.
		for (let j=0; j < astronautas.length; j++){
			if (astronautas[j].estado == 1){
				document.getElementById('selectTripulacion').insertAdjacentHTML('beforeend', "<option value='" + j + "'>" + astronautas[j].nombreJuego + "</option>")
			}
		}

		document.getElementById('selectTripulacion').addEventListener('change', function(event){
			mostrarDatosComponentes(misionId);
		});

	} //Else si tipoCarga = 0.

	//Fin contenidos ventana ensamblaje.

	//Añadir evento para el botón de confirmar ensamblaje.
	document.getElementById("botonConfirmarEnsamblaje").onclick = function(){ //IMPORTANTE: onclick en vez de un event listener (lanzaba varias veces el mismo evento).

		//Restar componentes del stock.
		var selectCohete = document.getElementById("selectCohete");
		var coheteSeleccionado = selectCohete.options[selectCohete.selectedIndex].value;

		programas[coheteSeleccionado].unidades -= 1;
		document.getElementById('unidadesPrograma' + coheteSeleccionado).innerHTML = programas[coheteSeleccionado].unidades;
		misionesProgramadas[misionProgramada].cohete = coheteSeleccionado;

		if(tipoCarga == 0) {
			misionesProgramadas[misionProgramada].carga = -1;
		} //If si tipoCarga = 0.

		else {

			var selectCarga = document.getElementById("selectCarga");
			var cargaSeleccionada = selectCarga.options[selectCarga.selectedIndex].value;
			programas[cargaSeleccionada].unidades -= 1;
			document.getElementById('unidadesPrograma' + cargaSeleccionada).innerHTML = programas[cargaSeleccionada].unidades;
			misionesProgramadas[misionProgramada].carga = cargaSeleccionada;

		} //Else si tipoCarga = 0.

		if(tripulacion == 0) {
			misionesProgramadas[misionProgramada].tripulacion = -1;
		} //If si tripulación = 0.

		else {

			var selectTripulacion = document.getElementById("selectTripulacion");
			var tripulacionSeleccionada = selectTripulacion.options[selectTripulacion.selectedIndex].value;
			astronautas[tripulacionSeleccionada].estado = 2;
			updateAstronautas();
			misionesProgramadas[misionProgramada].tripulacion = tripulacionSeleccionada;

		} //Else si tripulación = 0.

		document.getElementById("botonParametrosMision" + plataformaId).disabled = true;

		cerrarVentanaModal();

		//Añadir seguridad definitiva de los componentes (aunque siga cambiando su seguridad en la partida, estos ya están ensamblados; la seguridad de la misión, sin embargo, sí puede seguir incrementándose). - PENDIENTE.

		eventoPlataforma(element, "ensamblarMision");

	}; //Fin función que se lanza con el botón de confirmar ensamblaje.
}

function mostrarDatosComponentes(misionId){

	var tipoCarga = misiones[misionId].tipoCarga;
	var tripulacion = misiones[misionId].tripulacion;

	//Vaciar contenidos anteriores cajas datos.
	document.getElementById("datosCoheteSeleccionado").innerHTML = "";
	document.getElementById("datosCargaSeleccionada").innerHTML = "";
	document.getElementById("datosTripulacionSeleccionada").innerHTML = "";
	document.getElementById("componentesSeleccionados").innerHTML = "";

	var selectCohete = document.getElementById("selectCohete");
	var coheteSeleccionado = selectCohete.options[selectCohete.selectedIndex];

	var selectCarga = document.getElementById("selectCarga");
	var cargaSeleccionada = selectCarga.options[selectCarga.selectedIndex];

	var selectTripulacion = document.getElementById("selectTripulacion");
	var tripulacionSeleccionada = selectTripulacion.options[selectTripulacion.selectedIndex];

	//Buscar id componente cohete y mostrar info.
	for (var i=0; i < programas.length; i++){
		if (i == coheteSeleccionado.value){
		  var contenidoDatosCohete = "Componente: " + programas[i].nombreJuego + "<br />";
		  contenidoDatosCohete += "Capacidad: " + programas[i].capacidad + "<br />";
		  document.getElementById("datosCoheteSeleccionado").innerHTML = contenidoDatosCohete;
		}
	}

	//Buscar id componente carga y mostrar info.
	for (var i=0; i < programas.length; i++){
		if (i == cargaSeleccionada.value) {
		  var contenidoDatosCarga = "Componente: " + programas[i].nombreJuego + "<br />";
		  contenidoDatosCarga += "Peso: " + programas[i].peso + "<br />";
		  document.getElementById("datosCargaSeleccionada").innerHTML = contenidoDatosCarga;
		}
	}

	//Buscar id tripulación y mostrar info.
	for (var i=0; i < astronautas.length; i++){
		if (i == tripulacionSeleccionada.value) {
		  var contenidoDatosTripulacion = "Astronauta: " + astronautas[i].nombreJuego + "<br />";
		  document.getElementById("datosTripulacionSeleccionada").innerHTML = contenidoDatosTripulacion;
		}
	}

	//Activar botón ensamblar.

	if(tipoCarga == 0) {
		if(coheteSeleccionado.value != "-") {
			document.getElementById("botonConfirmarEnsamblaje").disabled = false;
			document.getElementById("componentesSeleccionados").innerHTML = coheteSeleccionado.value;
		}
		else { //Se añade un else porque el jugador puede haber seleccionado un cohete, habilitando el botón, y a continuación deseleccionarlo, y se podría quedar sin cohete seleccionado pero con el botón de confirmar activo.
			document.getElementById("botonConfirmarEnsamblaje").disabled = true;
		}
	} //If si tipoCarga = 0.

	else {

		if(tripulacion > 0){ //If si lleva tripulación.

			if ((coheteSeleccionado.value == "-") || (cargaSeleccionada.value == "-") || (tripulacionSeleccionada.value == "-")){
				document.getElementById("componentesSeleccionados").innerHTML = "Faltan componentes por seleccionar";
				document.getElementById("botonConfirmarEnsamblaje").disabled = true;
			}
			else {

				//Comprobar si son compatibles
				for (var cohete=0; cohete < programas.length; cohete++){
					if (cohete == coheteSeleccionado.value){
						for (var carga=0; carga < programas.length; carga++){
							if (carga == cargaSeleccionada.value) {
								if (programas[cohete].capacidad > programas[carga].peso){
									document.getElementById("botonConfirmarEnsamblaje").disabled = false;
								}
								else {
									document.getElementById("botonConfirmarEnsamblaje").disabled = true;
								}
							}
						}
					}
				}
				document.getElementById("componentesSeleccionados").innerHTML = coheteSeleccionado.value + " + " + cargaSeleccionada.value + " + " + tripulacionSeleccionada.value;
			}

		} //Fin if si lleva tripulación.

		else { //Else si tripulación > 0 (si no lleva tripulación).

			if ((coheteSeleccionado.value == "-") || (cargaSeleccionada.value == "-")){
				document.getElementById("componentesSeleccionados").innerHTML = "Faltan componentes por seleccionar";
				document.getElementById("botonConfirmarEnsamblaje").disabled = true;
			}
			else {

		  	//Comprobar si son compatibles
				for (var cohete=0; cohete < programas.length; cohete++){
					if (cohete == coheteSeleccionado.value){
						for (var carga=0; carga < programas.length; carga++){
							if (carga == cargaSeleccionada.value) {
								if (programas[cohete].capacidad > programas[carga].peso){
									document.getElementById("botonConfirmarEnsamblaje").disabled = false;
								}
								else {
									document.getElementById("botonConfirmarEnsamblaje").disabled = true;
								}
							}
						}
					}
				}
				document.getElementById("componentesSeleccionados").innerHTML = coheteSeleccionado.value + " + " + cargaSeleccionada.value;
			}

	} //Else si tripulación > 0.

	} //Else si tipoCarga = 0.

}

function eventoPlataforma(element, tipo){

	var plataformaId, misionId, tiempoRestante, tiempoDesarrollo, funcionObjetivo, eventoPlataformaPosible = false;

	switch (tipo){

		case "cambiarNombreMision":

			plataformaId = element.id.substr(16,1);

			let nuevoNombreMision = prompt("Por favor introduce un nuevo nombre para la misión");

			if (nuevoNombreMision != null) {
			    document.getElementById("plataforma" + plataformaId).getElementsByTagName("h4")[0].innerHTML = nuevoNombreMision;

					misionesProgramadas[plataformas[plataformaId].misionProgramada].nombre = nuevoNombreMision;
					updateMisionesProgramadas();
  		}

		break;

		case "ensamblarMision":

			plataformaId = element.id.substr(25,1);

			tiempoDesarrollo = 1;
			funcionObjetivo = "ensamblarMision";

			document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].style.color = "black";
			document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].innerHTML = "Ensamblando componentes";
			document.getElementById("botonProgramarLanzamiento" + plataformaId).disabled = true;
			document.getElementById("botonCancelarMision" + plataformaId).disabled = true;

			eventoPlataformaPosible = true;

			break;

		case "programarLanzamiento":

			plataformaId = element.id.substr(25,1);
			misionId = plataformas[plataformaId].mision;

			tiempoDesarrollo = misiones[misionId].tiempoCuentaAtras;
			funcionObjetivo = "programarLanzamiento";

			document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].style.color = "black";
			document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].innerHTML = "Cuenta atrás lanzada";
			document.getElementById("botonProgramarLanzamiento" + plataformaId).disabled = true;

			eventoPlataformaPosible = true;

			break;

		case "cancelarMision":

			plataformaId = element.id.substr(19,1);

			prestigio = prestigio - misiones[misionId].prestigioCancelar;
			document.getElementById('prestigio').innerHTML = prestigio;

			tiempoDesarrollo = 10;
			funcionObjetivo = "cancelarMision";

			document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].style.color = "black";
			document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].innerHTML = "Cancelando mision";
			document.getElementById("botonEnsamblarComponentes" + plataformaId).disabled = true;
			document.getElementById("botonProgramarLanzamiento" + plataformaId).disabled = true;

			eventoPlataformaPosible = true;

			break;

		default:
			break;
	}

	if (eventoPlataformaPosible){

		//Añadir evento
		var eventoPlataforma = {
			nombre: "plataforma " + plataformas[plataformaId].nombreJuego,
			tiempoRestante: tiempoDesarrollo,
			tiempoDesarrollo: tiempoDesarrollo,
			funcion: funcionObjetivo,
			id: plataformaId,
			estado: 1
		};

		eventos.push(eventoPlataforma);
		element.disabled = true;

	}
}

function desarrollarPrograma(id) {

	var programaId = id;

	programas[programaId].desarrollado = 1;

	document.getElementById("botonMejorarPrograma" + programaId).disabled = false;
	document.getElementById("botonFabricarComponente" + programaId).disabled = false;
	document.getElementById("botonEquipoPrograma" + programaId).disabled = false;

	document.getElementById("programa" + programaId).getElementsByTagName("h4")[0].style.color = "green";
	document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Programa desarrollado";
	document.getElementById("botonDesarrollarPrograma" + programaId).innerHTML = "<i class='material-icons'>lightbulb_outline</i>";

	document.getElementById("seguridadPrograma" + programaId).innerHTML = programas[programaId].seguridad;

	var restaEquipos = programas[programaId].equiposTrabajo - programas[programaId].equiposNecesarios;

	if (!(restaEquipos >= 0)){
		programas[programaId].equiposTrabajo = programas[programaId].equiposTrabajo + Math.abs(restaEquipos);
		document.getElementById("equiposPrograma" + programaId).innerHTML = programas[programaId].equiposTrabajo;
	}

	//Desbloquear programas.
	for(var i = 0; i < programas.length; i++){
		if(programas[i].requisitoPrograma == programaId){
			programas[i].desbloqueado = true;
			document.getElementById("programa" + i).style = "table-row";
			document.getElementById("programa" + i).nextSibling.style.display = "table-row";
			//document.getElementById("programa" + i).style.backgroundImage = "url('imagenes/" + programas[i].nombreJuego + ".jpg')";
			//document.getElementById("programa" + i).style.backgroundSize = "cover";
		}
	}
}

function mejorarPrograma(id) {

	var programaId = id;
	let mejora = (Math.floor(Math.random() * 10)) + 10;

	programas[programaId].seguridad = programas[programaId].seguridad + mejora;
	document.getElementById("seguridadPrograma" + programaId).innerHTML = programas[programaId].seguridad;

	document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Programa mejorado (" + mejora + "%)";
	document.getElementById("botonMejorarPrograma" + programaId).innerHTML = '<i class="material-icons">security</i>';

	document.getElementById("botonMejorarPrograma" + programaId).disabled = false;
	document.getElementById("botonFabricarComponente" + programaId).disabled = false;
	document.getElementById("botonEquipoPrograma" + programaId).disabled = false;

}

function fabricarComponente(id) {

	var programaId = id;

	programas[programaId].unidades++;
	document.getElementById("unidadesPrograma" + programaId).innerHTML = programas[programaId].unidades;
	document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Componente fabricado";
	//document.getElementById("botonFabricarComponente" + programaId).className = "buttonEnabled";
	document.getElementById("botonFabricarComponente" + programaId).innerHTML = '<i class="material-icons">build</i>';
	document.getElementById("botonMejorarPrograma" + programaId).disabled = false;
	document.getElementById("botonFabricarComponente" + programaId).disabled = false;
	document.getElementById("botonEquipoPrograma" + programaId).disabled = false;

}

function asignarEquipoPrograma(id) {

	var programaId = id;
	programas[programaId].equiposTrabajo++;

	document.getElementById("equiposPrograma" + programaId).innerHTML = programas[programaId].equiposTrabajo;
	document.getElementById("programa" + programaId).getElementsByTagName("h5")[0].innerHTML = "Equipo asignado";
	document.getElementById("botonEquipoPrograma" + programaId).innerHTML = '<i class="material-icons">group_add</i>';
	document.getElementById("botonEquipoPrograma" + programaId).disabled = false;
	document.getElementById("botonFabricarComponente" + programaId).disabled = false;
	document.getElementById("botonMejorarPrograma" + programaId).disabled = false;

}

function desarrollarMision(id) {

	var misionId = id;

	misiones[misionId].desarrollado = 1;

	document.getElementById("botonMejorarMision" + misionId).disabled = false;
	document.getElementById("botonProgramarMision" + misionId).disabled = false;
	document.getElementById("botonEquipoMision" + misionId).disabled = false;

	document.getElementById("mision" + misionId).getElementsByTagName("h4")[0].style.color = "green";
	document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Misión desarrollada";
	document.getElementById("botonDesarrollarMision" + misionId).innerHTML = "<i class='material-icons'>lightbulb_outline</i>";

	document.getElementById("seguridadMision" + misionId).innerHTML = misiones[misionId].seguridad;

	var restaEquipos = misiones[misionId].equiposTrabajo - misiones[misionId].equiposNecesarios;

	if (!(restaEquipos >= 0)){

		misiones[misionId].equiposTrabajo = misiones[misionId].equiposTrabajo + Math.abs(restaEquipos);

		document.getElementById("equiposMision" + misionId).innerHTML = misiones[misionId].equiposTrabajo;

	}

	//Desbloquear misiones.
	for(var i = 0; i < misiones.length; i++){
		if(misiones[i].requisitoMision == misionId){
			misiones[i].desbloqueado = true;
			document.getElementById("mision" + i).style = "block";
			//document.getElementById("mision" + i).style.backgroundImage = "url('imagenes/" + misiones[i].nombreJuego + ".jpg')";
			//document.getElementById("mision" + i).style.backgroundSize = "cover";
		}
	}
}

function mejorarMision(id) {

	var misionId = id;
	var mejora = (Math.floor(Math.random() * 10)) + 10;

	misiones[misionId].seguridad = misiones[misionId].seguridad + mejora;
	document.getElementById("seguridadMision" + misionId).innerHTML = misiones[misionId].seguridad;

	document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Misión mejorada (" + mejora + "%)";
	document.getElementById("botonMejorarMision" + misionId).innerHTML = '<i class="material-icons">security</i>';

	document.getElementById("botonMejorarMision" + misionId).disabled = false;
	document.getElementById("botonProgramarMision" + misionId).disabled = false;
	document.getElementById("botonEquipoMision" + misionId).disabled = false;

}

function programarMision(id, plataformaId) {

	var misionId = id;
	var plataformaId = plataformaId;

	document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Misión programada";
	document.getElementById("botonProgramarMision" + misionId).innerHTML = '<i class="material-icons">schedule</i>';
	document.getElementById("botonEquipoMision" + misionId).disabled = false;
	document.getElementById("botonProgramarMision" + misionId).disabled = false;
	document.getElementById("botonMejorarMision" + misionId).disabled = false;

	document.getElementById("plataforma" + plataformaId).style.backgroundColor = "#f4e786";

	//Habilitar botones plataforma.
	document.getElementById("botonParametrosMision" + plataformaId).disabled = false;
	document.getElementById("botonCancelarMision" + plataformaId).disabled = false;

}

function asignarEquipoMision(id) {

	var misionId = id;
	misiones[misionId].equiposTrabajo++;

	document.getElementById("equiposMision" + misionId).innerHTML = misiones[misionId].equiposTrabajo;
	document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Equipo asignado";
	document.getElementById("botonEquipoMision" + misionId).innerHTML = '<i class="material-icons">group_add</i>';
	document.getElementById("botonEquipoMision" + misionId).disabled = false;
	document.getElementById("botonProgramarMision" + misionId).disabled = false;
	document.getElementById("botonMejorarMision" + misionId).disabled = false;

}

//Fin funciones programas y misiones.

//Funciones plataformas.

function ensamblarMision(id) {

	var plataformaId = id;

	plataformas[plataformaId].estado = 0;

	document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].innerHTML = "Componentes ensamblados";
	document.getElementById("botonEnsamblarComponentes" + plataformaId).innerHTML = '<i class="material-icons">settings</i>';
	document.getElementById("plataforma" + plataformaId).style.backgroundColor = "#a1f486";
	document.getElementById("botonParametrosMision" + plataformaId).disabled = true;
	document.getElementById("botonProgramarLanzamiento" + plataformaId).disabled = false;
	document.getElementById("botonCancelarMision" + plataformaId).disabled = false;

}

function programarLanzamiento(id) {

	var plataformaId = id;

	document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].innerHTML = "¡LANZAMIENTO!";
	document.getElementById("botonProgramarLanzamiento" + plataformaId).innerHTML = '<i class="material-icons">flight_takeoff</i>';
	document.getElementById("plataforma" + plataformaId).style.backgroundColor = "red";
	document.getElementById("botonParametrosMision" + plataformaId).disabled = true;
	document.getElementById("botonProgramarLanzamiento" + plataformaId).disabled = true;
	document.getElementById("botonCancelarMision" + plataformaId).disabled = true;

	lanzamiento(plataformaId);

}

function cancelarMision(id) {

	var plataformaId = id;

	plataformas[plataformaId].libre = true;
	plataformas[plataformaId].mision = -1;

	document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].innerHTML = "Misión cancelada";
	document.getElementById("botonCancelarMision" + plataformaId).innerHTML = '<i class="material-icons">cancel</i>';
	document.getElementById("plataforma" + plataformaId).style.backgroundColor = "gray";
	document.getElementById("botonParametrosMision" + plataformaId).disabled = true;
	document.getElementById("botonEnsamblarComponentes" + plataformaId).disabled = true;
	document.getElementById("botonProgramarLanzamiento" + plataformaId).disabled = true;
	document.getElementById("botonCancelarMision" + plataformaId).disabled = true;

}

//Fin funciones plataformas.

//Misiones activas.

function lanzamiento(id){

	let plataformaId = id;
	let misionId = plataformas[plataformaId].mision;
	let misionProgramada = plataformas[plataformaId].misionProgramada;
	let cohete = misionesProgramadas[misionProgramada].cohete;
	let carga = misionesProgramadas[misionProgramada].carga;
	let tripulacion = misionesProgramadas[misionProgramada].tripulacion;

	//Ventana modal con el resultado del lanzamiento.

	//Preparar información para mostrar en la ventana.
	let textoVentanaModal = "<h4>Resultado lanzamiento</h4>";
	textoVentanaModal += "<h5>Misión " + misionesProgramadas[misionProgramada].nombre + " | Plataforma: " + plataformas[plataformaId].nombreJuego + "</h5>";

	let seguridadMision = misiones[misionId].seguridad;
	let experienciaMision = misiones[misionId].experiencia;

	if(seguridadMision < 0){
		seguridadMision = 0;
	}

	if(seguridadMision > 50){
		seguridadMision = 50;
	}

	textoVentanaModal += "<p>Seguridad misión: " + seguridadMision + "</p>";
	textoVentanaModal += "<p>Experiencia misión: " + experienciaMision + "</p>";

	let seguridadCohete = programas[cohete].seguridad;
	let experienciaCohete = programas[cohete].experiencia;

	if(seguridadCohete < 0){
		seguridadCohete = 0;
	}

	if(seguridadCohete > 50){
		seguridadCohete = 50;
	}

	textoVentanaModal += "<p>Cohete: " + programas[cohete].nombreJuego + "</p>";
	textoVentanaModal += "<p>Seguridad cohete: " + seguridadCohete + "</p>";
	textoVentanaModal += "<p>Experiencia cohete: " + experienciaCohete + "</p>";

	if(carga != -1) {

		var seguridadCarga = programas[carga].seguridad;
		var experienciaCarga = programas[carga].experiencia;

		if(seguridadCarga < 0){
			seguridadCarga = 0;
		}

		if(seguridadCarga > 50){
			seguridadCarga = 50;
		}

		textoVentanaModal += "<p>Carga: " + programas[carga].nombreJuego + "</p>";
		textoVentanaModal += "<p>Seguridad carga: " + seguridadCarga + "</p>";
		textoVentanaModal += "<p>Experiencia carga: " + experienciaCarga + "</p>";

	}

	if(tripulacion != -1) {
		textoVentanaModal += "<p>Tripulación: " + astronautas[tripulacion].nombreJuego + "</p>";
	}

	let probabilidadAproximada = 0;

	if(carga != -1) {
		probabilidadAproximada = (((seguridadCohete + (seguridadCohete * 2) + seguridadCarga + (seguridadCarga * 2)) / 2) + (seguridadMision + (experienciaMision * 5))) / 4;
	}
	else {
		probabilidadAproximada = ((seguridadCohete + (seguridadCohete * 2)) + (seguridadMision + (experienciaMision * 5))) / 4;
	}
	textoVentanaModal += "<h6>Probabilidad aproximada: " + probabilidadAproximada + "</h6>";

	//Abrir ventana modal parando el timer.
	abrirVentanaModal(textoVentanaModal);
	document.getElementById("botonCerrarVentanaModal").style.display = "none"; //El botón de cerrar ventana no aparece, sólo existen los botones de aceptar o cancelar lanzamiento.

	//Mostrar/ocultar elementos.
	document.getElementById("ventanaLanzamiento").style.display = "block";
	document.getElementById("fasesMision").innerHTML = ""; //Para borrar la información que quedó impresa en pantalla en el lanzamiento anterior.

	//Botón lanzamiento (al pinchar lanza la función de ejecución de la misión).
	document.getElementById("botonConfirmarLanzamiento").style.display = "block";

	//botonConfirmarLanzamiento.addEventListener("click", function(){
		botonConfirmarLanzamiento.onclick = function(event) { //IMPORTANTE: onclick en vez de un event listener (lanzaba varias veces el mismo evento).

		document.getElementById("fasesMision").style.display = "block";
		document.getElementById("fasesMision").innerHTML = "<h5>FASES</h5>";

		let estado = 1; // 0-> Fallo; 1-> Activa; 2-> Activa pero con un fallo parcial.
		let resultadoFinal; //Texto final.
		let penalizacion = 0; //Tras un éxito parcial se añade una penalización.

		let resultadoFases = [];
		let cargaUsada = false; //Aquí se guarda si la carga ha sido usada en la misión o no (si falla en las fases del cohete entonces no se ha usado), para que no se le asigne experiencia por uso al final de la misión si no se ha usado.

		comprobarFasesMision();

		resultadoFases.push("<p>" + resultadoFinal + "</p>");

		//Mostrar el resultado de las fases.
		let elementoActual = 0;
		let intervalID = setInterval(function() {

			document.getElementById("fasesMision").innerHTML += (resultadoFases[elementoActual]);
			++elementoActual;

		    if (elementoActual >= resultadoFases.length) {
						document.getElementById("botonCerrarVentanaModal").style.display = "block";
						clearInterval(intervalID);
		    }

		}, 1500);
		//Fin mostrar el resultado de las fases.

		//Mostrar/ocultar botones.
		if(!modoDesarrollo) {
			document.getElementById("botonConfirmarLanzamiento").style.display = "none";
		}
		document.getElementById("botonCancelarLanzamiento").style.display = "none";

		//MODIFICADORES. - ALEATORIAMENTE PUEDEN SER CARGADOS EVENTOS DEL ARRAY DE MODIFICADORES (SON FUNCIONES QUE SE EJECUTAN Y MODIFICAN EL JUEGO EN FUNCIÓN DE LAS VARIABLES CORRESPONDIENTES). - PENDIENTE.
		//Los modificadores se ponen en este lugar del juego porque las misiones son el componente principal del juego, los puntos de inflexión del mismo para bien o para mal. Así que se cargan modificadores que en función del resultado de la misión y de otras condiciones tienen consecuencias en el juego.

		let modificadorAleatorio = Math.floor(Math.random() * (modificadores.length * 5));

						//console.log(modificadores.length);
						//console.log(modificadorAleatorio);

		if (modificadorAleatorio < modificadores.length){
			modificadores[modificadorAleatorio].ejecutar();
		}

		//Modificar misión en array de misiones programadas. - PENDIENTE

		//Liberar plataforma.
		plataformas[plataformaId].libre = true;
		plataformas[plataformaId].estado = 0;
		plataformas[plataformaId].mision = -1;

		//Modificar cartel en misión.
		document.getElementById("mision" + misionId).getElementsByTagName("h5")[0].innerHTML = "Misión lanzada";

		//CREAR EVENTO PARA DESPEJAR PLATAFORMA - PENDIENTE.

		document.getElementById("plataforma" + plataformaId).getElementsByTagName("h4")[0].innerHTML = plataformas[plataformaId].nombreJuego;
		document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].innerHTML = "Despejando plataforma";
		document.getElementById("plataforma" + plataformaId).style.backgroundColor = "#333";
		document.getElementById("botonEnsamblarComponentes" + plataformaId).disabled = true;
		document.getElementById("botonProgramarLanzamiento" + plataformaId).disabled = true;
		document.getElementById("botonCancelarMision" + plataformaId).disabled = true;

	} //Fin botón confirmar lanzamiento.

	//Botón cancelar lanzamiento (al pinchar lanza la función de cancelación de la misión).
	document.getElementById("botonCancelarLanzamiento").style.display = "block";

	botonCancelarLanzamiento.addEventListener("click", function(){

	})

} //Fin función lanzamiento.

function continuarMision(misionId, misionProgramada){

	let cohete = misionesProgramadas[misionProgramada].cohete;
	let carga = misionesProgramadas[misionProgramada].carga;
	let tripulacion = misionesProgramadas[misionProgramada].tripulacion;

	//comprobarFasesMision();





}

function comprobarFasesMision(misionId, misionProgramada){

	let cohete = misionesProgramadas[misionProgramada].cohete;
	let carga = misionesProgramadas[misionProgramada].carga;
	let tripulacion = misionesProgramadas[misionProgramada].tripulacion;

	//Por cada fase de la misión.
	for (let propiedad in misionesProgramadas[misionProgramada].fases) {

		//console.log(misionesProgramadas[misionProgramada].fases)

		let resultado = ""; //Texto para resultado de cada fase.

		//Sólo se comprueba por cada fase que utilice un componente y que se ejecute en el día 1 de misión.
		if ((misionesProgramadas[misionProgramada].fases[propiedad].componente > 0) && (misionesProgramadas[misionProgramada].fases[propiedad].dia == 1)) {

			//Según el tipo de componente para esta fase se buscan los datos correspondientes.
			if(misionesProgramadas[misionProgramada].fases[propiedad].componente == 1) { //Cohete.
				programaId = cohete;
			}
			else { //Carga.
				programaId = carga;
			}

			let seguridadComponente = programas[programaId].seguridad;
			let experienciaComponente = programas[programaId].experiencia;
			//let experienciaFase = programas[programaId].experienciaFases[propiedad].experiencia;

			//console.log(misionesProgramadas[misionProgramada].fases[propiedad].nombre);
			//console.log(programas[programaId].experienciaFases.findIndex(i => i.nombre === misionesProgramadas[misionProgramada].fases[propiedad].nombre));

			let experienciaFase = programas[programaId].experienciaFases[programas[programaId].experienciaFases.findIndex(i => i.nombre === misionesProgramadas[misionProgramada].fases[propiedad].nombre)].experiencia;

			if (seguridadComponente < 0){
				seguridadComponente = 0;
			}

			if (seguridadComponente > 50){
				seguridadComponente = 50;
			}

			let textoFase = "<p>" + misionesProgramadas[misionProgramada].fases[propiedad].nombreJuego + " (" + programas[programaId].nombreJuego + " - " + experienciaFase + "): ";

			//Si la misión sigue activa.
			if (estado > 0){

				if (misionesProgramadas[misionProgramada].fases[propiedad].componente > 1){
					cargaUsada = true; //Si la carga se ha usado en alguna fase de la misión entonces cuenta como usada.
				}

				//let sumaSeguridades = (seguridadComponente + (experienciaComponente * 5) + experienciaFase + seguridadMision + experienciaMision) - penalizacion;
				let sumaSeguridades = ((seguridadComponente + (experienciaComponente * 2) + (experienciaFase * 5)) + (seguridadMision + (experienciaMision * 5))) / 2;
				if (sumaSeguridades > 85) {
					sumaSeguridades = 85;
				}
				sumaSeguridades = sumaSeguridades - penalizacion;
				let resultadoComparacion = sumaSeguridades - Math.floor((Math.random() * 100) + 1);

				if (modoDesarrollo){
					if (indestructible){
						resultadoComparacion = 1;
					}
				}

				//Éxito.
				if (resultadoComparacion > 0) {
					resultado = "<span style='color: green;'>éxito (probabilidad: " + sumaSeguridades + "; resultado: " + resultadoComparacion + ") (penalizacion: " + penalizacion + ")</span>";
					programas[programaId].experienciaFases[programas[programaId].experienciaFases.findIndex(i => i.nombre === misionesProgramadas[misionProgramada].fases[propiedad].nombre)].experiencia += 2;
					if (penalizacion > 0) {
						penalizacion -= 5;
					}
					if (estado == 1) {
						resultadoFinal = "ÉXITO TOTAL";
					}
				}
				else {
					//Fallo parcial.
					if (resultadoComparacion > -15) {
						resultado = "<span style='color: yellow;'>fallo parcial (probabilidad: " + sumaSeguridades + "; resultado: " + resultadoComparacion + ") (penalizacion: " + penalizacion + ")</span>";
						programas[programaId].experienciaFases[programas[programaId].experienciaFases.findIndex(i => i.nombre === misionesProgramadas[misionProgramada].fases[propiedad].nombre)].experiencia += 1;
						programas[programaId].seguridad -= 5;
						resultadoFinal = "ÉXITO PARCIAL";
						penalizacion += 10;
						estado = 2;
					}
					//Fallo total.
					else {
						resultado = "<span style='color: red;'>fallo (probabilidad: " + sumaSeguridades + "; resultado: " + resultadoComparacion + ") (penalizacion: " + penalizacion + ")</span>";
						resultadoFinal = "FALLO TOTAL";
						if(tripulacion != -1) {
							astronautas[tripulacion].estado = 0;
							resultadoFinal = "FALLO TOTAL - TRIPULACIÓN FALLECIDA";
						}
						estado = 0;
					}
				}

				resultadoFases.push(textoFase + resultado + "</p>");

			} //Fin si la misión sigue activa.

			else {
				resultado = "-";
			}

		} //Fin si se utiliza un componente y el componente utilizado se utiliza en el día 1 de la misión.

		//Una misión continúa en ejecución si tiene fases que no se cumplen en el día 1 y si su estado no recoge un fallo total.
		else if ((misionesProgramadas[misionProgramada].fases[propiedad].dia) > 1 && (estado > 0)) {
			misionesProgramadas[misionProgramada].ejecucion = 1;
		}

		//Si no se usa un componente en esta fase (0) o... ¿?
		else {}

		//Si la misión continúa se muestra el resultado parcial, no se modifica la seguridad ni experiencia, no se aplican hitos ni prestigio, sí se limpia la plataforma.
		if (misionesProgramadas[misionProgramada].ejecucion == 1){

		}

		//Si la misión no continúa es que ha acabado: resultado final, seguridad, experiencia, hitos, prestigio, limpieza de plataforma y datos de la misión.
		else {

			resultadosMision(estado, tripulacion, cohete, cargaUsada, carga, misionId, prestigio);

			//Modificar misión programada.
			misionesProgramadas[misionProgramada].activa = 0;
			updateMisionesProgramadas();

		}

	} //Fin bucle fases de la misión (llegados a este punto la misión se ha lanzado y ha concluído (con fallo o acierto, da igual) o se ha lanzado sin fallo y quedan fases para ejecutar que dejan la misión en marcha para los siguientes días.

	return resultadoFases;

}

function resultadosMision(estado, tripulacion, cohete, cargaUsada, carga, misionId, prestigio){

	//EXPERIENCIA DESPUÉS DEL RESULTADO DE LA MISIÓN. - MEJOR PONER AQUÍ TODOS LOS EFECTOS DESPÚES DEL RESTULTADO DE LA MISIÓN, NO SÓLO EXPERIENCIA, TAMBIÉN TRIPULACIÓN, HITOS, ETC. - PENDIENTE.
	if(estado > 0) {

		if(tripulacion != -1) {
			astronautas[tripulacion].estado = 1;
		}

		programas[cohete].seguridad += 5;
		programas[cohete].experiencia += 2;

		if(cargaUsada) { //Si se ha usado la carga en la misión entonces se modifica su seguridad y experiencia.
			programas[carga].seguridad += 5;
			programas[carga].experiencia += 2;
		}

		misiones[misionId].seguridad += 5;
		misiones[misionId].experiencia += 2;

	}

	else {
		programas[cohete].seguridad -= 5;
		programas[cohete].experiencia += 1;

		if(cargaUsada) { //Si se ha usado la carga en la misión entonces se modifica su seguridad y experiencia.
			programas[carga].seguridad -= 5;
			programas[carga].experiencia += 1;
		}

		misiones[misionId].seguridad -= 5;
		misiones[misionId].experiencia += 1;
	}

	document.getElementById("seguridadPrograma" + programas[cohete].id).innerHTML = programas[cohete].seguridad;
	document.getElementById("experienciaPrograma" + programas[cohete].id).innerHTML = programas[cohete].experiencia;

	if(cargaUsada) {
		document.getElementById("seguridadPrograma" + programas[carga].id).innerHTML = programas[carga].seguridad;
		document.getElementById("experienciaPrograma" + programas[carga].id).innerHTML = programas[carga].experiencia;
	}

	document.getElementById("seguridadMision" + misionId).innerHTML = misiones[misionId].seguridad;
	document.getElementById("experienciaMision" + misionId).innerHTML = misiones[misionId].experiencia;

	//FIN EXPERIENCIA DESPUÉS DEL RESULTADO DE LA MISIÓN.

	//PRESTIGIO. - MEJOR PONER ESTO COMO UNA FUNCIÓN QUE SE LLAME DESDE AQUÍ PERO TAMBIÉN CON LOS EVENTOS PROGRAMADOS DE LA URSS, PORQUE SI NO NO SE TIENEN EN CUENTA PARA EL PRESTIGIO - PENDIENTE.
	if(estado > 0) {
		if(hitos[misionId].primero == "-") {
			hitos[misionId].primero = "USA";
			hitos[misionId].fechaPrimero = diaActual + " " + mesActual + " " + anioActual;
			prestigio += hitos[misionId].prestigioPrimero;
		}
		else if((hitos[misionId].segundo == "-") && (hitos[misionId].primero != "USA")) {
			hitos[misionId].segundo = "USA";
			hitos[misionId].fechaSegundo = diaActual + " " + mesActual + " " + anioActual;
			prestigio += hitos[misionId].prestigioSegundo;
		}
		else {
			prestigio += hitos[misionId].prestigioNormal;
		}
	}
	else {
		prestigio += misiones[misionId].prestigioFallo;
	}

	//Actualizar prestigio y astronautas.
	document.getElementById("prestigio").innerHTML = prestigio;
	updateHitos();
	updateAstronautas();

}

//Fin misiones activas.

//FIN FUNCIONES EVENTOS

//----------------------------------------------------------------------------

//LOOP

function interval() {

	//SCRIPT FECHA

	//SUMAR DÍA
	diaActual++;

	//COMPROBAR SI LLEGA A FINAL DE MES, Y CAMBIAR DE MES
	//Primero buscar en el array el mes actual

	for (var i=0; i < fecha.length; i++) {

		if (fecha[i].mes === mesActual) {

			//Si se ha acabado el mes actual.
			if (diaActual > fecha[i].dias) {

				//Cambiar de mes.
				i++;

				//Si se ha acabado el año actual.
				if (i >= fecha.length) {
					mesActual = "enero";
					i = 0;
					anioActual++;
				}
				else {
					mesActual = fecha[i].mes;
				}

				//Volver al día 1
				diaActual = 1;

			}

			textoDiaActual = diaActual;

			if (diaActual < 10) {
				textoDiaActual = "0" + textoDiaActual;
			}

			document.getElementById('anio').innerHTML = anioActual;
			document.getElementById('mes').innerHTML = mesActual;
			document.getElementById('dia').innerHTML = textoDiaActual;

			break;

		}
	}

	//FIN SCRIPT FECHA

	//-------------------------------------------------------------

	//SCRIPT MISIONES EN EJECUCIÓN

	if (misionesProgramadas.length != 0){

		let longitudArrayMisionesProgramadas = misionesProgramadas.length;

		//Se recorre el array de misiones programadas.
		for (let j = 0; j < longitudArrayMisionesProgramadas; j++){

			//Sólo si la misión está en ejecución se recorren sus fases modificando los tiempos de la misión.
			if (misionesProgramadas[j].ejecucion == 1){
				//console.log("Hay una misión en ejecución");

				//Se recorre el array de fases en cada misión programada.
				for (let propiedad in misionesProgramadas[j].fases) {
					misionesProgramadas[j].fases[propiedad].dia -= 1;

					//console.log(misionesProgramadas[j].fases[propiedad].nombre + " " + misionesProgramadas[j].fases[propiedad].dia);

					if (misionesProgramadas[j].fases[propiedad].dia == 1){
						//console.log("PRUEBA");

						continuarMision(j);

					}

				}

			}

		}

	}


	//FIN SCRIPT MISIONES EN EJECUCIÓN

	//-------------------------------------------------------------

	//SCRIPT EVENTOS

	//Comprobar si hay elementos en el array
		//Si los hay, restar una unidad a todos - A TODOS LOS QUE NO ESTÉN EN PAUSA, POR HACER

	if (eventos.length != 0){

	  var arrayEventosLength = eventos.length;

	  for (var j = 0; j < arrayEventosLength; j++){

			if (modoDesarrollo = true) {
				eventos[j].tiempoRestante = 0;
			}

			//Si el evento no ha llegado a cero y no está pausado o finalizado.
			if ((eventos[j].tiempoRestante > 0) && (eventos[j].estado > 0)){
			//if ((eventos[j].tiempoRestante > 0) && (eventos[j].estado == 1)){
				eventos[j].tiempoRestante = eventos[j].tiempoRestante - 1;

				//PROGRESO DEL EVENTO
				//Se recupera el nombre del botón y se cambia su contenido

				var porcentajeEvento, porcentajeEnRGB, porcentajeInversoEnRGB;

				switch (eventos[j].funcion) {

					case "encargarMateriales":

						var porcentajeEventoMateriales = Math.round((100 * (eventos[j].tiempoDesarrollo - eventos[j].tiempoRestante)) / eventos[j].tiempoDesarrollo);
						document.getElementById("botonMateriales").innerHTML = porcentajeEventoMateriales + "%";

						break;

					case "desarrollarPrograma":

						porcentajeEvento = Math.round((100 * (eventos[j].tiempoDesarrollo - eventos[j].tiempoRestante)) / eventos[j].tiempoDesarrollo);
						//porcentajeEnRGB = Math.floor((porcentajeEvento * 256) / 100);
						//porcentajeInversoEnRGB = Math.floor(((100 - porcentajeEvento) * 256) / 100);
						document.getElementById("botonDesarrollarPrograma" + eventos[j].id).innerHTML = porcentajeEvento + "%";

						break;

					case "mejorarPrograma":

						porcentajeEvento = Math.round((100 * (eventos[j].tiempoDesarrollo - eventos[j].tiempoRestante)) / eventos[j].tiempoDesarrollo);
						document.getElementById("botonMejorarPrograma" + eventos[j].id).innerHTML = porcentajeEvento + "%";

						break;

					case "fabricarComponente":

						porcentajeEvento = Math.round((100 * (eventos[j].tiempoDesarrollo - eventos[j].tiempoRestante)) / eventos[j].tiempoDesarrollo);
						document.getElementById("botonFabricarComponente" + eventos[j].id).innerHTML = porcentajeEvento + "%";

						break;

					case "asignarEquipoPrograma":

						porcentajeEvento = Math.round((100 * (eventos[j].tiempoDesarrollo - eventos[j].tiempoRestante)) / eventos[j].tiempoDesarrollo);
						document.getElementById("botonEquipoPrograma" + eventos[j].id).innerHTML = porcentajeEvento + "%";

						break;

					case "desarrollarMision":

						porcentajeEvento = Math.round((100 * (eventos[j].tiempoDesarrollo - eventos[j].tiempoRestante)) / eventos[j].tiempoDesarrollo);
						document.getElementById("botonDesarrollarMision" + eventos[j].id).innerHTML = porcentajeEvento + "%";

						break;

					case "mejorarMision":

						porcentajeEvento = Math.round((100 * (eventos[j].tiempoDesarrollo - eventos[j].tiempoRestante)) / eventos[j].tiempoDesarrollo);
						document.getElementById("botonMejorarMision" + eventos[j].id).innerHTML = porcentajeEvento + "%";

						break;

					case "programarMision":

						porcentajeEvento = Math.round((100 * (eventos[j].tiempoDesarrollo - eventos[j].tiempoRestante)) / eventos[j].tiempoDesarrollo);
						document.getElementById("botonProgramarMision" + eventos[j].id).innerHTML = porcentajeEvento + "%";

						break;

					case "asignarEquipoMision":

						porcentajeEvento = Math.round((100 * (eventos[j].tiempoDesarrollo - eventos[j].tiempoRestante)) / eventos[j].tiempoDesarrollo);
						document.getElementById("botonEquipoMision" + eventos[j].id).innerHTML = porcentajeEvento + "%";

						break;

					case "ensamblarMision":

						porcentajeEvento = Math.round((100 * (eventos[j].tiempoDesarrollo - eventos[j].tiempoRestante)) / eventos[j].tiempoDesarrollo);
						document.getElementById("botonEnsamblarComponentes" + eventos[j].id).innerHTML = porcentajeEvento + "%";

						break;

					case "cancelarMision":

						porcentajeEvento = Math.round((100 * (eventos[j].tiempoDesarrollo - eventos[j].tiempoRestante)) / eventos[j].tiempoDesarrollo);
						document.getElementById("botonCancelarMision" + eventos[j].id).innerHTML = porcentajeEvento + "%";

						break;

					case "programarLanzamiento":

						document.getElementById("botonProgramarLanzamiento" + eventos[j].id).innerHTML = eventos[j].tiempoRestante;

						break;

				}
			}

			//Si el evento llega a cero lanza función
			//else if ((eventos[j].tiempoRestante == 0) || (modoDesarrollo = true)) {

			else if ((eventos[j].tiempoRestante == 0) && (eventos[j].estado > 0)) {

				eventos[j].estado = 0;

				switch (eventos[j].funcion) {

					case "encargarMateriales":
						encargarMateriales();
						break;

					case "desarrollarPrograma":
						desarrollarPrograma(eventos[j].id);
						break;

					case "mejorarPrograma":
						mejorarPrograma(eventos[j].id);
						break;

					case "fabricarComponente":
						fabricarComponente(eventos[j].id);
						break;

					case "asignarEquipoPrograma":
						asignarEquipoPrograma(eventos[j].id);
						break;

					case "desarrollarMision":
						desarrollarMision(eventos[j].id);
						break;

					case "programarMision":
						programarMision(eventos[j].id,eventos[j].plataforma);
						break;

					case "mejorarMision":
						mejorarMision(eventos[j].id);
						break;

					case "asignarEquipoMision":
						asignarEquipoMision(eventos[j].id);
						break;

					case "ensamblarMision":
						ensamblarMision(eventos[j].id, eventos[j].plataforma);
						break;

					case "programarLanzamiento":
						programarLanzamiento(eventos[j].id,eventos[j].plataforma);
						break;

					case "cancelarMision":
						cancelarMision(eventos[j].id);
						break;

					default:

						if (eventos[j].ventanaModal == 1) {
							abrirVentanaModal(eventos[j].texto);
						}

						break;

				} //Fin switch función a lanzar cuando el evento acaba.
			} //Fin else cuando el evento acaba.
		} //Fin for array eventos.
	} //Fin if hay eventos en el array.

	//FIN SCRIPT EVENTOS

} //Fin interval.

//FIN LOOP.
