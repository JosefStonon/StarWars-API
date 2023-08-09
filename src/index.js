import http from 'http';
import route from './routes.js';
import { URL } from 'url';


<<<<<<< HEAD
const navMenu = document.getElementsByClassName('lk');
console.log(navMenu)
=======
>>>>>>> d1bc696b95ab6eaf9d7cb97f3b69296a4204164e

const server = http.createServer((req, res) => {
  const parseURL = new URL(`http://localhost:3001${req.url}`);
  console.log(parseURL)
  console.log(`Request Method: ${req.method} | Endpoint: ${parseURL.pathname}`)

  const matchedRoute = route.find((routeOBJ) => (
    routeOBJ.endpoint === parseURL.pathname && routeOBJ.method === req.method
  ));

  if (matchedRoute) {
    req.query = Object.fromEntries(parseURL.searchParams)
    matchedRoute.handler(req, res);


  } else { 
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end(`Cannot ${parseURL.pathname} ${parseURL.pathname}`)
  }
});

server.listen(3001, () => console.log('Logado in http://localhost:3001'))








/* const pro = new Promise((resolve, reject) => {
  resolve(fetch(`https://swapi.dev/api/`));
 
  
  reject('Erro encontrado!');
}); */




/* const proPeople = new Promise((resolve, reject) => {
  resolve(fetch(`https://swapi.dev/api/people`));
 
  
  reject('Erro encontrado!');
});





// --BLOCO DE PEOPLE
proPeople.then(async (resposta) => {
  const ResPeople = await resposta.json();
  

  

  var buttons = document.getElementsByTagName('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('btn-' + (i + 1));
  };

  const name = [
    `${ResPeople.results[0].name}`,
    `${ResPeople.results[1].name}`,
    `${ResPeople.results[2].name}`,
    `${ResPeople.results[3].name}`,
    `${ResPeople.results[4].name}`,
    `${ResPeople.results[5].name}`,
    `${ResPeople.results[6].name}`,
    `${ResPeople.results[7].name}`,
    `${ResPeople.results[8].name}`,
    `${ResPeople.results[9].name}`,
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
  
});




let srcPerson = [];

personagens.forEach((element) => {
  const valor = element.getAttribute('src');

  srcPerson.push(valor);

<<<<<<< HEAD


})
=======
})

}) */
>>>>>>> d1bc696b95ab6eaf9d7cb97f3b69296a4204164e
