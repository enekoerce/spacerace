﻿//VARIABLES PARTIDA

//Variables configuración

var timer = "";
var velocidad = 500;
var modoDesarrollo = true;

//Variables interfaz

var juegoPausado = 1; //1: loop parado | 0: loop ejecutándose
var menuAbierto = 0;
var cartelMensajes = "";

//Variables juego

var fondos = 40;
var materiales = 40;
var equipos = 2;
var prestigio = 50;

//---------------------------------------

//ARRAY PROGRAMAS
var programas = [
	{
		nombre: "programa0",
		nombreJuego: "Atlas",
		tipo: 1,
		nivel: 1,
		peso: 0,
		capacidad: 400,
		desarrollado: 0,
		desbloqueado: true,
		costeDesarrollo: 10,
		tiempoDesarrollo: 10,
		requisitoPrograma: "-",
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		costeFondosFabricacion: 5,
		costeMaterialesFabricacion: 5,
		tiempoFabricacion: 10,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		unidades: 1
	},
	{
		nombre: "programa1",
		nombreJuego: "Juno",
		tipo: 1,
		nivel: 1,
		peso: 0,
		capacidad: 600,
		desarrollado: 0,
		desbloqueado: false,
		costeDesarrollo: 10,
		tiempoDesarrollo: 10,
		requisitoPrograma: 0,
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		costeFondosFabricacion: 5,
		costeMaterialesFabricacion: 5,
		tiempoFabricacion: 10,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		unidades: 1
	},
	{
		nombre: "programa2",
		nombreJuego: "Explorer",
		tipo: 2,
		nivel: 1,
		peso: 300,
		capacidad: 0,
		desarrollado: 0,
		desbloqueado: true,
		costeDesarrollo: 10,
		tiempoDesarrollo: 10,
		requisitoPrograma: "-",
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		costeFondosFabricacion: 5,
		costeMaterialesFabricacion: 5,
		tiempoFabricacion: 10,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		unidades: 1
	},
	{
		nombre: "programa3",
		nombreJuego: "Mercury",
		tipo: 3,
		nivel: 1,
		peso: 500,
		capacidad: 0,
		desarrollado: 0,
		desbloqueado: true,
		costeDesarrollo: 10,
		tiempoDesarrollo: 10,
		requisitoPrograma: "-",
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		costeFondosFabricacion: 5,
		costeMaterialesFabricacion: 5,
		tiempoFabricacion: 10,
		equiposNecesarios: 2,
		equiposTrabajo: 1,
		unidades: 1
	},
	{
		nombre: "programa4",
		nombreJuego: "Gemini",
		tipo: 3,
		nivel: 2,
		peso: 1000,
		capacidad: 0,
		desarrollado: 0,
		desbloqueado: false,
		costeDesarrollo: 10,
		tiempoDesarrollo: 10,
		requisitoPrograma: 3,
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		costeFondosFabricacion: 5,
		costeMaterialesFabricacion: 5,
		tiempoFabricacion: 10,
		equiposNecesarios: 3,
		equiposTrabajo: 1,
		unidades: 1
	}
];

//---------------------------------------

