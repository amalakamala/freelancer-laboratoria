/*
 * Archivo principal de JS
 */

 (function imagenesModel(){
 	var elemetos = Array.from(document.getElementsByClassName("caja"));
 	var modal = document.getElementById("img-proyecto-modal");

 	var cuerpoModal, close, icono;


 	elemetos.forEach(function(c){
 		c.addEventListener("click",function(){
 			modal.innerHTML="";
 			cuerpoModal = document.createElement("div");
 			cuerpoModal.classList.add("modal-completo"); 			

 			modal.appendChild(cuerpoModal);
 			modal.classList.remove("hide");			
			
 			close = document.createElement("div"); 
 			close.classList.add("close");
 			icono = document.createTextNode("X");
 			close.appendChild(icono);

 			modalDentro = document.createElement("div");
 			modalDentro.classList.add("modal-dentro");

 			hacheUno  = document.createElement("h1");
 			hacheUnoT = document.createTextNode("PROJECT TITLE");
 			hacheUno.appendChild("hacheUnoT");

 			linea = document.createElement("hr");
 			linea.classList.add("star-primary");

 			modalDentro.appendChild(hacheUno);
 			modalDentro.appendChild(linea);

 			modalDentro.innerHTML = c.innerHTML;

 			modal.appendChild(close);
 			modal.appendChild(modalDentro);


 			close.addEventListener("click", function(){
 				modal.classList.add("hide");
 			});

 		});
		
 	});
 })();