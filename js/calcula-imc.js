    //     alert("Olá mundo");
		// console.log("Oi Mundo");
		// console.log(document);
		// console.log(document.querySelector("h1"));
    var titulo = document.querySelector(".titulo");
    var botaoAdicionar = document.querySelector("#adicionar-paciente");
    console.log(botaoAdicionar);
		// console.log(titulo.textContent);
		// titulo.textContent = "Aparecida Nutricionista";

    var pacientes = document.querySelectorAll(".paciente");
    var paciente = pacientes[i];

    for (var i=0; i<pacientes.length;i++){
      var paciente = pacientes[i];

      var tdPeso = paciente.querySelector(".info-peso");
      var tdAltura = paciente.querySelector(".info-altura");

      var tdImc = paciente.querySelector(".info-imc");

      var peso = tdPeso.textContent;
      var altura = tdAltura.textContent;

      var alturaEhValida = true;
      var pesoEhValido = true;

      if(peso <= 0 || peso > 1000){
      console.log("Peso inválido");
      tdImc.textContent = "Peso inválido!";
      pesoEhValido = false;
      paciente.classList.add("paciente-invalido");
      }

      if(altura <= 0 || altura >= 3){
      console.log("Altura inválida");
      tdImc.textContent = "Altura inválida!";
      alturaEhValida = false;
      paciente.classList.add("paciente-invalido");
      }

      if(pesoEhValido && alturaEhValida){
      var imc = peso / ( altura * altura);
      tdImc.textContent = imc.toFixed(2);
      }

      titulo.addEventListener("click", function(){
        console.log("Olhá só, posso chamar uma função anônima.")
      });

      

      // function mostraMensagem(){
      //   console.log("Olá eu fui clicado!");
      // }

    }
