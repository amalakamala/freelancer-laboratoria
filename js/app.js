/*
 * Archivo principal de JS
 */

 (function imagenesModel(){
 	var elemetos = Array.from(document.getElementsByClassName("caja"));
 	var modal = document.getElementById("img-proyecto-modal");

 	var cuerpoModal, close, icono, hacheUno;


	elemetos.forEach(function(c){
 		c.addEventListener("click",function(){
 			modal.innerHTML="";
 			cuerpoModal = document.createElement("div");
 			cuerpoModal.classList.add("modal-completo");

 			cuerpoModal.innerHTML = c.innerHTML;

 			modal.appendChild(cuerpoModal);
 			modal.classList.remove("hide");

 			hacheUno = document.createElement("div");
 			hacheUnoT = document.createTextNode("PROJECT TITLE");
 			hacheUno.classList.add("h-uno-modal")
			hacheUno.appendChild(hacheUnoT);
			modal.appendChild(hacheUno);

			estrella = document.createElement("hr");
 			estrella.classList.add("star-primary");
 			estrella.classList.add("estrella");
			modal.appendChild(estrella);

			texto = document.createElement("p");
			texto.classList.add("parrafo-modal");
			textoT = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo excepturi, maxime illo natus id sit molestiae inventore cum, ipsum saepe iste. Illo impedit totam repellat natus, sint ducimus ea maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo excepturi, maxime illo natus id sit molestiae inventore cum, ipsum saepe iste. Illo impedit totam repellat natus, sint ducimus ea maxime.");
			texto.appendChild(textoT);
			modal.appendChild(texto);	

			botonN = document.createElement("a");
			botonNT = document.createTextNode("submit");
			botonN.setAttribute("href","#");
			botonN.setAttribute("type","submit");
			botonN.appendChild(botonNT);
			botonN.classList.add("el-boton-modal");
			modal.appendChild(botonN);

 			close = document.createElement("div"); 
 			close.classList.add("close-img");
 			icono = document.createElement("i");
 			icono.setAttribute("class","fa fa-times-circle");
 			icono.setAttribute("aria-hidden","true");

 			close.appendChild(icono);
 			modal.appendChild(close);
			


 			close.addEventListener("click", function(){
 				modal.classList.add("hide");
 			});

 		});
		
 	});
 })();



 (function validar(){
 	var nombre = document.getElementById("name").value;
 	var email = document.getElementById("email").value;
 	var phone = document.getElementById("phone").value;
 	var message = document.getElementById("message").value;

 	var boton = document.getElementsByClassName("boton")[0];

 	boton.addEventListener("click", function(e){
 		e.preventDefault();
 		if(nombre == ""){
 			document.getElementById("name").value = "· Ingrese su Nombre";
 		}	
 		if(email ==""){
			document.getElementById("email").value = "· Ingrese su Email";
 		}
 		if(phone ==""){
			document.getElementById("phone").value = "· Ingrese su Teléfono";
 		}
 		if(message == ""){
			document.getElementById("message").value = "· Ingrese su Mensaje";
 		}else{
 			document.getElementById("name").value ="";
 			document.getElementById("email").value ="";
 			document.getElementById("phone").value ="";
 			document.getElementById("message").value ="";	
 		}		

 	})

 })()


