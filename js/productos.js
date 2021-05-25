

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

