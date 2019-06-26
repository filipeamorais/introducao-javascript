botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);

    if (!validaPaciente(paciente)) {
      console.log("Paciente inválido");
      return;
    } 

    //cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
    form.reset();

    console.log("Oi eu sou o botão e fui clicado")
  });

  function obtemPacienteDoFormulario (form) {
    var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
  }

  function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //adiciona o paciente na tabela
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
  }

  function montaTd(dado, classe){
    var td =  document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
  }

  function validaPaciente(paciente){
    if(validaAltura(paciente.altura) || validaPeso(paciente.peso)){
      return true;
    } else {
      return false;
    }
  }