//ARRAY MISIONES
var misiones = [
	{
		nombre: "mision0",
		nombreJuego: "Satélite orbital",
		nivel: 1,
		tipoCarga: 2,
		experiencia: 0,
		desarrollado: 0,
		desbloqueado: true,
		costeDesarrollo: 10,
		tiempoDesarrollo: 5,
		requisitoMision: "-",
		seguridad: 10,
		seguridadMaxima: 90,
		costeMejora: 10,
		tiempoMejora: 10,
		prestigioCancelar: 3,
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		tiempoCuentaAtras: 1,
		fases: [
			{nombre: "Encendido", componente: 1},
			{nombre: "Despegue", componente: 1},
			{nombre: "Espacio", componente: 1},
			{nombre: "Órbita", componente: 1},
			{nombre: "Despliegue carga",	componente: 1},
			{nombre: "Encendido carga", componente: 2}
		],
		vecesProgramada: 0
	},
	{
		nombre: "mision1",
		nombreJuego: "Vuelo suborbital NT",
		nivel: 1,
		tipoCarga: 3,
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
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		tiempoCuentaAtras: 10,
		vecesProgramada: 0
	},
	{
		nombre: "mision2",
		nombreJuego: "Vuelo suborbital T",
		nivel: 1,
		tipoCarga: 3,
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
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		tiempoCuentaAtras: 10,
		vecesProgramada: 0
	},
	{
		nombre: "mision3",
		nombreJuego: "Vuelo orbital NT",
		nivel: 1,
		tipoCarga: 3,
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
		equiposNecesarios: 1,
		equiposTrabajo: 1,
		tiempoCuentaAtras: 10,
		vecesProgramada: 0
	}
];

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
		nombreJuego: "Modo desarrollo",
		mision: 1,
		misionProgramada: -1,
		libre: false,
		estado: 0
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

//ARRAYS VACÍOS PARA RELLENAR DURANTE LA PARTIDA
var arrayCartelMensajes = [];
var hitos = [];
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
				tripulacion: -1 //Tiene que haber un array de tripulaciones en el que se crean equipos de astronautas, aunque sólo sea uno. En esta variable se guarda el equipo seleccionado para esta misión.
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

	//Montar misiones programadas.
	updateMisionesProgramadas();

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

		//Cancelar misiones.
		var arrayBotonesCancelarMisiones = document.getElementsByClassName('botonesCancelarMisiones');
		for(i = 0; i < arrayBotonesCancelarMisiones.length; i++){
			arrayBotonesCancelarMisiones[i].disabled = true;
		}

	//Fin deshabilitar botones.

	//Datos partida.
	document.getElementById('fondos').innerHTML = fondos;
	document.getElementById('materiales').innerHTML = materiales;

	//INICIAR EL LOOP DEL JUEGO.
	juegoPausado = 0;
	pausar(false);

}

function montarProgramas(){

	var montarHTMLProgramas = "<h3>Programas</h3>"
	var longitudArrayProgramas = programas.length;
	var mostrarPrograma = "";

	for(var i=0; i<longitudArrayProgramas; i++){

		montarHTMLProgramas += '<div id="programa' + i + '">';

		montarHTMLProgramas += '<h4>Programa ' + programas[i].nombreJuego + '</h4>';
		montarHTMLProgramas += '<h5>Sin desarrollar</h5>';

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

		montarHTMLProgramas += '<div class="datosProgramas">';
		montarHTMLProgramas += '<p>· Seguridad: <span id="seguridadPrograma' + i + '">0</span>%</p>';
		montarHTMLProgramas += '<p>· Peso: ' + programas[i].peso + '</p>';
		montarHTMLProgramas += '<p>· Capacidad: ' + programas[i].capacidad + '</p>';
		montarHTMLProgramas += '<p>· Desarrollo:</p>';
		montarHTMLProgramas += '<p>Coste: <span id="costeDesarrolloPrograma' + i + '">' + programas[i].costeDesarrollo + '</span> | Tiempo: <span id="tiempoDesarrolloPrograma' + i + '">' + programas[i].tiempoDesarrollo + '</span></p>';
		montarHTMLProgramas += '<p>· Desbloquea: ';

		var textoDesbloquea = false;

		for(var j = 0; j < programas.length; j++){
			if(programas[j].requisitoPrograma == i){
				if(!textoDesbloquea) {
					montarHTMLProgramas += 'Programa ' + programas[j].nombreJuego;
					textoDesbloquea = true;
				}
				else {
					montarHTMLProgramas += ', Programa ' + programas[j].nombreJuego;
				}
			}
		}

		if (textoDesbloquea == false){
			montarHTMLProgramas += '-';
		}

		montarHTMLProgramas += '</p>';
		montarHTMLProgramas += '<p>· Coste mejora: <span id="costeMejoraPrograma' + i + '">' + programas[i].costeMejora + '</span></p>';
		montarHTMLProgramas += '<p>· Fabricación:</p>';
		montarHTMLProgramas += '<p>Cos: <span id="costeFabricacionComponente' + i + '">' + programas[i].costeFondosFabricacion + '</span> | Mat: <span id="materialesFabricacionComponente' + i + '">' + programas[i].costeMaterialesFabricacion + '</span> | Tie: <span id="tiempoFabricacionComponente' + i + '">' + programas[i].tiempoFabricacion + '</span></p>';
		montarHTMLProgramas += '<p>· Unidades: <span id="unidadesPrograma' + i + '">' + programas[i].unidades + '</span></p>';
		montarHTMLProgramas += '<p>· Equipos trabajo: <span id="equiposPrograma' + i + '">' + programas[i].equiposTrabajo + '</span> / <span id="equiposNecesarios' + i + '">' + programas[i].equiposNecesarios + '</span></p>';
		montarHTMLProgramas += '</div>';

		montarHTMLProgramas += '</div>';

	}

	document.getElementById("programas").innerHTML = montarHTMLProgramas;

	//Asignar imágenes y ocultar programas bloqueados (una vez creados los nodos HTML).
	for(var i=0; i<longitudArrayProgramas; i++){
			document.getElementById("programa" + i).style.backgroundImage = "url('imagenes/" + programas[i].nombreJuego + ".jpg')";
			document.getElementById("programa" + i).style.backgroundSize = "cover";

			mostrarPrograma = (programas[i].desbloqueado) ? "block" : "none";
			document.getElementById("programa" + i).style.display = mostrarPrograma;

	}

}

