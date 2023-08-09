import users from '../mocs/index.js'
import fetchApi from '../controllersApi/ControllerAccess.js';

export default {
  userList(req, res) {
    const { order } = req.query;
    const sortedOrder = users.sort((a, b) => {
      if(order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });

    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(sortedOrder))
    
  }
}