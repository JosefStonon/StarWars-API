import controllerAccess from '../controllersApi/ControllerAccess.js';


export default {
  async listApi(req, res, {endpoint}) {

    try{
      const data = await controllerAccess(endpoint);
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(data)

    } catch (error) {
      console.error('Erro no Controller:', error);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Erro no Controller</h1>');
    }
  }
}