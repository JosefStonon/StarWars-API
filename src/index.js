import http from 'http';
import route from './routes.js';



const server = http.createServer(async (req, res) => {
  console.log(`Request Method: ${req.method} | Endpoint: ${req.url}`)

  const matchedRoute = route.find((routeOBJ) => (
    routeOBJ.endpoint === req.url && routeOBJ.method === req.method
  ));

  if (matchedRoute) {
    try{
      await route.handler(req, res, {endpoint: req.url});
    } catch {
       res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Erro no manipulador da rota!</h1>');
    }
  } else {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end('<h1>Deu erro</h1>')
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

})

}) */