function montarMisiones(){

	var montarHTMLMisiones = "<h3>Misiones</h3>"
	var longitudArrayMisiones = misiones.length;
	var mostrarMision = "";

	for(var i=0; i<longitudArrayMisiones; i++){

		montarHTMLMisiones += '<div id="mision' + i + '">';

		montarHTMLMisiones += '<h4>' + misiones[i].nombreJuego + '</h4>';
		montarHTMLMisiones += '<h5>Sin desarrollar</h5>';

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

		montarHTMLMisiones += '<div class="datosMisiones">';
		montarHTMLMisiones += '<p>· Seguridad: <span id="seguridadMision' + i + '">0</span>%</p>';
		montarHTMLMisiones += '<p>· Desarrollo:</p>';
		montarHTMLMisiones += '<p>Coste: <span id="costeDesarrolloMision' + i + '">' + misiones[i].costeDesarrollo + '</span> | Tiempo: <span id="tiempoDesarrolloMision' + i + '">' + misiones[i].tiempoDesarrollo + '</span></p>';
		montarHTMLMisiones += '<p>· Desbloquea: ';

		var textoDesbloquea = false;

		for(var j = 0; j < misiones.length; j++){
			if(misiones[j].requisitoMision == i){
				if(!textoDesbloquea) {
					montarHTMLMisiones += misiones[j].nombreJuego;
					textoDesbloquea = true;
				}
				else {
					montarHTMLMisiones += ', ' + misiones[j].nombreJuego;
				}
			}
		}

		if (textoDesbloquea == false){
			montarHTMLMisiones += '-';
		}

		montarHTMLMisiones += '</p>';
		montarHTMLMisiones += '<p>· Coste mejora: <span id="costeMejoraMision' + i + '">' + misiones[i].costeMejora + '</span></p>';
		montarHTMLMisiones += '<p>· Equipos trabajo: <span id="equiposMision' + i + '">' + misiones[i].equiposTrabajo + '</span> / <span id="equiposNecesarios' + i + '">' + misiones[i].equiposNecesarios + '</span></p>';
		montarHTMLMisiones += '</div>';

		montarHTMLMisiones += '</div>';

	}

	document.getElementById("misiones").innerHTML = montarHTMLMisiones;

	//Asignar imágenes y ocultar misiones bloqueados (una vez creados los nodos HTML).
	for(var i=0; i<longitudArrayMisiones; i++){
			//document.getElementById("mision" + i).style.backgroundImage = "url('imagenes/" + misiones[i].nombreJuego + ".jpg')";
			//document.getElementById("mision" + i).style.backgroundSize = "cover";

			mostrarMision = (misiones[i].desbloqueado) ? "block" : "none";
			document.getElementById("mision" + i).style.display = mostrarMision;

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

			montarHTMLMisionesProgramadas += '<div id="misionProgramada' + i + '">';

			montarHTMLMisionesProgramadas += '<div class="titulosMisionesProgramadas">';
			montarHTMLMisionesProgramadas += '<h4>' + misionesProgramadas[i].fechaPrograma + " - "+ misionesProgramadas[i].nombre + '</h4>';
			montarHTMLMisionesProgramadas += '</div>';

			montarHTMLMisionesProgramadas += '</div>';

		}

		document.getElementById("misionesProgramadas").innerHTML = montarHTMLMisionesProgramadas;

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
							tripulacion: -1 //Tiene que haber un array de tripulaciones en el que se crean equipos de astronautas, aunque sólo sea uno. En esta variable se guarda el equipo seleccionado para esta misión.
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

function elegirComponentesMision(element){

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
	document.getElementById("ventanaLanzamiento").style.display = "none"; //Esto no debería hacer falta porque en principio esta ventana viene oculta por estilos, pero hay algún fallo pendiente que hace que la ventana de lanzamiento se muestre a la vez que la pantalla de ensamblaje. - PENDIENTE

	//Contenidos ventana ensamblaje.

	//Limpiar valores previos.
	document.getElementById('selectCohete').innerHTML = "<option value='-'>-</option>";
	document.getElementById('selectCarga').innerHTML = "<option value='-'>-</option>";
	document.getElementById("botonConfirmarEnsamblaje").disabled = true;

	//Datos misión.
	var tipoCarga = misiones[misionId].tipoCarga;

	//Añadir opciones a los select.

	//Buscar cohete: componente de tipo 1 con capacidad mayor que el peso de la carga
	for (var i=0; i < programas.length; i++){
		if (programas[i].tipo == 1){
			//if ((componentes[i].capacidad > pesoCarga) && (componentes[i].unidades > 0)){
			if (programas[i].unidades > 0){
				document.getElementById('selectCohete').insertAdjacentHTML('beforeend', "<option value='" + i + "'>" + programas[i].nombreJuego + "</option>")
			}
		}
	}

	document.getElementById('selectCohete').addEventListener('change', function(event){
		mostrarDatosComponentes(event.target);
	});

	//Buscar carga: componente de tipo X que cumpla con los requisitos que pueda haber
	for (var j=0; j < programas.length; j++){
		if (programas[j].tipo == tipoCarga){
			if (programas[j].unidades > 0){
				document.getElementById('selectCarga').insertAdjacentHTML('beforeend', "<option value='" + j + "'>" + programas[j].nombreJuego + "</option>")
			}
		}
	}

	document.getElementById('selectCarga').addEventListener('change', function(event){
		mostrarDatosComponentes(event.target);
	});

	//Fin contenidos ventana ensamblaje.

	//Añadir evento para el botón de confirmar ensamblaje.
	document.getElementById("botonConfirmarEnsamblaje").onclick = function(){ //IMPORTANTE: onclick en vez de un event listener (lanzaba varias veces el mismo evento).

		//Restar componentes del stock.
		var selectCohete = document.getElementById("selectCohete");
		var coheteSeleccionado = selectCohete.options[selectCohete.selectedIndex].value;
		var selectCarga = document.getElementById("selectCarga");
		var cargaSeleccionada = selectCarga.options[selectCarga.selectedIndex].value;

		/*
		console.log("Cohete: ");
		console.log(coheteSeleccionado);
		console.log("Carga: ");
		console.log(cargaSeleccionada);
		console.log("Cohetes restantes: ");
		console.log(programas[coheteSeleccionado].unidades);
		console.log("Cargas restantes: ");
		console.log(programas[cargaSeleccionada].unidades);
		*/

		/*
		for(var i=0; i < programas.length; i++){
			if (coheteSeleccionado == i){
				programas[i].unidades = programas[i].unidades -1;
				document.getElementById('unidadesPrograma' + i).innerHTML = programas[i].unidades;
			}
		}

		for(var j=0; j < programas.length; j++){
			if (cargaSeleccionada == j){
				programas[j].unidades = programas[j].unidades -1;
				document.getElementById('unidadesPrograma' + j).innerHTML = programas[j].unidades;
			}
		}

		*/

		//Todo lo anterior se puede hacer con lo siguiente.
		programas[coheteSeleccionado].unidades -= 1;
		document.getElementById('unidadesPrograma' + coheteSeleccionado).innerHTML = programas[coheteSeleccionado].unidades;
		misionesProgramadas[misionProgramada].cohete = coheteSeleccionado;

		programas[cargaSeleccionada].unidades -= 1;
		document.getElementById('unidadesPrograma' + cargaSeleccionada).innerHTML = programas[cargaSeleccionada].unidades;
		misionesProgramadas[misionProgramada].carga = cargaSeleccionada;

		//console.log("Cohetes restantes: ");
		//console.log(programas[coheteSeleccionado].unidades);
		//console.log("Cargas restantes: ");
		//console.log(programas[cargaSeleccionada].unidades);

		cerrarVentanaModal();

		//Añadir seguridad definitiva de los componentes (aunque siga cambiando su seguridad en la partida, estos ya están ensamblados; la seguridad de la misión, sin embargo, sí puede seguir incrementándose).


		eventoPlataforma(element, "ensamblarMision");
	};
}

function mostrarDatosComponentes(){

	//Vaciar contenidos anteriores cajas datos.
	document.getElementById("datosCoheteSeleccionado").innerHTML = "";
	document.getElementById("datosCargaSeleccionada").innerHTML = "";
	document.getElementById("componentesSeleccionados").innerHTML = "";

	var selectCohete = document.getElementById("selectCohete");
	var coheteSeleccionado = selectCohete.options[selectCohete.selectedIndex];

	var selectCarga = document.getElementById("selectCarga");
	var cargaSeleccionada = selectCarga.options[selectCarga.selectedIndex];

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

	//Activar botón ensamblar.

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
			document.getElementById("botonProgramarLanzamiento" + misionId).disabled = true;

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
			document.getElementById("programa" + i).style = "block";
			//document.getElementById("programa" + i).style.backgroundImage = "url('imagenes/" + programas[i].nombreJuego + ".jpg')";
			//document.getElementById("programa" + i).style.backgroundSize = "cover";
		}
	}
}

