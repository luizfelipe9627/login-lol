// Está puxando do HTML para ser trabalhado no JS.
let button = document.querySelector('button');
let inputs = document.querySelectorAll('.input');
let input = document.querySelector('form span');

// Arrow function chamada focarInput que recebe um parâmetro chamada target(não pode ter seu nome alterado) que é um objeto que armazena os inputs.
const focarInput = ({ target }) => {
  // Usado para puxar o elemento anterior(conforme hierarquia) do input, no caso o span.
  const span = target.previousElementSibling;

  // Adiciona uma classe chamada active no span.
  span.classList.add('active');
}

// Para cada elemento input, irá fazer uma ação. Dentro do seu parâmetro está armazenando os inputs.
inputs.forEach((input) => {
  // Está adicionando um evento de foco para cada input em seguida executando uma arrow function.
  input.addEventListener('focus', focarInput);

  // Está atribuindo 32px de espaçamento no topo para os inputs.
  input.style.paddingTop = '32px';
});

// Arrow function chamada focarInput que recebe um parâmetro chamada target(não pode ter seu nome alterado) que é um objeto que armazena os inputs.
const desfocarInput = ({ target }) => {
  // Se o valor dos input's estiver vazio vai executar o bloco de comandos.
  if(target.value === '') {
    // Usado para puxar o elemento anterior(conforme hierarquia) do input, no caso o span.
    const span = target.previousElementSibling;

    // Remove a classe chamada active do span.
    span.classList.remove('active');
  }
}

// Para cada elemento input, irá fazer uma ação. Dentro do seu parâmetro está armazenando os inputs.
inputs.forEach((input) => {
  // Está adicionando um evento de quando sair de foco para cada input em seguida executando uma arrow function.
  input.addEventListener('focusout', desfocarInput);
});

// Arrow function chamada focarInput que recebe um parâmetro chamada target(não pode ter seu nome alterado) que é um objeto que armazena os inputs.
const mudarInput = () => {
  // Criada uma array com dois elementos, atribuído eles aos inputs.
  const [usuario, senha] = inputs;
 
  /* 
    // É a mesma coisa que o código abaixo:
    const usuario = inputs[0];
    const senha = inputs[1]; 
  */

  // Se no input nomeado como usuário tiver qualquer coisa escrita e no input nomeado como senha tiver mais que 8 letras/caracteres vai executar o bloco de comandos.
  if(usuario.value && senha.value.length > 8) {
    // Responsável por remover o atributo disabled do botão, assim fazendo ele ficar habilitado e clicável.
    button.removeAttribute('disabled');
  } else {
    // O setAttribute recebe dois parâmetros, sendo eles o atributo que vai ser setado e o valor.
    // Irá atribuir o atributo disabled no button novamente.
    button.setAttribute('disabled', '');
  }
}

// Para cada elemento input, irá fazer uma ação. Dentro do seu parâmetro está armazenando os inputs.
inputs.forEach((input) => {
  // Está adicionando um evento de input que ativa cada vez que o valor do input é alterado e em seguida executando uma arrow function.
  input.addEventListener('input', mudarInput);
});
