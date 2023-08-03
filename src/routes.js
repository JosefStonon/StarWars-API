import ControllersUse from "./Controllers/ControllersUse.js"

  const route = [
  {
    endpoint: '/people',
    method: 'GET',
    handler: ControllersUse.listApi,
  },
]

export default route;