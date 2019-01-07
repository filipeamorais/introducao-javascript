        alert("Olá mundo");
		console.log("Oi Mundo");
		console.log(document);
		console.log(document.querySelector("h1"));
		var titulo = document.querySelector(".titulo");
		console.log(titulo.textContent);
		titulo.textContent = "Aparecida Nutricionista";

    var pacientes = document.querySelectorAll(".paciente");

    for (var i=0; i<pacientes.lenght;i++){
      var paciente = pacientes[i];
      var tdPeso = paciente.querySelector(".info-peso");
      var tdAltura = paciente.querySelector(".info-altura");

      var peso = tdPeso.textContent;
      var altura = tdAltura.textContent;

      var imc = peso / (altura*altura);
      var tdImc = paciente.querySelector(".info-imc");
      tdImc.textContent = imc;

      var alturaEhValida = true;
      var pesoEhValido = true;

      if(peso <= 0 || peso > 1000){
      console.log("Peso inválido");
      tdImc.textContent = "Peso inválido!";
      pesoEhValido = false;
      }

      if(altura <= 0 || altura >= 3){
      console.log("Altura inválida");
      tdImc.textContent = "Altura inválida!";
      alturaEhValida = false;
      }

      if(pesoEhValido && alturaEhValida){
      var imc = peso / ( altura * altura);
      tdImc.textContent = imc.toFixed(2);
      }
    }
