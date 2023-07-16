import './scss/styles.scss'

const url = 'https://swapi.dev/api/people/';

const loadingElement = document.querySelector('#loading');
const loadingContainer = document.querySelector('#loadingss');

const pro = new Promise((resolve, reject) => {
  resolve(fetch(url));
  
  reject('Erro encontrado!');
});

pro.then(async (resposta) => {
  const Res = await resposta.json();

  var buttons = document.getElementsByTagName('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('btn-' + (i + 1));
  };

  const name = [
    `${Res.results[0].name}`,
    `${Res.results[1].name}`,
    `${Res.results[2].name}`,
    `${Res.results[3].name}`,
    `${Res.results[4].name}`,
    `${Res.results[5].name}`,
    `${Res.results[6].name}`,
    `${Res.results[7].name}`,
    `${Res.results[8].name}`,
    `${Res.results[9].name}`,
];


let arrayCollection = Array.from(buttons);
arrayCollection.forEach((element, index) => {
  let newTag = document.createElement('h1');
  newTag.innerText = name[index];

  element.appendChild(newTag)
});


let personagens = Array.from(document.getElementsByClassName('imagens'))

arrayCollection.forEach((element, index) => {
  element.addEventListener('click', function() {
    personagens.forEach((elem) => {
      elem.classList.remove('active');
    })
    personagens[index].classList.add('active')
  }
  )
  
})
console.log(personagens);
console.log(arrayCollection);

})