function mejorarPrograma(id) {

	var programaId = id;
	let mejora = Math.floor(Math.random() * 15);

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
	var mejora = Math.floor(Math.random() * 15);

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
	document.getElementById("botonEnsamblarComponentes" + plataformaId).disabled = false;
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
	document.getElementById("botonProgramarLanzamiento" + plataformaId).disabled = false;
	document.getElementById("botonCancelarMision" + plataformaId).disabled = false;

}

function programarLanzamiento(id) {

	var plataformaId = id;

	document.getElementById("plataforma" + plataformaId).getElementsByTagName("h5")[0].innerHTML = "¡LANZAMIENTO!";
	document.getElementById("botonCancelarMision" + plataformaId).innerHTML = '<i class="material-icons">flight_takeoff</i>';
	document.getElementById("plataforma" + plataformaId).style.backgroundColor = "red";
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
	//console.log(misionProgramada);

	//Ventana modal con el resultado del lanzamiento.

	//Preparar información para mostrar en la ventana.
	let textoVentanaModal = "<h4>Resultado lanzamiento</h4>";
	textoVentanaModal += "<h5>Misión " + misionesProgramadas[misionProgramada].nombre + " | Plataforma: " + plataformas[plataformaId].nombreJuego + "</h5>";

		let cohete = misionesProgramadas[misionProgramada].cohete;
		let carga = misionesProgramadas[misionProgramada].carga;

	textoVentanaModal += "<p>Cohete: " + programas[cohete].nombreJuego + "</p>";
	textoVentanaModal += "<p>Carga: " + programas[carga].nombreJuego + "</p>";



	//Abrir ventana modal parando el timer.
	abrirVentanaModal(textoVentanaModal);

	//Mostrar/ocultar elementos.
	document.getElementById("ventanaLanzamiento").style.display = "block";

	//Botón lanzamiento (al pinchar lanza la función de ejecución de la misión).
	document.getElementById("botonConfirmarLanzamiento").style.display = "block";

	botonConfirmarLanzamiento.addEventListener("click", function(){

		document.getElementById("fasesMision").style.display = "block";
		document.getElementById("fasesMision").innerHTML = "<h5>FASES</h5>";

		let estado = 1;
		let resultadoFinal;
		let penalizacion = 0;

		//Por cada fase de la misión.
		for (let propiedad in misiones[misionId].fases) {

			//Éxito misión.
			//Según el tipo de componente para esta fase se buscan los datos correspondientes. - PENDIENTE
			let seguridadComponente = 25;
			let experienciaComponente = 25;
			let experienciaFase = 25;
			//Todo lo anterior hay que buscarlo en los correspondientes arrays. - PENDIENTE

			let resultado = "";

			//Si la misión sigue activa.
			if (estado > 0) {

				let sumaSeguridades = (seguridadComponente + experienciaComponente + experienciaFase) - penalizacion;
				let resultadoComparacion = sumaSeguridades - Math.floor((Math.random() * 100) + 1);

				//Éxito.
				if (resultadoComparacion > 0) {
					resultado = "éxito (" + resultadoComparacion + ") (penalizacion: " + penalizacion + ")";
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
						resultado = "fallo parcial (" + resultadoComparacion + ") (penalizacion: " + penalizacion + ")";
						resultadoFinal = "ÉXITO PARCIAL";
						penalizacion += 10;
						estado = 2;
					}
					//Fallo total.
					else {
						resultado = "fallo (" + resultadoComparacion + ") (penalizacion: " + penalizacion + ")";
						resultadoFinal = "FALLO TOTAL";
						estado = 0;
					}
				}

			} //Fin si la misión sigue activa.

			//Si la misión ha fallado.
			else {
				resultado = "-";
				//resultadoFinal = "FALLO TOTAL";
			}

			document.getElementById("fasesMision").innerHTML += "<p>" + misiones[misionId].fases[propiedad].nombre + ": " + resultado + "</p>";

		}

		document.getElementById("fasesMision").innerHTML += "<p>" + resultadoFinal + "</p>";

		//EXPERIENCIA. - PENDIENTE
		//PRESTIGIO. - PENDIENTE
		//Modificar misión en array de misiones programadas. - PENDIENTE

		//Liberar plataforma.
		plataformas[plataformaId].libre = true;
		plataformas[plataformaId].estado = 0;
		plataformas[plataformaId].mision = -1;

	}) //Fin botón confirmar lanzamiento.

	//Botón cancelar lanzamiento (al pinchar lanza la función de cancelación de la misión).
	document.getElementById("botonCancelarLanzamiento").style.display = "block";

	botonCancelarLanzamiento.addEventListener("click", function(){

	})

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
