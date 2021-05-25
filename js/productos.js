
/*

Opciones del carrusel

Puedes configurar las siguientes opciones en carrusel de Bootstrap según tus necesidades.

interval (número) – Define la cantidad de tiempo entre cada uno de los elementos del slide. Puedes ponerlo a false para que el slider no se reproduzca automáticamente. El tiempo por defecto es de 5000 milisegundos.
pause (cadena|null) – Pausa el ciclo cuando el ratón se pose encima, y lo reanuda cuando el ratón abandona el slide. Puedes definir este valor a false para impedir este comportamiento. El valor por defecto de esta opción es hover.
wrap (booleano) – Especifica si el carrusel debe ciclar continuamente o deternerse en el último elemento. El valor por defecto es true.
keyboard (booleano) – Especifica si el carrusel debe reaccionar a los eventos del teclado. El valor por defecto es true.

El siguiente ejemplo muestra cómo definir las opciones del carrusel.*/
/*

$('.carousel').carousel({
     interval: 8000,
     pause:true,
     wrap:false
});
*/

/* desplegables productos 

*/

//Tendria que armarlo en una funcion 
/*
function mostrar(propio ,otro , parte){
	propio.hide();
	otro.show();
	parte.show();
}


/*$("#butPescadoFrescoOpen").click(function(){
	mostrar($("#butPescadoFrescoOpen"),$("butPescadoFrescoClose"),$("#pescFrequi"));
});*/



$(document).ready(function(){


// Call carousel manually
$('#myCarouselCustom').carousel();

// Go to the previous item
$(".left").click(function(){
    $("#myCarouselCustom").carousel("prev");
});
// Go to the previous item
$(".right").click(function(){
    $("#myCarouselCustom").carousel("next");
});






//Pescado Fresco
$("#butPescadoFrescoOpen").click(function(){
	 $("#butPescadoFrescoOpen:visible").hide();
	 $("#butPescadoFrescoClose:hidden").show();
	 $("#pescFrequi").show();
});

$("#butPescadoFrescoClose").click(function(){
	$("#butPescadoFrescoOpen:hidden").show();
	$("#butPescadoFrescoClose:visible").hide();
	$("#pescFrequi").hide();

});

//Pescado Congelado
$("#butPescadoCongeladoOpen").click(function(){
	 $("#butPescadoCongeladoOpen").hide();
	 $("#butPescadoCongeladoClose").show();
	 $("#pescCongelado").show();
});

$("#butPescadoCongeladoClose").click(function(){
	$("#butPescadoCongeladoOpen").show();
	$("#butPescadoCongeladoClose").hide();
	$("#pescCongelado").hide();
});

//Pollo congelado 
$("#butPolloCongeladoOpen").click(function(){
	 $("#butPolloCongeladoOpen").hide();
	 $("#butPolloCongeladoClose").show();
	 $("#polloCongelado").show();
});

$("#butPolloCongeladoClose").click(function(){
	$("#butPolloCongeladoOpen").show();
	$("#butPolloCongeladoClose").hide();
	$("#polloCongelado").hide();
});

//Mariscos 
$("#butMariscosOpen").click(function(){
	 $("#butMariscosOpen").hide();
	 $("#butMariscosClose").show();
	 $("#mariscos").show();
});

$("#butMariscosClose").click(function(){
	$("#butMariscosOpen").show();
	$("#butMariscosClose").hide();
	$("#mariscos").hide();
});

//Especiales


$("#butEspecialesOpen").click(function(){
	 $("#butEspecialesOpen").hide();
	 $("#butEspecialesClose").show();
	 $("#especiales").show();
});

$("#butEspecialesClose").click(function(){
	$("#butEspecialesOpen").show();
	$("#butEspecialesClose").hide();
	$("#especiales").hide();
});

//Picadas Congeladas 



$("#butPicaCongeladasOpen").click(function(){
	 $("#butPicaCongeladasOpen").hide();
	 $("#butPicaCongeladasClose").show();
	 $("#picaCongeladas").show();
});

$("#butPicaCongeladasClose").click(function(){
	$("#butPicaCongeladasOpen").show();
	$("#butPicaCongeladasClose").hide();
	$("#picaCongeladas").hide();
});

//Union Ganadera 


$("#butUnGanOpen").click(function(){
	 $("#butUnGanOpen").hide();
	 $("#butUnGanClose").show();
	 $("#unGan").show();
});

$("#butUnGanClose").click(function(){
	$("#butUnGanOpen").show();
	$("#butUnGanClose").hide();
	$("#unGan").hide();
});

//Salsas 

$("#butSalAdhOpen").click(function(){
	 $("#butSalAdhOpen").hide();
	 $("#butSalAdhClose").show();
	 $("#salAdh").show();
});

$("#butSalAdhClose").click(function(){
	$("#butSalAdhOpen").show();
	$("#butSalAdhClose").hide();
	$("#salAdh").hide();
});

//McCain

  $("#butMcCainOpen").click(function(){
	 $("#butMcCainOpen").hide();
	 $("#butMcCainClose").show();
	 $("#mcCain").show();
});

$("#butMcCainClose").click(function(){
	$("#butMcCainOpen").show();
	$("#butMcCainClose").hide();
	$("#mcCain").hide();
});


//Prinicipio 

$("#butPrincipio").click(function(){
	document.documentElement.scrollTop = 0;
});


});