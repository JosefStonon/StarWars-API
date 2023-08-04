import ControllersUse from './Controllers/ControllersUse.js'
  const route = [
  {
    endpoint: '/people',
    method: 'GET',
    handler: ControllersUse.userList,
  },
]

export default route;