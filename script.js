

const novaTarefa = document.querySelector("#input_id");
const botaoAdd = document.getElementById ("botao_add_id");
const formulario = document.getElementById("form_id");
const listaDeTarefas = document.getElementById("lista_id");
const botaoMarca = document.getElementById("botao_marca_id");
const botaoLimpa = document.getElementById("botao-limpa_id");

// 2. Processamentos através de eventos e funções 

// função de adicionar a partir do click da usuária, um evento
botaoAdd.addEventListener("click", (event) => {
    event.preventDefault();

    const elementoLista = document.createElement("li");
    const textoTarefa = document.createElement("p");
    const iconeDeleta = document.createElement("span");

textoTarefa.innerText = novaTarefa.ariaValueMax;
iconeDeleta.innerText = "🗑️";

if (textoTarefa.innerText.trim() == "") {
    alert("Você precisa digitar alguma coisa!");

} else {
    listaDeTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoTarefa);
    elementoLista.appendChild(iconeDeleta);
    formulario.requestFullscreen();
}
novaTarefa.focus();

// funçao para marcar individualmente uma tarefa
textoTarefa.addEventListener("click", () => {

    textoTarefa.classList.toggle("checked");
    verificarMarcados(); // chama a função do  DESAFIO 2 para mudar o texto
});

// função para deletar individualmente uma tarefa
iconeDeleta.addEventListener("click", () => {

    elementoLista.remove();
});
verificarMarcados(); // chama a função do DESAFIO 2 para mudar o texto
});

// função para marcar todas bas tarefas:

botaoMarca.addEventListener("click", () => {
    let todasAsTarefas = document.querySelectorAll("p");

  if (botaoMarca.innerText === "Marcar todos") {
     todasAsTarefas.forEach((tarefa) => {
      tarefa.classList.add("checked");
  });
  botaoMarca.innerText = "Desmarcar todos";
 } else {
   todasAsTarefas.forEach((tarefa) => {
     tarefa.classList.remove("checked");
 });
  botaoMarca.innerText = "Marcar todos";
    }
});

// funçao para limpar todas as tarefas:

botaoLimpa.addEventListener("click", () => {
    listaDeTarefas.innerHTML = "";
});




function verificarMarcados() {
    let todasAsTarefas = document.querySelectorAll("p");
    let verificacao = []; 

    todasAsTarefas.forEach((tarefa) => {

        if (!tarefa.classList.contains("checked")) {

            verificacao.push(tarefa); 
        }
    });

 
    if (verificacao.length === 0 && todasAsTarefas) {

        botaoMarca.innerText = "Desmarcar todos";
    } else {

        botaoMarca.innerText = "Marcar todos";
    }
}




