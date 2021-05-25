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
});



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