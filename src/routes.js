<<<<<<< HEAD
export default [
  {
    endpoint: '/person',
    method: 'GET',
    handles: Controller.listPerson
  },
]
=======
import ControllersUse from './Controllers/ControllersUse.js'
  const route = [
  {
    endpoint: '/people',
    method: 'GET',
    handler: ControllersUse.userList,
  },
]

export default route;
>>>>>>> d1bc696b95ab6eaf9d7cb97f3b69296a4204164e
